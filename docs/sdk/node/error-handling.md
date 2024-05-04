---
id: sdk-node-error-handling
title: Manipulação de erros
sidebar_position: 3
tags:
  - api
  - node
  - js
  - javascript
  - ts
  - typescript
  - sdk
---

Ao utilizar o SDK de Node, espera-se que a integração seja robusta. Sendo assim, é fundamental lidar com possíveis imprevistos da API ou do transporte de dados na forma de [_exceptions_](https://nodejs.org/api/errors.html).

Quando a API retorna um erro, uma exception é lançada, onde é apresentado os erros da api.
A Sdk foi construida de forma que, caso um erro seja obtido, a requisição é tentada novamente outras 2 vezes afim de minimizar erros falsos antes da exceção ser lançada.

É considerado erro todas as respostas de api em que status seja de uma faixa diferente de 200.

Veja como você pode capturar todos os possíveis erros do SDK:

```js
import { createClient } from "./dist";

const woovi = createClient({ appId: "seu-app-id" });

try {
    woovi.transfer.create({fromPixKey: "pix-1", toPixKey: "pix-2", value: 100});
} catch (e) {
    console.log(e); //espera-se um objeto semelhante a: { error: "string" }
}
```