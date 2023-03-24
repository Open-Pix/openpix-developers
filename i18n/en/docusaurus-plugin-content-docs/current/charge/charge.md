---
id: charge
sidebar_position: 0
title: Cobrança
tags:
  - qrcode
  - charge
  - payment
---

Uma Cobrança permite que você receba um pagamento via Pix.

A cobrança possui um valor fixo e só pode ser pago uma única vez.

A cobrança é ideal para conciliar os seus pagamentos.

## Casos de Uso

- Aceitar pagamentos em lojas físicas
- Aceitar pagamentos em ecommerce
- Aceitar pagamentos únicos
- Aceitar pagamentos com juros e multas
- Aceitar pagamentos recorrentes (veja também [Assinaturas/Recorrências](./subscription-recurrence))

## Tipos de cobrança

Dentro de cobranças, temos dois tipos: Cobranças e Cobranças com vencimento.

O tipo da cobrança determina como ela vai se comportar ao chegar na data de expiração.

Em nossas APIs, utilizados a propriedade `type` para representar o tipo de uma cobrança.

### Cobrança (cob)

Uma cobrança (cob), ao passar da data de expiração não pode mais ser paga; Nosso sistema vai alterar o estado da cobrança para `EXPIRED`.

Cobranças em nossas APIs são representadas pelo tipo `DYNAMIC`.

Para mais informações a respeito de como você pode criar uma cobrança usando nossa API, veja [Como usar a API para criar uma cobrança (cob)?](./charge/how-to-create-charge-using-api)

### Cobrança com vencimento (cobv)

Uma cobrança com vencimento (cobv), ao passar de sua data de expiração, ainda pode ser paga; Com a diferença de que haverá incidência de multa e juros.

Cobranças com vencimento em nossas APIs são representadas pelo tipo `OVERDUE`.

Para mais informações a repsieot de como você pode criar uma cobrança com vencimento usando nossa API, veja [Como usar a API para criar uma cobrança com vencimento (cobv)?](./charge/how-to-create-cobv-using-api)
