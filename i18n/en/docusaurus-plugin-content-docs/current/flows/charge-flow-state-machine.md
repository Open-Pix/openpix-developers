---
id: charge-flow-state-machine
title: Máquina de estado de uma Cobrança
tags:
- flow
- state-machine
---

## Diagrama de estados da cobrança

- Veja abaixo o diagrama de estados de uma cobrança:

![Charge Diagram](/img/flows/charge-flow.png)

## Status da cobrança

- `ACTIVE`: A cobrança está ativa e ainda não foi paga.
- `COMPLETED`: A cobrança foi paga.
- `EXPIRED`: O tempo de pagamento da cobrança expirou.