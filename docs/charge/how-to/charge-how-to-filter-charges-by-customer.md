---
title: Como filtrar cobranças de um cliente em particular
tags:
  - how-to
  - charge
---

Para filtrar cobranças de um cliente, passe um parâmetro na URL chamado `customer` com o [`correlationID`](../../concepts/correlation-id.md) do cliente.

Por exemplo, caso o `correlationID` do cliente seja `abcd`, filtre as cobranças utilizando a URL `https://api.openpix.com.br/api/v1/charge?customer=abcd`.
