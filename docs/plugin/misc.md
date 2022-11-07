---
id: misc
title: Misc
tags:
- misc
- plugin
---

## Gerando uma Cobrança Pix Estática

```jsx
window.$openpix.push([
  'static',
  {
    key: 'pixKey - cpf/email/phone',
    value: 1000,
    name: 'Merchant Name',
    reference: 'Description name',
  },
]);
```

- key (obrigatório): chave de pix para receber o pagamento
- value (opcional): valor de cobrança em centavos
- name (opcional): nome do comerciante
- reference (opcional): descrição desta cobrança
