---
title: Exemplo de resposta do webhook de cobrança criada
tags:
  - charge
  - webhook
  - example
---

## Webhook de cobrança criada

Segue abaixo o exemplo dos dados que são enviados numa requisição do webhook de cobrança
paga (`OPENPIX:CHARGE_CREATED`). Esse webhook é disparado no momento em que um usuário cria
uma nova cobrança, seja pela API ou pela plataforma.

- `company`: Empresa do qual a cobrança pertence;
- `account`: Detalhes da conta que a cobrança pertence;
- `charge`: Detalhes da cobrança criada;

## Resposta (JSON) de exemplo

```json
{
  "event": "OPENPIX:CHARGE_CREATED",
  "charge": {
    "customer": {
      "name": "John Doe",
      "email": "john@doe.com",
      "phone": "+5511912345678",
      "address": {
        "zipcode": "48350-370",
        "street": "AVENIDA SANTO AMARO",
        "number": "1234",
        "neighborhood": "BROOKLIN PAULISTA",
        "city": "SAO PAULO",
        "state": "SP",
        "complement": ""
      },
      "taxID": {
        "taxID": "83914717000176",
        "type": "BR:CNPJ"
      },
      "correlationID": "cb5f9107-6158-442d-9884-69b3c5cbcc33"
    },
    "value": 5000,
    "comment": "",
    "identifier": "ab683b8f0e45482fb33154ba80f36354",
    "paymentLinkID": "df9b4d14-31fa-4507-ad02-4d4959a256e5",
    "transactionID": "ab683b8f0e45482fb33154ba80f36354",
    "status": "ACTIVE",
    "additionalInfo": [],
    "discount": 0,
    "valueWithDiscount": 5000,
    "expiresDate": "2023-11-29T12:44:45.489Z",
    "type": "DYNAMIC",
    "correlationID": "12d2d5d9-4c5a-4de1-9892-894da980cd3b",
    "createdAt": "2023-11-28T12:44:45.620Z",
    "updatedAt": "2023-11-28T12:44:45.620Z",
    "brCode": "00020101021226910014br.gov.bcb.pix2569localhost:5001/api/testaccount/qr/v1/ab683b8f0e45482fb33154ba80f36354520400005303986540550.005802BR5904demo6009SAO_PAULO61080455630062290525ab683b8f0e45482fb33154ba863040A26",
    "expiresIn": 86399,
    "pixKey": "9fcd7111-a0a0-451d-916f-91557e899f69",
    "paymentLinkUrl": "http://app.openpix.com/pay/df9b4d14-31fa-4507-ad02-4d4959a256e5",
    "qrCodeImage": "http://app.openpix.com/openpix/charge/brcode/image/df9b4d14-31fa-4507-ad02-4d4959a256e5.png",
    "globalID": "Q2hhcmdlOjY1NjVlMGJkNjliYTEwMjc5ZTQyNDk3OA=="
  },
  "company": {
    "id": "655bbc1b86edb0c8b53d0196",
    "name": "demo",
    "taxID": "75800612000168"
  },
  "account": {}
}
```