---
id: test-pay-pix
title: Pagando uma Cobrança Pix de Teste
---

Pagar uma cobrança Pix no modo teste permite testar se o Webhook cadastrado está funcionando.

Para pagar uma cobrança Pix você precisa pegar o identificador da cobrança que você encontra no detalhe da mesma.

Exemplo:

![Identifier Example](/img/identifier-example.png)

E também copiar o código do seu AppID, você irá encontrá-lo em `menu Administrador > API/Plugins`, clicar em seu respectivo `API/Plugin` criado e copiar o `AppID` no detalhe da aplicação.

Mais infomações sobre o AppID aqui: https://developers.openpix.com.br/docs/plugin/app-id/

Exemplo:

![App Id Example](/img/app-id-ex.png)

E por fim já com todos os dados recolhidos você poderá rodar esse comando abaixo preenchido com os dados indicados já citados a cima e efetuar o pagamento !

```jsx
curl 'https://api.openpix.com.br/openpix/testing?transactionID=<identifier>' -H 'Authorization: <appID>' \
```