---
title: "Validando o webhook de teste"
tags:
  - webhook
  - test
---

## Validando o webhook de teste

Quando é criado um novo webhook, a OpenPix envia uma requisição de teste para o seu endpoint. 
Essa requisição é enviada para garantir que o seu endpoint está funcionando corretamente.

### 1. Recebendo o webhook de teste

Quando a OpenPix envia um webhook de teste, o corpo da requisição é:

```json
{
  "data_criacao":"2024-01-23T20:32:14.429Z",
  "event":"OPENPIX:CHARGE_COMPLETED",
}
```

:::info

O campo `event` é o tipo de evento que está sendo enviado. Ele é escolhido conforme o evento selecionado na plataforma.
Você pode olhar os tipos de eventos disponíveis [aqui](./webhook-events-type.md).

:::

### 2. Respondendo o webhook de teste

Para responder o webhook de teste, basta retornar o status code `200` e o corpo da resposta vazio.

```php
return response()->json([], 200);
```
