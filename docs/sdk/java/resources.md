---
id: java-sdk-resources
title: Recursos
sidebar_position: 2
tags:
  - api
  - java
  - sdk
---

## Lista de recursos disponíveis

Existem recursos disponíveis para cada tipo de operação. Para cada recurso, existe uma classe que representa o recurso e
uma classe que representa uma lista de recursos. Essas classes são as classes de paginação: `Paginator<T>`.

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

#### Verificar assinatura de um webhook

Toda invocação de webhook em sua aplicação traz um cabeçalho HTTP chamado x-webhook-signature, que consiste na
assinatura gerada utilizando a chave secreta da Woovi e o payload (corpo da requisição HTTP) do webhook. Ao receber esse
cabeçalho, você pode validar se a assinatura é válida e prosseguir com o fluxo do webhook.

```
x-webhook-signature: lL2nnXgmLFGgxJ8+jCDguqouU4ucrIxYJcU5SPrJFaNcJajTJHYVldqc/z4YFIjAjtPEALe699WosgPY08W7CLpidvtm06Qwa4YMB0l/DcTS93O91NdSH/adjugEKiOb76Zj/0jB8mqOmWCFYbweOBa17bssuEkd5Lw7Q5L314Y=
```

Veja um [exemplo de validação de assinatura](https://developers.openpix.com.br/docs/webhook/webhook-signature-validation#exemplo-de-valida%C3%A7%C3%A3o).

Para verificar a assinatura de um webhook, você precisa do corpo da requisição, o cabeçalho `x-webhook-signature` e o
conteúdo enviado no request.

```java
// Verifica a assinatura de um webhook
import br.com.openpix.OpenSSL;

// The body of the request sent by the woovi servers
String payload = "...";

// The signature in the header `x-webhook-signature`
String signature = "...";

if OpenSSL.verify(payload, signature) {
    // The signature is valid
} else {
    // The signature is invalid
}
```

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
6 KB