---
id: woocommerce-plugin
title: Integrando a OpenPix com WooCommerce
sidebar_label: WooCommerce OpenPix Plugin
---

### Plugin Pix para WooCommerce

## Resumo

Este documento detalha passos necessários para conectar a sua plataforma de e-Commerce, baseada no WooCommerce, na OpenPix. A plataforma OpenPix efetua em tempo real a conciliação entre seu Banco e seu e-Commerce.
Após conectar a sua conta na OpenPix é possível cobrar clientes em tempo real com QrCodes Pix, enviar Links de Pagamento, gerenciar cobranças incluindo extornos.

> _Nota: Este documento espera que você já tenha um ambiente WooCommerce ativo._

## 1. Instale o Plugin OpenPix na sua instância WooCommerce

[OpenPix For WooCommerce](https://wordpress.org/plugins/openpix-for-woocommerce/)

![Banner](/img/ecommerce/woocommerce-banner.png)
![Install](/img/ecommerce/woocommerce-plugin-install.png)

## 2. Configurando o Plugin WooCommerce

Entre em WooCommerce -> Settings > Payments.

![Payments](/img/ecommerce/woocommerce-payments.png)

Clique em `Manage` no Plugin OpenPix.

- [ ] Cadastre um AppID do tipo API. Crie um appID [aqui](../apis/api-getting-started.md)
- [ ] Customize o Título, Descrição e Texto de Botão de Pedido

![Setup](/img/ecommerce/woocommerce-setup.png)

Após adicionar o seu appID, clique em `Configure now with one click` para configurarmos ou criar seu Webhook.

- [ ] Ao clicar os campos, `Webhook Authorization` e `Webhook HMAC Secret Key` irão atualizar automaticamente e mostrar o status em `Webhook Status`.

Caso não configure você pode acessar a plataforma, criar um webhook manualmente. Para isso:

- [ ] Crie uma senha para a integração do Webhook. O Webhook é necessário para atualizar o status dos Pedidos em tempo real quando a cobrança Pix é paga.
- [ ] Cadastre a URL de Callback do WooCommerce na OpenPix. Exemplo: <https://meusite.com.br/wc-api/WC_OpenPix_Pix_Gateway>
- [ ] Clique em `Configure now with one click` novamente, para configurar o Webhook com esses novos dados criados.

![Webhook](/img/ecommerce/woocommerce-gatilho.png)

### 2.1 Customer

Para salvar o customer da order na sua cobrança OpenPix é necessário que seja ativado um plugin que possibilite que o cliente informe o CPF/CNPJ no momento da compra.

Indicamos o uso do plugin [woocommerce-extra-checkout-fields-for-brazil](https://wordpress.org/plugins/woocommerce-extra-checkout-fields-for-brazil/) para este caso. Uma vez ativado o plugin passará a salvar os clientes que informarem o CPF/CNPJ no momento da compra.

**Obs: O uso não é obrigatório. Caso você siga sem a configuração do mesmo, suas cobranças serão salvas sem o cliente da mesma.**

## 3. Realizar Pedido com Pix

Escolha a opção de pagar o pedido usando Pix

![Pay Pix](/img/ecommerce/woocommerce-pay-pix.png)

Pague o Pix usando o app do seu banco.

![Order](/img/ecommerce/woocommerce-order.png)

Valide que o status do Pedido mudou após o pagamento

## 4. Como configurar a expiração do pedido Woocommerce

A cobrança da Openpix tem um valor de expiração padrão que equivale a 1 dia, já a configuração de expiração padrão do Woocommerce é de 60 minutos

Para saber mais sobre Como configurar o tempo de expiração da OpenPix Charge [Clique aqui](/docs/flows/flow-edit-default-expiration).

![Woocommerce Pedido](/img/ecommerce/woo-pedido.png)

Para alterar e igualar esse tempo de expiração para a OpenPix e para Woocommerce você deve procurar no menu admin:

`Woocommerce` > `Settings` > `Products` > `Inventory`

Por último, alterar o valor do Hold stock para 1440 minutos equivalente a 1 dia

![Woocommerce Expiracao](/img/ecommerce/woo-expiracao.png)

## 5. Como selecionar qual deverá ser o status quando um novo pedido for gerado

Por padrão quando a cobrança da Openpix é criada, o status do pedido é alterado para `Pending payment`, porém é possível configurar para qualquer status que você queira.

![Woocommerce Status do Pedido Criado](/img/ecommerce/woocommerce-status-when-create-default.png)

Basta clicar e selecionar qual status você quer que seja colocado no pedido quando a cobrança da Openpix for criada.

Após esta alteração os novos pedidos quando forem criados irão receber o valor desse campo em seu status.

## 6. Como selecionar qual deverá ser o status quando um pedido for pago

Por padrão quando a cobrança da Openpix é paga, o status do pedido é alterado para `Processing`, porém é possível configurar para qualquer status que você queira.

![Woocommerce Status do Pedido Pago](/img/ecommerce/woocommerce-status-when-paid-default.png)

Basta clicar e selecionar qual status você quer que seja colocado no pedido quando a transação Pix for paga.

Após esta alteração os novos pedidos quando forem pagos irão receber o valor desse campo em seu status.
