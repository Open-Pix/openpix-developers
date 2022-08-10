---
id: plugin
title: Plugin
---

The OpenPix Plugin let you easily generate new Pix charges using few lines of code.

## Getting Started
The first thing you need to do, it is to include OpenPix plugin script tag at the bottom of your html file

```html
<script src="https://plugin.openpix.com.br/v1/openpix.js" async />
```

The script should be imported inside of `.html` file. For example, if your application is a React Application, the OpenPix Plugin script will be imported inside of `index.html`.

See the example below:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Demo OpenPix Plugin</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://plugin.openpix.com.br/v1/openpix.js" async /></script>
  </body>
</html>
```

## Initializing the plugin
The plugin is consumed using the native Window Object from Javascript API. For initialize, create an $openpix array on window to communicate with the plugin.
Push your [appID](./app-id) key like below:

```jsx
window.$openpix = [];
window.$openpix.push(['config', { appID: 'YourOpenPixAppId' }]);
```

## Generating a Pix Charge

OpenPix Plugin injects a special `$openpix` variable to enable your application to communicate with Plugin

You can create a new Pix Charge like this:

```jsx
window.$openpix.push([
  'pix',
  {
    value: 1000,
    correlationID: 'myCorrelationId',
    description: 'product A',
  },
]);
```

- value (optional): charge value in cents
- correlationID (required): unique correlationID to identify charge
- description (optional): description to be added to EMV BRCode Pix    

## Listening to Plugin Payment Status
```jsx
const logEvents = (e) => {
   if (e.type === 'PAYMENT_STATUS') {
     if (e.data.status === 'COMPLETED') {
       console.log('the charge was paied');
     }
   }
};

const unsubscribe = window.$openpix.addEventListener(logEvents);

// call unsubscribe when you don't want to list to new events anymore
unsubscribe();
```
