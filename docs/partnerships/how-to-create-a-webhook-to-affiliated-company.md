---
id: how-to-create-a-webhook-to-affiliated-company
title: Como criar um webhook para uma empresa afiliada?
tags:
  - partnership
  - partner
  - webhook
  - api
---

## Criando o webhook via API

Para criar um webhook é **obrigatório** que você tenha criado um `AppID` previamente
para a empresa afiliada. Caso não tenha feito ainda, você pode seguir o tutorial a seguir: 
[**Como acessar a API com uma empresa afiliada?**](./how-to-access-api-via-affiliated-company.md)

Após criar sua nova `application`, você consegue obter seu `AppID` convertendo os valores de `clientId`
e `clientSecret` para [Base64](https://en.wikipedia.org/wiki/Base64). Segue um exemplo em JavaScript de 
como fazer isso:

```js
const appID = Buffer.from(`${clientId}:${clientSecret}`, 'utf8').toString('base64');
```

O `appID` será o valor que você usará no _header_ de `Authorization` para garantir que está criando o
webhook para a empresa correta.

---

Após termos o `appID`, você pode consumir o endpoint `/api/openpix/v1/webhook` com o método `POST` caso
queira criar um novo webhook para a empresa afiliada. Você pode acessar [aqui](http://localhost:3000/api#tag/webhook/paths/~1api~1openpix~1v1~1webhook/post)
a documentação referente a esse endpoint, caso desejar.

No `body` da requisição, nós esperamos os seguintes valores:

- **`name`**: O nome pelo qual você quer identificar este novo webhook;
- **`event`**: O evento que será o _gatilho_ do webhook. Atualmente, temos 6 possíveis gatilhos:
  - `OPENPIX:CHARGE_CREATED`: quando uma cobrança nova é criada;
  - `OPENPIX:CHARGE_COMPLETED`: quando uma cobrança foi paga;
  - `OPENPIX:CHARGE_COMPLETED_NOT_SAME_CUSTOMER_PAYER`: quando uma cobrança é paga e o pagador é diferente do cliente associado a cobrança;
  - `OPENPIX:CHARGE_EXPIRED `: quando uma cobrança foi expirada;
  - `OPENPIX:TRANSACTION_RECEIVED`: quando recebe uma nova transação Pix;
  - `OPENPIX:TRANSACTION_REFUND_RECEIVED`: quando é efetuado o reembolso de uma transação Pix;
- **`url`**: A URL em questão que o webhook vai consumir;
- **`isActive`**: indica se o webhook em questão está ativo ou não, se não, não será acionado;
- **`authorization`**: referente ao `Authorization` header, caso a URL precise;

Num exemplo prático do body, o `body` da sua requisição seguiria este formato: 

```json
{
  "webhook": {
    "name": "webhookName",
    "event": "OPENPIX:CHARGE_CREATED",
    "url": "https://mycompany.com.br/webhook",
    "authorization": "openpix",
    "isActive": true
  }
}
```

Reforçando que é necessário ter o `appID` referente a empresa afiliada no _header_ da sua requisição.

Se tudo ocorreu bem, você receberá uma resposta com o _status code_ `2xx` e no `body` da resposta, você
estará vendo as informações referente ao recém criado webhook.

Segue ume exemplo da resposta:

```json
{
  "webhook": {
    "id": "V2ViaG9vazo2MDNlYmUxZWRlYjkzNWU4NmQyMmNmMTg=",
    "name": "webhookName",
    "url": "https://mycompany.com.br/webhook",
    "authorization": "openpix",
    "isActive": true,
    "event": "OPENPIX:CHARGE_CREATED",
    "createdAt": "2023-01-04T22:29:10.720Z",
    "updatedAt": "2021-01-04T22:29:10.720Z"
  }
}
```
