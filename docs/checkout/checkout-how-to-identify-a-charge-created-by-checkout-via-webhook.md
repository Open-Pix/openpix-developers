---
title: "Como identificar uma cobrança criada via Checkout com webhook no meu sistema?"
tags:
  - checkout
  - webhook
  - charge
---

## Introdução

:::info

É necessário que você tenha já criado um webhook referente a `Cobrança Criada` ou `Cobrança Paga`,
para que seja possível receber as notificações quando um desses eventos ocorrer.

Caso não tenha criado um webhook ainda, acesse a documentação [instruindo como criá-los](../webhook/platform/webhook-platform-api.mdx).

:::

Caso você deseje identificar uma cobrança criada através de um Checkout em seu
sistema, é possível utilizar os webhooks de cobrança criada ou cobrança paga para
identificar o checkout que originou a cobrança.

## Identificando o Checkout

Quando uma cobrança é criada ou paga via Checkout, através do payload que é enviado no webhook, você verá
um exemplo como este:

```json
{
  "charge": {
    "checkout": {
      "title": "Título do Checkout",
      "paymentLinkID": "ff3e1bjk-9c7d-49eb-933a-8a47423ee928",
      "paymentLinkURL": "https://openpix.com.br/pay/ff3e1bjk-9c7d-49eb-933a-8a47423ee928"
    }
  }
}
```

Neste exemplo, o campo `checkout` dentro do objeto de `charge` contém as informações do checkout que originou a cobrança.

- `title`: Título do checkout, conforme definido na criação do checkout pela plataforma;
- `paymentLinkID`: ID do link de pagamento do checkout, **esse ID é único** e pode ser utilizado para identificar o checkout;
- `paymentLinkURL`: URL do link de pagamento do checkout, que pode ser utilizado para redirecionar o cliente para a página de pagamento.

Com essas informações, você pode identificar o checkout que originou a cobrança e realizar as ações necessárias em seu sistema.

## Exemplo de payload de webhook

Segue abaixo o payload de exemplo de uma cobrança criada (`OPENPIX:CHARGE_CREATED`) via Checkout:

```json
{
  "event": "OPENPIX:CHARGE_CREATED",
  "charge": {
    "customer": null,
    "value": 1200,
    "comment": "Webhook de Evento de Cobrança criada",
    "identifier": "c2cc9e8cd68442b0a41ee26534bef534",
    "paymentLinkID": "429762a4-4bef-4b00-8cc1-f0d3acb676d3",
    "transactionID": "c2cc9e8cd68442b0a41ee26534bef534",
    "status": "ACTIVE",
    "additionalInfo": [],
    "fee": 50,
    "discount": 0,
    "valueWithDiscount": 1200,
    "expiresDate": "2024-03-15T18:00:32.466Z",
    "type": "DYNAMIC",
    "correlationID": "c5820a0a-8abd-46a9-ab9b-ac5a9a68f463",
    "createdAt": "2024-03-14T18:00:34.413Z",
    "updatedAt": "2024-03-14T18:00:34.413Z",
    "brCode": "00020101021226990014br.gov.bcb.pix2577pix-h.bpp.com.br/23114447/qrs1/v2/011sMBpqAGIcbBqf1L8lqJxnJ8gzX6ZGGa22ycXMQ7Q520400005303986540512.005802BR5904demo6009SAO_PAULO61080455630062290525c2cc9e8cd68442b0a41ee265363047835",
    "checkout": {
      "title": "Título do Checkout",
      "paymentLinkID": "ff3e1bjk-9c7d-49eb-933a-8a47423ee928",
      "paymentLinkURL": "https://openpix.com.br/pay/ff3e1bjk-9c7d-49eb-933a-8a47423ee928"
    }
    "expiresIn": 86400,
    "pixKey": "676bd1f8-93cb-4389-b094-5587179d56bf",
    "paymentLinkUrl": "http://openpix.com.br/pay/429762a4-4bef-4b00-8cc1-f0d3acb676d3",
    "qrCodeImage": "http://openpix.com.br/openpix/charge/brcode/image/429762a4-4bef-4b00-8cc1-f0d3acb676d3.png",
    "globalID": "Q2hhcmdlOjY1ZjMzYjQyZmNkYjRlZWMyMmY4YTdjYg=="
  },
  "company": {
    "id": "65ba3d42675443db3debd9f9",
    "name": "Teste",
    "taxID": "75800612000168"
  },
  "account": {
    "clientId": "AE11101E-FBE5-7EC8-130F-D9E6794894F9"
  }
}
```

Para mais informações sobre os campos do payload, acesse a documentação com maiores detalhes:

- [Payload de Cobrança Criada](../charge/webhook/charge-webhook-example-charge-created.md)
- [Payload de Cobrança Paga](../charge/webhook/charge-webhook-example-charge-completed.md)
