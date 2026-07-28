---
title: Como cancelar uma nota fiscal emitida via api
sidebar_label: Cancelando uma nota fical via api
tags:
  - invoice
  - integration
  - api
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/v1/invoice/{invoiceId}/cancel
```

Você encontra a documentação mais detalhada desse endpoint nas [documentações de api](https://developers.openpix.com.br/en/api#tag/invoice/paths/~1api~1v1~1invoice~1%7BinvoiceId%7D~1cancel/post)

Para cancelar uma nota fical é necessário o id de uma nota fical já emidida posteriormente, após a requisição de cancelamento, os documentos virão marcados como nota fiscal cancelada.

### Erros mapeados

- `Invoice not found`
- `Integration not found`
- `Cannot cancel a not confirmed invoice`

### Exemplos em código

<Tabs>
  <TabItem value="shell-curl" label="Shell + cURL" default>

```sh
 curl --request POST \
     --url https://api.openpix.com.br/api/v1/invoice/{id}/cancel \
     --header 'Authorization: {AUTHORIZATION TOKEN}' \
     --header 'content-type: application/json'
```

</TabItem>
<TabItem value="javascript" label="JavaScript + Fetch" default>

```js
fetch('https://api.openpix.com.br/api/v1/invoice/{id}/cancel', {
  method: 'POST',
  headers: {
    Authorization: {AUTHORIZATION TOKEN},
    'Content-Type': 'application/json',
  },
}).then(async (res) => res.json())
```

  </TabItem>
</Tabs>
