---
title: Como redirecionar o usuário para uma URL pós pagar a cobrança via link de pagamento?
tags:
  - payment-link
  - how-to
  - redirect
  - charge
---

## Redirecionando o usuário

Caso você deseja redirecionar o usuário para uma URL em específico após o pagamento de uma
cobrança. É necessário criar a respectiva cobrança daquele link de pagamento com um campo chamado
`redirectUrl` acrescentado.

Utilizando a API de [Charge POST](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/post),
para criar uma nova cobrança com esse novo campo. No body da requisição deveria ser encaminhado conforme o seguinte
exemplo:

```json
{
  "correlationID": "9134e286-6f71-427a-bf00-241681624587",
  "value": 100,
  "redirectUrl": "https://example.com"
}
```

Nesse cenário, após o pagamento dessa cobrança, o usuário será redirecionado para a
URL do `https://example.com`.
