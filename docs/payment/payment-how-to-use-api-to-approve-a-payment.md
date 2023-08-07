---
id: payment-how-to-use-api-to-approve
sidebar_position: 3
title: Como usar a API de Aprovar Pagamentos?
tags:
  - payment
  - api
  - approve
---

## Aprovando pagamentos com api

Nós disponibilizamos o _endpoint_ `/api/v1/payment/approve` para que você possa approvar um pagamento criado a partir da sua respectiva empresa filiada

Você pode acessar [aqui](<https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment~1approve/post>)
a documentação referente a esse _endpoint_.

Como parte do `body` da requisição, esperamos o envio dos seguintes itens: `correlationID`:

- **`correlationID`**: Um identificador único para o pagamento.

Num exemplo prático, o body da sua requisição seguiria semelhante a este exemplo:

```json
{
  "correlationID": "31ee9576-99ec-412a-9ac7-e142a4a6acf0",
}
```

Após efetuar a requisição, se tudo ocorreu bem, o _status code_ da requisição será `2xx` e no `body` da resposta,
você estará vendo as informações sobre o `payment` recém aprovado, dados da transação e destinatário.

Num exemplo, essa será a nossa resposta:

```json
{
  "payment": {
    "value": 100,
    "status": "APPROVED",
    "destinationAlias": "c4249323-b4ca-43f2-8139-8232aab09b93",
    "comment": "payment comment",
    "correlationID": "payment1",
    "sourceAccountId": "my-source-account-id"
  },
  "transaction": {
    "value": 100,
    "endToEndId": "transaction-end-to-end-id",
    "time": "2023-03-20T13:14:17.000Z"
  },
  "destination": {
    "name": "Dan",
    "taxID": "31324227036",
    "pixKey": "c4249323-b4ca-43f2-8139-8232aab09b93",
    "bank": "A Bank",
    "branch": "1",
    "account": "123456"
  }
}
```
