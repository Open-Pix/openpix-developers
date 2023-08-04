---
id: java-sdk-resources
title: Recursos
sidebar_position: 2
tags:
- api
- ruby
- sdk
---

## Lista de recursos disponíveis

Existem recursos disponíveis para cada tipo de operação. Para cada recurso, existe uma classe que representa o recurso e uma classe que representa uma lista de recursos. Essas classes são as classes de paginação: `Paginator<T>`.

### Paginação

A classe `Paginator<T>` é uma classe que representa uma lista de recursos. Ela possui os seguintes métodos:

- `Future<List<T>> itemsAsync()`: Obtém os itens da página atual. 
- `Future<PageInfo> pageInfoAsync()`: Obtém as informações da página atual.
- `void next()`: Vai para a próxima página.
- `void previous()`: Vai para a página anterior.

As funções `next` e `previous` atualizam uma informação da classe, e os dados só serão lidos
da próxima vez que for chamado o método `itemsAsync` ou `pageInfoAsync`.

### Charge

- `Charge`: Representa uma cobrança.

#### Criar uma cobrança

```java
// Cria uma charge
ChargeBuilder charge = new ChargeBuilder()
    .value(100)
    .comment("comment")
    .correlationID("correlationId")
    .destinationAlias("destinationAlias")
    .sourceAccountId("sourceAccountId");

sdk.createChargeAsync(charge).get();
```

#### Obter uma cobrança

```java
// Obtém uma cobrança pelo ID. string.
sdk.getChargeAsync(correlationID).get();
```

#### Remover uma cobrança

```java
// Remove uma cobrança pelo ID. string.
sdk.deleteChargeAsync(correlationID).get();
```

### PixQrCode

- `PixQrCode`: Representa um pix qr code.

#### Criar um pix qr code

```java
// Cria um pix qr code
PixQrCodeBuilder pixQrCode = new PixQrCodeBuilder()
    .value(100)
    .comment("comment")
    .correlationID("correlationId")
    .destinationAlias("destinationAlias")
    .sourceAccountId("sourceAccountId");

sdk.createPixQrCodeAsync(pixQrCode).get();
```

#### Obter um pix qr code

```java
// Obtém um pix qr code pelo ID. string.
sdk.getPixQrCodeAsync(correlationID).get();
```

### Transação

- `Transaction`: Representa uma transação.

#### Obter uma transação

```java
// Obtém uma transação pelo ID. string.
sdk.getTransactionAsync(correlationID).get();
```

### Conta

- `Account`: Representa uma conta.

#### Obter uma conta

```java
// Obtém uma conta pelo ID. string.
sdk.getAccountAsync(correlationID).get();
```

#### Obter uma lista de contas

```java
// Obtém uma lista de contas.
sdk.getAccountsAsync().get();
```

#### Performar saque
    
```java
// Performa um saque.
sdk.withdrawAsync(id, value).get();
```

### Reembolso

- `Refund`: Representa um reembolso.

#### Criar um reembolso

```java
// Cria um reembolso
RefundBuilder refund = new RefundBuilder()
    .value(100)
    .comment("comment")
    .correlationID("correlationId")
    .destinationAccountId("destinationAccountId")
    .sourceAccountId("sourceAccountId");

sdk.createRefundAsync(refund).get();
```

#### Obter um reembolso

```java
// Obtém um reembolso pelo ID. string.
sdk.getRefundAsync(correlationID).get();
```

### Webhook

- `Webhook`: Representa um webhook.

#### Criar um webhook

```java
// Cria um webhook
WebhookBuilder builder = new WebhookBuilder()
    .number(100)
    .url("https://google.com")
    .enableWebhook();

sdk.createWebhookAsync(builder).get();
```

#### Deletar um webhook

```java
// Deleta um webhook pelo ID. string.
sdk.deleteWebhookAsync(correlationID).get();
```

### Customer

- `Customer`: Representa um customer.

#### Criar um customer

```java
// Cria um customer
CustomerBuilder builder = new CustomerBuilder()
    .name("name")
    .email("email@gmail.com")
    .taxIdNumber("947.761.930-04")
    .phoneNumber("4299999-9999")
    .address(address);

sdk.createCustomerAsync(builder).get();
```

#### Obter um customer

```java
// Obtém um customer pelo ID. string.
sdk.getCustomerAsync(correlationID).get();
```

### Pagamento

- `Payment`: Representa um pagamento.

#### Criar um pagamento

```java
// Cria um pagamento
PaymentBuilder payment = new PaymentBuilder()
    .value(100)
    .comment("comment")
    .correlationID("correlationId")
    .destinationAccountId("destinationAccountId")
    .sourceAccountId("sourceAccountId");

sdk.createPaymentAsync(payment).get();
```

#### Obter um pagamento

```java
// Obtém um pagamento pelo ID. string.
sdk.getPaymentAsync(correlationID).get();
```