---
id: sdk-php-resources
title: Recursos
tags:
  - api
  - php
---

## Clientes

Chame o método `customers` seu cliente da API para obter o recurso de clientes.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/customer).

### Criar um cliente

Chame o método `create` no recurso de clientes passando um array com os dados do cliente:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/customer/paths/~1api~1v1~1customer/post).

```php
$customer = [
    "name" => "Dan",
    "taxID" => generateCPF(),
    "email" => "email0@example.com",
    "phone" => "5511999999999",
    "correlationID" => "test-php-sdk-" . generateUUID(),
];

$result = $client->customers()->create($customer);

/**
 * Exemplo de resultado:
 *
 * $result = [
 *     "customer" => [
 *         "name" => "Dan",
 *         "email" => "email0@example.com",
 *         "phone" => "+5511999999999",
 *         "correlationID" => "test-php-sdk-be734fd4-ce4f-4f37-853b-cac3e73ed223",
 *         "taxID" => [
 *           "taxID" => "0000000000",
 *           "type" => "BR:CPF",
 *         ],
 *     ],
 * ];
 */
```

### Obter um cliente

Obtenha um cliente por um ID chamando `getOne` no recurso de clientes:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/customer/paths/~1api~1v1~1customer/get).

```php
$result = $client->customers()->getOne("test-php-sdk-8e7e3622-b209-46ef-b353-ec568e893177");

/**
 * Exemplo de resultado:
 *
 * $result = [
 *   "status" => "OK",
 *   "customer" => [
 *       "name" => "Dan",
 *       "email" => "email0@example.com",
 *       "phone" => "+5511999999999",
 *       "correlationID" => "test-php-sdk-8e7e3622-b209-46ef-b353-ec568e893177",
 *       "taxID" => [
 *           "taxID" => "00000000000",
 *           "type" => "BR:CPF",
 *       ],
 *   ],
 * ];
 */
```

### Listar clientes

Liste clientes chamando o método `list` no recurso de clientes, que retorna um paginador:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/customer/paths/~1api~1v1~1customer/get).

```php
$paginator = $client->customers()->list();

$remainingCustomers = 10;

foreach ($paginator as $result) {
    foreach ($result["customers"] as $customer) {
        echo $customer["taxID"]["taxID"]; // CPF do Cliente

        $remainingCustomers--;

        if ($remainingCustomers == 0) break 2;
    }
}
```

## Cobranças

O recurso de cobranças é acessado chamando o método `charges` no cliente da API.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge).

### Criar uma cobrança

Chame o método `create` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/post).

```php
$customer = [
    "name" => "Dan",
    "taxID" => generateCPF(),
    "email" => "email0@example.com",
    "phone" => "5511999999999",
    "correlationID" => "test-php-sdk-" . generateUUID(),
];

$client->customers()->create($customer); // Criar o cliente.

$charge = [
    "value" => 1000, // R$ 10,00
    "correlationID" => "test-php-sdk-charge-" . generateUUID(),
    "customer" => $customer, // Especificar o cliente.
];

/**
 * Torne o endpoint idempotente, retornará uma cobrança existente
 * se já tiver uma com o correlationID.
 */
$returnExisting = true;

$result = $client->charges()->create($charge, $returnExisting);

/**
 * Exemplo de resultado:
 *
 * $result = [
 *     "charge" => [
 *         "status" => "ACTIVE",
 *         "customer" => [
 *             "name" => "Dan",
 *             "email" => "email0@example.com",
 *             "phone" => "5511999999999",
 *             "taxID" => [
 *                 "taxID" => "00000000000",
 *                 "type" => "BR:CPF",
 *             ],
 *         ],
 *         "value" => 100,
 *         "comment" => "good",
 *         "correlationID" => "test-php-sdk-charge-9134e286-6f71-427a-bf00-241681624586",
 *         "paymentLinkID" => "7777a23s-6f71-427a-bf00-241681624586",
 *         "paymentLinkUrl" => "https://openpix.com.br/pay/9134e286-6f71-427a-bf00-241681624586",
 *         "qrCodeImage" => "https://api.openpix.com.br/openpix/charge/brcode/image/9134e286-6f71-427a-bf00-241681624586.png",
 *         "expiresIn" => 2592000,
 *         "expiresDate" => "2021-04-01T17:28:51.882Z",
 *         "createdAt" => "2021-03-02T17:28:51.882Z",
 *         "updatedAt" => "2021-03-02T17:28:51.882Z",
 *         "brCode" => "000201010212261060014br.gov.bcb.pix2584https://api.openpix.com.br/openpix/testing?transactionID=867ba5173c734202ac659721306b38c952040000530398654040.015802BR5909LOCALHOST6009Sao Paulo62360532867ba5173c734202ac659721306b38c963044BCA",
 *         "additionalInfo" => [],
 *     ],
 * ];
 */
```

### Obter uma cobrança

Chame o método `getOne` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/get).

```php
$result = $client->charges()->getOne("coloque o ID da cobrança aqui");

$result["charge"]["value"]; // Valor da cobrança.
$result["charge"]["customer"]; // Cliente. Array.

// mais campos...
```

### Listar cobranças

Chame o método `list` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/get).

```php
$paginator = $client->charges()->list([
    // Data de início usada na consulta. Em conformidade com RFC 3339. Opcional.
    // Exemplo: 2023-01-01T00:00:00Z
    "start" => (new DateTimeImmutable("2023-01-01", new DateTimeZone("UTC")))->format(DateTime::RFC3339),

    // Data de término usada na consulta. Em conformidade com RFC 3339. Opcional.
    // Exemplo: 2023-12-01T00:00:00Z
    "end" => (new DateTimeImmutable("2023-12-01", new DateTimeZone("UTC")))->format(DateTime::RFC3339),

    // Status da cobrança. Opcional.
    // Pode ser: "ACTIVE", "COMPLETED" ou "EXPIRED".
    "status" => "EXPIRED",
]);

$remainingCharges = 10;

foreach ($paginator as $result) {
    foreach ($result["charges"] as $charge) {
        echo $charge["value"] . "\n";

        $remainingCharges--;

        if ($remainingCharges == 0) break 2;
    }
}
```

### Remover uma cobrança

Para remover uma cobrança, chame o método `delete` no recurso de cobranças, passando o ID:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/delete).

```php
$client->charges()->delete("id da cobrança");
```

### Obtenha uma imagem do Qr Code de uma cobrança

Para obter o link de uma imagem do Qr Code de uma cobrança, chame `getQrCodeImageLink`, que retornará uma string e aceita o ID do link de pagamento da cobrança (`paymentLinkID`) com um tamanho da imagem (`size`):

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1openpix~1charge~1brcode~1image~1%7B:id%7D.png?size=1024/get).

```php
$paymentLinkID = "7777-6f71-427a-bf00-241681624586"; // ID do link de pagamento da cobrança.
$size = 1024; // Tamanho da imagem.

$result = $client->charges()->getQrCodeImageLink($paymentLinkID, $size);

/**
 * Exemplo de resultado:
 *
 * $result = "https://api.openpix.com.br/openpix/charge/brcode/image/7777-6f71-427a-bf00-241681624586.png?size=1024";
 */
```

## Assinaturas

O recurso de assinaturas é acessado chamando o método `subscriptions` no cliente da API.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/subscription).

```php
$client->subscriptions();
```

### Criar uma assinatura

Crie uma assinatura chamando o método `create` no recurso de assinaturas:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/subscription/paths/~1api~1v1~1subscriptions/post).

```php
$customer = [
    "name" => "Dan (php-sdk)",
    "taxID" => generateCPF(), // CPF
    "email" => "php-sdk0@example.com",
    "phone" => "5511999999999",
    "correlationID" => "test-php-sdk-" . generateUUID(),
];

// Criar o cliente da assinatura.
$client->customers()->create($customer);

$subscription = [
    "value" => 1000, // Valor da assinatura em centavos. (R$ 10,00)
    "customer" => $customer, // Especificar o cliente da assinatura.

    // Dia do mês em que as cobranças serão geradas. Máximo de 27.
    // Padrão é 5.
    "dayGenerateCharge" => 5,
];

$result = $client->subscriptions()->create($subscription);

/**
 * Exemplo de resultado:
 *
 * $result = [
 *     "subscription" => [
 *         "globalID" => "UGF5bWVudFN1YnNjcmlwdGlvbjo2M2UzYjJiNzczZDNkOTNiY2RkMzI5OTM=",
 *         "customer" => [
 *             "name" => "Dan (php-sdk)",
 *             "email" => "php-sdk0@example.com",
 *             "phone" => "5511999999999",
 *             "taxID" => [
 *                 "taxID" => "00000000000",
 *                 "type" => "BR:CPF",
 *             ],
 *         ],
 *         "value" => 1000,
 *         "dayGenerateCharge" => 5,
 *     ],
 * ];
 */
```

### Obter uma assinatura

Obtenha uma assinatura chamando o método `getOne` no recurso de assinaturas passando o ID:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/subscription/paths/~1api~1v1~1subscriptions/get).

```php
$result = $client->subscriptions()->getOne("ID da assinatura");

/**
 * Exemplo de resultado:
 *
 * $result = [
 *     "subscription" => [
 *         "globalID" => "UGF5bWVudFN1YnNjcmlwdGlvbjo2M2UzYjJiNzczZDNkOTNiY2RkMzI5OTM=",
 *         "customer" => [
 *             "name" => "Dan",
 *             "email" => "email0@example.com",
 *             "phone" => "5511999999999",
 *             "taxID" => [
 *                 "taxID" => "31324227036",
 *                 "type" => "BR:CPF",
 *             ],
 *         ],
 *         "value" => 100,
 *         "dayGenerateCharge" => 5,
 *     ],
 * ];
 */
```
