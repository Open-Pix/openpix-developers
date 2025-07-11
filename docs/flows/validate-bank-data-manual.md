---
id: validate-bank-data-manual
title: Como validar Dados bancários Usando agência e conta
tags:
  - api
---

## 1. É necessario que você tenha uma API

Caso você não tenha, temos essa documentação que lhe ensina como criar uma [API](https://developers.openpix.com.br/en/docs/apis/getting-started-api).

Após criar a API basta seguir o passo a passo.

### Crie um pagamento de 1 centavo:

Para fazer este passo a passo é necessário que você tenha o PIXOUT habilitado em sua conta, então caso não tenha basta solicitar seguindo este artigo : [Como solicitar o pagamento externo (PIX OUT)](https://ajuda.openpix.com.br/pt-br/article/como-solicitar-o-pagamento-externo-pix-out-1qmsnj7/)

Após isso você irá criar um pagamento para a chave-pix que deseja saber os dados bancários.

## Sequência da integração

![sequencial](./__assets__/payment-flow.png)

# 1. Crie o pagamento:
Nesta etapa você irá criar o pagamento seguindo os parâmetros de nosso endPoint: [Create Payment request](https:///developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment/post)

## Campos do Pagamento Manual

### holder (Dados do Beneficiário)
Representa a pessoa ou empresa que vai receber o pagamento.

| Campo | Descrição |
|-------|-----------|
| name | Nome completo do beneficiário |
| taxID.type | Tipo do documento (BR:CNPJ ou BR:CPF) |
| taxID.taxID | Número do documento |

### account (Dados Bancários)
Representa os dados da conta bancária do beneficiário.

| Campo | Descrição |
|-------|-----------|
| branch | Número da agência bancária (ex: "0001") |
| account | Número da conta bancária (ex: "00000000000000000981") |
| accountType | Tipo da conta (ex: "TRAN" para conta corrente) |

### Tipos de Conta (accountType)

| Código | Descrição |
|--------|-----------|
| CACC | Current Account (Conta Corrente) |
| SLRY | Salary Account (Conta Salário) |
| SVGS | Savings Account (Conta Poupança) |
| TRAN | Transacting Account (Conta Transacional) |

### psp (Provedor de Serviço de Pagamento)
Representa a instituição financeira que processará o pagamento.

| Campo | Descrição |
|-------|-----------|
| id | Identificador único do PSP |
| name | Nome da instituição financeira (ex: "WOOVI IP") |

Para verificar o id do psp, acesse o endpoint: [PSPs](https:///developers.openpix.com.br/api#tag/psp/paths/~1api~1v1~1psp/get)

e adicione o ispb no psp.id

```json
curl --location 'https://api.woovi.com/api/v1/payment' \
--header 'Content-Type: application/json' \
--header 'Authorization: ****' \
--data '{
  "value": 100,
  "correlationID": "c0938e0c-a613-48a9-982a-672c062d0001",
  "holder": {
    "name": "teste",
    "taxID": {
      "type": "BR:CNPJ",
      "taxID": "202********158"
    }
  },
   "psp": {
    "id": "54811417",
    "name": "WOOVI IP LTDA"
  },
  "account": {
    "account": "000********0981",
    "branch": "00**",
    "accountType": "TRAN"
  }
}'
```
![creat](./__assets__/request.png)

# 2. Confirme o pagamento:
Nesta etapa será necessário que você aprove o pagamento que criou seguindo o endpoint: [Approve a Payment Request](https:///developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment~1approve/post)

Após a confirmação do pagamento irá gerar um payload com os dados bancários da chave-pix que fez o pagamento

```json
curl --location 'https://api.woovi.com/api/v1/payment/approve' \
--header 'Content-Type: application/json' \
--header 'Authorization: ****' \
--data '{
  "correlationID": "c0938e0c-a613-48a9-982a-672c062d0001"
}'
{
   "payment": …,
   "transaction": …,
   "destination": {
       "name": "Luc— – —--ar",
       "taxID": "07*******61",
       "pixKey": "07*******61",
       "bank": "NU PAGAMENTOS - IP",
       "branch": "1",
       "account": "76******03"
   }
}
```
![confirm](./__assets__/confirm-payment.png)

# 3. Webhooks

Após a criação e confirmação do pagamento, você receberá webhooks com o status da transação. Aqui estão exemplos dos possíveis webhooks:

## Webhook de Falha (MOVEMENT_FAILED)

```json
{
  "event": "OPENPIX:MOVEMENT_FAILED",
  "payment": {
    "value": 1,
    "status": "FAILED",
    "correlationID": "manual-payment-0009"
  },
  "transaction": {
    "value": 1,
    "endToEndId": "E54811417202507081527dYr4Cp2gfAp",
    "time": "2025-07-08T15:27:19.687Z",
    "providerRejectedReason": "AC03 - Pagamento rejeitado pelo PSP do recebedor"
  }
}
```

## Webhook de Confirmação (MOVEMENT_CONFIRMED)

```json
{
  "event": "OPENPIX:MOVEMENT_CONFIRMED",
  "payment": {
    "status": "APPROVED",
    "value": 1,
    "correlationID": "manual-payment-0009",
    "sourceAccountId": "6823414a524ed520d3518dd6"
  },
  "transaction": {
    "value": 1,
    "time": "2025-07-08T15:27:19.687Z",
    "endToEndId": "E54811417202507081527dYr4Cp2gfAp"
  },
  "destination": {
    "name": "Thiago Mota",
    "taxID": "54508095810",
    "bank": "Mercado pago",
    "branch": "0001",
    "account": "49033976342"
  }
}
```

Se não souber como configurar o webhook, acesse: [Criando um webhook para interceptar um Pix e chamar uma API](https://developers.openpix.com.br/docs/webhook/platform/webhook-platform-api)






 

