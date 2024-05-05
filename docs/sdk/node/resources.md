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


## Fidelidade de cashback

Chame o método `cashbackFidelity` seu cliente da API para obter o recurso de fidelidade de cashback.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/cashback-fidelity).

### Pegar a quantidade de cashback que um usuário tem para receber

Chame o método `get` no recurso de fidelidade de cashback passando um taxID:

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/cashback-fidelity/paths/~1api~1v1~1cashback-fidelity~1balance~1%7BtaxID%7D/get).

```js 
const response = await woovi.cashbackFidelity.get({ taxID: "algum-tax-id"});
```

### Criar(ou pegar) uma fidelidade de cashback pra um cliente

Crie o recurso chamando o método `create`no recurso de fidelidade de cashback.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/cashback-fidelity/paths/~1api~1v1~1cashback-fidelity/post).

```js 
const response = await woovi.cashbackFidelity.create({
  "value": 100,
  "taxID": 11111111111
});
```

## Cobrança

Chame o método `charge` seu cliente da API para obter o recurso de cobrança.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge).

### Pegar uma cobrança

Chame o método `get` no recurso de cobranças passando um id:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/delete).

```js 
const response = await woovi.charge.get({id: "algum-id"});
```

### Obter uma lista de cobranças

Obtenha as cobranças usando o método `list` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/get).

```js 
const response = await woovi.charge.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Crie uma cobrança

Crie uma cobrança usando o método `create` no recurso de cobranças:

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

###  Pegar imagem de um qr code de uma cobrança

Obtenha o qr code de uma cobrança usando o método `getQrCode` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1openpix~1charge~1brcode~1image~1%7B:id%7D.png?size=1024/get).

```js 
const response = await woovi.charge.getQrCode({size: "768"});
```

###  Deletar uma cobrança

Delete uma cobrança usando o método `delete` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/delete).

```js 
const response = await woovi.charge.delete({id: "algum-id"});
```


## Extorno de Cobrança

Chame o método `chargeRefund` seu cliente da API para obter o recurso de extorno de uma cobrança.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge-refund).

### Obter uma lista de extorno cobranças

Obtenha os extornos de cobrança usando o método `list` no recurso de extorno de cobrança:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge-refund/paths/~1api~1v1~1charge~1%7Bid%7D~1refund/get).

```js 
const response = await woovi.chargeRefund.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Crie uma cobrança

Crie um extorno de cobrança usando o método `create` no recurso de extorno cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/get).

```js 
const response = await woovi.chargeRefund.create({
  "id": "algum-id",
  "correlationID": "a273e72c-9547-4c75-a213-3b0a2735b8d5",
  "value": 100,
  "comment": "Comentário do reembolso"
});
```

## Cliente

Chame o método `customer` seu cliente da API para obter o recurso de cliente.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/customer).

### Pegar uma cliente

Chame o método `get` no recurso de clientes passando um id:

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/customer/paths/~1api~1v1~1customer~1%7Bid%7D/get).

```js 
const response = await woovi.customer.get({id: "algum-id"});
```

### Obter uma lista de clientes

Obtenha os clientes usando o método `list` no recurso de clientes:

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/customer/paths/~1api~1v1~1customer/get).

```js 
const response = await woovi.customer.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Crie uma cliente

Crie uma cliente usando o método `create` no recurso de clientes:

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/customer/paths/~1api~1v1~1customer/post).

```js 
const response = await woovi.customer.create({
  "name": "Dan",
  "taxID": "31324227036",
  "email": "email0@example.com",
  "phone": "5511999999999",
  "correlationID": "9134e286-6f71-427a-bf00-241681624586",
  "address": {
    "zipcode": "30421322",
    "street": "Street",
    "number": "100",
    "neighborhood": "Neighborhood",
    "city": "Belo Horizonte",
    "state": "MG",
    "complement": "APTO",
    "country": "BR"
  }
});
```

### Fazer update num cliente

Faça um update em um cliente usando o método `update` no recurso de clientes.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/customer/paths/~1api~1v1~1customer/post).

```js 
const response = await woovi.customer.update({
  "correlationID": "some id",
  "name": "Dan",
  "email": "email0@example.com",
  "phone": "5511999999999",
  "address": {
    "zipcode": "30421322",
    "street": "Street",
    "number": "100",
    "neighborhood": "Neighborhood",
    "city": "Belo Horizonte",
    "state": "MG",
    "complement": "APTO",
    "country": "BR"
  }
});
```

## Parceiros

Chame o método `partner` seu cliente da API para obter o recurso de parceiros.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/partner-(request-access)).

### Pegar um pré-registro de parceiro

Chame o método `getPreRegistration` no recurso de parceiros passando um taxID:

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/partner-(request-access)/paths/~1api~1v1~1partner~1company~1%7BtaxID%7D/get).

```js 
const response = await woovi.partner.getPreRegistration({taxID: "algum-tax-id"});
```

### Obter todos os pré-registros

Obtenha os pré-registros de parceiros usando o método `list` no recurso de parceiros:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/partner-(request-access)/paths/~1api~1v1~1partner~1company/get).

```js 
const response = await woovi.partner.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Crie um parceiro

Crie uma parceiro usando o método `create` no recurso de parceiros:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/partner-(request-access)/paths/~1api~1v1~1partner~1company/post).

```js 
const response = await woovi.partner.create({
  "preRegistration": {
    "name": "Example LLC",
    "taxID": {
      "taxID": "11111111111111",
      "type": "BR:CNPJ"
    },
    "website": "examplellc.com"
  },
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@examplellc.com",
    "phone": "+5511912345678"
  }
});
```

### Criar uma aplicação para algum de seus pré-registros

Para criar uma aplicação, use o método `createApplication` no recurso de parceiros.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/partner-(request-access)/paths/~1api~1v1~1partner~1application/post).

```js 
const response = await woovi.partner.createApplication({
  "application": {
    "name": "MyAPIAccess",
    "type": "API"
  },
  "taxID": {
    "taxID": "65914571000187",
    "type": "BR:CNPJ"
  }
});
```



## Pagamento

Chame o método `payment` seu cliente da API para obter o recurso de pagamentos.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/partner-(request-access)/).

### Aprove um pagamento

Chame o método `approve` no recurso de pagamentos passando um correlationID:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment~1approve/post).

```js 
const response = await woovi.payment.approve({correlationID: "algum-correlation-id"});
```

### Obter um pagamento

Obtenha um pagamento usando o método `get` no recurso de pagamentos:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment~1%7Bid%7D/get).

```js 
const response = await woovi.payment.get({id: "algum-id"});
```

### Obter uma lista de pagamentos

Obtenha uma lista de pagamentos usando o método `list` no recurso de pagamentos.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment/get).

```js 
const response = await woovi.payment.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Criar uma requisição de pagamento

Para criar uma requisição de pagamento, use o método `create` no recurso de payment.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment/post).

```js 
const response = await woovi.payment.create({
  "value": 100,
  "destinationAlias": "c4249323-b4ca-43f2-8139-8232aab09b93",
  "destinationAliasType": "RANDOM",
  "comment": "payment comment",
  "correlationID": "payment1",
  "sourceAccountId": "my-source-account-id"
});
```


## Pegar um Qr Code

Chame o método `pixQrCode` seu cliente da API para obter o recurso de qr code.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/pixQrCode).

### Obter um qr code

Obtenha um qr code usando o método `get` no recurso de qr code:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/pixQrCode/paths/~1api~1v1~1qrcode-static~1%7Bid%7D/get).

```js 
const response = await woovi.pixQrCode.get({id: "algum-id"});
```

### Obter uma lista de pagamentos

Obtenha uma lista de qr codes usando o método `list` no recurso de qr code.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/pixQrCode/paths/~1api~1v1~1qrcode-static/get).

```js 
const response = await woovi.pixQrCode.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Criar um qr code estático.

Para criar um qr code estático, use o método `create` no recurso de qr code.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/pixQrCode/paths/~1api~1v1~1qrcode-static/post).

```js 
const response = await woovi.pixQrCode.create({
  "name": "my-qr-code",
  "correlationID": "9134e286-6f71-427a-bf00-241681624586",
  "value": 100,
  "comment": "good"
});
```


## Extorno

Chame o método `refund` seu cliente da API para obter o recurso de extorno.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund).

### Obter um extorno

Obtenha um extorno usando o método `get` no recurso de extorno:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund/paths/~1api~1v1~1refund~1%7Bid%7D/get).

```js 
const response = await woovi.refund.get({id: "algum-id"});
```

### Obter uma lista de extornos

Obtenha uma lista de extornos usando o método `list` no recurso de extorno.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund/paths/~1api~1v1~1refund/get).

```js 
const response = await woovi.refund.list({limit: 10, skip: 0}); //o objeto de paginação é opcional
```

### Criar um novo extorno

Para criar um extorno, use o método `create` no recurso de extorno.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund/paths/~1api~1v1~1refund/post).

```js 
const response = await woovi.refund.create({
  "transactionEndToEndId": "9134e286-6f71-427a-bf00-241681624586",
  "correlationID": "9134e286-6f71-427a-bf00-241681624586",
  "value": 100,
  "comment": "Comentário do reembolso"
});
```

## Assinatura

Chame o método `subscription` seu cliente da API para obter o recurso de assinatura.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/subscription).

### Obter uma assinaturas

Obtenha uma assinatura de extornos usando o método `get` no recurso de assinatura.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/subscription/paths/~1api~1v1~1subscriptions~1%7Bid%7D/get).

```js 
const response = await woovi.subscription.get({id: "algum-id"});
```

### Criar uma assinatura

Para criar uma assinatura, use o método `create` no recurso de assinatura.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/subscription/paths/~1api~1v1~1subscriptions/post).

```js 
const response = await woovi.subscriptions.create({
  "value": 100,
  "customer": {
    "name": "Dan",
    "taxID": "31324227036",
    "email": "email0@example.com",
    "phone": "5511999999999"
  },
  "dayGenerateCharge": 15
});
```

