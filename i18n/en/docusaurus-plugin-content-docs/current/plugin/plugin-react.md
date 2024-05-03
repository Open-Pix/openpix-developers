---
id: plugin-react
title: React Integration
---

If you want to have a more fine grained control of the UI of your application.
You can use [@openpix/react](https://www.npmjs.com/package/@openpix/react) to easily create new charges and receive payment status updates.

## How to install

```jsx
yarn add @openpix/react
```

## Setup Polyfills
This plugin uses core-js to polyfill Promises

Install core-js

```jsx
yarn add core-js
```

Add it to your App entrypoint

```jsx
import 'core-js/stable';
```

## Usage with React

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
        value={brCode}
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

## Usage with React Native or Expo

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
        value={brCode}
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
