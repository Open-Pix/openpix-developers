---
id: sdk-node-usage
title: Como começar
sidebar_position: 1
tags:
  - api
  - node
  - js
  - javascript
  - ts
  - typescript
  - sdk
---

## Instalando

Preferencialmente, recomendamos o NodeJs em sua versão LTS (latest).

Execute o comando abaixo que instala as dependências necessárias com o npm:

```bash
$ npm install @woovi/node-sdk
```

Dessa forma, o SDK será instalado.

## Criando o cliente

O ponto de entrada do SDK é um `createClient` para o serviço.

CommonJs:
```js
const WooviSdk = require("@woovi/node-sdk");

// Para inicializar
const woovi = WooviSdk.createClient({appId: "seu-app-id"});
```

Ts/Module:
```ts 
import { createClient } from "@woovi/node-sdk"

// Para inicializar
const woovi = createClient({appId: "seu-app-id"})
```

O método `createClient` cria um novo cliente a partir de um ID de aplicativo obtido no [site da OpenPix](https://app.openpix.com.br/home/applications/tab/list).

## Chamando a API

Um cliente possui _recursos_ (por exemplo: clientes, cobranças, assinaturas, etc.) que podem ser acessados através de `createClient`.

```js
woovi.customer
```

Cada recurso irá ter um conjunto de métodos que podem serem executados para realizarem operações:

```js
const client = woovi.customer.create({}); //lembre-se de passar o payload de criação de cliente
```

## Operações em recursos

Em cada recurso, há uma convenção nos nomes das operações, na qual, em sua maioria, se resumem em:

- `get`: Obter apenas um recurso. Associado ao verbo HTTP `GET`.
- `list`: Obter vários recursos, de forma paginada. Associado ao verbo HTTP `GET`.
- `create`: Criar um recurso. Associado ao verbo HTTP `POST`.
- `delete`: Remover um recurso. Associado ao verbo HTTP `DELETE`.

### Formato das entradas

No caso de operações de listagem, normalmente se aceita um objeto com um uma chave opcional de paginação.

```js
woovi.refund.list({ skip: 0, limit: 20 })
```

### Formato de saída

A execução de uma operação irá devolver resultados da API na forma de um array direto ou na forma de um paginador, caso este seja aplicado ao metodo usado.

## Tipagem

Em cada operação disponível para um determinado tipo de recurso, existem tipagens disponíveis direto na resposta, informando o formato de entrada e saída da operação com um link para a documentação da API Rest e exemplo de utilização.

Para utilizar, é sugerido utilizar um editor com Intellisense como [Visual Studio Code](https://code.visualstudio.com/).

Também é possível consultar a documentação no site da OpenPix caso haja dúvidas.

## Recursos disponíveis

Os seguintes recursos estão disponíveis no `Client` gerado:

- `woovi.account`: Operações em uma conta.
- `woovi.cashback`: Operações em cashback.
- `woovi.charge`: Operações em uma carga de pagamento.
- `woovi.chargeRefund`: Operações em em extorno de uma carga.
- `woovi.customer`: Operações em clientes.
- `woovi.partner`: Operações em parceiros.
- `woovi.pixQrCode`: Operações em codigos qr relacionados a pix.
- `woovi.refund`: Operações em extorno.
- `woovi.subAccount`: Operações em sub contas.
- `woovi.subscription`: Operações em inscrições.
- `woovi.transactions`: Operações em transações.
- `woovi.transfer`: Operações em transferencias.
- `woovi.webhook`: Operações em webhook.

# Webhook

O método webhook conta com um recurso especial chamado handle, ótimo para ser usado para validar recursos diretamente na sua api. Veja a seguir como ultiliza-lo:

```js
import { createClient } from "@woovi/node-sdk";

const woovi = createClient({ appId: "seu-app-id" });

const handler = woovi.webhook.handler({
  onChargeCompleted: async (payload) => {},
  onChargeExpired: async (payload) => {},
});

export const POST = handler.POST;
```

Post recebe sua requisição.

## Dependências
O projeto não ultiliza de dependencias externas para seu funcionamento.
