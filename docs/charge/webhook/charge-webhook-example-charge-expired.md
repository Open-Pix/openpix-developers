---
title: Exemplo de resposta de webhook de cobrança expirada
tags:
  - example
  - webhook
  - charge
---

## Webhook de cobrança expirada

Segue abaixo o exemplo dos dados que são enviados numa requisição do webhook de
cobrança expirada (`OPENPIX:CHARGE_EXPIRED`). Esse webhook é disparado no momento
que a cobrança é expirada.

- `event`: O tipo de evento realizado que neste caso seria `OPENPIX:CHARGE_EXPIRED`.
- `charge`: A cobrança que foi expirada.
- `company`: Empresa a que a cobrança pertence.

## Resposta (JSON) de exemplo

```json
{
  "event": "OPENPIX:CHARGE_EXPIRED",
  "charge": {
    "customer": {
      "name": "Antonio Victor",
      "taxID": { "taxID": "12345678976", "type": "BR:CPF" },
      "email": "antoniocliente@example.com",
      "correlationID": "4979ceba-2132-4292-bd90-bee7fb2125e4"
    },
    "value": 123456,
    "comment": "",
    "identifier": "ea83401ed4834b3ea6f1f283b389af29",
    "paymentLinkID": "21516412-4192-409d-ba18-1ac594db4c29",
    "transactionID": "ea83401ed4834b3ea6f1f283b389af29",
    "status": "EXPIRED",
    "additionalInfo": [],
    "discount": 0,
    "valueWithDiscount": 123456,
    "expiresDate": "2023-11-18T18:32:57.679Z",
    "type": "DYNAMIC",
    "correlationID": "0ac9e5a0-04f3-4879-85bf-8be34f16a1fa",
    "createdAt": "2023-11-17T18:32:57.869Z",
    "updatedAt": "2023-11-17T18:35:59.212Z",
    "brCode": "00020101021226910014br.gov.bcb.pix2569localhost:5001/api/testaccount/qr/v1/5b2970f464a740378aa472c6dad0bf8352040000530398654071234.565802BR5905Woovi6009SAO_PAULO610804556300622905255b2970f464a740378aa472c6d63046BA9",
    "expiresIn": 86399,
    "paymentLinkUrl": "https://openpix.com.br/pay/21516412-4192-409d-ba18-1ac594db4c29",
    "qrCodeImage": "https://api.openpix.com.br/openpix/charge/brcode/image/21516412-4192-409d-ba18-1ac594db4c29.png",
    "globalID": "Q2hhcmdlOjY1NTdiMWQ5MmQ4NzYzMjA5ZGU0OWE0NA=="
  },
  "company": {
    "id": "64cab82a485da23384a4e3af",
    "name": "Woovi LTDA",
    "taxID": "75800612000168"
  }
}
```
