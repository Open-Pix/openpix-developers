---
id: correlation-id
title: Correlation ID
tags:
  - api
  - conceito
  - idempotencia
---

## Correlation ID

Correlation ID é o ID do seu sistema.

Ele garante que uma requisição não seja processada mais de uma vez.

Ao criar uma cobrança Pix você deve enviar um ID único para cada requisição.

Garantindo que você não cria 2 cobranças para o seu mesmo pedido.

Mesmo que uma cobrança esteja removida, não é possível utilizar o seu correlationID em uma nova cobrança.