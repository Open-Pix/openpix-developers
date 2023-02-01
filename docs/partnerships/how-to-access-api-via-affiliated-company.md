---
id: how-to-access-api-via-affiliated-company
title: Como acessar a API com uma empresa afiliada?
tags:
  - partnership
  - partner
  - api
---

## Criando o acesso via API

Nós disponibilizamos o _endpoint_ `/api/openpix/v1/partner/application` para que
você possa criar uma nova _application_ para a respectiva empresa afiliada.

Você pode acessar [aqui](https://developers.openpix.com.br/api#tag/partner-(request-access)/paths/~1api~1openpix~1v1~1partner~1application/post)
a documentação referente a esse _endpoint_.

Como parte do `body` da requisição, esperamos o envio dos seguintes itens: `application` e `taxID`,
respectivamente, eles consistem no seguinte:

- **`application`:** informações referentes a `application` que você deseja criar, isto é: o nome dela e o tipo.
  O tipo da aplicação pode ser um dos seguintes valores: `API`, `ORACLE` ou `PLUGIN`.
- **`name`**: O nome da sua `application`, facilita o processo de identificação da nova `application`.

Num exemplo prático, o body da sua requisição seguiria semelhante a este exemplo:

```json
{
  "application": {
    "name": "MyAPIAccess",
    "type": "API",
  },
  "taxID": {
    "taxID": "65914571000187",
    "type": "BR:CNPJ",
  }
}
```

Após efetuar a requisição, se tudo ocorreu bem, o _status code_ da requisição será `2xx` e no `body` da resposta,
você estará vendo as informações sobre a `application` recém criada.

Num exemplo, essa será a resposta a nossa resposta:

```json
{
  "application": {
    "name": "MyAPIAccess",
    "isActive": true,
    "type": "API",
    "clientId": "Client_Id_xxxx",
    "clientSecret": "Client_Secret_xxxx"
  }
}
```

### Utilizando o appID
Após criar sua nova `application`, você consegue obter seu `AppID` convertendo os valores de `clientId`
e `clientSecret` para [Base64](https://en.wikipedia.org/wiki/Base64). Segue um exemplo em JavaScript de 
como fazer isso:

```js
const appID = Buffer.from(`${clientId}:${clientSecret}`, 'utf8').toString('base64');
```

O `appID` será o valor que você usará no _header_ de `Authorization` para consumir as APIs OpenPix.
