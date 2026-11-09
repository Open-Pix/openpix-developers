---
id: check-pix-key
title: Verificação de Chave Pix
tags:
  - api
---

:::warning Uso exclusivo para iniciar um pagamento
Este endpoint serve apenas para identificar o destinatário de um Pix antes de o pagador confirmar o pagamento, conforme o art. 75 do Regulamento do Pix. Toda consulta deve ser seguida da criação do pagamento usando o `pixKeyEndToEndId` retornado.

Não use este endpoint para:

- consultar ou enriquecer dados cadastrais de pessoas ou empresas;
- validar contas ou identidade em cadastro, onboarding, análise de crédito ou KYC;
- verificar chaves ou montar bases de dados sem a intenção de realizar um pagamento.

Consultas sem pagamento posterior são monitoradas e podem levar à suspensão e ao encerramento da conta.
:::

Este documento irá ajudá-lo a validar chave pix.

- O novo endpoint  de verificação de chave de pix retornará os dados sobre uma chave de pix:
```json
curl -X POST "https://api.woovi.com/api/v1/pix-keys/{pix-key}/check" \
  -H "Authorization: {APP_ID}" \
  -H "Content-Type: application/json"
```

## Limitação de Taxa

- O endpoint tem um limitador de taxa, devido às restrições do Bacen, por isso o Woovi tem um limite de taxa nesse endpoint.
- O único problema é que quando você recebe um 404 em uma chave de pixel, após alguns 404, você receberá um 429 e precisará aguardar o reabastecimento do limitador de taxa.

### O que é retornado ?

```json
{
    "pixKey": "...",
    "type": "...",
    "owne": {
        "name": "...",
        "taxID": "...",
                }
}
```