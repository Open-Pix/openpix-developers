---
id: account-duplicates
title: Como duplicar uma Conta via api
tags:
  - account
  - duplicates
---

Este documento irá ajudá-lo a duplicar uma conta usando api.

### 1. Duplicando uma conta bancária

- Utilize o endpoint de conta para duplicar.
- Utilize o AppID da conta que deseja duplicar.
- Faça a requisição.

```json
curl -X POST "https://api.woovi.com/api/v1/account" \
  -H "Authorization: {APP_ID}" \
  -H "Content-Type: application/json" 
```
- Caso tudo ocorra corretamente, um código 200 será retornado.
- No corpo da resposta terá:

```json
{
  "account": {
    "accountId": "6840aeca23c0d1fe48c856a3",
    "taxId": "12.345.678/0001-90",
    "isDefault": true,
    "balance": {
      "total": 0,
      "blocked": 0,
      "available": 0
    }
  }
}
```

OBS: para utilizar esse endpoint é nescessario ter um appId do tipo MASTER
caso não consiga gerar um appId MASTER será nescessario solicitar ativação no suporte


