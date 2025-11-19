---
id: how-to-configure-for-sandbox
title: Como configurar o sdk para acessar o ambiente sandbox/teste?
sidebar_position: 4
tags:
  - api
  - node
  - js
  - javascript
  - ts
  - typescript
  - sdk
  - test
  - sandbox
---

Para configurar o sdk para utilizar os endpoints de sandbox basta alterar a contante que guarda a url base.

## Como alterar a url base

Para alterar siga os seguintes passos:
* acesse o arquivo que guarda as constantes do sdk: [src/utils/constants/index.ts](https://github.com/woovibr/woovi-nodejs-sdk/blob/1d32edf47fb5634adb6ff7bbb7ea4db15d80cc0a/src/utils/constants/index.ts)
* procure pela constante `API_BASE_URL` que se encontra no inicio do arquivo
```TS
import type { BinaryToTextEncoding } from "node:crypto";

export const API_BASE_URL = "https://api.woovi.com" as const; //<- aqui se encontra a constante
export const API_RETRIES = 1 as const;
export const API_RETRIE_DELAY = 1000 as const;

export const SDK_VERSION: string = "1.0.0";

//... resto do arquivo
```

* agora basta alterar para `https://api.woovi-sandbox.com"`
* pronto o sdk agora ira sempre chamar os endpoints de sandbox

OBS: para voltar a chamar o endpoint de produção basta refazer o processo inserindo `https://api.woovi.com"`


