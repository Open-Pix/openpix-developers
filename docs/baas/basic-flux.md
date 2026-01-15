---
id: basic-flux-baas
title: Fluxo básico de Baas
tags: 
  - baas 
  - api
---

Este documento irá ajuda-lo a entender o fluxo básico de baas

### pré requisitos

antes de começar a utilisar a api baas é nescessrio duas coisas: 
 * solicitar ativação das features: Bass e Criação de conta
 * gerar uma chave de api master

A API precisa ser do tipo MASTER porquê ela precisa ser capaz de criar novas integrações.
A conta bancária relacionada a essa API será utilizada no processo de criação das novas contas bancárias, elas usarão os dados desta para serem criadas.

Assim estamos prontos para iniciar a sequencia de integração

### Documentos necessários

**Representantes/socios:** 
| Type           | Descrição               |
|----------------|-------------------------|
| PICTURE        | Foto de perfil          |
| CNH            | Imagen completa da CNH  |
| CNH_FRONT      | Imagen frontal da CNH   |
| CNH_BACK       | Imagen traseira da CNH  |
| IDENTITY_FRONT | Imagem frontal do RG    |
| IDENTITY_BACK  | Imagem traseira do RG   |

Apenas esses conjuntos de documentos serão aceitos: 
* PICTURE + CNH
* PICTURE + (CNH_FRONT + CNH_BACK)
* PICTURE + (IDENTITY_FRONT + IDENTITY_BACK)


**Empresa:**
| Type            | Descrição                    |
|-----------------|------------------------------|
| ATA             | Ata da assembleia dos sócios |
| BYLAWS          | Estatuto da organização      |
| SOCIAL_CONTRACT | Contrato social              |

Documentos nescessários por tipo de cnpj:
* MEI: nenhum documento é necessário, apenas os dos sócios
* ONG, IGREJA: SOCIAL_CONTRACT, BYLAWS
* LTDA: SOCIAL_CONTRACT, ATA, BYLAWS


### Sequência da integração

![diagrama fluxo basico de conta](./__assets__/diagrama_fluxo_basico.png) 

### 1. Registrando uma conta
 * Utilise o endpoint de registro de conta para registrar uma nova conta
 * Utilise a chave de api master para autenticar a requisição
 * Faça a requisição
 ```JSON
    curl -X POST "https://api.openpix.com/api/v1/account-register" \
      -H "Authorization: <apiMasterKey>" \
      -H "Content-Type: application/json" 
        --data-raw '
{
  "officialName": "<razão social>",
  "tradeName": "<nome fantasia>",
  "taxID": "<cnpj>",
  "businessDescription": "<website ou canal de vendas>",
  "businessProduct": "<servico ou produto da compania>",
  "businessLifetime": "<tempo de mercado>",
  "businessGoal": "<objetivo ao usar woovi>",
  "billingAddress": {
    "zipcode": "<cpf>",
    "street": "<rua>",
    "number": "<numero>",
    "neighborhood": "<bairro>",
    "city": "<cidade>",
    "state": "<sigla estado>"
  },
  "documents": [
    {
      "url": "<url documento contrato social>",
      "type": "SOCIAL_CONTRACT"
    },
    {
      "url": "<url estatuto social>",
      "type": "BYLAWS"
    }
  ],
  "representatives": [
    {
      "name": "<nome socio 1>",
      "birthDate": "<nacimento>",
      "email": "<email>",
      "taxID": "<cpf/cnpj>",
      "phone": "<phone>",
      "address": {
        "zipcode": "<cep>",
        "street": "<rua>",
        "number": "<numero>",
        "neighborhood": "<bairro>",
        "city": "<cidade>",
        "state": "<sigla estado>",
        "complement": "<complemento'>"
      },
      "documents": [
        {
          "url": "<url cnh>",
          "type": "CNH"
        },
        {
          "url": "<url foto de perfil>",
          "type": "PICTURE"
        }
      ],
      "type": "ADMIN"
    }
  ]
}'
 ```

 * Caso tudo ocorra corretamente, um código 201 será retornado.
 * No corpo da resposta terá:
  ```JSON
    {
      "officialName": "minha compania LTDA",
      "tradeName": "nome fantasia da minha compania",
      "status": "IN_REVIEW",
      "taxID": {
          "taxID": "<cnpj>",
          "type": "BR:CNPJ"
      }
    }
  ```

### 2. Aguarde a aprovação da conta
 * Cadastre um webhook ouvindo o seguinte evento: "ACCOUNT_REGISTER_APPROVED"
 * Para cadastrar um webhook faça a seguinte request:

  ```JSON
      curl --location --request POST 'https://api.openpix.com/api/openpix/v1/webhook' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: <apiMasterKey>' \
        --data-raw '{
          "webhook": {
          "name": "webhook via api",
          "event": "ACCOUNT_REGISTER_APPROVED",
          "url": "https://minhaurl.test/webhook",
          "authorization": "auth_key",
          "isActive": true
        }
      }'
  ```

 * No corpo da resposta terá:

  ```JSON 
    {
      "webhook": {
        "id": "<idWebhook>",
        "name": "webhook via api",
        "event": "ACCOUNT_REGISTER_APPROVED",
        "url": "https://minhaurl.test/webhook",
        "authorization": "auth_key",
        "isActive": true,
        "hmacSecretKey": "<hmacSecretKey>",
        "createdAt": "2025-07-01T00:25:36.789Z",
        "updatedAt": "2025-07-01T00:25:36.789Z"
      }
    }
  ```

 * quando a conta for aprova o webhook receberar os seguintes dados: 
 ```JSON
  {
    "event": "ACCOUNT_REGISTER_APPROVED",
    "accountRegister": {
      "officialName": "minha compania LTDA",
      "taxID": {
        "taxID": "<cnpj>",
        "type": "BR:CNPJ"
      },
      "status": "APPROVED"
    },
    "account": {
      "status": "OPEN",
      "accountId": "<accountId>",
      "account": "<accountNumber>",
      "branch": "<branch>"
    }
  }
 ```

### 3. Gere uma chave de api padrão
 * Utilise o endpoint de application para gerar uma chave de api para a conta recen criada
 * Utilise a chave de api master para autenticar a requisição
 * Faça a requisição
 ```JSON
    curl -X POST "https://api.openpix.com/api/v1/application" \
      -H "Authorization: <apiMasterKey>" \
      -H "Content-Type: application/json" 
      --data-raw '{
        "accountId": "<accountId>",
        "application": {
          "name": "Api account register",
          "type": "API"
        }
      }'
 ```

 * Caso tudo ocorra corretamente, um código 201 será retornado.
 * No corpo da resposta terá:
 ```JSON
    {
      "application": {
          "name": "Api account register",
          "isActive": true,
          "type": "API",
          "clientId": "<clientId>",
          "clientSecret": "<clientSecret>",
          "appID": "<appID>"
      }
    }
 ```

### 4. Gere uma chave pix aleatoria
 * Utilise o endpoint pix-keys para gerar uma chave para a conta
 * Utilise o appId gerado no passo anterior para autenticar a requisição
 * Faça a requisição:
  ```JSON
     curl -X POST "https://api.openpix.com/api/v1/pix-keys" \
      -H "Authorization: <appId>" \
      -H "Content-Type: application/json" 
      --data-raw '{
        "key": "k1",
        "type": "EVP"
      }'
  ```
 * Caso tudo ocorra corretamente, um código 200 será retornado.
 * No corpo da resposta terá:
 ```JSON
  {
    "pixKey": {
        "pixKey": "",
        "type": "EVP",
        "isDefault": false
    }
  }
 ```
