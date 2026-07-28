---
title: Como encontrar arquivos da nota fiscal
sidebar_label: Arquivos da nota fiscal por api
tags:
  - invoice
  - integration
  - api
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
GET /api/v1/invoice/{id}/pdf
GET /api/v1/invoice/{id}/xml
```

Você encontra a documentação mais detalhada desse endpoint nas [documentações de api](https://developers.openpix.com.br/en/api#tag/invoice/paths/~1api~1v1~1invoice~1%7BinvoiceId%7D~1pdf/get)

Para buscar os arquivos de uma nota fiscal específica você pode apenas buscar utilizando os endpoints listados acima, ambos devem retornar um arquivo correspondente pdf ou xml de acordo com a requisição

### Erros mapeados

- `Invoice not found`
- `Error while getting invoice documents`

### Exemplos em código

<Tabs>
  <TabItem value="shell-curl" label="Shell + cURL" default>

```sh
 curl --request GET \
     --url https://api.openpix.com.br/api/v1/invoice/{id}/pdf \
     --header 'Authorization: {AUTHORIZATION TOKEN}' \
     --header 'content-type: application/json'
```

</TabItem>
<TabItem value="javascript" label="JavaScript + Fetch" default>

```js
fetch('https://api.openpix.com.br/api/v1/invoice/{id}/pdf', {
  method: 'GET',
  headers: {
    Authorization: {AUTHORIZATION TOKEN},
    'Content-Type': 'application/json',
  },
}).then(async (res) => {
    const contentType = res.headers.get('Content-Type');

    if (contentType?.includes('application/pdf')) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      return { pdfUrl: url };
    }

    if (contentType?.includes('application/json')) {
      return res.json();
    }

    return res.text();
  })
```

  </TabItem>
</Tabs>
