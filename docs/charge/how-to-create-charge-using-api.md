---
id: how-to-create-charge-using-api
title: Como usar a API para criar uma Cobrança?
tags:
  - concept
  - api
---

## Como criar uma Cobrança usando a API

Para criar uma cobrança Pix, você utiliza o _endpoint_ `/api/v1/charge` da API.

Você pode acessar [aqui](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/post)
a documentação referente a esse _endpoint_.

Os campos obrigatórios para criar uma cobrança Pix são os sequintes: 

- **`value`**: O valor em centavos da cobrança Pix a ser criado.
- **`correlationID`**: Um identificador único para a cobrança Pix. [CorrelationID](../concepts/correlation-id)

```bash
curl 'https://api.openpix.com.br/api/v1/charge' -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "user-agent: node-fetch" --data-binary '{"correlationID":"c782e0ac-833d-4a89-9e73-9b60b2b41d3a","value":1500}
```