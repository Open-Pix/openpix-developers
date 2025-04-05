---
id: how-to-create-a-affiliate-company-via-api
title: Como criar uma empresa afiliada via API?
tags:
  - partnership
  - partner
  - affiliate
  - api
---

## Criando uma empresa afiliada

Nós disponibilizamos o _endpoint_ `/api/openpix/v1/partner/application` para que
você possa criar uma novo _pré-registro_ para a uma empresa afiliada.

Você pode acessar [aqui](https://developers.openpix.com.br/api#tag/partner-(request-access)/paths/~1api~1v1~1partner~1company/post)
a documentação referente a esse _endpoint_.

Como parte do `body` da requisição, esperamos o envio dos seguintes dois objetos: `preRegistration` e `user`,
respectivamente, eles consistem no seguinte:

- **`preRegistration`:** informações referentes a empresa que você deseja criar, isto é: o nome, website e cnpj.
- **`user`**: Os dados do usuário de acesso mestre aquela empresa, toda empresa afiliada precisa de um usuário mestre para que seja possível efetuar o login na plataforma posteriormente

Em um exemplo prático, o body da sua requisição seguiria semelhante a este exemplo:

```json
{
  "preRegistration": {
    "name": "Example LLC",
    "taxID": {
      "taxID": "11111111111111",
      "type": "BR:CNPJ"
    },
    "website": "examplellc.com"
  },
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@examplellc.com",
    "phone": "+5511912345678",
    "taxID": {
      "taxID": "1111111111",
      "type": "BR:CPF"
    }
  }
}
```

Após efetuar a requisição, se tudo ocorreu bem, o _status code_ da requisição será `2xx` e no `body` da resposta,
você estará vendo as informações sobre o seu afiliado recém criado.

Em um exemplo, essa será a resposta a nossa resposta:

```json
{
  "preRegistration": {
    "name": "Example LLC",
    "website": "examplellc.com",
    "taxID": {
      "taxID": "11111111111111",
      "type": "BR:CNPJ"
    }
  },
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@examplellc.com",
    "phone": "+5511912345678",
    "taxID": {
      "taxID": "1111111111",
      "type": "BR:CPF"
    }
  }
}
```

:::info
Importante lembrar que esse é um pré-registro de um afiliado, após a validação da conta, o status permancerá como "Dados pendente" até a finalização do cadastro completo,  igual é mostrado no passo 4 na seção [Pré-registro de conta de um afiliado](./how-to-integrate-as-woovi-partner.md#pré-registro-de-conta-de-um-afiliado)
:::