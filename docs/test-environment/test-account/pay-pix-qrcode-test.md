---
id: test-pay-pix-qrcode
title: Pagando um Pix QRCode de teste
tags:
- test
---

Pagar um Pix QRCode com uma conta bancaria de teste permite testar se o Webhook cadastrado está funcionando.

Para pagar um Pix QRCode você precisa pegar o identificador do QRCode que você encontra no detalhe do mesmo.

Exemplo:

![Identifier Example QRCode](/img/identifier-ex-qrcode.png)

E também copiar o código do seu AppID, você irá encontrá-lo em `menu Administrador > API/Plugins`, clicar em seu respectivo `API/Plugin` criado e copiar o `AppID` no detalhe da aplicação.

Mais infomações sobre o AppID aqui: https://developers.openpix.com/docs/plugin/app-id/

Exemplo:

![App Id Example](/img/app-id-ex.png)

E por fim já com todos os dados recolhidos você poderá rodar esse comando abaixo preenchido com os dados indicados já citados a cima e gerar uma transação de pagamento!

```jsx
curl 'https://api.openpix.com/openpix/testing?identifier=<identifier>' -H 'Authorization: <appID>'
```

Para ver as transações geradas clique em `transações` para ver a transação do Pix QRCode do pagamento teste recebida. 

![Identifier Example QRCode](/img/transaction-ex.png)