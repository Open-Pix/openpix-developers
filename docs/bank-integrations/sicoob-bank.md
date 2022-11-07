---
id: integration-sicoob
title: Cobrar Pix usando conta corrente do Sicoob
sidebar_label: Sicoob
tags:
- bank
---

### Integrando sua conta corrente do Sicoob

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada no Sicoob, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa no Sicoob

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.* 
*Nesta modalidade não há necessidade de se criar uma nova conta corrente, já que é usada a conta corrente existente da sua empresa junto ao Sicoob.*

## 1. Criando uma aplicação de teste

Depois de cadastrado no Portal Developers acesse o menu [Dashboard](https://developers.sicoob.com.br/#!/home) você terá disponibilizado às credenciais de acesso ao ambiente Sandbox. Crie sua aplicação e informe a sua `URL de Callback`

## 2. Obtendo as Crendenciais de acesso do Sicoob

As credenciais de acesso em Sandbox são disponibilizadas no menu [Dashboard](https://developers.sicoob.com.br/#!/home) que estará disponível após efetuar o login no Portal Developers. Existem três tipos de acesso para as APIs do Sicoob: `Associado`, `Associado PJ` e `Yoou`. Entenda qual tipo de autenticação você precisa utilizar no seu caso de uso e prossiga com os testes.

![Sicoob Setup](/img/integrations/dashboard-sicoob.png)

## 3. Cadastrando Credenciais Sicoob da sua conta corrente na plataforma OpenPix

Uma vez recebido as credenciais de produção da sua conta no Sicoob basta cadastrar o Client ID, Client Secret e Developer Api Key

Procure no Menu Administrador por `Ajustes` > `Pix`. Clique em `Conectar com Conta Corrente`.

![ConnectWithCompanyBankAccount](/img/integrations/new-bank-account.png)

![Sicoob Setup](/img/integrations/setup-sicoob.png)

É possível cadastrar mais de um token, ou múltiplas contas 

> *Nota uma vez cadastrado as credencias serão criptogrado e guardadas em ambiente com chave Assimétrica HSM. Se o token for perdido esta operação terá que ser refeita.* 

## 4. Testando o Token

Após cadastrar o Token na plataforma é possível realizar cobranças para seus clientes. 