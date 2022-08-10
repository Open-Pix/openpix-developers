---
id: integration-original-bank
title: Cobrar Pix usando conta corrente do Banco Original
sidebar_label: Banco Original
---

### Integrando sua conta corrente do Banco Original

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada no Banco Original, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa no Banco Original

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.* 
*Nesta modalidade não há necessidade de se criar uma nova conta corrente, já que é usada a conta corrente existente da sua empresa junto ao Banco Original.*

## 1. Obtendo o Client ID e Client Secret da sua conta Banco Original

Para operar usando uma conta corrente existente é necessário criar uma nova API Key em sua conta.

Veja em [Documentação](https://www.originalhub.com.br/documentacaohttps://www.originalhub.com.br/documentacao)
do Banco Original

## 2. Cadastrando Credenciais do Banco Original da sua conta corrente na plataforma OpenPix

Uma vez recebido as credenciais de produção no portal do Banco Original basta cadastrá-las 

É possível cadastrar mais de um token, ou múltiplas contas 

> *Nota uma vez cadastrado as credencias serão criptogrado e guardadas em ambiente com chave Assimétrica HSM. Se o token for perdido esta operação terá que ser refeita.* 


## 3. Testando o Token

Após cadastrar o Token na plataforma é possível realizar cobranças para seus clientes. 

