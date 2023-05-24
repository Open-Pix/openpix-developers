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

### 3.2 Selecione o conector `Woovi`

![vtex-woovi-gateway](./__assets__/gateway-woovi.png)

### 4. Configure o connector

Cole o App ID que você já havia copiado, e clique em Salvar

![vtex-woovi-gateway](./__assets__/woovi-connector-detail.png)

Agora basta você configurar sua `Condição de pagamento` no ADMIN do seu ecommerce VTEX, e pronto.
