---
title: Tempo de timeout do Webhook
description: Qual o tempo de timeout do Webhook
tags:
  - webhook
---

## Timeout

A prática de Timeout é uma prática comum em sistemas distribuídos, onde um serviço espera por uma resposta de outro serviço por um determinado tempo. Se a resposta não chegar dentro desse tempo, o serviço que fez a requisição para de esperar, e cancela a requisição.

O tempo de timeout do nosso Webhook é de 100 segundos. Ou seja, se a url do serviço que recebe o Webhook não responder em até 100 segundos, a OpenPix cancela a requisição.
