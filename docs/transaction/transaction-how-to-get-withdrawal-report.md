---
id: transaction-how-to-get-withdrawal-report
title: Como pegar o Relatório de Saque pela a API?
tags:
  - transaction
  - api
---

## Relatório de Saque pela a API

Nós disponibilizamos o _endpoint_ `/api/v1/transaction` para que você possa pegar
_transactions_ da respectiva empresa afiliada.

Você pode acessar [aqui](https://developers.openpix.com.br/api#tag/transactions/paths/~1api~1v1~1transaction/get)
a documentação referente a esse _endpoint_.

Utilizando o endpoint, é muito simples acessar o relatório de saque, basta informar o `endToEndId` do saque que deseja o relatório no parâmetro `withdrawal`

Exemplo: `withdrawal=E18236120202012032010s01345689XBY`

Após efetuar a requisição, se tudo ocorreu bem, o _status code_ da requisição será `2xx` e no `body` da resposta,
você receberá uma lista com todas as transações que pertecem ao saque informado.

Num exemplo, essa será a nossa resposta:

```json
{
  "pageInfo": {
    "skip": 0,
    "limit": 10,
    "totalCount": 20,
    "hasPreviousPage": false,
    "hasNextPage": true
  },
  "transactions": [
    {
      "customer": {
        "name": "Dan",
        "email": "email0@example.com",
        "phone": "5511999999999",
        "taxID": {
          "taxID": "31324227036",
          "type": "BR:CPF"
        },
        "correlationID": "9134e286-6f71-427a-bf00-241681624586"
      },
      "payer": {
        "name": "Dan",
        "email": "email0@example.com",
        "phone": "5511999999999",
        "taxID": {
          "taxID": "31324227036",
          "type": "BR:CPF"
        },
        "correlationID": "9134e286-6f71-427a-bf00-241681624586"
      },
      "charge": {
        "status": "ACTIVE",
        "customer": "603f81fcc6bccc24326ffb43",
        "correlationID": "9134e286-6f71-427a-bf00-241681624586",
        "createdAt": "2021-03-03T12:33:00.546Z",
        "updatedAt": "2021-03-03T12:33:00.546Z"
      },
      "withdraw": {
        "value": 100,
        "time": "2021-03-03T12:33:00.536Z",
        "infoPagador": "payer info 1",
        "endToEndId": "E18236120202012032010s01345689XBY"
      },
      "type": "PAYMENT",
      "infoPagador": "payer info 0",
      "value": 100,
      "time": "2021-03-03T12:33:00.536Z",
      "transactionID": "transactionID",
      "endToEndId": "E18236120202012032010s0133872GZA"
    }
  ]
}
```
