---
id: java-sdk-usage
title: Como começar
sidebar_position: 0
tags:
  - api
  - java
  - sdk
---

## Instalando

É necessário ter o PHP com versão superior à 8.0 instalado com o [Gradle](https://gradle.org) ou [Maven](https://maven.apache.org/).

Use o repositório do "Maven Central" para instalar o SDK:

```groovy
repositories {
    mavenCentral()
}
```

E também adicione a dependência do SDK:

```groovy
dependencies {
    implementation 'br.com.openpix:java-sdk:1.0.0'
}
```

Dessa forma, o SDK, um cliente HTTP (`ktor`) e uma implementação serão instalados.

## Criando o cliente

O ponto de entrada do SDK é um `WooviSDK`:

```java
package br.com.openpix;

import br.com.openpix.sdk.WooviSDK;

import java.util.concurrent.ExecutionException;

public class Main {
    public static void main(String[] args) {
        // Para começar a usar o SDK Java
        WooviSDK sdk = new WooviSDK(System.getenv("APP_ID"));
    }
}

```

O constructor cria um novo cliente a partir de um ID de aplicativo obtido no [site da OpenPix](https://app.openpix.com.br/home/applications/tab/list). Também é possível passar configurações para o SDK, como o executor, para isso você pode observar os "overloads" dessa função, que por definição são os construtores com o mesmo nome, mas com parâmetros diferentes. Você também pode utilizar o método estático `WooviSdk.of` para construir.

Através dos "overloads" você pode específicar, a "url base", o "executor"(que é o ambiente onde vão ser despachadas as threads), uma instância de json e uma instância de http client.

Ambas instâncias de json e http client você pode configurar parâmetros internos, como `explicitNulls`,
leniência, e outros, que não vem ao caso, no momento. Todas elas estão documentadas em código, e são fáceis de ler.

## Chamando a API

Um SDK possui _métodos_ para acessar a API da OpenPix. Todos eles são assíncronos, e retornam um `Future` que pode ser usado para obter o resultado da chamada.

```java
sdk.allCustomersAsync().get();
```

Cada função retorna um futuro, que pode ser acessado em "single-thread" utilizando o método `get` ou em "multi-thread" utilizando o método `join`.

## Procurando páginas

Para procurar páginas, você pode utilizar os métodos, que tem como parâmetro os "start", "end", "charge", e outros, que são os parâmetros de paginação da API. Um exemplo desses métodos, é o método `transactionsAsync`, que retorna uma página de transações.

```java
// Você pode utilizar o método get para obter o resultado da chamada. E não passar nenhum parametro, porque os parametros são opcionais.
sdk.transactionsAsync().get();

// Você pode utilizar os seguintes parametros: 
sdk.transactionsAsync(start, end, charge, pixQrCode, withdrawal).get();
```

### Formato das entradas

Cada formato de entrada é uma classe com tipos, geralmente são nomeados como `Builder` no final, por exemplo `ChargeBuilder`.

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

Argumentos simples como strings e inteiros são utilizados no caso de operações de obtenção de apenas um recurso ou remoção. Por exemplo

```java
// Obtém uma cobrança pelo ID. string.
sdk.getChargeAsync(correlationID);

// Remove uma cobrança pelo ID. string.
sdk.deleteChargeASync(correlationID);
```

### Formato de saída

A execução de uma operação irá devolver resultados da API na forma de um objeto ou na forma de um paginador, especialmente em operações de listagem, como na listagem de transações.

```java,
/**
 * Criando um pix qr code
 *
 * Retorna um objeto
 */
PixQrCodeBuilder builder = new PixQrCodeBuilder()
        .identifier("identificador")
        .name("nome"); 

System.out.println(sdk.createPixQrCodeAsync(builder).get());

/**
 * Resultado: (Identado para fins de leitura)
 *
 * PixQrCodeResponse(
 *   pixQrCode=PixQrCode(
 *     name=nome,
 *     identifier=identificador,
 *     correlationID=bad32cd4-123e-49f7-8ca4-f1381c633831,
 *     paymentLinkID=a42a8a56-ab8e-4fc3-833d-c7dc1ff7473f,
 *     createdAt=2023-07-28T01:41:58.920Z,
 *     updatedAt=2023-07-28T01:41:58.920Z,
 *     brCode=00020126580014br.gov.bcb.pix013600ad360c-92c7-45ab-adb3-188307a6e4d05204000053039865802BR5910Woovi_Demo6009Sao_Paulo62170513identificador63040E64,
 *     paymentLinkUrl=https://openpix.com.br/pay/a42a8a56-ab8e-4fc3-833d-c7dc1ff7473f,
 *     qrCodeImage=https://api.openpix.com.br/openpix/charge/brcode/image/a42a8a56-ab8e-4fc3-833d-c7dc1ff7473f.png
 *   ),
 *   correlationID=null,
 *   brCode=null,
 * ) 
 */
```

## JavaDocs

Em cada operação disponível para um determinado tipo de recurso, existem [Java Docs](https://docs.oracle.com/en/java/) disponíveis informando o formato de entrada e saída da operação com um link para a documentação da API Rest e exemplo de utilização.

Para utilizar, é sugerido utilizar um editor com como o Eclipse ou o IntelliJ que possuem suporte para Java e bastante tooling para facilitar o desenvolvimento. 

Também é possível consultar a documentação no site da OpenPix caso haja dúvidas.

## Recursos disponíveis

Os seguintes recursos estão disponíveis no `Client`:

- `Future<PixQrCodeResponse> getPixQrCodeAsync(...)`: Obtém um Pix QR Code pelo ID.

- `Future<PixQrCodeList> allPixQrCodesAsync(...)`: Lista todos os Pix QR Codes.

- `Future<PixQrCodeResponse> createPixQrCodeAsync(...)`: Cria um Pix QR Code.

- `Future<Account> getAccountAsync(...)`: Obtém uma conta pelo ID.

- `Future<AccountListResponse> allAccountsAsync(...)`: Lista todas as contas.

- `Future<WithdrawResponse> withdrawAsync(...)`: Realiza um saque.

- `Future<PaymentResponseObject> getPaymentAsync(...)`: Obtém um pagamento pelo ID.

- `Future<PaymentListResponse> allPaymentsAsync(...)`: Lista todos os pagamentos.

- `Future<PaymentResponseObject> createPaymentAsync(...)`: Cria um pagamento.

- `Future<ChargeDeleteResponse> deleteChargeAsync(...)`: Remove uma cobrança pelo ID.

- `Future<ChargeResponse> getChargeAsync(...)`: Obtém uma cobrança pelo ID.

- `Future<ChargeListResponse> chargesAsync(...)`: Lista todas as cobranças.

- `Future<ChargeResponse> createChargeAsync(...)`: Cria uma cobrança.

- `Future<File> chargeQrCodeImageAsync(...)`: Obtém a imagem de um QR Code de uma cobrança.

- `Future<Customer> getCustomerAsync(...)`: Obtém um cliente pelo ID.

- `Future<CustomerListResponse> allCustomersAsync(...)`: Lista todos os clientes.

- `Future<CustomerResponse> createCustomerAsync(...)`: Cria um cliente.

- `Future<RefundResponse> getRefundAsync(...)`: Obtém um reembolso pelo ID.

- `Future<RefundListResponse> allRefundsAsync(...)`: Lista todos os reembolsos.

- `Future<RefundResponse> createRefundAsync(...)`: Cria um reembolso.

- `Future<WebhookDeleteResponse> deleteWebhookAsync(...)`: Remove um webhook pelo ID.

- `Future<WebhookListResponse> allWebhooksAsync(...)`: Lista todos os webhooks.

- `Future<WebhookResponse> createWebhookAsync(...)`: Cria um webhook.

- `Future<TransactionResponse> getTransactionAsync(...)`: Obtém uma transação pelo ID.

- `Future<TransactionListResponse> transactionsAsync(...)`: Lista todas as transações.

## Dependências

O SDK depende de implementações das:
- [Ktor Client](https://ktor.io/docs/create-client.html) (e outras dependências)
- [Kotlinx Coroutines](https://github.com/Kotlin/kotlinx.coroutines)
- [Kotlinx Serialization](https://github.com/Kotlin/kotlinx.serialization)

O Ktor client é utilizado para realizar as requisições HTTP, e as outras dependências são utilizadas para realizar as requisições de forma assíncrona.
