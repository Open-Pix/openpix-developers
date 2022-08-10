---
id: integration-banco-do-brasil-bank
title: Cobrar Pix usando conta corrente do Banco do Brasil
sidebar_label: Banco do Brasil
---

### Integrando sua corrente do Banco Brasil na OpenPix

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada no Banco Brasil, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa no Banco Brasil.

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.* 
*Nesta modalidade não há necessidade de se criar uma nova conta corrente, já que é usada a conta corrente existente da sua empresa junto ao Banco Brasil.*

## 1. Obtendo um Token de acesso a sua conta Banco Brasil

Para operar usando uma conta corrente existente é necessário solicitar um `Token de acesso` a sua conta. Para solicitar é necessário entrar em contato junto ao seu gerente de conta. Basta entrar em contato com seu gerente Banco Brasil e solicitar seu token de acesso ao `Banco Brasil Developers`. Este processo deverá durar alguns dias.

*Nota: Não confundir Token de Acesso, com sua chave Pix. O `Token de Acesso` permite que a plataforma gere QrCodes*.

Uma vez cadastrado você receberá um email do Banco Brasil com um usuário e chave de acesso temporária para cadastrar sua conta no Banco Brasil developers.

Após seu cadastro no Banco Brasil developers você terá os seguintes elementos do Banco Brasil:

- `ClientID`
- `ClientSecret`

## 2. Cadastrando o Token da Sua conta corrente na plataforma OpenPix

Uma vez recebido seu `Token de acesso` no portal Banco Brasil Developers basta cadastrar o Token na plataforma 

![Add Token](/img/integrations/add-pix-token.png)

É possível cadastrar mais de um token, ou múltiplas contas 

> *Nota uma vez cadastrado o Token será criptogrado e guardando em ambiente com chave Assimétrica HSM. Se o token for perdido esta operação terá que ser refeita.* 


## 3. Testando o Token

Após cadastrar o Token na plataforma é possível realizar cobranças para seus clientes. 

