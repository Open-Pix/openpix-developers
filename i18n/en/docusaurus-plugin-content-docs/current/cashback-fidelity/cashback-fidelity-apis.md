---
id: cashback-fidelity-apis
title: APIs de Cashback na próxima compra
tags:
  - api
  - cashback
  - fidelity
---

## Como dar cashback para um cliente via API?

Para dar cashback para um cliente via API, você utiliza o _endpoint_ `/api/v1/cashback-fidelity` da API.

Você pode acessar [aqui](https://developers.openpix.com.br/api#tag/cashback-fidelity/paths/~1api~1v1~1cashback-fidelity/post)
a documentação referente a esse _endpoint_.

Os campos obrigatórios para dar um cashback são os seguintes:

- **`value`**: O valor em centavos do cashback.
- **`taxID`**: TaxID (CPF/CNPJ) do client.

```bash
curl 'https://api.openpix.com.br/api/v1/cashback-fidelity' -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "user-agent: node-fetch" --data-binary '{"taxID":"cpf-cnpj","value":1500}
```

Obs.: O cliente precisa já ter sido criado na plataforma.

## Como verificar o saldo de cashback de cliente via API?

Para verificar o saldo de cashback para um cliente via API, você utiliza o _endpoint_ `/api/v1/cashback-fidelity/balance/:cpf-cnpj` da API.

Você pode acessar [aqui](https://developers.openpix.com.br/api#tag/cashback-fidelity/paths/~1api~1v1~1cashback-fidelity~1balance~1%7BtaxID%7D/get)
a documentação referente a esse _endpoint_.

https://developers.openpix.com.br/api#tag/cashback-fidelity/paths/~1api~1v1~1cashback-fidelity~1balance~1%7BtaxID%7D/get

```bash
curl 'https://api.openpix.com.br/api/v1/cashback-fidelity/balance/${cpf-cnpj}/balance' -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "user-agent: node-fetch" --data-binary '{"taxID":"cpf-cnpj","value":1500}
```