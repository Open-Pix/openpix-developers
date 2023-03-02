---
id: payment-state-machine
sidebar_position: 2
title: Máquina de Estados do Pagamento
tags:
  - payment
  - api
---

## Como funciona a Máquina de Estados do Pagamento

Um Pagamento possui os seguinte estados.

### Solicitado

O estado Solicitado significa que um usuário solicitou que um pagamento seja feito a uma chave Pix, e esta aguardando ser aprovado.

Esse estado pode seguir para o seguinte estados:

- Processando
- Falhou

### Processando

O estado Processando significa que o pagamento foi aprovado, a transação criada e agora esta sendo processada.

Esse estado pode seguir para o seguinte estados:

- Confirmado
- Falhou

### Confirmado

O estado Confirmado significa que a transação do pagamento foi confirmada, e a chave pix informada recebeu os fundos.

Esse é um estado final e após atingir esse estado, não poderá sofrer mais nenhuma alteração.

### Falhou

O estado Falhou significa que houve algum erro criando ou durante a transação do pagamento.

Esse é um estado final e após atingir esse estado, não poderá sofrer mais nenhuma alteração.
