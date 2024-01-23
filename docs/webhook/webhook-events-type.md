---
title: "Tipos de eventos do Webhook"
description: "Tipos de eventos do Webhook"
tags:
  - webhook
---

## Tipos de eventos do Webhook

O Webhook é um recurso que permite que a OpenPix envie notificações para sua aplicação quando um evento ocorre. 
Por exemplo, quando uma cobrança é paga, a OpenPix envia uma notificação para o seu servidor.

Abaixo, você pode ver uma lista de todos os eventos que a OpenPix envia para sua aplicação.

## Eventos de cobrança

Os eventos de cobrança são enviados quando uma cobrança é paga.

### OPENPIX:CHARGE_COMPLETED

Esse evento é enviado quando uma cobrança é paga.

### OPENPIX:CHARGE_EXPIRED

Esse evento é enviado quando uma cobrança expira.

### OPENPIX:CHARGE_CREATED

Esse evento é enviado quando uma cobrança é criada.

### OPENPIX:CHARGE_COMPLETED_NOT_SAME_CUSTOMER_PAYER

Esse evento é enviado quando uma cobrança é paga com um `payer` diferente do `customer`.

## Eventos de transação

Os eventos de transação são enviados quando uma transação é recebida.

### OPENPIX:TRANSACTION_RECEIVED

Esse evento é enviado qunado uma transação é recebida, seja ela de uma cobrança ou de um QR code estático.

### OPENPIX:TRANSACTION_REFUND_RECEIVED

Esse evento é enviado quando é realizado o reembolso de uma transação.

## Eventos de Pagamento Instantâneo

### OPENPIX:MOVEMENT_CONFIRMED

Esse evento é enviado quando um pagamento é confirmado.

### OPENPIX:MOVEMENT_FAILED

Esse evento é enviado quando um pagamento confirmado falha.

#### OPENPIX:MOVEMENT_REMOVED

Esse evento é enviado quando um pagamento é removido.
