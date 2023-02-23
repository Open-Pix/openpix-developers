---
id: payment-how-to-use-api-to-create
sidebar_position: 1
title: Como usar a API de Criar Pagamentos?
tags:
  - payment
  - concept
---

## Criando Pagamentos com a API

Nós disponibilizamos o _endpoint_ `/api/v1/payment` para que você possa criar
um novo _payment_ para a respectiva empresa afiliada.

Você pode acessar [aqui](<https://developers.openpix.com.br/api#tag/payment-(request-access)/paths/~1api~1v1~1payment/post>)
a documentação referente a esse _endpoint_.

Como parte do `body` da requisição, esperamos o envio dos seguintes itens: `value`, `destinationAlias`, `correlationID`, e um valor opcional `comment`:

- **`value`**: O valor em centavos do pagamento a ser criado.
- **`destinationAlias`**: A chave pix destinatária do pagamento criado.
- **`correlationID`**: Um identificador único para o pagamento.
- **`comment`**: Comentário que será atrelado a seu pagamento quando a transferencia for realizada.

Num exemplo prático, o body da sua requisição seguiria semelhante a este exemplo:

```json
{
  "value": 100,
  "destinationAlias": "38763885700",
  "correlationID": "31ee9576-99ec-412a-9ac7-e142a4a6acf0",
  "comment": "um comentário"
}
```

Após efetuar a requisição, se tudo ocorreu bem, o _status code_ da requisição será `2xx` e no `body` da resposta,
você estará vendo as informações sobre o `payment` recém criado.

Num exemplo, essa será a nossa resposta:

```json
{
  "payment": {
    "value": 100,
    "destinationAlias": "38763885700",
    "correlationID": "31ee9576-99ec-412a-9ac7-e142a4a6acf0",
    "comment": "um comentário",
    "status": "CREATED"
  }
}
```
