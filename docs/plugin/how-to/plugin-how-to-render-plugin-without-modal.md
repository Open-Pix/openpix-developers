---
id: how-to-render-plugin-without-modal
title: Como renderizar o Plugin sem o modal?
tags:
  - plugin
  - how-to
---

## Como renderizar o Plugin sem o modal?

Caso você deseja renderizar o nosso plugin diretamente numa div, sem precisar de um modal para isso, você pode
utilizar o seguinte código:

```jsx
window.$openpix.push([
  'charge',
  {
    wrapper: false,
    // restante dos parâmetros relacionados ao pix
    // ...
  },
]);
```

O argumento `wrapper` é um _booleano_ que vai ditar se é necessário renderizar o plugin dentro de um modal ou não.

## Exemplo do plugin renderizado sem modal

![Plugin renderizado sem modal](./__assets__/plugin-screenshot-without-modal.png)
