---
id: payment-failed-errors
title: Como identificar os erros de um pagamento falho?
tags:
  - payment
  - error
---

## Erros e Descrições

| Código do Erro     | Descrição                                                 | Detalhe  |
|--------------------|-----------------------------------------------------------|----------|
| ALIAS_LIMIT_ERROR  | Limite de consultas chave pix excedido                    |  Toda conta possui um limite de consulta de chaves pix sem ter o pagamento liquidado. |
| PAY_PIX_KEY_ERROR            | Erro ao realizar o pagamento para a chave pix informada   | Erro ao processar o pagamento para a chave pix do pagamento |
| PIX_KEY_INFO_ERROR | Erro ao consultar informações da chave pix do pagamento   | Erro durante a consulta de informações da chave pix |
| PIX_KEY_INFO_NOT_FOUND         | Chave pix informada não encontrada/registrada em um banco | A chave pix não esta registrada em uma instituição bancária |
| REACH_TRANSFER_LIMIT    | Limite de trasferência atingido                           | A conta atingiu o limite diurno/noturno de transaferência pix |
