---
id: woocommerce-enable-giftback
title: Habilitar Giftback no WooCommerce 
---

## Resumo

Este documento detalha como você pode habilitar o Giftback dentro da OpenPix para o seu WooCommerce.

Para isso é necessário que você já tenho instalado o plugin WooCommerce e que você tenha configurado o seu WooCommerce para utilizar a OpenPix.
Caso ainda não tenha configurado o WooCommerce com a OpenPix corretamente, leia o [Guia de Instalação](../../ecommerce/woocommerce-plugin.md) e retorne para este documento.

Caso ainda não tenha o giftback ativado, veja como ativar [Habilitar Giftback](../giftback-enable)

### 1. Habilite o usuário enviar seu CPF durante o checkout

Para que o Giftback funcione corretamente é necessário apenas que o CPF do cliente seja enviado ao comprar corretamente. Para isso é necessário que você instale o plugin [Brazilian Market on WooCommerce](https://wordpress.org/plugins/woocommerce-extra-checkout-fields-for-brazil/) e que o campo `CPF` seja configurado como obrigatório, pois o gifbtack funcionará somente para pessoas físicas.

Para instalar o plugin e configurar basta seguir os passos abaixo:

1. Acessar o menu de `Plugins` clicar em `Adicionar Novo`, buscar por `Brazilian Market on WooCommerce`, clicar em `Instalar Agora` e logo após em `Ativar`
![Install Brazilian Market](/img/giftback/ecommerce/woocommerce/install-brazilian-cpf-plugin.png)

2. Ao fazer isso você será redirecionaod para a página de configuração do plugin.
3. Nela clique em `Configurações`
![Configure Brazilian Market](/img/giftback/ecommerce/woocommerce/configure-brazilian-cpf-plugin.png)
4. Após clicar em configurações deixe todas iguais ao exemplo abaixo
![Configurations Brazilian Market](/img/giftback/ecommerce/woocommerce/configurations-brazilian-cpf-plugin.png)
5. Após isso clique em salvar, e seu WooCommerce estará pronto para utilizar o giftback

6. Visão do giftback em uma cobrança no WooCommerce: 

- Após a habilitação do giftback no WooCommerce juntamente a plataforma as cobranças já podem gerar a porcentagem determinada de giftback na mesma !

![Charge with giftback](/img/giftback/ecommerce/woocommerce/charge-giftback.png)