---
id: integration-bradesco-bank
title: Cobrar Pix usando conta corrente do Bradesco
sidebar_label: Bradesco
tags:
- bank
---

### Integrando sua corrente do Bradesco na OpenPix

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada no Bradesco, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa no Bradesco.

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.*
*Nesta modalidade não há necessidade de se criar uma nova conta corrente, já que é usada a conta corrente existente da sua empresa junto ao Bradesco.*

## 1. Certificado A1 ou e-CNPJ
O Bradesco usa o certificado digital da sua empresa para te autenticar. Caso você  ainda não tenha ele você  consegue obter ele nesse link [Obter Certificado Digital](https://www.gov.br/pt-br/servicos/obter-certificacao-digital)

## 2. Obtendo o Client ID e Client Secret da sua conta Bradesco

Para operar usando uma conta corrente existente é necessário solicitar o `Client ID` e o `Client Secret` da sua conta. Para solicitar é necessário entrar em contato junto ao seu gerente de conta. Basta entrar em contato com seu gerente Bradesco. Este processo deverá durar alguns dias.

Uma vez cadastrado você receberá um email do Bradesco com o seu `Client ID` e `Client Secret`

Após seu cadastro no Bradesco developers você terá os seguintes elementos do Bradesco:

- `ClientID`
- `ClientSecret`
- `Certificado A1`
- `Senha Certificado A1`

## 3. Cadastrando o Token da Sua conta corrente na plataforma OpenPix

Após receber o `Client ID`, `Client Secret`, `Certificado A1` e `Senha Certificado A1` você terá que cadastrar eles na platforma OpenPix

![Bradesco Setup](/img/integrations/bradesco-setup.png)

É possível cadastrar mais de um token, ou múltiplas contas

> *Nota uma vez cadastrado o Token será criptogrado e guardando em ambiente com chave Assimétrica HSM. Se o token for perdido esta operação terá que ser refeita.*


## 4. Testando o Token

Após cadastrar o Token na plataforma é possível realizar cobranças para seus clientes. 

