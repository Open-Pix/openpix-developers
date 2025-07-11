---
id: error-codes-payment
title: Códigos de Erro de Pagamento
tags:
  - api
  - error
  - payment
---

## Códigos de Erro de Pagamento

Quando um pagamento falha, o webhook `MOVEMENT_FAILED` retorna informações sobre o erro através dos campos `providerRejectedReason` e `providerErrorCode`. Abaixo estão os possíveis códigos de erro que podem ser retornados:

## Tabela de Códigos de Erro

| Código | Descrição |
|--------|-----------|
| AB03 | Liquidação abortada por tempo limite |
| AM18 | Número inválido de transações |
| BE01 | Inconsistência com o cliente final |
| BE05 | Parte iniciadora não reconhecida |
| BE15 | Código de identificação inválido |
| BE17 | Código de identificação do credor inválido |
| CH11 | Identificador do credor incorreto |
| CH16 | Conteúdo do elemento formalmente incorreto |
| CN01 | Autorização cancelada |
| DS04 | Ordem rejeitada |
| DS0G | Pagamento não permitido |
| DS27 | Usuário ainda não ativado |
| DT02 | Data de criação inválida |
| DT05 | Data de corte inválida |
| DUPL | Pagamento duplicado |
| ED05 | Falha na liquidação |
| FF07 | Finalidade inválida |
| FF08 | EndToEndId inválido |
| FRAD | Origem fraudulenta |
| MD01 | Mandato inexistente |
| RC09 | Identificador do membro do sistema de compensação do devedor inválido |
| RC10 | Identificador do membro do sistema de compensação do credor inválido |
| RR04 | Motivo regulatório |
| SL02 | Serviço específico oferecido pelo agente do credor |
| UPAY | Pagamento indevido |

## Exemplo de Webhook com Código de Erro

```json
{
  "event": "OPENPIX:MOVEMENT_FAILED",
  "payment": {
    "value": 1,
    "status": "FAILED",
    "correlationID": "manual-payment-0009"
  },
  "transaction": {
    "value": 1,
    "endToEndId": "E54811417202507081527dYr4Cp2gfAp",
    "time": "2025-07-08T15:27:19.687Z",
    "providerRejectedReason": "BE17 - Código de identificação do credor inválido",
    "providerErrorCode": "BE17"
  }
}
```

## Observações
- Estes códigos seguem o padrão estabelecido pelo Banco Central do Brasil para o sistema PIX
- Os códigos ajudam a identificar a causa específica da falha no pagamento
- O campo `providerErrorCode` contém apenas o código (ex: "BE17")
- O campo `providerRejectedReason` contém o código e a descrição (ex: "BE17 - Código de identificação do credor inválido")
