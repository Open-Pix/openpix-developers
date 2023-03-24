---
id: integration-flagship
title: Cobrar Pix usando conta corrente do Flagship
sidebar_label: Flagship
tags:
- bank
---

### Integrando sua corrente do Flagship

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada no Flagship, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa no Flagship

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.* 
*Nesta modalidade não há necessidade de se criar uma nova conta corrente, já que é usada a conta corrente existente da sua empresa junto ao Flagship.*

## 1. Obtendo o Account ID da sua conta Flagship

Entre em contato com o suporte da OpenPix para abrir sua conta Flagship


## 2. Cadastrando o Account ID da sua conta corrente na plataforma OpenPix

Uma vez recebido as credenciais de produção da sua conta no Flagship basta cadastrar o Account ID e Developer Api Key

Procure no Menu Administrador por `Ajustes` > `Pix`. Clique em `Conectar com Conta Corrente`.

![ConnectWithCompanyBankAccount](/img/integrations/new-bank-account.png)

![Flagship Setup](/img/integrations/flagship-setup.png)

É possível cadastrar mais de um token, ou múltiplas contas 

> *Nota uma vez cadastrado as credencias serão criptogrado e guardadas em ambiente com chave Assimétrica HSM. Se o token for perdido esta operação terá que ser refeita.* 

## 3. Testando o Token

Após cadastrar o Token na plataforma é possível realizar cobranças para seus clientes. 