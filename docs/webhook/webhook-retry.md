---
title: Regras de Retentativa do Webhook
description: Quais são as regras de retentativa do Webhook?
tags:
  - webhook
---

## O que são retentativas de Webhooks?

É comum que, em sistemas distribuídos, ocorram falhas temporárias na entrega de mensagens. Para garantir que as mensagens sejam entregues, a OpenPix realiza retentativas de Webhooks em caso de falha na entrega.

## Quais são as regras para que um Webhook seja retentado?

1. Caso a URL do Webhook retorne um código de erro HTTP acima de 400, a OpenPix retentará o Webhook.
2. Caso a URL do Webhook não esteja disponível, a OpenPix retentará o Webhook.
3. Caso ocorra algum erro interno na OpenPix, a OpenPix retentará o Webhook.

## Retentativa de Webhooks

São feitas 8 tentativas de chamada do webhook.

A primeira tentativa é feita no momento em que o evento do webhook é disparado, caso ela falhe seguindo as regras acimas, as demais retentativas são feitas em intervalos de tempo exponenciais, de acordo com a seguinte fórmula:

```
intervalo = 10 * 2 ^ tentativa
```

Sendo assim, essa é a tabela de retentativas:

| Tentativa | Intervalo (segundos) |
| --------- | -------------------- |
| 1         | 10                   |
| 2         | 20                   |
| 3         | 40                   |
| 4         | 80                   |
| 5         | 160                  |
| 6         | 320                  |
| 7         | 640                  |
| 8         | 1280                 |

Caso todas as tentativas falhem, o webhook não será mais retentado.

Porém ainda sim é possível retentar manualmente via plataforma.
