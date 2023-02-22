---
id: plugin-faq
title: FAQ
tags:
  - plugin
  - api
  - faq
---

## Como Utilizar o Plugin JavaScript dentro de um iframe?

Para utilizar o Plugin JavaScript dentro de um iframe, você deve adicionar o atributo `allow="clipboard-read; clipboard-write"` no iframe.

Exemplo

```html
<iframe
  class="frameapp"
  frameborder="0"
  src="https://woovi.com/cashback"
  width="372"
  height="555"
  style="border: 10px blue solid;"
  allow="clipboard-read; clipboard-write"
></iframe>
```