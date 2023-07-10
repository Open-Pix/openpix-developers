---
id: sdk-php-resources
title: Recursos
sidebar_position: 2
tags:
  - api
  - php
  - sdk
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

// e mais campos...
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

## Transações

O recurso de transações é acessado chamando o método `transactions` no cliente da API.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/transaction).

```php
$client->transactions();
```

### Obtendo uma transação

Para obter uma transação pelo ID da transação do OpenPix ou pelo `endToEndId` da transação do banco, é necessário chamar o método `getOne` no recurso de transações, passando o respectivo ID:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/transactions/paths/~1api~1v1~1transaction~1%7Bid%7D/get).

```php
$client->transactions()->getOne("ID da transação");

/**
 * Exemplo de resultado:
 *
 * $result = [
 *     "transaction" => [
 *         "customer" => [
 *             "name" => "Dan",
 *             "email" => "email0@example.com",
 *             "phone" => "5511999999999",
 *             "taxID" => [
 *                 "taxID" => "31324227036",
 *                 "type" => "BR:CPF",
 *             ],
 *             "correlationID" => "9134e286-6f71-427a-bf00-241681624586",
 *         ],
 *         "payer" => [
 *             "name" => "Dan",
 *             "email" => "email0@example.com",
 *             "phone" => "5511999999999",
 *             "taxID" => [
 *                 "taxID" => "31324227036",
 *                 "type" => "BR:CPF",
 *             ],
 *             "correlationID" => "9134e286-6f71-427a-bf00-241681624586",
 *         ],
 *         "charge" => [
 *             "status" => "ACTIVE",
 *             "customer" => "603f81fcc6bccc24326ffb43",
 *             "correlationID" => "9134e286-6f71-427a-bf00-241681624586",
 *             "createdAt" => "2021-03-03T12:33:00.546Z",
 *             "updatedAt" => "2021-03-03T12:33:00.546Z",
 *         ],
 *         "withdraw" => [
 *             "value" => 100,
 *             "time" => "2021-03-03T12:33:00.536Z",
 *             "infoPagador" => "payer info 1",
 *             "endToEndId" => "E18236120202012032010s01345689XBY",
 *             "createdAt" => "2021-03-03T12:33:00.546Z",
 *         ],
 *         "infoPagador" => "payer info 0",
 *         "value" => 100,
 *         "time" => "2021-03-03T12:33:00.536Z",
 *         "transactionID" => "transactionID",
 *         "type" => "PAYMENT",
 *         "endToEndId" => "E18236120202012032010s0133872GZA",
 *         "globalID" => "UGl4VHJhbnNhY3Rpb246NzE5MWYxYjAyMDQ2YmY1ZjUzZGNmYTBi",
 *     ],
 * ];
 */
```

### Listar transações

Chame o método `list` no recurso de transações passando parâmetros de consulta que irá retornar um paginador com transações:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/transactions/paths/~1api~1v1~1transaction/get).

```php
$paginator = $client->transactions()->list([
    // Data de início usada na consulta. Em conformidade com RFC 3339. Opcional.
    // Exemplo: 2023-01-01T00:00:00Z
    "start" => (new DateTimeImmutable("2023-01-01", new DateTimeZone("UTC")))->format(DateTime::RFC3339),

    // Data de término usada na consulta. Em conformidade com RFC 3339. Opcional.
    // Exemplo: 2023-12-01T00:00:00Z
    "end" => (new DateTimeImmutable("2023-12-01", new DateTimeZone("UTC")))->format(DateTime::RFC3339),

    // Você pode utilizar o ID de cobrança, o correlationID ou o ID de transação de cobrança
    // para obter uma lista de transações relacionadas a esta transação.
    "charge" => "id aqui",

    // Você pode usar o ID estático do QrCode, o correlationID ou o campo `identifier` do
    // QrCode estático para obter uma lista de QrCode relacionados a esta transação.
    "pixQrCode" => "id aqui",

    // Você pode usar o ID ou `endToEndId` de uma transação de retirada
    // para obter todas as transações relacionadas à retirada.
    "withdrawal" => "id aqui",
]);

$remainingTransactions = 10;

foreach ($paginator as $result) {
    foreach ($result["transactions"] as $transaction) {
        echo $transaction["value"] . "\n"; // Valor da transação.
        // e mais campos...

        $remainingTransactions--;

        if ($remainingTransactions == 0) break 2;
    }
}
```

## Pagamentos

O recurso de pagamentos é acessado chamando o método `payments` no cliente da API.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/payment).

```php
$client->payments();
```

### Criar pagamento

Crie uma solicitação de pagamento chamando o método `create` no recurso de pagamentos.

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment/post>).

```php
$payment = [
    // Valor do pagamento solicitado em centavos.
    "value" => 100,

    // A chave pix onde pagamento deve ser enviado.
    "destinationAlias" => "c4249323-b4ca-43f2-8139-8232aab09b93",

    // O comentário que será enviado juntamente com o seu pagamento.
    "comment" => "comentário",

    // Um identificador exclusivo para o seu pagamento.
    "correlationID" => "payment1",

    // Um id opcional para a conta de origem do pagamento, caso não informado assumirá a conta padrão.
    "sourceAccountId" => "my-source-account-id",
];

$result = $client->payments()->create($payment);

/**
 * Exemplo de resultado:
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

### Obtendo um pagamento

Chame o método `getOne` no recurso de pagamentos para obter uma solicitação de pagamento a partir de um ID de pagamento ou correlationID.

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment~1%7Bid%7D/get>).

```php
$paymentOrCorrelationID = "id";

$result = $client->payments()->getOne($paymentOrCorrelationID);

/**
 * Exemplo de resultado.
 *
 * $result = [
 *     "payment" => [
 *         "value" => 100,
 *         "status" => "CONFIRMED",
 *         "destinationAlias" => "c4249323-b4ca-43f2-8139-8232aab09b93",
 *         "comment" => "payment comment",
 *         "correlationID" => "payment1",
 *         "sourceAccountId" => "my-source-account-id",
 *     ],
 *     "transaction" => [
 *         "value" => 100,
 *         "endToEndId" => "transaction-end-to-end-id",
 *         "time" => "2023-03-20T13:14:17.000Z",
 *     ],
 *     "destination" => [
 *         "name" => "Dan",
 *         "taxID" => "31324227036",
 *         "pixKey" => "c4249323-b4ca-43f2-8139-8232aab09b93",
 *         "bank" => "A Bank",
 *         "branch" => "1",
 *         "account" => "123456",
 *     ],
 * ];
 */
```

### Listar pagamentos

Chame o método `list` no recurso de pagamentos passando parâmetros de consulta que irá retornar um paginador com pagamentos:

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment/get>).

```php
$paginator = $client->payments()->list();

$remainingPayments = 10;

foreach ($paginator as $result) {
    foreach ($result["payments"] as $payment) {
        echo $payment["payment"]["value"] . "\n"; // Valor do pagamento

        // A chave pix onde o pagamento deve ser enviado
        echo $payment["payment"]["destinationAlias"] . "\n";

        // correlationID para acompanhar este pagamento
        echo $payment["payment"]["correlationID"] . "\n";

        // e mais campos...

        $remainingPayments--;

        if ($remainingPayments == 0) break 2;
    }
}
```

## Refunds

O recurso de reembolsos é acessado chamando o método `refunds` no cliente da API.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund).

```php
$client->refunds();
```

### Criar um reembolso

Crie um reembolso chamando o método `create` no recurso de reembolsos:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund/paths/~1api~1v1~1refund/post).

```php
$refund = [
    // Seu ID de transação, ou ID `endToEnd`, para acompanhar este reembolso
    "transactionEndToEndId" => "9134e286-6f71-427a-bf00-241681624586",

    // Seu correlationID, identificador exclusivo para o reembolso
    "correlationID" => "9134e286-6f71-427a-bf00-241681624586",

    "value" => 100,

    // Comentário deste reembolso. Comprimento máximo de 140 caracteres
    "comment" => "Comentário do reembolso",
];

$result = $client->refunds()->create($refund);

/**
 * Exemplo de resultado:
 *
 * $result = [
 *     "refund" => [
 *         "status" => "IN_PROCESSING",
 *         "value" => 100,
 *         "correlationID" => "9134e286-6f71-427a-bf00-241681624586",
 *         "refundId" => "9134e2866f71427abf00241681624586",
 *         "time" => "2021-03-02T17:28:51.882Z",
 *         "comment" => "Comentário do reembolso",
 *     ],
 * ];
 */
```

### Obter um reembolso

Para obter um reembolso pelo ID de reembolso ou correlationID, chame o método `getOne`:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund/paths/~1api~1v1~1refund~1%7Bid%7D/get).

```php
$result = $client->refunds()->getOne("Q2hhcmdlOjYwM2U3NDlhNDI1NjAyYmJiZjRlN2JlZA==");

/**
 * Exemplo de resultado:
 *
 * $result = [
 *     "pixTransactionRefund" => [
 *         "value" => 100,
 *         "correlationID" => "7777-6f71-427a-bf00-241681624586",
 *         "refundId" => "11bf5b37e0b842e08dcfdc8c4aefc000",
 *         "returnIdentification" => "D09089356202108032000a543e325902",
 *         "comment" => "Comentário do reembolso",
 *     ],
 * ];
 */
```

### Listar reembolsos

Chame o método `list` no recurso de reembolsos que irá retornar um paginador com reembolsos:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund/paths/~1api~1v1~1refund/get).

```php
$paginator = $client->refunds()->list();

$remainingRefunds = 10;

foreach ($paginator as $result) {
    foreach ($result["refunds"] as $key => $refund) {
        echo $refund["value"] . "\n";

        // Hora do reembolso
        echo $refund["time"] . "\n";

        // Pode ser "IN_PROCESSING", "REFUNDED" ou "NOT_ACCOMPLISHED".
        echo $refund["status"] . "\n";

        // correlationID para acompanhar este reembolso
        echo $refund["correlationID"] . "\n";

        echo $refund["refundId"] . "\n";
        echo $refund["returnIdentification"] . "\n";

        $remainingRefunds--;

        echo "-------------------------\n";

        if ($remainingRefunds == 0) break 2;
    }
}
```

## Webhooks

O recurso de webhooks é acessado chamando o método `webhooks` no cliente da API.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/webhook).

```php
$client->webhooks();
```

### Criar um webhook

Crie um webhook chamando o método `create` no recurso de webhooks:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/webhook/paths/~1api~1v1~1webhook/post).

```php
$webhook = [
    "webhook" => [
        "name" => "webhookName (php-sdk)",

        // Eventos disponíveis para registrar um webhook para ouvir. Se ninguém selecionar ninguém, o evento padrão será OPENPIX:TRANSACTION_RECEIVED.
        // OPENPIX:CHARGE_CREATED - Nova cobrança criada.
        // OPENPIX:CHARGE_COMPLETED - Cobrança concluída é quando uma cobrança é totalmente paga.
        // OPENPIX:CHARGE_EXPIRED - Cobrança expirada é quando uma cobrança não foi totalmente paga e expirou.
        // OPENPIX:TRANSACTION_RECEIVED - Nova transação PIX recebida.
        // OPENPIX:TRANSACTION_REFUND_RECEIVED - Novo reembolso de transação PIX recebido ou reembolsado.
        // OPENPIX:MOVEMENT_CONFIRMED - Pagamento confirmado é quando a transação do pix referente ao pagamento é confirmada.
        // OPENPIX:MOVEMENT_FAILED - Falha no pagamento é quando o pagamento é aprovado e ocorre um erro.
        // OPENPIX:MOVEMENT_REMOVED - O pagamento foi removido por um usuário.
        "event" => "OPENPIX:CHARGE_CREATED",

        "url" => "https://example.com",
        "authorization" => "openpix-php-sdk",
        "isActive" => true,
    ],
];

$result = $client->webhooks()->create($webhook);

/**
 * Exemplo de resultado:
 *
 * $result = [
 *     "webhook" => [
 *         "id" => "V2ViaG9vazo2MDNlYmUxZWRlYjkzNWU4NmQyMmNmMTg=",
 *         "name" => "webhookName",
 *         "url" => "https://mycompany.com.br/webhook",
 *         "authorization" => "openpix",
 *         "isActive" => true,
 *         "event" => "OPENPIX:TRANSACTION_RECEIVED",
 *         "createdAt" => "2021-03-02T22:29:10.720Z",
 *         "updatedAt" => "2021-03-02T22:29:10.720Z",
 *     ],
 * ];
 */
```

### Listar webhooks

Chame o método `list` no recurso de webhooks que irá retornar um paginador com webhooks:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/webhook/paths/~1api~1v1~1webhook/get).

```php
// É possível passar uma string opcional com uma URL para filtrar todos os webhooks
$paginator = $client->webhooks()->list("https://example.com");

$remainingWebhooks = 10;

foreach ($paginator as $result) {
    foreach ($result["webhooks"] as $key => $webhook) {
        echo $webhook["id"] . "\n";
        echo $webhook["name"] . "\n";
        echo $webhook["event"] . "\n"; // Quando o webhook é disparado
        echo $webhook["url"] . "\n";
        echo $webhook["isActive"] . "\n";

        // e mais campos...

        $remainingWebhooks--;

        echo "---------------------------\n";

        if ($remainingWebhooks == 0) break 2;
    }
}
```

### Remover um webhook

Para remover um webhook, chame o método `delete` no recurso de webhooks, passando o ID:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/webhook/paths/~1api~1v1~1webhook~1%7Bid%7D/delete).

```php
$client->webhooks()->delete("id do webhook");
```

### Validar um webhook

Toda invocação de webhook em sua aplicação traz um cabeçalho HTTP chamado `x-webhook-signature`, que consiste na assinatura gerada utilizando a chave secreta da Woovi e o _payload_ (corpo da requisição HTTP) do webhook. Ao receber esse cabeçalho, você pode validar se a assinatura é válida e prosseguir com o fluxo do webhook.

Exemplo do cabeçalho HTTP:

```yaml
x-webhook-signature: lL2nnXgmLFGgxJ8+jCDguqouU4ucrIxYJcU5SPrJFaNcJajTJHYVldqc/z4YFIjAjtPEALe699WosgPY08W7CLpidvtm06Qwa4YMB0l/DcTS93O91NdSH/adjugEKiOb76Zj/0jB8mqOmWCFYbweOBa17bssuEkd5Lw7Q5L314Y=
```

[Veja um payload de exemplo recebido numa invocação de um webhook](https://developers.openpix.com.br/docs/webhook/webhook-signature-validation#exemplo-de-valida%C3%A7%C3%A3o).

Para validar a assinatura de uma chamada de webhook, utilize o método `isWebhookValid` no recurso de webhooks. Esse método retornará `true` se a assinatura fornecida junto com o payload for válida, ou `false` caso contrário.

```php
// Precisamos obter o corpo da requisição como uma string JSON
// Para isto, podemos utilizar a função `file_get_contents`.
// Exemplo de payload: '{ "charge": { "status": "COMPLETED", ... }, ... }'
$payload = file_get_contents("php://input");

// Também precisamos da assinatura
// Podemos utilizar a função `getallheaders`.
$signature = getallheaders()["x-webhook-signature"];

if ($client->webhooks()->isWebhookValid($payload, $signature)) {
    // Continue seu fluxo pro webhook...
} else {
    // Pare o fluxo do webhook, pois ele não é válido!
}
```
