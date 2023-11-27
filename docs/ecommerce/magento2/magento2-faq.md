---
title: "Magento 2: Perguntas Frequentes"
tags:
  - faq
  - magento2
  - integration
---

## Meus pedidos no Magento 2 não estão sendo atualizados

Se caso os seus pedidos gerados a partir da sua loja Magent 2 não estão
atualizando o status conforme o pagamento é efetuado, pode ser que o webhook
da integração tenha sido configurado de forma incorreta.

Para verificar isso, acesse a [lista das suas integrações criadas](https://app.woovi.com/home/applications/tab/list) e,
na lista de webhooks, encontre o webhook relacionado a sua integração.
Você pode encontrá-lo a partir do nome dele: `Magento2 Webhook`. Após achá-lo, acesse o detalhe
do mesmo clicando na sua respectiva linha na tabela.

Na seção de `Ação`, abra ela e confira o campo `Url`. Conforme a [documentação de integração da OpenPix com Magento2](./magento2-oneclick-plugin.mdx) mostra, o webhook deve estar apontando pro seguinte endpoint: `/openpix/index/webhook`.]
Segue um exemplo: `https://minhalojamagento2.com/openpix/index/webhook`.
