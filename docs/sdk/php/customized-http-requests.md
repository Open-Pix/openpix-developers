---
id: sdk-php-customized-http-requests
title: Requisições HTTP customizadas
tags:
  - php
  - api
---

O SDK permite que seja enviado requisições customizadas para um cliente HTTP possivelmente customizado.

## Como criar requisições

Requisições do SDK são representadas pela classe `OpenPix\PhpSdk\Request` que permite configurar o caminho do endpoint, corpo, parâmetros de consulta (query parameters) e de paginação e o método HTTP através de uma interface "fluente".

Veja como utilizar:

```php
use OpenPix\PhpSdk\Request;

/**
 * Se a URI base for https://api.openpix.com.br, então a requisição terá
 *  - A URI como https://api.openpix.com.br/api/v1/example-endpoint?query1=10&query2=true
 *  - Método POST, para criar um recurso, por exemplo
 *  - Corpo como um array que irá ser convertido para uma string JSON
 */
$request = (new Request)
    ->method("POST") // Métodos HTTP como GET, POST, PUT e DELETE.
    ->path("/api/v1/example-endpoint") // Caminho
    ->queryParams(["query1" => 10, "query2" => true]) // Parâmetros de consulta
    ->body([
        "dado1" => "",
        "dado2" => "",
    ]); // Corpo
```

## Como enviar requisições

Para enviar requisições, utilize o objeto do tipo `OpenPix\PhpSdk\RequestTransport` para enviar a requisição. Este objeto pode ser obtido no cliente da API.

Este objeto tem um método `transport` que transporta requisições e decodifica a resposta JSON, retornando um array associativo.

```php
$requestTransport = $client->getRequestTransport();

/** @var array<string, mixed> $result */
$result = $requestTransport->transport($request);
```

Também adiciona cabeçalhos como `Authorization` para autenticação e `Content-type` para especificar o tipo do corpo da requisição.

## Como customizar o cliente HTTP

É possível escolher qual _cliente HTTP_ utilizar apenas instalando a dependência do cliente no Composer e o cliente será automaticamente descoberto pelo [HTTPlug](http://httplug.io/), junto com as fábricas de mensagem do [PSR-17](https://www.php-fig.org/psr/psr-17/).

Caso seja necessário utilizar instâncias de fábrica de mensagem ou cliente HTTP já existentes, crie uma instância personalizada de `RequestTransport`:

```php
use OpenPix\PhpSdk\RequestTransport;

$requestTransport = new RequestTransport(
    // Seu app ID
    $appId,

    // URI base (por ex.: https://api.openpix.com.br)
    // Somente o protocolo e o domínio são permitidos na URI base.
    // Não coloque caminhos como /api/v1
    $baseUri,

    // Um objeto que implementa a interface \Psr\Http\Client\ClientInterface (PSR-18)
    // Opcional.
    $httpClient,

    // Um objeto que implementa a interface \Psr\Http\Message\RequestFactoryInterface (PSR-17)
    // Opcional.
    $requestFactory,

    // Um objeto que implementa a interface \Psr\Http\Message\StreamFactoryInterface (PSR-17)
    // Opcional.
    $streamFactory,
);
```

Com o `RequestTransport` personalizado criado, passe para o construtor de `OpenPix\PhpSdk\Client`:

```php
use OpenPix\PhpSdk\Client;

$client = new Client($requestTransport);
```

## Customizando a URI base

É possível customizar a URI base do cliente da API para enviar requisições para outras APIs. Isto permite escolher entre a API da OpenPix ou Woovi, por exemplo.

O método `create` aceita uma URI base no segundo parâmetro:

```php
Client::create("seu appid", "https://api.openpix.com.br");
Client::create("seu appid", "https://api.woovi.com");
```
