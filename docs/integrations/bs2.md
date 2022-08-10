---
id: integration-bs2
title: Cobrar Pix usando conta corrente do BS2
sidebar_label: BS2
---

### Integrando sua conta corrente do BS2

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada no BS2, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa no BS2

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.* 
*Nesta modalidade não há necessidade de se criar uma nova conta corrente, já que é usada a conta corrente existente da sua empresa junto ao BS2.*

## 1. Obtendo o Client ID e Client Secret da sua conta BS2

Para operar usando uma conta corrente existente é necessário criar uma nova API Key no Portal da [BS2 Empresas](https://app.empresas.bs2.com/bs2/). 

Clique em API Banking para gerar uma nova chave de API para ser utilizada na OpenPix

![BS2 Api key ](/img/integrations/bs2-key-api.png)

## 2. Cadastrando o Client ID e Client Secret sua conta corrente na plataforma OpenPix

Uma vez recebido as credenciais de produção no portal BS2 basta cadastrar o Client ID, Client Secret e Developer Api Key 

![BS2 Setup](/img/integrations/bs2-setup.png)

É possível cadastrar mais de um token, ou múltiplas contas 

> *Nota uma vez cadastrado as credencias serão criptogrado e guardadas em ambiente com chave Assimétrica HSM. Se o token for perdido esta operação terá que ser refeita.* 


## 3. Testando o Token

Após cadastrar o Token na plataforma é possível realizar cobranças para seus clientes. 

