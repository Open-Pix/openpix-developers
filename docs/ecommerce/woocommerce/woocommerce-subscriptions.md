---
id: woocommerce-subscriptions
title: Integrando a OpenPix com WooCommerce Subscriptions
sidebar_label: WooCommerce Subscriptions OpenPix Plugin
tags:
  - ecommerce
  - woocommerce
  - plugin
  - subscription
---

## Resumo

Este documento detalha os passos necessários para utilizar a OpenPix junto ao plugin WooCommerce Subscriptions em sua plataforma de e-Commerce, baseada no WooCommerce. A plataforma OpenPix efetua em tempo real a conciliação entre seu Banco e seu e-Commerce.

Após configurar o plugin OpenPix, será possível cobrar clientes recorrentemente com QrCodes Pix, enviar Links de Pagamento, gerenciar cobranças incluindo extornos.

> _Nota: Este documento espera que você já tenha um ambiente WooCommerce ativo e já possua o WooCommerce Subscriptions instalado._

## 1. Instale e configure o Plugin OpenPix

Siga nossa documentação para instalar e configurar o Plugin OpenPix: [Integrando a OpenPix com WooCommerce](./woocommerce-plugin.md)

## 2. Ative o plugin WooCommerce Subscriptions

Entre em **Plugins** na barra lateral, procure pelo plugin WooCommerce Subscriptions e clique em **Ativar**.

![Ativando o plugin](/img/ecommerce/woocommerce/woocommerce-subscriptions-activation.png)

_Plugins -> WooCommerce Subscriptions -> Ativar_

## 3. Configure o WooCommerce Subscriptions para aceitar pagamentos com Pix

### 3.1. Abrindo as configurações

Na mesma tela, clique em **Configurações** no plugin WooCommerce Subscriptions ou, na barra lateral, vá até **WooCommerce**, clique em **Configurações** e vá até **Assinaturas** no menu superior.

![Botão de configurações no plugin](/img/ecommerce/woocommerce/woocommerce-subscriptions-plugin-settings.png)

![Configurações do plugin](/img/ecommerce/woocommerce/woocommerce-subscriptions-settings.png)

_WooCommerce -> Configurações -> Assinaturas_

### 3.2. Ativando as renovações manuais

No menu **Assinaturas**, desça até a seção de **Renovações** e ative a opção **Aceitar renovações manuais**

![Ativando as renovações manuais](/img/ecommerce/woocommerce/woocommerce-subscriptions-manual-renewals.png)

_Assinaturas -> Renovações -> Aceitar renovações manuais_

## 4. Crie uma nova assinatura

Para criar uma nova assinatura, vá em **Produtos**, na barra lateral, e clique em **Adicionar novo**.

Adicione as informações sobre a assinatura e então desça até a seção **Dados do produto** e selecione **Assinatura simples**.

![Criando uma nova assinatura](/img/ecommerce/woocommerce/woocommerce-subscriptions-product.png)

_Produtos -> Adicionar novo -> Dados do produto -> Assinatura simples_
