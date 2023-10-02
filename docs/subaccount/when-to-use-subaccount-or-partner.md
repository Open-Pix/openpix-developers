---
id: sub-account-or-partner
title: Quando usar o sistema de Parceiro e Subcontas
tags:
  - api
  - conceito
  - sub-conta
  - casos
  - partner
---

## Quando usar o sistema de Parceiro

O sistema de parceiros permite a empresas registrar outras empresas como afiliados e gerenciar alguns aspectos do seu funcionamento através das apis e plataforma openpix.
Cada afiliado passa pelo processo de abertura de contas na plataforma.
Cada afiliado possúi conta virtual na plataforma registrada no cnpj de sua empresa independente do parceiro.
Cada afiliado recebe valores de cobranças diretamente via pix em sua conta virtual registrada na plataforma.
O parceiro não recebe diretamente valores em sua conta, sómente taxa do parceiro perante o uso da feature de split partner.

Esta feature é indicada para quem quer ter uma relação mais definida entre parceiro e afiliados e pretende envolver parceiros no cadastro completo de uma conta virtual
requisitando assim dados de registro de empresa e sócios como qualquer outra abertura de contas, não recebendo diretamente em suas contas valores relativos a pagamento feitos por afiliados, somente valores relativos a taxa de parceiros.

## Quando usar o sistema de subcontas

O sistema de subcontas permite registrar transações de split em uma subconta a partir de cobranças feitas para uma conta principal. Subcontas não são contas bancárias reais e somente transacionam valores virtuais permitindo assim a eliminação de etapas burocráticas na abertura da mesma.
Cada subconta só precisa de uma chave pix única para ser aberta.
Uma empresa pode ter qualquer número de subcontas.
Uma empresa pode a qualquer momento realizar um saque para a chave pix registrada na subconta, tanto via integração de API ou diretamente pela plataforma.

O uso da subconta permite a criação de fluxos menos burocráticos e mais livres dentro da plataforma, os valores sacados só serão debitados da conta principal no momento do saque garantindo total controle ao administrador da empresa dona destas subcontas.
