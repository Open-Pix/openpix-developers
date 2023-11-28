---
title: Exemplo de resposta do webhook de cobrança paga
tags:
  - charge
  - webhook
  - example
---

## Webhook de cobrança paga

Segue abaixo o exemplo dos dados que são enviados numa requisição do webhook de cobrança
paga (`OPENPIX:CHARGE_COMPLETED`). Esse webhook é disparado no momento que um usuário paga uma cobrança.

- `pix`: Objeto com detalhes da transação Pix relacionada ao pagamento da cobrança;
- `company`: Empresa do qual a cobrança pertence;
- `account`: Detalhes da conta que a Transação pertence;
- `charge`: Detalhes da cobrança paga;

## Resposta (JSON) de exemplo

```json
{
  "event": "OPENPIX:CHARGE_COMPLETED",
  "charge": {
    "customer": {
      "name": "John Doe",
      "email": "john@doe.com",
      "phone": "+5511123456789",
      "taxID": {
        "taxID": "07549767000113",
        "type": "BR:CNPJ"
      },
      "correlationID": "cb25ba21-fc5d-40f6-80bc-47079f5bc482"
    },
    "value": 5000,
    "comment": "",
    "identifier": "db85f0c5380c493b8eb3cf6b6780fd98",
    "paymentLinkID": "b982c71a-e9a2-4ff7-8cb0-34a2717fe7ed",
    "transactionID": "db85f0c5380c493b8eb3cf6b6780fd98",
    "status": "COMPLETED",
    "additionalInfo": [],
    "discount": 0,
    "valueWithDiscount": 5000,
    "expiresDate": "2023-11-28T12:30:34.164Z",
    "type": "DYNAMIC",
    "correlationID": "51b3e0ea-abfc-4a7b-999c-847f27c35add",
    "createdAt": "2023-11-28T11:30:34.652Z",
    "updatedAt": "2023-11-28T11:30:40.042Z",
    "paidAt": "2023-11-28T11:30:39.933Z",
    "payer": {
      "name": "QA",
      "taxID": {
        "taxID": "05460236000124",
        "type": "BR:CNPJ"
      },
      "correlationID": "1ba4011d-f670-4e63-9ecf-4b2606501660"
    },
    "brCode": "00020101021226900014br.gov.bcb.pix2568api.openpix.com/api/testaccount/qr/v1/db85f0c5380c493b8eb3cf6b6780fd98520400005303986540550.005802BR5909admin_dev6009Sao_Paulo62290525db85f0c5380c493b8eb3cf6b663046A80",
    "expiresIn": 3599,
    "pixKey": "d94d2ebc-0b3e-4b48-8b96-2eddac9e4f0e",
    "paymentLinkUrl": "https://openpix.com/pay/b982c71a-e9a2-4ff7-8cb0-34a2717fe7ed",
    "qrCodeImage": "https://api.openpix.com/openpix/charge/brcode/image/b982c71a-e9a2-4ff7-8cb0-34a2717fe7ed.png",
    "globalID": "Q2hhcmdlOjY1NjVjZjVhZmIzNDE4Y2EwYTJjMWVlOQ=="
  },
  "pix": {
    "customer": {
      "name": "John Doe",
      "email": "john@doe.com",
      "phone": "+5511123456789",
      "taxID": {
        "taxID": "07549767000113",
        "type": "BR:CNPJ"
      },
      "correlationID": "cb25ba21-fc5d-40f6-80bc-47079f5bc482"
    },
    "payer": {
      "name": "QA",
      "taxID": {
        "taxID": "05460236000124",
        "type": "BR:CNPJ"
      },
      "correlationID": "1ba4011d-f670-4e63-9ecf-4b2606501660"
    },
    "charge": {
      "customer": {
        "name": "John Doe",
        "email": "john@doe.com",
        "phone": "+5511123456789",
        "taxID": {
          "taxID": "07549767000113",
          "type": "BR:CNPJ"
        },
        "correlationID": "cb25ba21-fc5d-40f6-80bc-47079f5bc482"
      },
      "value": 5000,
      "comment": "",
      "identifier": "db85f0c5380c493b8eb3cf6b6780fd98",
      "paymentLinkID": "b982c71a-e9a2-4ff7-8cb0-34a2717fe7ed",
      "transactionID": "db85f0c5380c493b8eb3cf6b6780fd98",
      "status": "COMPLETED",
      "additionalInfo": [],
      "discount": 0,
      "valueWithDiscount": 5000,
      "expiresDate": "2023-11-28T12:30:34.164Z",
      "type": "DYNAMIC",
      "correlationID": "51b3e0ea-abfc-4a7b-999c-847f27c35add",
      "createdAt": "2023-11-28T11:30:34.652Z",
      "updatedAt": "2023-11-28T11:30:40.042Z",
      "paidAt": "2023-11-28T11:30:39.933Z",
      "payer": {
        "name": "QA",
        "taxID": {
          "taxID": "05460236000124",
          "type": "BR:CNPJ"
        },
        "correlationID": "1ba4011d-f670-4e63-9ecf-4b2606501660"
      },
      "brCode": "00020101021226900014br.gov.bcb.pix2568api.openpix.com/api/testaccount/qr/v1/db85f0c5380c493b8eb3cf6b6780fd98520400005303986540550.005802BR5909admin_dev6009Sao_Paulo62290525db85f0c5380c493b8eb3cf6b663046A80",
      "expiresIn": 3599,
      "pixKey": "d94d2ebc-0b3e-4b48-8b96-2eddac9e4f0e",
      "paymentLinkUrl": "https://openpix.com/pay/b982c71a-e9a2-4ff7-8cb0-34a2717fe7ed",
      "qrCodeImage": "https://api.openpix.com/openpix/charge/brcode/image/b982c71a-e9a2-4ff7-8cb0-34a2717fe7ed.png",
      "globalID": "Q2hhcmdlOjY1NjVjZjVhZmIzNDE4Y2EwYTJjMWVlOQ=="
    },
    "value": 5000,
    "time": "2023-11-28T11:30:39.933Z",
    "endToEndId": "E39f22d047934468f89c8347ed4cd80d0",
    "transactionID": "db85f0c5380c493b8eb3cf6b6780fd98",
    "infoPagador": "OpenPix testing",
    "type": "PAYMENT",
    "createdAt": "2023-11-28T11:30:39.954Z",
    "globalID": "UGl4VHJhbnNhY3Rpb246NjU2NWNmNWZmYjM0MThjYTBhMmMxZjc3"
  },
  "company": {
    "id": "5fa58a32bb2a83003433e506",
    "name": "Admin Dev S/A",
    "taxID": "05460236000124"
  },
  "account": {}
}
```
