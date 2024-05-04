---
id: sdk-node-resources
title: Recursos
sidebar_position: 2
tags:
  - api
  - node
  - js
  - javascript
  - ts
  - typescript
  - sdk
---

## Conta

Chame o método `account` seu cliente da API para obter o recurso de contas.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/account).

### Pegar uma conta

Chame o método `get` no recurso de contas passando um accountId:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/account/paths/~1api~1v1~1account~1%7BaccountId%7D/get).

```js 
const response = await woovi.account.get({accountId: "algum-id"});
```

### Obter uma lista de contas

Obtenha as contas usando o método `list` no recurso de contas:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/account/paths/~1api~1v1~1account~1/get).

```js 
const response = await woovi.account.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Fazer uma retirada(withdraw)

Faça withdraw em uma consta usando do método `withdraw` no recurso de de contas.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/account/paths/~1api~1v1~1account~1%7BaccountId%7D~1withdraw/post).

```js 
const response = await woovi.account.withdraw({accountId: "string", value: 200});
```


## Carga

Chame o método `charge` seu cliente da API para obter o recurso de carga.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge).

### Pegar uma carga

Chame o método `get` no recurso de cargas passando um id:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/delete).

```js 
const response = await woovi.charge.get({id: "algum-id"});
```

### Obter uma lista de cargas

Obtenha as cargas usando o método `list` no recurso de cargas:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/get).

```js 
const response = await woovi.charge.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Crie uma carga

Crie uma carga usando o método `create` no recurso de cargas:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/get).

```js 
const response = await woovi.charge.create({
  "correlationID": "9134e286-6f71-427a-bf00-241681624587",
  "value": 100,
  "comment": "good",
  "customer": {
    "name": "Dan",
    "taxID": "31324227036",
    "email": "email0@example.com",
    "phone": "5511999999999"
  },
  "additionalInfo": [
    {
      "key": "Product",
      "value": "Pencil"
    },
    {
      "key": "Invoice",
      "value": "18476"
    },
    {
      "key": "Order",
      "value": "302"
    }
  ]
});
```

###  Pegar imagem de um qr code de uma carga

Obtenha o qr code de uma carga usando o método `getQrCode` no recurso de cargas:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1openpix~1charge~1brcode~1image~1%7B:id%7D.png?size=1024/get).

```js 
const response = await woovi.charge.getQrCode({size: "768"});
```

###  Deletar uma carga

Delete uma carga usando o método `delete` no recurso de cargas:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/delete).

```js 
const response = await woovi.charge.delete({id: "algum-id"});
```


## Extorno de Carga

Chame o método `chargeRefund` seu cliente da API para obter o recurso de extorno de uma carga.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge-refund).

### Obter uma lista de extorno cargas

Obtenha os extornos de carga usando o método `list` no recurso de extorno de carga:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge-refund/paths/~1api~1v1~1charge~1%7Bid%7D~1refund/get).

```js 
const response = await woovi.chargeRefund.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Crie uma carga

Crie um extorno de carga usando o método `create` no recurso de extorno cargas:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/get).

```js 
const response = await woovi.chargeRefund.create({
  "id": "algum-id",
  "correlationID": "a273e72c-9547-4c75-a213-3b0a2735b8d5",
  "value": 100,
  "comment": "Comentário do reembolso"
});
```
