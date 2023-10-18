---
id: woocommerce-redirect
title: Redirecionando o usuário no plugin WooCommerce
sidebar_label: WooCommerce Redirecionamento
tags:
  - ecommerce
  - woocommerce
  - plugin
---

Quando um usuário efetua o pagamento de uma cobrança durante a finalização do pedido, é possível redirecioná-lo para outra página.

Para fazer isso, acesse as configurações do plugin e altere a URL de redirecionamento.

![Configurações da URL de redirecionamento](/img/ecommerce/woocommerce/woocommerce-redirect-url-setting.png)

Após o usuário efetuar o pagamento da cobrança, ele será redirecionado para a URL configurada.

A URL irá conter os seguintes parâmetros:

- `order_id`: Identificação do pedido do WooCommerce.
- `correlationID`: Ao utilizar esta variável, será colocado no lugar o [`correlationID`](../../../concepts/correlation-id.md) da cobrança será passado na URL e, com esse identificador, você poderá manipular qual é a cobrança em questão utilizando nossas [APIs](/api).
- `key`: Chave do pedido (_order key_) do WooCommerce.

Por exemplo, se você configurou a URL de redirecionamento como `https://example.com/thank-you`, a URL final será `https://example.com/thank-you?order_id=identificacao-do-pedido&key=chave-do-pedido&correlationID=correlationID-do-pedido`.

Para obter uma cobrança usando o `correlationID`, você pode utilizar a nossa [API](/api#tag/charge/paths/~1api~1v1~1charge~1%7Bid%7D/get) de cobranças.
