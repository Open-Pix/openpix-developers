---
id: misc
title: Misc
---

## Generating a Pix Static Charge

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

- key (required): pix key to receive payment
- value (optional): charge value in cents
- name (optional): merchant name
- reference (optional): description of this charge
