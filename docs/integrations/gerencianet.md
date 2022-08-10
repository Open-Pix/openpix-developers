---
id: integration-gerencianet-bank
title: Cobrar Pix usando conta corrente da Gerencia Net
sidebar_label: Gerencia Net
---

### Integrando conta corrente da sua empresa da Gerencia Net na plataforma OpenPix

## Resumo

Este documento explica como conectar a conta corrente da sua empresa, domiciliada na Gerencia Net, na OpenPix. Após conectar a sua conta na OpenPix é possível gerar QrCodes Pix, Links de Pagamento, usar Plugins para eCommerce, acessar APIs, gerenciar e acompanhar cobranças Pix.

Nesta modalidade os valores Pix pagos pelos seus clientes são depositados diretamente na conta corrente da sua empresa da Gerencia Net.

> *Este é um dos setups mais comuns da plataforma é usado por grandes empresas ou empresas com grandes volumes.* 
*Nesta modalidade é usada a conta corrente existente da sua empresa junto a Gerencia Net.*

## 1. Obtendo o Client ID e Cliente Secret na Gerencia Net

Para obter o `Client ID` e `Client Secret` na Gerencia Net, você precisa criar uma Nova Aplicação [Cadastre Nova Aplicação aqui](https://sistema.gerencianet.com.br/api/minhas-aplicacoes/nova-aplicacao). Permita todos os escopos da API Pix para produção e homologação.

Habilite todos os escopos API PIX:

![Permissoes](/img/integrations/gn-permisions.png)

## 2. Certificado de Produção

Gere um Certificado de produção na Gerencia Net para completar a integração

![Certificado](/img/integrations/gn-certificado.png)

## 3. Cadastro Chave Pix

Primeiro temos que cadastrar a sua chave Pix da sua conta Gerencianet. Normalmente é o CNPJ da sua empresa.

![Pix Key](/img/integrations/pix-key.png)

## 4. Cadastro Credenciais Gerencia Net na plataforma OpenPix

![GN Setup](/img/integrations/gn-setup.png)

É possível cadastrar mais de um conta corrente na OpenPix.

## 5. Pronto!

Agora você já pode cobrar os seus clientes usando a OpenPix.

