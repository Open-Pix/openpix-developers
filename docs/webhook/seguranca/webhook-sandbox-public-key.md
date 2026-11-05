---
id: webhook-sandbox-public-key
title: "Chave pública do webhook no Sandbox"
description: "Chave pública usada para verificar o header x-webhook-signature dos webhooks enviados pelo ambiente Sandbox"
tags:
  - webhook
  - security
  - signature
  - sandbox
---

Os webhooks enviados pelo ambiente **Sandbox** (`api.woovi-sandbox.com`) são assinados com
uma chave própria do Sandbox. Para verificar o header `x-webhook-signature` de um webhook
recebido do Sandbox, use a chave pública abaixo.

| Campo | Valor |
|-------|-------|
| Ambiente | Sandbox |
| Algoritmo | RSA 2048 + SHA-256 (`sha256WithRSAEncryption`) |
| `key_identifier` | `7c8efa31466209cf247d23f6198a61643b8c322a0d80ea6d0a7a54073b2d6e91` |

## Chave pública (PEM)

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoZwBaFwmstKqy9VAqqxi
SbCWgJR3dd5CTtDi6Fwthtd2owFkZIMqTqKg3Bq5ExjuOxE+v/1gIWFqR9jNjbtY
umwPq+wXQhvx9TrQgrrFMVZ6tMPcwzj8Nknw182N/HMIQsV6B+8JWWzf/cN4ZZVS
sRZfQvoVgFM7PSvSvc/h6v0X2Lkzjypvw7ZRkfxoc+z7B0p3vdQmLSKxPRpLzdLL
VlJ+CJA2aATKVQR5feiuWHKdOlvCT7IRhal0hxUAjc7rxho5eHgaxWO5rITke8wS
IjYIpuw38vMobYSxXb6iuj5Zrjpe2GV8vwuGud8H2dngYhkqbGuY5f4j1kfcN7gC
8QIDAQAB
-----END PUBLIC KEY-----
```

## Chave pública (Base64)

O mesmo PEM codificado em Base64, no formato usado nos exemplos de validação:

```
LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFvWndCYUZ3bXN0S3F5OVZBcXF4aQpTYkNXZ0pSM2RkNUNUdERpNkZ3dGh0ZDJvd0ZrWklNcVRxS2czQnE1RXhqdU94RSt2LzFnSVdGcVI5ak5qYnRZCnVtd1BxK3dYUWh2eDlUclFncnJGTVZaNnRNUGN3emo4TmtudzE4Mk4vSE1JUXNWNkIrOEpXV3pmL2NONFpaVlMKc1JaZlF2b1ZnRk03UFN2U3ZjL2g2djBYMkxremp5cHZ3N1pSa2Z4b2MrejdCMHAzdmRRbUxTS3hQUnBMemRMTApWbEorQ0pBMmFBVEtWUVI1ZmVpdVdIS2RPbHZDVDdJUmhhbDBoeFVBamM3cnhobzVlSGdheFdPNXJJVGtlOHdTCklqWUlwdXczOHZNb2JZU3hYYjZpdWo1WnJqcGUyR1Y4dnd1R3VkOEgyZG5nWWhrcWJHdVk1ZjRqMWtmY043Z0MKOFFJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==
```

## Buscando via API

A mesma chave é publicada no endpoint público do Sandbox, sem autenticação:

```
GET https://api.woovi-sandbox.com/api/v1/webhook/public-keys
```

Use a chave do ambiente de onde o webhook veio: a chave do Sandbox só valida webhooks do
Sandbox, e a chave de Produção só valida webhooks de Produção. Se a sua aplicação recebe
webhooks dos dois ambientes, configure a chave pública de cada ambiente separadamente.
