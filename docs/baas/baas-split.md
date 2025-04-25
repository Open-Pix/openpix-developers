---
id: baas-split
title: Split para a Conta Principal no modo BaaS
tags:
  - api
  - baas
  - split
---

Este documento irá ajudá-lo a entender como configurar o split para a conta principal no modo BaaS.

### Visão Geral

No modo BaaS (Banking as a Service), você pode ter várias contas bancárias gerenciadas em uma única plataforma. Uma funcionalidade importante é a capacidade de configurar splits automáticos para a conta principal quando ocorrem transações em qualquer uma das contas secundárias.

![api-mestre](__assets__/accounts.png)

### Como Funciona o Split para a Conta Principal

Quando uma transação é realizada em qualquer uma das contas gerenciadas no modo BaaS, é possível configurar para que uma porcentagem ou valor fixo dessa transação seja automaticamente creditado na conta principal.

### Configuração do Split

Para configurar o split para a conta principal, utilize o seguinte formato na criação da cobrança:

```ts
{
  "value": 1000,
  "correlationID": "correlationId",
  "splits": [
    {
      "value": 30,
      "pixKey": "pix-key-main-default-account",
      "splitType": "SPLIT_INTERNAL_TRANSFER"
    }
  ]
}
```

Onde:
- `value`: Valor total da transação (em centavos)
- `correlationID`: Identificador único da transação
- `splits`: Array contendo as configurações de split
  - `value`: Valor a ser transferido para a conta principal (em centavos)
  - `pixKey`: Chave PIX da conta principal que receberá o valor do split
  - `splitType`: Tipo de split, neste caso "SPLIT_INTERNAL_TRANSFER" para transferência interna

### Observações Importantes

1. A conta principal deve estar corretamente configurada no sistema
2. A chave PIX da conta principal deve ser válida e ativa
3. O valor do split não pode exceder o valor total da transação
4. É possível configurar múltiplos splits para diferentes contas em uma única transação

Para mais informações sobre a criação e gerenciamento de APIs no modo BaaS, consulte o documento [API Mestre para modo BaaS](./baas-api-master.md). 