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
const response = await woovi.account.get({ accountId: 'algum-id' });
```

### Obter uma lista de contas

Obtenha as contas usando o método `list` no recurso de contas:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/account/paths/~1api~1v1~1account~1/get).

```js
const response = await woovi.account.list({ limit: 10, skip: 0 }); //o objeto de paginação é opcional
```

### Fazer uma retirada(withdraw)

Faça withdraw em uma conta usando do método `withdraw` no recurso de contas.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/account/paths/~1api~1v1~1account~1%7BaccountId%7D~1withdraw/post).

```js
const response = await woovi.account.withdraw({
  accountId: 'string',
  value: 200,
});
```

## Fidelidade de cashback

Chame o método `cashbackFidelity` seu cliente da API para obter o recurso de fidelidade de cashback.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/cashback-fidelity).

### Pegar a quantidade de cashback que um usuário tem para receber

Chame o método `get` no recurso de fidelidade de cashback passando um taxID:

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/cashback-fidelity/paths/~1api~1v1~1cashback-fidelity~1balance~1%7BtaxID%7D/get).

```js
const response = await woovi.cashbackFidelity.get({ taxID: 'algum-tax-id' });
```

### Criar(ou pegar) uma fidelidade de cashback pra um cliente

Crie o recurso chamando o método `create`no recurso de fidelidade de cashback.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/cashback-fidelity/paths/~1api~1v1~1cashback-fidelity/post).

```js
const response = await woovi.cashbackFidelity.create({
  value: 100,
  taxID: 11111111111,
});
```

## Cobrança

Chame o método `charge` seu cliente da API para obter o recurso de cobrança.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge).

### Pegar uma cobrança

Chame o método `get` no recurso de cobranças passando um id:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/delete).

```js
const response = await woovi.charge.get({ id: 'algum-id' });
```

### Obter uma lista de cobranças

Obtenha as cobranças usando o método `list` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/get).

```js
const response = await woovi.charge.list({ limit: 10, skip: 0 }); //o objeto de paginação é opcional
```

### Crie uma cobrança

Crie uma cobrança usando o método `create` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/get).

```js
const response = await woovi.charge.create({
  correlationID: '9134e286-6f71-427a-bf00-241681624587',
  value: 100,
  comment: 'good',
  customer: {
    name: 'Dan',
    taxID: '31324227036',
    email: 'email0@example.com',
    phone: '5511999999999',
  },
  additionalInfo: [
    {
      key: 'Product',
      value: 'Pencil',
    },
    {
      key: 'Invoice',
      value: '18476',
    },
    {
      key: 'Order',
      value: '302',
    },
  ],
});
```

### Pegar imagem de um qr code de uma cobrança

Obtenha o qr code de uma cobrança usando o método `getQrCode` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1openpix~1charge~1brcode~1image~1%7B:id%7D.png?size=1024/get).

```js
const response = await woovi.charge.getQrCode({ size: '768' });
```

### Deletar uma cobrança

Delete uma cobrança usando o método `delete` no recurso de cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/delete).

```js
const response = await woovi.charge.delete({ id: 'algum-id' });
```

## Estorno de Cobrança

Chame o método `chargeRefund` seu cliente da API para obter o recurso de estorno de uma cobrança.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge-refund).

### Obter uma lista de estorno cobranças

Obtenha os estornos de cobrança usando o método `list` no recurso de estorno de cobrança:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge-refund/paths/~1api~1v1~1charge~1%7Bid%7D~1refund/get).

```js
const response = await woovi.chargeRefund.list({ limit: 10, skip: 0 }); //o objeto de paginação é opcional
```

### Crie uma cobrança

Crie um estorno de cobrança usando o método `create` no recurso de estorno cobranças:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/get).

```js
const response = await woovi.chargeRefund.create({
  id: 'algum-id',
  correlationID: 'a273e72c-9547-4c75-a213-3b0a2735b8d5',
  value: 100,
  comment: 'Comentário do reembolso',
});
```

## Cliente

Chame o método `customer` seu cliente da API para obter o recurso de cliente.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/customer).

### Pegar uma cliente

Chame o método `get` no recurso de clientes passando um id:

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/customer/paths/~1api~1v1~1customer~1%7Bid%7D/get).

```js
const response = await woovi.customer.get({ id: 'algum-id' });
```

### Obter uma lista de clientes

Obtenha os clientes usando o método `list` no recurso de clientes:

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/customer/paths/~1api~1v1~1customer/get).

```js
const response = await woovi.customer.list({ limit: 10, skip: 0 }); //o objeto de paginação é opcional
```

### Crie uma cliente

Crie uma cliente usando o método `create` no recurso de clientes:

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/customer/paths/~1api~1v1~1customer/post).

```js
const response = await woovi.customer.create({
  name: 'Dan',
  taxID: '31324227036',
  email: 'email0@example.com',
  phone: '5511999999999',
  correlationID: '9134e286-6f71-427a-bf00-241681624586',
  address: {
    zipcode: '30421322',
    street: 'Street',
    number: '100',
    neighborhood: 'Neighborhood',
    city: 'Belo Horizonte',
    state: 'MG',
    complement: 'APTO',
    country: 'BR',
  },
});
```

### Fazer update num cliente

Faça um update em um cliente usando o método `update` no recurso de clientes.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/customer/paths/~1api~1v1~1customer/post).

```js
const response = await woovi.customer.update({
  correlationID: 'some id',
  name: 'Dan',
  email: 'email0@example.com',
  phone: '5511999999999',
  address: {
    zipcode: '30421322',
    street: 'Street',
    number: '100',
    neighborhood: 'Neighborhood',
    city: 'Belo Horizonte',
    state: 'MG',
    complement: 'APTO',
    country: 'BR',
  },
});
```

## Parceiros

Chame o método `partner` seu cliente da API para obter o recurso de parceiros.

[Documentação do endpoint para mais detalhes](<https://developers.woovi.com/api#tag/partner-(request-access)>).

### Pegar um pré-registro de parceiro

Chame o método `getPreRegistration` no recurso de parceiros passando um taxID:

[Documentação do endpoint para mais detalhes](<https://developers.woovi.com/api#tag/partner-(request-access)/paths/~1api~1v1~1partner~1company~1%7BtaxID%7D/get>).

```js
const response = await woovi.partner.getPreRegistration({
  taxID: 'algum-tax-id',
});
```

### Obter todos os pré-registros

Obtenha os pré-registros de parceiros usando o método `list` no recurso de parceiros:

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/partner-(request-access)/paths/~1api~1v1~1partner~1company/get>).

```js
const response = await woovi.partner.list({ limit: 10, skip: 0 }); //o objeto de paginação é opcional
```

### Crie um parceiro

Crie uma parceiro usando o método `create` no recurso de parceiros:

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/partner-(request-access)/paths/~1api~1v1~1partner~1company/post>).

```js
const response = await woovi.partner.create({
  preRegistration: {
    name: 'Example LLC',
    taxID: {
      taxID: '11111111111111',
      type: 'BR:CNPJ',
    },
    website: 'examplellc.com',
  },
  user: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@examplellc.com',
    phone: '+5511912345678',
  },
});
```

### Criar uma aplicação para algum de seus pré-registros

Para criar uma aplicação, use o método `createApplication` no recurso de parceiros.

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/partner-(request-access)/paths/~1api~1v1~1partner~1application/post>).

```js
const response = await woovi.partner.createApplication({
  application: {
    name: 'MyAPIAccess',
    type: 'API',
  },
  taxID: {
    taxID: '65914571000187',
    type: 'BR:CNPJ',
  },
});
```

## Pagamento

Chame o método `payment` seu cliente da API para obter o recurso de pagamentos.

[Documentação do endpoint para mais detalhes](<https://developers.woovi.com/api#tag/partner-(request-access)/>).

### Aprove um pagamento

Chame o método `approve` no recurso de pagamentos passando um correlationID:

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment~1approve/post>).

```js
const response = await woovi.payment.approve({
  correlationID: 'algum-correlation-id',
});
```

### Obter um pagamento

Obtenha um pagamento usando o método `get` no recurso de pagamentos:

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment~1%7Bid%7D/get>).

```js
const response = await woovi.payment.get({ id: 'algum-id' });
```

### Obter uma lista de pagamentos

Obtenha uma lista de pagamentos usando o método `list` no recurso de pagamentos.

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment/get>).

```js
const response = await woovi.payment.list({ limit: 10, skip: 0 }); //o objeto de paginação é opcional
```

### Criar uma requisição de pagamento

Para criar uma requisição de pagamento, use o método `create` no recurso de payment.

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment/post>).

```js
const response = await woovi.payment.create({
  value: 100,
  destinationAlias: 'c4249323-b4ca-43f2-8139-8232aab09b93',
  destinationAliasType: 'RANDOM',
  comment: 'payment comment',
  correlationID: 'payment1',
  sourceAccountId: 'my-source-account-id',
});
```

## Pegar um Qr Code

Chame o método `pixQrCode` seu cliente da API para obter o recurso de qr code.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/pixQrCode).

### Obter um qr code

Obtenha um qr code usando o método `get` no recurso de qr code:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/pixQrCode/paths/~1api~1v1~1qrcode-static~1%7Bid%7D/get).

```js
const response = await woovi.pixQrCode.get({ id: 'algum-id' });
```

### Obter uma lista de pagamentos

Obtenha uma lista de qr codes usando o método `list` no recurso de qr code.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/pixQrCode/paths/~1api~1v1~1qrcode-static/get).

```js
const response = await woovi.pixQrCode.list({ limit: 10, skip: 0 }); //o objeto de paginação é opcional
```

### Criar um qr code estático.

Para criar um qr code estático, use o método `create` no recurso de qr code.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/pixQrCode/paths/~1api~1v1~1qrcode-static/post).

```js
const response = await woovi.pixQrCode.create({
  name: 'my-qr-code',
  correlationID: '9134e286-6f71-427a-bf00-241681624586',
  value: 100,
  comment: 'good',
});
```

## Estorno

Chame o método `refund` seu cliente da API para obter o recurso de estorno.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund).

### Obter um estorno

Obtenha um estorno usando o método `get` no recurso de estorno:

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund/paths/~1api~1v1~1refund~1%7Bid%7D/get).

```js
const response = await woovi.refund.get({ id: 'algum-id' });
```

### Obter uma lista de estornos

Obtenha uma lista de estornos usando o método `list` no recurso de estorno.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund/paths/~1api~1v1~1refund/get).

```js
const response = await woovi.refund.list({ limit: 10, skip: 0 }); //o objeto de paginação é opcional
```

### Criar um novo estorno

Para criar um estorno, use o método `create` no recurso de estorno.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/refund/paths/~1api~1v1~1refund/post).

```js
const response = await woovi.refund.create({
  transactionEndToEndId: '9134e286-6f71-427a-bf00-241681624586',
  correlationID: '9134e286-6f71-427a-bf00-241681624586',
  value: 100,
  comment: 'Comentário do reembolso',
});
```

## Assinatura

Chame o método `subscription` seu cliente da API para obter o recurso de assinatura.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/subscription).

### Obter uma assinaturas

Obtenha uma assinatura de estornos usando o método `get` no recurso de assinatura.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/subscription/paths/~1api~1v1~1subscriptions~1%7Bid%7D/get).

```js
const response = await woovi.subscription.get({ id: 'algum-id' });
```

### Criar uma assinatura

Para criar uma assinatura, use o método `create` no recurso de assinatura.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/subscription/paths/~1api~1v1~1subscriptions/post).

```js
const response = await woovi.subscriptions.create({
  value: 100,
  customer: {
    name: 'Dan',
    taxID: '31324227036',
    email: 'email0@example.com',
    phone: '5511999999999',
  },
  dayGenerateCharge: 15,
});
```

## Transações

Chame o método `transactions` seu cliente da API para obter o recurso de transações.

[Documentação do endpoint para mais detalhes](https://developers.openpix.com.br/api#tag/transactions).

### Obter uma transação

Obtenha uma transação usando o método `get` no recurso de transações.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/transactions/paths/~1api~1v1~1transaction~1%7Bid%7D/get).

```js
const response = await woovi.transactions.get({ id: 'algum-id' });
```

### Obter uma lista de transações

Obtenha uma lista de transações usando o método `list` no recurso de transação.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/transactions/paths/~1api~1v1~1transaction/get).

```js
const response = await woovi.transactions.list({
  pagination: { limit: 10, skip: 0 },
  query: {},
}); //o objeto de paginação e parametros de query é opcional
```

## Transferencias

Chame o método `transfer` seu cliente da API para obter o recurso de transferencia.

[Documentação do endpoint para mais detalhes](<https://developers.openpix.com.br/api#tag/transfer-(request-access)>).

### Criar uma transferencia

Para criar uma transferencia, use o método `create` no recurso de transferencias.

[Documentação do endpoint para mais detalhes](<https://developers.woovi.com/api#tag/transfer-(request-access)/paths/~1api~1v1~1transfer/post>).

```js
const response = await woovi.transfer.create({
  value: 100,
  fromPixKey: 'from@openpix.com.br',
  toPixKey: 'to@openpix.com.br',
});
```

## Webhooks

Chame o método `webhook` seu cliente da API para obter o recurso de webhook.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/webhook).

### Deletar um webhook

Delete um webhook usando o método `delete` no recurso de webhooks.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/webhook/paths/~1api~1v1~1webhook~1%7Bid%7D/delete).

```js
const response = await woovi.webhook.delete({ id: 'algum-id' });
```

### Obter uma lista de webhooks

Obtenha uma lista de webhooks usando o método `list` no recurso de webhook.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/webhook/paths/~1api~1v1~1webhook/get).

```js
const response = await woovi.webhook.list({
  pagination: { limit: 10, skip: 0 },
  query: {},
}); //o objeto de paginação e query são opcionais
```

### Criar um novo webhook

Para criar um webhook, use o método `create` no recurso de webhook.

[Documentação do endpoint para mais detalhes](https://developers.woovi.com/api#tag/webhook/paths/~1api~1v1~1webhook/post).

```js
const response = await woovi.webhook.create({
  webhook: {
    name: 'webhookName',
    event: 'OPENPIX:CHARGE_CREATED',
    url: 'https://mycompany.com.br/webhook',
    authorization: 'openpix',
    isActive: true,
  },
});
```

### Handler HTTP

O método webhook conta com um recurso especial chamado handle, ótimo para ser usado para validar recursos diretamente na sua api. Veja a seguir como ultiliza-lo:

```js
import { createClient } from '@woovi/node-sdk';

const woovi = createClient({ appId: 'seu-app-id' });

const handler = woovi.webhook.handler({
  onChargeCompleted: async (payload) => {},
  onChargeExpired: async (payload) => {},
});

export const POST = handler.POST;
```

Post recebe sua requisição.

Isso permite com que você possa validar um webhook em uma api que você pode construir.

## Subcontas

Chame o método `subAccount` seu cliente da API para obter o recurso de subcontas.

[Documentação do endpoint para mais detalhes](<https://developers.woovi.com/api#tag/sub-account-(request-access)>).

### Pegar detalhes de uma subcontas

Para pegar detalhes de uma subconta, use o metodo `get`no recurso de subcontas.

[Documentação do endpoint para mais detalhes](<https://developers.woovi.com/api#tag/sub-account-(request-access)/paths/~1api~1v1~1subaccount~1%7Bid%7D/get>).

```js
const response = await woovi.subAccount.get({ id: 'algum-id' });
```

### Listar subcontas

Obtenha uma lista de subcontas usando o método `list` no recurso de subcontas.

[Documentação do endpoint para mais detalhes](<https://developers.woovi.com/api#tag/sub-account-(request-access)/paths/~1api~1v1~1subaccount/get>).

```js
const response = await woovi.subAccount.list({ limit: 10, skip: 0 }); //o objeto de paginação é opcional
```

### Criar uma nova subconta

Para criar um subconta, use o método `create` no recurso de subconta.

[Documentação do endpoint para mais detalhes](<https://developers.woovi.com/api#tag/sub-account-(request-access)/paths/~1api~1v1~1subaccount/post>).

```js
const response = await woovi.subAccount.create({
  pixKey: '9134e286-6f71-427a-bf00-241681624587',
  name: 'Test Account',
});
```

### Fazer uma retirada(withdraw)

Faça withdraw em uma subconta usando do método `withdraw` no recurso de subcontas.

[Documentação do endpoint para mais detalhes](<https://developers.woovi.com/api#tag/sub-account-(request-access)/paths/~1api~1v1~1subaccount~1%7Bid%7D~1withdraw/post>).

```js
const response = await woovi.subAccount.withdraw({ id: 'pix-key' });
```
