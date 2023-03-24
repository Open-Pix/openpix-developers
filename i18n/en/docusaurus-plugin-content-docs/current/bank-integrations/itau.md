---
id: integration-itau-bank
title: Cobrar Pix usando conta corrente do Itaú
sidebar_label: Itaú
tags:
- bank
---

### Integrando conta corrente da sua empresa do Itaú na plataforma OpenPix

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada no Itaú, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa do Itaú.

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.* 
*Nesta modalidade é usada a conta corrente existente da sua empresa junto ao Itaú.*

## 1. Obtendo o código de acesso ao Itaú Developers

Para operar usando uma conta corrente existente é necessário solicitar um `Token de Acesso` *(também conhecido como código de acesso)* à sua conta. Este código permite acessar as APIs do Itaú relacionadas a sua conta corrente.

### Entre em contato com o gerente da sua conta

Para solicitar é necessário entrar em contato junto ao seu gerente de conta. Ao entrar em contato com seu gerente Itaú solicite o `Token de acesso` ao Itaú Developers. O Retorno deste processo deverá durar alguns dias.

**Importante** solicite o token para o tipo de Autenticação 2 - client credentials e mTLS.

> *Nota: Não confundir Token de Acesso, com sua chave Pix. O `Token de Acesso` permite acessar APIs e a plataforma Itaú Developers*.

### Itaú irá enviar um email com dados de acesso temporários

Uma vez cadastrado você receberá um email do Itaú com um `ClientID` e um `Código de acesso` temporário para cadastrar sua conta no Itaú developers. [Itaú Developers](https://developer.itau.com.br/) Importante esta primeira senha somente é válida por 72 horas, caso o prazo expire uma nova solicitação deve ser realizada junto ao seu gerente de conta.

![Setup Itau Developers](/img/integrations/itau-developers-setup.png)


Após concluir esta etapa você terá os seguintes elementos do Itaú:

- `ClientID` *(Enviado no corpo do email)*
- `AccessTokenTemp` *(Enviado no email dentro de um arquivo Excel anexado ao email)*

## 2. Cadastro da Chave Pix

Primeiro temos que cadastrar a sua chave Pix da sua conta Itaú. Normalmente é o CNPJ da sua empresa.

![Pix Key](/img/integrations/pix-key.png)

## 3. Cadastro do Token temporário enviado pelo Itaú na plataforma OpenPix

Uma vez recebido seu `ClientID` e `AccessTokenTemp` do Itaú basta cadastrar os dados na plataforma. 

> Para sua segurança estes tokens de acesso são temporários, o certificado de acesso será gerado somente pela plataforma, sendo totalmente criptografado. Desta forma esta operação tem que ser realizada em até 72 horas. Caso o praso expire basta solicitar um novo token de acesso temporário.

### Cadastro do ClientID e AccessTokenTemp (temporário)

Para finalizar o cadastro basta cadastrar o seu `ClientID` e `AccessTokenTemp` na plataforma. Basta ir no Menu Administrador em `Ajustes` > `Pix` > `Conectar com Conta Corrente` selecionar o Banco Itaú e informar os dados.

![ConnectWithCompanyBankAccount](/img/integrations/new-bank-account.png)

![Add Token](/img/integrations/itau-bank-setup.png)

É possível cadastrar mais de um token, ou múltiplas contas. A partir desta etapa você pode descartar o email recebido com o token temporário.


## 4. Certificado em Produção

Após cadastrado dos dados temporário a própria Plataforma gera certificado de produção. A plataforma também irá regularmente manter o certificado e tokens de acessos em produção atulizados.

> *Nota: Seguindo elevados padrões de segurança uma vez gerado o certificado de produção será criptogrado, guardando em ambiente seguro com chave assimétrica e hardware HSM e não poderá ser alterado. Caso seja necessário cadastro de outra conta corrente basta repetir o processo*

## 5. Pronto!

Após cadastrar o Token na plataforma é possível realizar cobranças para seus clientes, ou criar aplicações!

