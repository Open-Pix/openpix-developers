---
id: block-payments
title: Bloqueando Pagamentos
tags:
  - api
---

Este documento irá ajudá-lo a bloquear cobranças para serem pagas somente por 1 pagador.

## Como funciona?

- No endpoint de criação de charge, existe agora um novo campo que pode ser enviado: ensureSameTaxID.
- Esse campo faz com que o pagamento de uma cobrança seja recusado caso o CPF/CNPJ do pagador seja diferente daquele configurado como customer.

- Ao criar uma charge, basta apenas enviar esse campo como “true” e enviar um customer. Exemplo:

```json
curl -X POST "https://api.woovi.com/api/v1/application" \
  -H "Authorization: {APP_ID}" \
  -H "Content-Type: application/json" \
  -d '{
    "ensureSameTaxID": "true",
    "customer": {
      "name": "João",
      "email": "joão@gmail.com",
      "taxID": "45784409158",
    }
  }'

```

### Conclusão
Com isso, caso seja realizada uma tentativa de pagamento para essa cobrança, o sistema da Woovi verificará o CPF/CNPJ do pagador e do customer cadastrado; se forem diferentes, o pagamento será recusado.

