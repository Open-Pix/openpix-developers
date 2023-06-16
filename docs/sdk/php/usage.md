---
id: usage
title: Como iniciar
tags:
  - api
  - php
---

## Instalando

É necessário ter o PHP com versão superior à 7.4 instalado com o [Composer](https://getcomposer.org).

A maneira mais fácil de instalar o SDK é com o comando abaixo que instala as dependências necessárias com o Composer:

```bash
$ composer require open-pix/php-sdk guzzlehttp/guzzle guzzlehttp/psr7
```

Dessa forma, o SDK, um cliente HTTP (`guzzlehttp/guzzle`) e uma implementação da [PSR-17](https://www.php-fig.org/psr/psr-17/) (`guzzlehttp/psr7`) serão instalados.

## Dependências

O SDK depende de implementações das PSRs 17 e [18](https://www.php-fig.org/psr/psr-18/).

A PSR-17 é usada para fornecer interfaces para mensagens HTTP, tanto requisições quanto respostas. Por outro lado, a PSR-18 é usada para fornecer interfaces para clientes HTTP.

Sendo interfaces, é necessário ter uma implementação instalada, como `guzzlehttp/guzzle` para a PSR-18 e `guzzlehttp/psr7` para a PSR-17.

As PSRs são utilizadas para não depender diretamente de clientes HTTP, deixado a cargo do desenvolvedor.

## Criando o cliente

O ponto de entrada do SDK é um `Client`:

```php
use OpenPix\PhpSdk\Client;

// Para utilizar OpenPix
$client = Client::create("coloque seu appid aqui");
```

O método `create` cria um novo cliente a partir de um ID de aplicativo obtido no [site da OpenPix](https://app.wooopenpix.com.br/home/applications/tab/list).

## Chamando a API

Um cliente possui _recursos_ (por exemplo: clientes, cobranças, assinaturas, etc.) que podem ser acessados através da execução de métodos no `Client`.

```php
$client->customers();
```

Cada recurso irá ter um conjunto de métodos que podem serem executados para realizarem operações:

```php
// Cria um cliente.
$result = $client->customers()->create([
    "name" => "Dan", // Nome
    "taxID" => "31324227036", // TaxID
    "email" => "email0@example.com", // E-mail
    "phone" => "5511999999999", // Telefone
    "correlationID" => "9134e286-6f71-427a-bf00-241681624586", // ID de correlação
]);
```

## Operações em recursos

Em cada recurso, há uma convenção nos nomes das operações, na qual:

- `getOne`: Obter apenas um recurso. Associado ao verbo HTTP `GET`.
- `list`: Retornar um _paginador_, com o resultado da página atual podendo ser obtido executando o método `current`. Associado ao verbo HTTP `GET`.
- `create`: Criar um recurso. Associado ao verbo HTTP `POST`.
- `delete`: Remover um recurso. Associado ao verbo HTTP `DELETE`.

### Formato das entradas

No caso de operações de listagem ou de criação, os argumentos de entradas são comumente _arrays_.

```php
// Cria uma assinatura.
$client->subscriptions()->create([
    "value" => 100,
    "customer" => [
        "name" => "Dan",
        "taxID" => "31324227036",
        "email" => "email0@example.com",
        "phone" => "5511999999999",
    ],
    "dayGenerateCharge" => 15,
]);
```

Argumentos simples como strings e inteiros são utilizados no caso de operações de obtenção de apenas um recurso ou remoção.

```php
// Obtém uma cobrança pelo ID. string.
$client->charges()->getOne($correlationID);

// Remove uma cobrança pelo ID. string.
$client->charges()->delete($correlationID);
```

### Formato de saída

A execução de uma operação irá devolver resultados da API na forma de um array direto ou na forma de um paginador, especialmente em operações de listagem, como na listagem de transações.

```php
/**
 * Criando uma solicitação de pagamento.
 *
 * Retorna um array.
 */
$result = $client->payments()->create([
    "value" => 100,
    "destinationAlias" => "c4249323-b4ca-43f2-8139-8232aab09b93",
    "comment" => "payment comment",
    "correlationID" => "payment1",
    "sourceAccountId" => "my-source-account-id",
]);

/**
 * Resultado:
 *
 * $result = [
 *    "payment" => [
 *        "value" => 100,
 *        "status" => "CREATED",
 *        "destinationAlias" => "c4249323-b4ca-43f2-8139-8232aab09b93",
 *        "comment" => "payment comment",
 *        "correlationID" => "payment1",
 *        "sourceAccountId" => "my-source-account-id",
 *    ],
 *  ],
 * ];
 */
```

## Paginação

Em recursos em que é possível paginação, há um método `list` que retorna um objeto `Paginator`.

Um objeto `Paginator` possui métodos que auxiliam na paginação dos resultados de operações de listagem de recursos.

Este objeto implementa a interface [`Iterator`](https://www.php.net/manual/pt_BR/class.iterator.php), portanto possui métodos como `current` e `next` e pode ser utilizado em loops `foreach`.

```php
// Utilizando foreach para obter 100 clientes.
// Cuidado ao utilizar, pois pode obter todos os clientes disponíveis da API de uma só vez.

$paginator = $client->customers()->list();

$remainingCustomers = 100;

// O foreach chama o método `current`, `next` e `valid` automaticamente.
foreach ($paginator as $result) {
    foreach ($result["customers"] as $customer) {
        // Ativa delay de 200ms.
        usleep(100000);

        echo "Nome do cliente: " . $customer["name"] . "\n";

        $remainingCustomers--;

        if ($remainingCustomers == 0) break 2;
    }
}

// Utilizando loop do/while para obter 100 clientes.
$paginator = $client->customers()->list();

$remainingCustomers = 100;

do {
    // Ativa delay de 200ms.
    usleep(200000);

    // Envia a solicitação HTTP para a API e retorna o resultado como um array.
    $result = $paginator->current();

    foreach ($result["customers"] as $customer) {
        echo "Nome do cliente: " . $customer["name"] . "\n";

        $remainingCustomers--;

        if ($remainingCustomers == 0) break;
    }

    // Avança uma página
    $paginator->next();
} while ($paginator->valid() && $remainingCustomers != 0);
```

### Métodos disponíveis

Veja os métodos disponíveis em objetos `Paginator`:

**Obs.: as páginas iniciam em zero, como arrays.**

```php
// Utilizando como exemplo a listagem de clientes
$paginator = $client->customers()->list();

$paginator->key(); // Obtém o número da página atual. (pg. atual 0)
$paginator->next(); // Avança uma página. (pg. atual 1)
$paginator->previous(); // Retrocede uma página. (pg. atual 0)
$paginator->valid(); // Retorna `true` se há próxima página e `false` caso contrário.
$paginator->perPage(30); // Quantidade de itens por página.
$paginator->skip(30); // Pula 30 clientes. (pg. atual 1)
$paginator->rewind(); // Volta para a página inicial. (pg. atual 0)
$paginator->go(2); // Vai para a página 2 (pg. atual 2)
$paginator->getTotalResourcesCount(); // Obtém a quantidade *total* de clientes disponíveis na API

// Envia uma requisição para a API e retorna o array de resultado
// Aqui, irá obter o array de resultado da página 2.
$page = $paginator->current();

// Retorna o nome do primeiro cliente da página 2.
echo $page["customers"][0]["name"];
```

## PHPDocs

Em cada operação disponível para um determinado tipo de recurso, existem PHPDocs disponíveis informando o formato de entrada e saída da operação com um link para a documentação da API Rest e exemplo de utilização.

Para utilizar, é sugerido utilizar um editor com Intellisense como PhpStorm ou Visual Studio Code com a extensão Intelephense.

Também é possível consultar a documentação no site da OpenPix caso haja dúvidas.

## Recursos disponíveis

Os seguintes recursos estão disponíveis no `Client`:

- `$client->customers()`: Operações em clientes.
- `$client->subscriptions()`: Operações em assinaturas.
- `$client->charges()`: Operações em cobranças.
- `$client->refunds()`: Operações em restituições.
- `$client->payments()`: Operações em solicitações de pagamentos.
- `$client->transactions()`: Operações em transações.
- `$client->webhooks()`: Operações em webhooks.
