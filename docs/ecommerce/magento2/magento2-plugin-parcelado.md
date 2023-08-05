---
id: magento2-plugin-parcelado
title: Integrando OpenPix Parcelado com Magento2
sidebar_label: Magento2 OpenPix Parcelado Plugin
sidebar_position: 1
tags:
- magento2
- ecommerce
- parcelado
---

### Plugin OpenPix Parcelado para Magento2

## Resumo

Este documento detalha passos necessários para conectar a sua plataforma de e-Commerce, baseada no Magento2, na OpenPix. A plataforma OpenPix efetua em tempo real a conciliação entre seu Banco e seu e-Commerce.
Após conectar a sua conta na OpenPix é possível cobrar clientes em tempo real com QrCodes Pix, enviar Links de Pagamento, gerenciar cobranças incluindo extornos.

> *Nota: Este documento espera que você já tenha um ambiente Magento2 ativo.*

## 1. Instale o Plugin OpenPix Parcelado na sua instância Magento2

[OpenPix For Magento2](https://marketplace.magento.com/openpix-pix.html)

![Banner](./__assets__/magento2-banner.png)
![Install](./__assets__/magento2-marketplace-search.png)

[Download OpenPix Magento2 Plugin - versão 2.0.10](pathname:///magento2/openpix_pix.2.0.10.zip) - Versão Atual

## 2. Configurando o Plugin Magento2

1. Configure o plugin Magento2 com apenas 1 clique seguindo a documentação [Magento2 OneClick](/docs/ecommerce/magento2/magento2-oneclick)

2. Ative o plugin clicando em `Payment via OpenPix Parcelado` no Plugin OpenPix.

- [ ] Ative ou Desative o Plugin
- [ ] Customize o título do pagamento dentro da sua Store

![Customize](./__assets__/magento2-openpix-parcelado-settings.png)

### 2.2 Configurando CPF/CNPJ para o Customer (required)

É obrigatório o envio do cliente com nome, cpf/cnpj, telefone e endereço com pleto. Para disponibilizar o cpf/cnpj do customer da order na sua cobrança OpenPix é necessário que seja ativado o campo `TaxVat` em sua loja Magento.

Entre em Magento2 Admin -> Stores > Configuration -> Customers -> Customer Configuration

![customer-sidemenu](./__assets__/magento2-customer-sidemenu.png)

Primeiro ative o campo `Show VAT Number on Storefront` em `Create New Account Options`:

![magento2-customer-create-new-account-options](./__assets__/magento2-customer-create-new-account-options.png)

Em seguida em `Name and Address Options` ative o campo `Show Tax/VAT Number`:

![magento2-customer-name-address-options.png](./__assets__/magento2-customer-name-address-options.png)

Para finalizar modifique o endereço para que ele seja disponibilizado em 4 linhas

![magento2-customer-address-4-lines.png](./__assets__/magento2-openpix-parcelado-address.png)

A partir de agora os clientes terão que preencher esse campo com o CPF ou CNPJ e o mesmo será usado para salvar o cliente na plataforma OpenPix.

## 5. Realizar Pedido com Pix

Escolha a opção de pagar o pedido à vista ou com Pix + Cartão de crédito

![Pay Pix](./__assets__/magento2-cart.png)

Pague o Pix usando o app do seu banco.
![Order](./__assets__/magento2-order.png)

Ao selecionar pagamento no pix à vista pague o qrcode.

Ao selecionar pix + cartão de crédito insira os dados do cartão, pague o pix e o valor sera captura no cartão.

![Order](./__assets__/magento2-order-2.png)

Valide que o status do Pedido mudou após o pagamento

## 5. Visualizar Pedido com Pix

Seu cliente poderá visualizar o pedido realizado via Pix dentro do detalhes do pedido. Basta clicar no botão que irá aparecer dentro da pagina de detalhe do pedido "Clique aqui para ver seu QRCode"

![Order](./__assets__/magento2-detail.png)
## Expiração

A OpenPix ira cuidar da expiração da cobrança Pix. Entretanto, é preciso que seja configurado em sua loja magento a expiração da order pois o mesmo cuidará de todo o processo.

Indicamos que a expiração/cancelamento da order no magento possua um tempo semelhante ao tempo configurado na OpenPix. Exemplo:
- tempo de expiração da cobrança OpenPix: 15 minutos
- coloque os mesmos 15 minutos dentro da sua loja Magento.

:::info
No magento você pode utilizar o lifetime order seguindo a doc abaixo:
- <https://docs.magento.com/user-guide/v2.3/sales/order-pending-payment-lifetime.html>
  :::

## Atualizando o plugin
Indicamos aos clientes OpenPix estar sempre atualizados com a última versão do plugin. Você pode identificar a mesma no step de instalação.

Caso seu plugin esteja desatualizado basta seguir os passos do mesmo step de instalação e atualizar os arquivos do plugin em seu ecommerce.

## Debug

Para debugar o plugin OpenPix temos o arquivo de log e você encontra dentro de `var/log`:

- `openpix.log`: arquivo que concentra logs referentes ao processo de criação de um novo pedido Magento e consequentemente a charge no lado da OpenPix e o processo de atualização da Order quando paga.