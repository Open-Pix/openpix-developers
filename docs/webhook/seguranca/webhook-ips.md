---
id: webhook-ips
title: "Webhook IPs"
description: "Webhook IPs"
tags:
  - webhook
  - ip
---

Esta página lista os endereços IP que a plataforma Woovi/OpenPix usa ao enviar webhooks. Opcionalmente você pode incluir os endereços abaixo no seu Firewall para limitar acesso aos seus endepoints de webhook na sua infraestrutura. 


IPs para envio de Webhooks ativos
```
- 189.51.60.9
- 138.97.124.129
```

Antigo IP - Será descontinuado em Março/2024
```
177.71.136.66
```


:::warning[**Nota Importante**]

Por medidas de segurança estes IPs podem mudar à qualquer momento, inclusive sem aviso prévio
A Woovi/OpenPix **não** recomenda uso de firewall com IPs fixos, esta lista é informada como referencia. 

:::

Recomendamos uso de ténicas modernas, já disponíveis na plataforma como:

- HMAC
- Senha no Header
- Chave Pública da Plataforma

