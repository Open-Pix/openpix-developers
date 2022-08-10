---
id: flow-company-bank-test
title: Testando Pix sem dinheiro real
---

Para gerar novas cobranças na OpenPix, você precisa criar uma conta bancária que represente o provedor do seu banco Pix.

Para evitar custos ao testar a OpenPix, temos uma conta bancária especial para testes. Cada cobrança criada usando o teste da mesma não irá gerar custos em seu banco e você também não gastará nenhum dinheiro.

## Como criar uma Conta Bancária para testes

Clique em `Ajustes -> Pix -> Ir para Configurações avançadas`

Veja em [https://yourcompany.openpix.com.br/home/accounts/list](https://yourcompany.openpix.com.br/home/accounts/list)

Para adicionar uma conta de teste basta clicar no botão `Criar uma conta bancária de teste`

![Company Bank Test](/img/test/cba-test-create.png)

Marque esta Conta Bancária como sua conta bancária padrão, conforme abaixo:

![Company Bank Default](/img/test/cba-test-default.png)

Depois disso, você pode criar uma nova Cobrança e escanear o QRCode usando a câmera do seu celular

O QRCode não é um BRCode EMV válido, mas uma url que simula o pagamento
