---
id: integration-banco-do-brasil-bank
title: Cobrar Pix usando conta corrente do Banco do Brasil
sidebar_label: Banco do Brasil
tags:
  - api
  - banco do brasil
---

### Integrando sua corrente do Banco Brasil na OpenPix

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada no Banco Brasil, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa no Banco Brasil.

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.* 
*Nesta modalidade não há necessidade de se criar uma nova conta corrente, já que é usada a conta corrente existente da sua empresa junto ao Banco Brasil.*

## 1. Obtendo o Client ID , Client Secret e Developer Api Key da sua conta Banco Brasil

Para operar usando uma conta corrente existente é necessário solicitar o  `Client ID`, `Client Secret` e `Developer Api Key` da sua conta. Para solicitar é necessário entrar em [Portal Developers BB](https://developers.bb.com.br/)

Crie uma nova Aplicação para a OpenPix [Criar App BB](https://app.developers.bb.com.br/#/menu/criar?origem=criar)

![BB OpenPix App](/img/integrations/bb-openpix-app.png)
![BB OpenPix Link Api](/img/integrations/bb-openpix-app-vincular.png)

Consulte as Credencias da sua Aplicação BB [Consultar credenciais](https://app.developers.bb.com.br/#/menu/credenciais?origem=criar)

![BB Credentials](/img/integrations/bb-credentials.png)

## 2. Cadastrando o Client ID, Client Secret e o Developer Api Key da Sua conta corrente na plataforma OpenPix

Uma vez recebido as credenciais de produção no portal Banco Brasil Developers basta cadastrar o Client ID, Client Secret e Developer Api Key 

![BB Setup](/img/integrations/setup-bb-dev.png)

É possível cadastrar mais de um token, ou múltiplas contas 

> *Nota uma vez cadastrado as credencias serão criptogrado e guardadas em ambiente com chave Assimétrica HSM. Se o token for perdido esta operação terá que ser refeita.* 


## 3. Testando o Token

Após cadastrar o Token na plataforma é possível realizar cobranças para seus clientes. 

