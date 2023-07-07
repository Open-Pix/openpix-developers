---
id: vtex-integrating
title: Integrando VTEX na OpenPix
sidebar_position: 0
tags:
  - ecommerce
  - vtex
---

:::caution Atenção
Este documento espera que você já tenha um ambiente VTEX, e uma conta criada na OpenPix
:::

## Plugin Pix para VTEX

### 1. Acesse a configuração da VTEX

Entre na plataforma da OpenPix e [clique aqui](https://app.woovi.com/home/applications/vtex/add) ou vá em `API/Plugins` > `Plugin VTEX` > `Adicionar`

![tutorial-box](./__assets__/vtex-tutorial-box.png)

### 2.2. Clique em salvar

![vtex-save](./__assets__/vtex-detail-save.png)

### 2.3. Copie o App ID gerado

![vtex-save](./__assets__/copy-app-id.png)

### 3. Acesse as configurações de pagamento

Acesse as configurações de pagamento no ADMIN da seu ecommerce VTEX.

![1-vtex-admin-panel](./__assets__/1-admin-panel.png)
![2-vtex-admin-panel](./__assets__/2-admin-panel.png)

### 3.1 Acesse a aba `Afiliações de Gateways`

Nesta aba clique no botão `+`.

![vtex-add-new-gateway](./__assets__/add-new-gateway.png)

### 3.2 Selecione o gateway `WooviConnector`

![vtex-woovi-gateway](./__assets__/gateway-woovi.png)

### 4. Configure o gateway

Cole seu `Application Key`, `Application Token` e o `App ID` que você já havia copiado, e clique em `Salvar`.

![vtex-woovi-gateway](./__assets__/woovi-connector-detail.png)

Caso você não tenha o `Application Key` e `Application Token`, você pode seguir a [documentação](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) oficial da VTEX para fazer a geração.

### 5. Adicionando `Condição de pagamento` da Woovi

Logo depois de adicionar a nova afiliação de gateway, vá na aba `Condições de pagamentos` e clique em `+`.

![vtex-add-new-payment-condition](./__assets__/add-new-payment-condition.png)

### 5.1 Selecione a condição de pagamento `Woovi`

![vtex-woovi-payment-condition](./__assets__/payment-condition-woovi.png)

### 5.2 Configure a condição de pagamento

Selecione o gateway da Woovi que você acabou de criar, logo em seguida clique em `Salvar`.

![woovi-payment-condition-detail](./__assets__/woovi-payment-condition-detail.png)

Pronto, agora o método de pagamento da Woovi já aparecerá no seu checkout.
