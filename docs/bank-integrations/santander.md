---
id: integration-santander
title: Cobrar Pix usando conta corrente do Santander
sidebar_label: Santander
---

### Integrando sua conta corrente do Santander

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada no Santander, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa no Santander

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.* 
*Nesta modalidade não há necessidade de se criar uma nova conta corrente, já que é usada a conta corrente existente da sua empresa junto ao Santander.*

## 1. Obtendo as Crendenciais de acesso do Santander

Você consegue utilizar o ambiente de desenvolvimento (sandbox) do Santander. Para isso, basta realizar o [login](https://developer.santander.com.br/user/login), criar sua aplicação e acessar suas credenciais. Com elas, você poderá baixar a collection do postman ou integrar diretamente do seu sistema para explorar as APIs. Estas informações podem ser encontradas na [documentação técnica](https://developer.santander.com.br/api/documentacao/pix#/Cob/put_cob__txid_).

## 2. Cadastrando Credenciais Santander da sua conta corrente na plataforma OpenPix

Uma vez recebido as credenciais de produção da sua conta no Santander basta cadastrar o Client ID, Client Secret e Developer Api Key

Procure no Menu Administrador por `Ajustes` > `Pix`. Clique em `Conectar com Conta Corrente`.

![ConnectWithCompanyBankAccount](/img/integrations/new-bank-account.png)

![Santander Setup](/img/integrations/santander-setup.png)

É possível cadastrar mais de um token, ou múltiplas contas 

> *Nota uma vez cadastrado as credencias serão criptogrado e guardadas em ambiente com chave Assimétrica HSM. Se o token for perdido esta operação terá que ser refeita.* 

## 4. Testando o Token

Após cadastrar o Token na plataforma é possível realizar cobranças para seus clientes. 