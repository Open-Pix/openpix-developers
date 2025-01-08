---
id: plugin-react
title: Integração React
tags:
- plugin
- react
---

Se você deseja ter um controle melhor da IU do seu aplicativo
Você pode usar [@openpix/react](https://www.npmjs.com/package/@openpix/react) para criar facilmente novas cobranças e receber atualizações de status de pagamento.

## Como instalar

```jsx
pnpm install @openpix/react
```

## Configurar Polyfills
Este plugin usa o core-js para polyfill Promises

Instale core-js

```jsx
pnpm install core-js
```

Adicione seu entrypoint do seu App

```jsx
import 'core-js/stable';
```

## Usando com React

```jsx
import 'core-js/stable';
import { useState } from 'react';
import { useOpenPix } from '@openpix/react';
import QRCode from 'qrcode.react';

const App = () => {
  const [charge, setCharge] = useState(null);
  
  const onPay = (charge) => {
    // TODO do something
    console.log('charge was paid');
  }

  const { chargeCreate } = useOpenPix({
    appID: process.env.APP_ID,
    onPay,
  });

  const newCharge = async () => {
    const payload = {
      correlationID: 'myCorrelationID',
      value: 1, // one cent
      comment: 'Donate',
    }

    const { charge, error } = await chargeCreate(payload);

    if (error) {
      setError(error);
      return;
    }

    setCharge(charge);
  }

  if (charge) {
    return (
      <QRCode
        size={200}
        renderAs={'svg'}
        value={charge.brCode}
        includeMargin={false}
      />
    );
  }

  return (
    <>
      <button onClick={newCharge}>
        Create New Charge
      </button>
    </>
  )
}
```

## Usando com React Native ou Expo

```jsx
import 'core-js/stable';
import { useState } from 'react';
import { useOpenPix } from '@openpix/react';
import QRCode from 'react-native-qrcode-svg';

const App = () => {
  const [charge, setCharge] = useState(null);
  
  const onPay = (charge) => {
    // TODO do something
    console.log('charge was paid');
  }

  const { chargeCreate } = useOpenPix({
    appID: process.env.APP_ID,
    onPay,
  });

  const newCharge = async () => {
    const payload = {
      correlationID: 'myCorrelationID',
      value: 1, // one cent
      comment: 'Donate',
    }

    const { charge, error } = await chargeCreate(payload);

    if (error) {
      setError(error);
      return;
    }

    setCharge(charge);
  }

  if (charge) {
    return (
      <QRCode
        size={200}
        value={charge.brCode}
      />
    );
  }

  return (
    <>
      <button onClick={newCharge}>
        Create New Charge
      </button>
    </>
  )
}
```
