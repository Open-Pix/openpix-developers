---
id: error-codes-payment
title: Códigos de Erro de Pagamento PIX
tags:
  - api
  - error
  - payment
  - pix
---

## Códigos de Erro de Pagamento PIX

Quando um pagamento PIX falha, o webhook `MOVEMENT_FAILED` retorna informações sobre o erro através dos campos `providerRejectedReason` e `providerErrorCode`. Abaixo estão todos os possíveis códigos de erro que podem ser retornados, com suas descrições detalhadas e informações sobre qual participante gera cada erro.

## Tabela Completa de Códigos de Erro

| Código | Nome do Erro | Descrição Detalhada | Participante que Gera o Erro |
|--------|--------------|---------------------|------------------------------|
| AB03 | Liquidação Abortada por Timeout | Liquidação da transação interrompida devido a timeout no SPI | Sistema de Pagamentos Instantâneos (SPI) |
| AB09 | Erro no Agente Credor | Transação interrompida devido a erro no participante do usuário recebedor | Banco recebedor (Woovi) |
| AB11 | Timeout do Agente Devedor | Timeout do participante emissor da ordem de pagamento | Sistema de Pagamentos Instantâneos (SPI) |
| AC03 | Número da Conta do Credor Inválido | Número da agência e/ou conta transacional do usuário recebedor inexistente ou inválido | Banco recebedor (Woovi) |
| AC06 | Conta Bloqueada | Conta transacional do usuário recebedor encontra-se bloqueada | Banco recebedor (Woovi) |
| AC07 | Conta do Credor Encerrada | Número da conta transacional do usuário recebedor encerrada | Banco recebedor (Woovi) |
| AC14 | Tipo de Conta do Credor Inválido | Tipo incorreto para a conta transacional do usuário recebedor | Banco recebedor (Woovi) |
| AG03 | Transação Não Suportada | Tipo de transação não é suportado/autorizado na conta transacional do usuário recebedor. Exemplo: transferência para conta salário | Banco recebedor (Woovi) |
| AG12 | Transferência Interna Não Permitida | Não é permitida ordem de pagamento/devolução no SPI cujos recursos sejam transferidos de uma conta transacional para outra em uma mesma instituição participante ou entre participantes que utilizem o serviço de liquidação de um mesmo participante liquidante no SPI (booktransfer) | Sistema de Pagamentos Instantâneos (SPI) |
| AG13 | Devolução de Retorno Proibida | Não é permitido devolver a devolução de um pagamento instantâneo | Sistema de Pagamentos Instantâneos (SPI) |
| AGNT | Agente Incorreto | Participante direto não é liquidante do participante do usuário pagador | Sistema de Pagamentos Instantâneos (SPI) |
| AM01 | Valor Zero | Ordem de pagamento instantâneo com valor zero | Sistema de Pagamentos Instantâneos (SPI) |
| AM02 | Valor Não Permitido | Ordem de pagamento/devolução em valor que faz superar o limite permitido para o tipo de conta transacional creditada | Banco recebedor (Woovi) |
| AM04 | Fundos Insuficientes | Saldo insuficiente na conta PI do participante do usuário pagador | Sistema de Pagamentos Instantâneos (SPI) |
| AM09 | Valor Incorreto | Devolução de pagamento em valor que faz superar o valor da ordem de pagamento instantâneo correspondente | Banco recebedor (Woovi) |
| AM12 | Valor Inválido | Divergência entre a somatória dos valores do bloco valorDoDinheiroOuCompra e o campo valor | Sistema de Pagamentos Instantâneos (SPI) |
| AM18 | Número de Transações Inválido | Quantidade de transações inválida | Sistema de Pagamentos Instantâneos (SPI) |
| BE01 | Inconsistência com Cliente Final | CPF/CNPJ do usuário recebedor não é consistente com o titular da conta transacional especificada | Banco recebedor (Woovi) |
| BE05 | Parte Iniciadora Não Reconhecida | CNPJ do iniciador de pagamento não se encontra cadastrado no arranjo Pix | Sistema de Pagamentos Instantâneos (SPI) |
| BE15 | Código de Identificação Inválido | Preenchimento incorreto do campo idConciliacaoRecebedor | Banco recebedor (Woovi) |
| BE17 | Código de Identificação do Credor Inválido | QR Code rejeitado pelo participante do usuário recebedor | Banco recebedor (Woovi) |
| CH11 | Identificador do Credor Incorreto | CPF/CNPJ do usuário recebedor incorreto | Banco recebedor (Woovi) |
| CH16 | Conteúdo Formalmente Incorreto | Preenchimento do conteúdo da mensagem incorreto ou incompatível com as regras de negócio | Sistema de Pagamentos Instantâneos (SPI) |
| CN01 | Autorização Cancelada | Agendamento de pagamento recorrente cancelado com statusDoCancelamento igual a "ACCR (confirmado)" | Banco recebedor (Woovi) |
| DS04 | Ordem Rejeitada | Ordem rejeitada pelo participante do usuário recebedor | Banco recebedor (Woovi) |
| DS0G | Pagamento Não Permitido | Participante que assinou a mensagem não é autorizado a realizar a operação na conta PI debitada. No caso em que o participante que assinou a mensagem não é o titular da conta PI debitada nem é o liquidante no SPI do participante do usuário pagador | Sistema de Pagamentos Instantâneos (SPI) |
| DS27 | Usuário Ainda Não Ativado | Participante não se encontra cadastrado ou ainda não iniciou a operação no SPI | Sistema de Pagamentos Instantâneos (SPI) |
| DT02 | Data de Criação Inválida | Data e Hora do envio da mensagem inválida | Sistema de Pagamentos Instantâneos (SPI) |
| DT05 | Data de Corte Inválida | Transação extrapola o prazo máximo para devolução de pagamento instantâneo regulamentado pelo arranjo Pix | Sistema de Pagamentos Instantâneos (SPI) |
| DUPL | Pagamento Duplicado | Pagamento efetuado em duplicidade nos casos em que as ordens de pagamento possuem IdConciliacaoDoRecebedor iguais para um mesmo usuário recebedor. É permitido que duas cobranças tenham o mesmo IdConciliacaoDoRecebedor desde que correspondam a usuários recebedores diferentes | Banco recebedor (Woovi) |
| ED05 | Falha na Liquidação | Erro no processamento do pagamento instantâneo (erro genérico) | Sistema de Pagamentos Instantâneos (SPI) / Banco recebedor (Woovi) |
| FF07 | Finalidade Inválida | Inconsistência entre a finalidade da transação e o preenchimento do bloco elementos Structured `<Strd>` | Sistema de Pagamentos Instantâneos (SPI) |
| FF08 | EndToEndId Inválido | Identificador da operação mal formatado | Sistema de Pagamentos Instantâneos (SPI) |
| FRAD | Origem Fraudulenta | Ordem de pagamento rejeitada por fundada suspeita de fraude | Banco recebedor (Woovi) |
| MD01 | Sem Mandato | ISPB do participante facilitador de serviço Pix Saque ou Pix Troco inexistente | Sistema de Pagamentos Instantâneos (SPI) |
| RC09 | Identificador do Membro Devedor Inválido | ISPB do participante do usuário pagador inválido ou inexistente | Sistema de Pagamentos Instantâneos (SPI) |
| RC10 | Identificador do Membro Credor Inválido | ISPB do participante do usuário recebedor inválido ou inexistente | Sistema de Pagamentos Instantâneos (SPI) |
| RR04 | Motivo Regulatório | Ordem de pagamento em que o usuário pagador é sancionado por resolução do Conselho de Segurança das Nações Unidas (CSNU). Nos casos em que o usuário recebedor for o sancionado, a ordem de pagamento não deve ser rejeitada | Banco recebedor (Woovi) |
| SL02 | Serviço Específico do Agente Credor | A transação referenciada na mensagem de devolução (pacs.004) original não está relacionada aos serviços de Pix Saque ou Pix Troco | Banco recebedor (Woovi) |
| UPAY | Pagamento Indevido | Pagamento é indevido por ausência de recorrência válida/ativa | Banco recebedor (Woovi) |
## Categorias de Erro

### Erros de Liquidação (AB)
- **AB03**: Timeout durante a liquidação
- **AB09**: Erro no participante recebedor  
- **AB11**: Timeout no participante pagador

### Erros de Conta (AC)
- **AC03**: Conta inexistente ou inválida
- **AC06**: Conta bloqueada
- **AC07**: Conta encerrada
- **AC14**: Tipo de conta inválido

### Erros de Autorização (AG)
- **AG03**: Transação não suportada/autorizada
- **AG12**: Transferência não permitida (booktransfer)
- **AG13**: Devolução de devolução não permitida
- **AGNT**: Agente incorreto no fluxo

### Erros de Valor (AM)
- **AM01**: Valor zero
- **AM02**: Valor acima do limite
- **AM04**: Saldo insuficiente
- **AM09**: Valor incorreto
- **AM12**: Valor inválido
- **AM18**: Número de transações inválido

### Erros de Identificação (BE/CH)
- **BE01**: CPF/CNPJ inconsistente
- **BE05**: Iniciador não reconhecido
- **BE15**: Código de identificação inválido
- **BE17**: QR Code rejeitado
- **CH11**: CPF/CNPJ incorreto
- **CH16**: Conteúdo incorreto

### Erros de Processamento (CN/DS/DT)
- **CN01**: Autorização cancelada
- **DS04**: Ordem rejeitada
- **DS0G**: Operação não autorizada
- **DS27**: Usuário não ativado
- **DT02**: Data de criação inválida
- **DT05**: Prazo expirado

### Erros Específicos
- **DUPL**: Pagamento duplicado
- **ED05**: Falha na liquidação (genérico)
- **FF07**: Finalidade inválida
- **FF08**: EndToEndId inválido
- **FRAD**: Suspeita de fraude
- **MD01**: Mandato inexistente
- **RC09/RC10**: ISPB inválido
- **RR04**: Motivo regulatório
- **SL02**: Serviço específico
- **UPAY**: Pagamento indevido

## Exemplo de Webhook com Código de Erro Detalhado

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
    "providerRejectedReason": "BE17 - QR Code rejeitado pelo banco recebedor",
    "providerErrorCode": "BE17"
  }
}
```

## Observações Importantes

### Participantes que Geram Erros
- **Sistema de Pagamentos Instantâneos (SPI)**: Sistema central do Banco Central
- **Banco recebedor (Woovi)**: Instituição financeira que recebe o pagamento
- **Participante do usuário pagador**: Instituição financeira que envia o pagamento

### Campos de Retorno
- **`providerErrorCode`**: Contém apenas o código (ex: "BE17")
- **`providerRejectedReason`**: Contém o código e a descrição detalhada (ex: "BE17 - QR Code rejeitado pelo banco recebedor")


