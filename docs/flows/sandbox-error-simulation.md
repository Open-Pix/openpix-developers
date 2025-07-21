---
id: sandbox-error-simulation
title: Simulação de Erros no Sandbox para pagamentos por agência e conta
tags:
  - sandbox
  - testing
  - error
  - simulation
  - pix
---

## Simulação de Erros no Sandbox

No ambiente de sandbox, é possível simular diferentes cenários de erro utilizando números de conta específicos. Quando um pagamento PIX é feito para uma dessas contas especiais, o sistema retorna automaticamente um webhook `MOVEMENT_FAILED` com o erro correspondente, permitindo testar o tratamento de erros na sua aplicação.

## Como Funciona

1. **Crie um pagamento PIX** usando uma das contas de simulação listadas abaixo
2. **Receba o webhook** `MOVEMENT_FAILED` com o erro simulado
3. **Teste o tratamento** de erro na sua aplicação

## Contas de Simulação de Erro

### Erros de Provedor Padrão

| Conta | Código de Erro | Descrição | Mensagem |
|-------|----------------|-----------|----------|
| `1111111` | `ACCOUNT_NOT_FOUND` | Conta não encontrada | Account not found |
| `2222222` | `NOT_ENOUGH_BALANCE` | Saldo insuficiente | Not enough balance |
| `3333333` | `ACCOUNT_TRANSACTION_BLOCKED_BY_MED` | Conta bloqueada | Account blocked |
| `4444444` | `INVALID_PIX_KEY` | Chave PIX inválida | Invalid Pix key |
| `5555555` | `REACH_TRANSFER_LIMIT` | Limite de transferência atingido | Transfer limit reached |
| `6666666` | `SAME_ACCOUNT_TRANSFER` | Transferência mesma conta | Same account transfer not allowed |
| `7777777` | `TRANSACTION_NOT_FOUND` | Transação não encontrada | Transaction not found |
| `8888888` | `ACCOUNT_LIMIT_ERROR` | Limite da conta excedido | Account limit exceeded |
| `9999999` | `PAY_PIX_KEY_ERROR` | Erro genérico de pagamento | Generic payment error |

### Erros PIX SPI (Sistema de Pagamentos Instantâneos)

| Conta | Código PIX | Descrição Detalhada | Motivo |
|-------|------------|---------------------|--------|
| `1010101` | `AC06` | Conta bloqueada | Conta transacional do usuário recebedor encontra-se bloqueada |
| `1010102` | `AM04` | Saldo insuficiente | Saldo insuficiente na conta PI do participante do usuário pagador |
| `1010103` | `AC03` | Pagamento rejeitado pelo PSP do recebedor | Número da agência e/ou conta transacional do usuário recebedor inexistente ou inválido |
| `1010104` | `FF08` | EndToEndId inválido | Identificador da operação mal formatado |
| `1010105` | `DS04` | Transação rejeitada pelo PSP | Ordem rejeitada pelo participante do usuário recebedor |
| `1010106` | `RR04` | Motivo regulatório | Usuário pagador é sancionado por resolução do Conselho de Segurança das Nações Unidas |
| `1010107` | `AM12` | Valor inválido | Divergência entre a somatória dos valores do bloco valorDoDinheiroOuCompra e o campo valor |
| `1010108` | `FRAD` | Origem fraudulenta | Ordem de pagamento rejeitada por fundada suspeita de fraude |
| `1010109` | `DUPL` | Pagamento duplicado | Pagamento efetuado em duplicidade |
| `1010110` | `AG03` | Transação não suportada | Tipo de transação não é suportado/autorizado na conta transacional do usuário recebedor |
| `1010111` | `AC07` | Conta do recebedor encerrada | Número da conta transacional do usuário recebedor encerrada |
| `1010112` | `AM01` | Valor zero não permitido | Ordem de pagamento instantâneo com valor zero |
| `1010113` | `BE01` | Cliente final inconsistente | CPF/CNPJ do usuário recebedor não é consistente com o titular da conta |
| `1010114` | `CH11` | Identificador do recebedor incorreto | CPF/CNPJ do usuário recebedor incorreto |
| `1010115` | `AB03` | Timeout na liquidação | Liquidação da transação interrompida devido a timeout no SPI |

## Exemplo de Webhook de Erro

### Webhook de Resposta - Erro AM12

Este é o webhook que você receberá ao usar a conta `1010107` no exemplo acima:

```json
{
  "event": "OPENPIX:MOVEMENT_FAILED",
  "payment": {
    "value": 1,
    "status": "FAILED",
    "correlationID": "cor2re3l3122034a339513340w34333311io343331ee33n3200233133333333333343112310",
    "metadata": {}
  },
  "transaction": {
    "value": 1,
    "endToEndId": "E54811417202507211653RZX3fRvHb56",
    "time": "2025-07-21T16:53:22.212Z",
    "providerRejectedReason": "AM12 - Valor inválido"
  },
  "error": {
    "code": "PIX_OUT_NOT_AUTHORIZED",
    "description": "Ocorreu um erro. Tente novamente"
  }
}
```

## Como Testar

### 1. Crie um Pagamento PIX

Exemplo usando a conta de simulação `1010107` que simula o erro **AM12 - Valor inválido**:

```bash
curl -X POST https://api.woovi-sandbox.com/api/v1/payment \
  -H "Authorization: YOUR_SANDBOX_APP_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "correlationID": "manual-payment-001",
    "value": 1,
    "psp": {
      "id": "077",
      "name": "Banco INTER"
    },
    "holder": {
      "name": "Ponte Company LTDA",
      "taxID": {
        "type": "BR:CNPJ",
        "taxID": "2**389250**175"
      }
    },
    "account": {
      "account": "1010107",
      "branch": "0001",
      "accountType": "TRAN"
    }
  }'
```

## Estrutura dos Campos de Erro

### Campo `error`
- **`code`**: Código do erro interno da OpenPix
- **`description`**: Descrição legível do erro

### Campo `transaction.providerRejectedReason`
- **Formato**: `CÓDIGO - Descrição detalhada`
- **Exemplo**: `"AM04 - Saldo insuficiente"`
- **Presente apenas**: Em erros PIX SPI

## Cenários de Teste Recomendados

### Teste Básico de Erros
1. **Saldo Insuficiente** (`2222222`) - Teste o fluxo quando o usuário não tem saldo
2. **Conta Não Encontrada** (`1111111`) - Teste quando os dados estão incorretos
3. **Conta Bloqueada** (`3333333`) - Teste quando a conta está bloqueada

### Teste de Erros PIX Específicos
1. **Fraude** (`1010108`) - Teste o tratamento de suspeita de fraude
2. **Duplicação** (`1010109`) - Teste pagamentos duplicados
3. **Timeout** (`1010115`) - Teste problemas de conectividade

### Teste de Integração
1. Configure diferentes contas de erro
2. Teste a recepção dos webhooks
3. Verifique se os logs estão sendo gerados corretamente
4. Valide o tratamento adequado para cada tipo de erro


Para mais informações sobre códigos de erro PIX, consulte a [documentação completa de códigos de erro](./error-codes-payment.md). 