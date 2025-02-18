---
id: boleto
title: Como usar o Boleto via API
sidebar_label: Boleto
tags:
- boleto
---

# Como utilizar o Boleto via API

## Resumo

Este documento explica como utilizar o Boleto via API para gerar e gerenciar boletos de cobrança. A integração com a API permite que você automatize a emissão de boletos, consulta de status e outras operações relacionadas.

---

## 1. Requisitos Iniciais

Antes de começar, você precisará de:

- **Funcionalidade boleto ativa**: É necessário entrar em contato com a nossa equipe para analisarmos seu modelo de negócio e habilitar essa funcionalidade.

---

## 2. Utilizando a API

Para criar uma cobrança do tipo *Boleto* você precisará acessar o endpoint de criação de cobrança:

[Criar cobrança](https://developers.openpix.com.br/api#tag/charge/paths/~1api~1v1~1charge/get)

O processo de criaçao de um boleto é bem simples. Basta utilizar o mesmo endpoint que o de cobrança, porém, com a adição do parâmetro `type` com o valor `BOLETO`.

```json
{
  "correlationID": "9134e286-6f71-427a-bf00-241681624587",
  "value": 350,
  "type": "BOLETO",
  "comment": "good",
  "customer": {
    "name": "Dan",
    "taxID": "31324227036",
    "email": "email0@example.com",
    "phone": "5511999999999"
  },
  "additionalInfo": [
    {
      "key": "Product",
      "value": "Pencil"
    },
    {
      "key": "Invoice",
      "value": "18476"
    },
    {
      "key": "Order",
      "value": "302"
    }
  ]
}
```

A resposta deve ser algo como:

```json
{
	"charge": {
		"customer": {
			"name": "Dan",
			"email": "email0@example.com",
			"phone": "+5511999999999",
			"taxID": {
				"taxID": "31324227036",
				"type": "BR:CPF"
			},
			"correlationID": "7bd7e7b3-f94e-4409-8dbe-a2bc6c3ec798",
		},
		"value": 350,
		"identifier": "127a26a450414064dd0950d2f8b8a7c148e",
		"correlationID": "2fbab115-9b6a-4922-bvfe-29b21c6e490d",
		"transactionID": "127a26a450414064dd0950d2f8b8a7c148e",
		"status": "ACTIVE",
		"additionalInfo": [],
		"fee": 299,
		"discount": 0,
		"valueWithDiscount": 350,
		"expiresDate": "2025-03-20T21:44:28.313Z",
		"type": "BOLETO",
		"paymentLinkID": "f5b43c31-7466-4313-aa4e-f840818912fd",
		"createdAt": "2025-02-18T21:44:30.579Z",
		"updatedAt": "2025-02-18T21:44:30.579Z",
		"brCode": "000201010212261060014br.gov.bcb.pix2584https://api.openpix.com.br/openpix/testing?transactionID=867ba5173c734202ac659721306b38c952040000530398654040.015802BR5909LOCALHOST6009Sao Paulo62360532867ba5173c734202ac659721306b38c963044BCA",
		"expiresIn": 2592000,
		"pixKey": "a5203038ac-a0c1-410d-8028-e97b17d574bc",
		"paymentLinkUrl": "https://api.openpix.com.br/openpix/charge/brcode/image/9134e286-6f71-427a-bf00-24168162458",
		"qrCodeImage": "https://api.openpix.com.br/openpix/charge/brcode/image/9134e286-6f71-427a-bf00-241681624586.png",
		"globalID": "Q2hhcmdl3030sqY3YjRmZjNlZGQyMTBiMmxyMGFmNDZkYQ==",
		"paymentMethods": {
			"boleto": {
				"method": "BOLETO",
				"correlationID": "1",
				"boletoBarcode": "34196102600000003501099089627460513984203000",
				"boletoDigitable": "34191099098962746051539842030007610260000000350",
				"status": "CREATED",
				"value": 350,
				"fee": 299,
				"barcodeImage": "https://api.openpix.com.br/api/image/barcode/f5b43c31-7466-4313-aa4e-f83131.png"
			},
			"pix": {
				"method": "PIX_COB",
				"status": "ACTIVE",
				"value": 350,
				"txId": "73A39E313131319482855068B2FE",
				"fee": 299,
				"brCode": "Paulo62360532867ba5173c734202ac659721306b38c963044BCA",
				"transactionID": "73A39E1FE6964C8B819482855068B2FE",
				"identifier": "73A39E1FE6964C8B819482855068B2FE",
				"qrCodeImage": "https://api.openpix.com.br/openpix/charge/brcode/image/f5b43c31-7466-4313-aa4e-f840818912fd.png"
			}
		}
	},
	"correlationID": "3131313114-9b6a-4922-bvfe-29b21c6e490d",
	"brCode": "000201010212261060014br.gov.bcb.pix2584https://api.openpix.com.br/openpix/testing?transactionID=867ba5173c734202ac659721306b38c952040000530398654040.015802BR5909LOCALHOST6009Sao Paulo62360532867ba5173c734202ac659721306b38c963044BCA"
}
```

A criação de um boleto também gera um pix. É possível pagar com qualquer uma das duas opções.



