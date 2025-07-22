---
id: payment-flux
title: Fluxo Básico de Pagamento
tags:
  - api
---

### Fluxo básico de Pagamento

Este documento irá ajudar a entender como criar e aprovar um pagamento pix na openpix

![diagrama sequencial fluxo basico de pagamento openpix](./__assets__/sequenceDiagrama_fluxo_de_pagamento.png)

### 1. Checar chave pix e obter pixKeyEndToEndId
  * para checar uma chave pix veja: [Verificação de chave pix](./check-pix-key.md)


### 2. Criando um pagamento
 * Utilize o endpoint de pagamento para criar um novo pagamento
 * Utilize o valor de pixKeyEndToEndId adiquirido no passo anterior para gerar um novo pagamento
 * Utilize o appId para autenticar a requisição
 * Faça a requisição
 ```JSON
    curl -X POST "https://api.openpix.com/api/v1/payment" \
      -H "Authorization: <appId>" \
      -H "Content-Type: application/json" 
      --data-raw '{
    "value": "<number centavos>",
    "destinationAlias": "<chave pix>",
    "destinationAliasType": "<tipo de chave pix, CPF, CNPJ, ...>",
    "pixKeyEndToEndId": "<pixKeyEndToEndId>",
    "correlationID": "<string para identificação de pagamento>",
    "comment": "<comment>"
  }'

 ```

 * Caso tudo ocorra corretamente, um código 200 será retornado.
 * No corpo da resposta terá:
 ```JSON
{
  "payment": {
    "value": "<number>",
    "destinationAlias": "<string>",
    "destinationAliasType": "CPF",
    "qrCode": "<string>",
    "correlationID": "<string>",
    "comment": "<string>",
    "status": "DENIED"
  }
}
  ```

### 3. Aprovando pagamento
 * Utilize o endpoint de aprovar pagamento para aprovar um pagamento
 * Utilize o valor de correlationID escolhido no passo anterior para aprovar pagamento
 * Utilize o appId para autenticar a requisição
 * Faça a requisição
 ```JSON
    curl -X POST "https://api.openpix.com/api/v1/payment/approve" \
      -H "Authorization: <appId>" \
      -H "Content-Type: application/json" 
      --data-raw '{
    "correlationID": "<string para identificação de pagamento>",
  }'

 ```

 * Caso tudo ocorra corretamente, um código 200 será retornado.
 * No corpo da resposta terá:
 ```JSON
{
  "payment": {
    "value": "<number>",
    "destinationAlias": "<string>",
    "destinationAliasType": "CPF",
    "qrCode": "<string>",
    "correlationID": "<string>",
    "comment": "<string>",
    "status": "DENIED"
  },
  "transaction": {
    "value": "<number>",
    "endToEndId": "<string>",
    "time": "<string>"
  },
  "destination": {
    "name": "<string>",
    "taxID": "<string>",
    "pixKey": "<string>",
    "bank": "<string>",
    "branch": "<string>",
    "account": "<string>"
  }
}
```
