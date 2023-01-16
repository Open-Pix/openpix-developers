---
id: faq-cloudflare
title: CloudFlare
tags:
- faq
- cloudflare
---

### Não estou conseguindo cadastrar meu Webhook ?

- Crie uma regra de excessão de firewall
- Se a regra não funcionar, desative a proteção antibots

## Regra de excessão de firewall

Exemplo de regra de excessão de firewall:

![CloudFlare Regra de firewall](/img/cloudflare/cloudflare_regra_firewall.png)

## Desabilitar Cloudflare Bot

A solução de antibot da Cloudflare pode bloquear os requests de Webhooks. 

Para desabilitar a proteção antibot, clique no seu dominio, depois Security e Bots

[https://www.cloudflare.com/products/bot-management/](https://www.cloudflare.com/products/bot-management/)