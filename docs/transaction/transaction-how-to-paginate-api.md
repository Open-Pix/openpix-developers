---
id: transaction-how-to-get-withdrawal-report
title: Como Paginar pela a API de Transações?
tags:
  - transaction
  - api
---

## Paginação pela API de Transações

Nós disponibilizamos o _endpoint_ `/api/v1/transaction` para que você possa visualizar
_transactions_ de sua empresa.

Você pode acessar [aqui](https://developers.openpix.com.br/api#tag/transactions/paths/~1api~1v1~1transaction/get)
a documentação referente a esse _endpoint_.

O endpoint limita a 100 transações por request, porém é possível visualizar outras transações paginando a API.

Após efetuar a primeira requisição, se tudo ocorreu bem, o _status code_ da requisição será `2xx` e no `body` da resposta, junto da lista de transações você receberá um objeto nomeado de `pageInfo`.

Num exemplo, essa será a nossa resposta:

```json
{
  "pageInfo": {
    "skip": 0,
    "limit": 100,
    "totalCount": 200,
    "hasPreviousPage": false,
    "hasNextPage": true
  },
  "transactions": [
    ...transactions,
  ]
}
```

É possível enviar o parametro `skip` na query string da requisição, para visualizar a próxima página, podemos retornar o valor do skip sendo `pageInfo.skip` + `pageInfo.limit`.

Nesse exemplo, essa seria a url da próxima requisição:

`/api/v1/transaction?skip=100`

Também é possível fácilmente saber se existe uma nova página a ser requisitada, isso pode ser verificado usando o campo `hasNextPage` enviado dentro do objeto de `pageInfo`.
