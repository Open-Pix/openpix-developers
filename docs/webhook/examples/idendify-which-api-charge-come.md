---
title: Como identificar de qual API veio a cobrança
description: Como identificar no webhook de qual API veio a cobrança
tags:
  - webhook
  - api
  - charge
  - correlationID
---

## Como identificar de qual API veio a cobrança

Quando você cria uma cobrança, você pode informar um padrão de `correlationID` para identificar de qual API veio a cobrança.

Por exemplo, você pode criar uma cobrança com o `correlationID` igual a `api-1` e, quando receber o evento de cobrança paga, você pode verificar o `correlationID` para saber de qual API veio a cobrança.

### Criando a cobrança

```json
{
  "value": 1000,
  "correlationID": "api1-1",
  "comment": "Cobrança da API 1"
}
```

### Recebendo o evento de cobrança paga

```json
{
  "event": "OPENPIX:CHARGE_COMPLETED",
  "charge": {
    "value": 1000,
    "correlationID": "api1-1",
    "comment": "Cobrança da API 1"
  }
}
```

Ao receber o evento de cobrança paga, você pode verificar o `correlationID` para saber de qual API veio a cobrança.

```js
if(event.charge.correlationID === 'api1-1') {
  // Cobrança da API 1
} else if(event.charge.correlationID === 'api2-2') {
  // Cobrança da API 2
} else {
  // Cobrança de uma API desconhecida
}
```
