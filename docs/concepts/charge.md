---
id: charge
title: Cobrança
tags:
  - api
  - conceito
  - idempotencia
  - cobrança
---

## Cobrança

Uma Cobrança representa uma soliticação de pagamento.

Uma Cobrança precisa ter um valor.

Uma Cobrança permite que ao receber um pagamento, ele seja automaticamente reconciliado.

Uma Cobrança aceita somente 1 pagamento.

Uma Cobrança possui um prazo de vencimento.

Cada cobrança paga gera uma nova transação.

Casos de uso: criar uma cobrança para um pedido, criar uma cobrança para um serviço, criar uma cobrança para um produto.