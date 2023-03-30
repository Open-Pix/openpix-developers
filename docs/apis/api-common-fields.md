---
id: api-common-fields
title: Campos Comum
tags:
  - api
  - comecando
  - getting-started
---

Este documento irá ajudá-lo a entender como alguns campos retornados pela API funcionam.

### taxID

Os campos de taxID retornam um objeto com duas chaves, `type` e `taxID`:

```ts
taxID: {
  type: string,
  taxID: string,
}
```

O campo de `type` significa o tipo daquele `taxID`, como por exemplo `BR:CNPJ` ou `BR:CPF`, ja o campo de `taxID` dentro do objeto refere ao valor do documento em si.

### value

Os campos de `value` quando dentro do contexto de fundos monetários, sempre retornam o valor em **centavos**, por exemplo:

```ts
value: 1000;
```

Isso significa que o valor equivale a **R$10,00**.
