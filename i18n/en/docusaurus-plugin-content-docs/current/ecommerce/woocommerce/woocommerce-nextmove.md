---
id: woocommerce-nextmove
title: Configurando o WooCommerce Openpix com a NextMove
sidebar_label: OpenPix Plugin NextMove
tags:
- ecommerce
- woocommerce
- plugin
---

## Integrando a OpenPix com o NextMove

1. Instale o Plugin OpenPix na sua instância WooCommerce
2. Configure o Plugin WooCommerce [aqui](woocommerce-plugin.md)
3. Dentro do plugin do NextMove, vá em `Configurações` > `Edit/rules` da página `Thank You`

![NextMove-settings](/img/ecommerce/woocommerce/woocommerce-nextmove-settings.png)

4. Dentro da pagina de edição clique em `Manage Components`

5. Dentro da página de edição de componentes clique em `HTML` e coloque o seguinte código

```html
<div id='openpix-order' style='margin-bottom: 40px'></div>
```

![NextMove-settings](/img/ecommerce/woocommerce/woocommerce-nextmove-html-settings.png)

6. Crie uma cobrança utilizando a OpenPix, e confirme se o qrcode é exibido
