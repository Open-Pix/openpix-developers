---
title: Como buscar as Orders criada pela OpenPix via Shopify?
tags:
  - shopify
  - how-to
  - integration
---

:::note

Como pré-requisito, é necessário fazer uma configuração para consumir a API da Shopify.
Recomendamos seguir as documentações abaixo que estará instruindo como consumir a API independente
da linguagem utilizada.

- [Shopify GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql)

:::

Caso você queira acessar as informações das `Orders` criadas na Shopify a partir do nosso app `OpenPix`,
é necessário estar utilizando a API de `Orders` que a Shopify fornece: [Order API](https://shopify.dev/docs/api/admin-graphql/2023-07/queries/orders).

Nesse caso, será necessário estar realizando uma query pro campo `orders` filtrando as orders pelo gateway `OpenPix`,
conforme o exemplo abaixo:

```graphql
{
  orders(first: 100, query: "gateway:OpenPix") {
    edges {
      node {
        id
        name
        transactions {
          gateway
          paymentId
	      }
      }
    }
  }
}
```

Dado esse exemplo, estamos buscando **TODAS** as orders criadas a partir do gateway de pagamentos `OpenPix`,
e buscando pelos seguintes dados:

- `name`, é o antigo `order_number`, é o número da Order que a Shopify mostra no dashboard;
- `id`, o identificador único daquela cobrança;
- `transactions`, as transações relacionadas àquela Order, contendo:
  - `gateway`, qual gateway gerou aquela cobrança, no caso `OpenPix`,
  - `paymentId`, o identificador único daquela transação, caso exista.

Você pode estar buscando mais campos, conforme a necessidade. Caso queira ver quais campos existe a possibilidade de serem
buscados, acesse a documentação do objeto de [Order](https://shopify.dev/docs/api/admin-graphql/2023-07/objects/Order) da API.
