---
title: Criar Nota Fiscal de serviço via API
sidebar_label: Emissão de NFSe por API
tags:
  - invoice
  - integration
  - api
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

A emissão exige que a integração de nota fiscal da conta já esteja configurada e ativa. Veja [Configurando a emissão de nota fiscal via API](/docs/baas/baas-invoice-integration) ou [Como ativar a emissão pela plataforma](/docs/integrations/invoice/invoice-how-to-integrate).

:::

## Endpoint

```http
POST /api/v1/invoice
```

Autentique com o header `Authorization: SEU_APPID_AQUI`. Você encontra a documentação detalhada desse endpoint nas [documentações de api](https://developers.openpix.com.br/en/api#tag/invoice/paths/~1api~1v1~1invoice/post).

A API aceita dois formatos de payload, sempre exigindo dados de cobrança **ou** valor, e um cliente (via `customerId` ou objeto `customer`).

### Formato 1 – com valor

```json
{
  "correlationID": "nfse-assinatura-pro-2025-08",
  "description": "Assinatura Pro - Agosto/2025",
  "billingDate": "2025-08-31T23:59:59.000Z",
  "value": 12990,
  "customerId": "cus_123"
}
```

### Formato 2 – com cobrança

```json
{
  "correlationID": "nfse-mensalidade-premium-2025-08",
  "description": "Mensalidade Premium",
  "billingDate": "2025-08-31T23:59:59.000Z",
  "charge": "ch_abc",
  "customer": {
    "taxID": "12345678909",
    "name": "Maria Souza",
    "email": "maria@email.com",
    "phone": "+55 48 99999-0000",
    "address": {
      "country": "BR",
      "zipcode": "88000-000",
      "street": "Rua das Flores",
      "number": "100",
      "state": "SC"
    }
  }
}
```

### Campos do corpo da requisição

| Campo                      | Tipo   | Obrigatório                                     | Descrição                                                                                       |
| -------------------------- | ------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `correlationID`            | string | Sim                                             | Seu identificador único da nota fiscal. Não pode repetir dentro da mesma conta.                 |
| `billingDate`              | string | Sim                                             | Data de competência/vencimento da nota, no formato `YYYY-MM-DD` ou ISO 8601.                    |
| `charge`                   | string | Sim, se `value` não for enviado                 | `correlationID` de uma cobrança existente. O valor e o cliente da nota são obtidos da cobrança. |
| `value`                    | number | Sim, se `charge` não for enviado                | Valor da nota **em centavos** (ex.: `12990` equivale a R$ 129,90).                              |
| `customer`                 | object | Sim, quando emitir por `value` sem `customerId` | Dados do tomador do serviço, detalhados nas linhas seguintes.                                   |
| `customerId`               | string | Não                                             | `correlationID` de um cliente já cadastrado, como alternativa a enviar o objeto `customer`.     |
| `description`              | string | Não                                             | Descrição do serviço que aparece na NFS-e.                                                      |
| `customer.taxID`           | string | Sim (dentro de `customer`)                      | CPF ou CNPJ do tomador, somente números.                                                        |
| `customer.name`            | string | Sim (dentro de `customer`)                      | Nome ou razão social do tomador.                                                                |
| `customer.email`           | string | Sim (dentro de `customer`)                      | E-mail válido do tomador.                                                                       |
| `customer.phone`           | string | Sim (dentro de `customer`)                      | Telefone do tomador.                                                                            |
| `customer.address`         | object | Sim (dentro de `customer`)                      | Endereço do tomador.                                                                            |
| `customer.address.country` | string | Sim (dentro de `address`)                       | País do endereço.                                                                               |
| `customer.address.zipcode` | string | Sim (dentro de `address`)                       | CEP do endereço.                                                                                |
| `customer.address.street`  | string | Sim (dentro de `address`)                       | Logradouro.                                                                                     |
| `customer.address.number`  | string | Sim (dentro de `address`)                       | Número do endereço.                                                                             |
| `customer.address.state`   | string | Sim (dentro de `address`)                       | Sigla do estado brasileiro (ex.: `SP`).                                                         |

:::info

O `correlationID` é único por conta: cada conta tem o seu próprio espaço de identificadores, então o mesmo `correlationID` pode existir em contas diferentes.

:::

## Resposta

### Sucesso (201)

```json
{
  "invoice": {
    "id": "6a5f62d35ab4cd72544b1a48",
    "correlationID": "nfse-mensalidade-premium-2025-08",
    "value": 12990,
    "description": "Mensalidade Premium",
    "date": "2025-08-31T23:59:59.000Z",
    "billingDate": "2025-08-31T23:59:59.000Z",
    "status": "PENDING",
    "statusRaw": null,
    "customer": {
      "correlationID": "cus_123",
      "name": "Maria Souza"
    },
    "charge": {
      "correlationID": "ch_abc",
      "value": 12990,
      "status": "ACTIVE",
      "paidAt": null,
      "date": "2025-08-01T12:00:00.000Z"
    }
  }
}
```

A emissão é **assíncrona**. A resposta confirma que a nota foi registrada, não que ela já foi autorizada pela prefeitura — por isso o `status` volta como `PENDING`.

### Fluxo de status

```
PENDING  →  PROCESSING  →  CONFIRMED
```

O PDF e o XML só ficam disponíveis depois que a nota atinge `CONFIRMED`.

### Erros (400)

- `You need to configure the invoice integration`
- `Customer not found`
- `Customer is required`
- `Charge not found`
- `Customer address is invalid`

### Exemplos em código

<Tabs>
  <TabItem value="shell-curl" label="Shell + cURL" default>

```sh
curl --request POST \
  --url https://api.openpix.com.br/api/v1/invoice \
  --header 'Authorization: {AUTHORIZATION TOKEN}' \
  --header 'content-type: application/json' \
  -d '{
    "correlationID": "nfse-mensalidade-premium-2025-08",
    "description": "Mensalidade Premium",
    "billingDate": "2025-08-31T23:59:59.000Z",
    "charge": "ch_abc",
    "customerId": "cus_123"
  }'
```

</TabItem>
<TabItem value="javascript" label="JavaScript + Fetch">

```js
const response = await fetch('https://api.openpix.com.br/api/v1/invoice', {
  method: 'POST',
  headers: {
    Authorization: '{AUTHORIZATION TOKEN}',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    correlationID: 'nfse-mensalidade-premium-2025-08',
    description: 'Mensalidade Premium',
    billingDate: '2025-08-31T23:59:59.000Z',
    charge: 'ch_abc',
    customerId: 'cus_123',
  }),
});

const data = await response.json();
```

  </TabItem>
</Tabs>

## Consultando as notas emitidas

Use o endpoint de listagem para acompanhar o status da emissão:

```http
GET /api/v1/invoice
```

Parâmetros de query aceitos: `start` e `end` (filtro por data da nota), `skip` e `limit` (paginação).

```sh
curl --request GET \
  --url 'https://api.openpix.com.br/api/v1/invoice?start=2025-08-01&end=2025-08-31&skip=0&limit=100' \
  --header 'Authorization: {AUTHORIZATION TOKEN}'
```

Cada item da lista tem o mesmo formato do objeto `invoice` devolvido na criação.

## Próximos passos

- [Baixar o PDF e o XML da nota](/docs/invoice/how-to-get-invoice-files-by-api)
- [Cancelar uma nota emitida](/docs/invoice/how-to-cancel-issued-invoice-by-api)
