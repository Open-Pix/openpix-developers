---
id: oneclick-with-openpix
title: Como funciona a integração OneClick com OpenPix?
tags:
  - integration
  - oneclick
---

## O que é o OneClick Integration

OneClick Integration é a feature criada exclusivamente pela OpenPix, responsável por integrar todas as plataformas de ecommerce e integrações de pagamento com a OpenPix.

## Como funciona a integração OneClick com OpenPix?

### 1. Criando o plugin

Ao criar o plugin que será integrado é necessário que seja possível salvar o appID, que é o responsável por identificar a aplicação que está realizando a integração. Para isso, é necessário criar um campo de texto para que o usuário possa salvar o appID, também possível que seja apenas um cache dentro de sua aplicação

### 2. Endereço de callback

O primeiro passo é possuir um endereço de url que será responsável por receber as requisições da OpenPix.
Ex: <https://www.suaaplicacao.com.br/openpix>

### 3. Criando a integração

Ao inserir a sua integração dentro do nosso formulário de oneclick( ex: <https://app.woovi.com/home/applications/magento2/add/oneclick>) será necessário apenas preencher o campo de callback com o endereço de callback que foi criado no passo 2.

### 4. Recebendo as requisições

Serão enviados duas chamadas para o endereço de callback, ambas do método POST

#### 4.1. Primeira chamada

A primeira chamada será uma teste, para identificar se o seu endpoint existe e está funcionando corretamente. O corpo da requisição será:

```json
{
  "data_criacao": "2023-07-12T13:58:06.821Z",
  "evento": "teste_webhook",
  "event": "OPENPIX:TRANSACTION_RECEIVED"
}
```

Você pode simular utilizando o seguinte comando bash :

```bash
curl -X 'POST' \
 'www.suaurl.com.br' \
 -H 'connection: close' \
 -H 'accept-encoding: gzip,deflate' \
 -H 'content-length: 68' \
 -H 'user-agent: node-fetch' \
 -H 'x-webhook-signature: ntX9Ix69oUV5OQK9dIhZaw/ovjPTMoGqzEYi/OQm05/7ceMQhj7wOvhkHYgP6Q4aLeeBeRxpaAtglR3V19YXyPvqr412RSJ40EGAe+OG8QIkc4RqYP4g7krINNQJOPZ1JSY3qLoIEX0SLRjAunOabnw+P05Xrizi5Fgn4YzkuoE=' \
 -H 'x-openpix-authorization: ' \
 -H 'content-type: application/json' \
 -H 'accept: application/json' \
 -d $'{"data_criacao":"2023-07-12T13:58:06.821Z","evento":"teste_webhook","event":"OPENPIX:TRANSACTION_RECEIVED"}'
 ```

#### 4.2. Segunda chamada

A segunda chamada será enviada somente se a primeira requisição retornar o status code 200 em seu endereço.
Ela é a responsável por enviar o appID em que você ira salvar dentro de sua integração

O corpo dessa requisição será

```json
{
  "event": "magento1-configure",
  "appID": "Q2xpZW50X0lkX2UwY2YyMTI2LWU0MGEtNDY4Yi05YmU2LTQ2ODg0ZTkzMTEwMDpDbGllbnRfU2VjcmV0XzQ1VUJYaU5VM2E1SGEvNnZTOGtCeEgzR1pRL0dOSmc0bTQ5ZGkyZ1g0bHc9",
  "date": "2023-07-12T13:58:05.996Z"
}
```

Você pode simular utilizando o seguinte comando bash :

```bash
curl -X 'POST' \
  'www.suaurl.com.br' \
 -H 'connection: close' \
 -H 'accept-encoding: gzip,deflate' \
 -H 'content-length: 218' \
 -H 'accept: */*' \
 -H 'user-agent: node-fetch' \
 -H 'content-type: application/json' \
 -H 'x-webhook-signature: IJ33ocEdFz8GM/I2n8tOK8WAyHlDBFIDZ0zVijrrGm/VL8K3AiFrIwNSbxSk0ZRX2hD5FTwmFOaToJd/4YD75j8rhl8alIRx+CjtJ4kJK5svpdTwia5fV2bTNp0MQV6VXnZM5cj26H7it3CCVq5dhtbcMcyBLfY96iQ6CvT9CKs=' \
 -d $'{"event":"woocommerce-configure","appID":"Q2xpZW50X0lkX2UwY2YyMTI2LWU0MGEtNDY4Yi05YmU2LTQ2ODg0ZTkzMTEwMDpDbGllbnRfU2VjcmV0XzQ1VUJYaU5VM2E1SGEvNnZTOGtCeEgzR1pRL0dOSmc0bTQ5ZGkyZ1g0bHc9","date":"2023-07-12T13:58:05.996Z"}'
 ```

### 5. Salvar o appID

Ao receber a segunda chamada é esperado que você salve o appID em sua integração, e enviá-lo em todas as requisições que forem realizadas para a OpenPix.
