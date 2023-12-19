---
id: plugin
title: Plugin
tags:
  - plugin
---

A OpenPix possui 2 plugins para ser utilizados em seu negócio, o Plugin de `Order` e o Plugin de `Widget`.

## O que é necessário saber antes de utilizar os plugins?

- É necessário entender que para utilizar as API's e plugins disponibilizados dentro da OpenPix você precisa ter um AppID válido, veja como criar [aqui](./app-id).

- Ao tentar consumir o plugin para criar uma cobrança você precisa gerar um correlationID único, para conseguir buscar essa cobrança dentro da OpenPix, se você não informar um novo correlationID para uma nova cobrança, sera mostrado a cobrança anterior relacionada a esse correlationID

## Começando com o Plugin de `Widget`

O Plugin de `Widget` permite criar facilmente cobranças Pix dentro do seu frontend Javascript.
E deve ser utilizado quando a cobrança ainda precisa ser criada na OpenPix.

### Criando o Plugin de `Widget`

A primeira coisa é incluir a tag de script do plugin OpenPix na parte inferior do arquivo html

```html
<script src="https://plugin.openpix.com.br/v1/openpix.js" async>
```

O script pode ser importado dentro de um arquivo `.html`. Por exemplo, se seu aplicativo for um aplicativo em React, o script do Plugin OpenPix será importado dentro de `index.html`.

Veja o exemplo abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Demo OpenPix Plugin</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://plugin.openpix.com.br/v1/openpix.js" async></script>
  </body>
</html>
```

Até este momento, nada deve acontecer, pois o plugin não foi inicializado.
Para confirmar se o plugin foi inicializado corretamente, você pode acessar o console do seu navegador e buscar por esses logs

```
[OpenPix] connecting, attemp 0
[OpenPix] connected
```

### Inicializando o plugin `Widget`

O plugin é consumido usando o objeto `Window` nativo da API Javascript. Para inicializar, crie um array `$openpix` window para se comunicar com o plugin.
Insira a chave do seu [appID](./app-id) como abaixo:

```jsx
window.$openpix = window.$openpix || []; // priorize o objeto já instanciado
window.$openpix.push(['config', { appID: 'YourOpenPixAppId' }]);
```

Agora seu plugin está pronto para ser consumido.

### Gerando uma cobrança Pix

O Plugin OpenPix injeta uma variável `$openpix` especial para permitir que seu aplicativo se comunique com o Plugin

Você pode criar uma nova Cobrança Pix como este:

```jsx
window.$openpix.push([
  'pix',
  {
    value: 1000, // R$ 10,00
    correlationID: 'myCorrelationId',
    description: 'product A',
  },
]);
```

- value (obrigatório): valor da cobrança em centavos, obrigatório em todas as cobranças
- correlationID (obrigatório): correlationID única para identificar a cobrança, obrigatório em todas as cobranças
- description (opcional): descrição a ser adicionada ao EMV BRCode Pix

#### Arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Demo OpenPix Plugin</title>
  </head>

  <body>
    <button onclick="displayOpenPixModal()">Clique para abrir o modal</button>
    <script src="https://plugin.openpix.com.br/v1/openpix.js" async></script>
    <script>
      function displayOpenPixModal() {
        window.$openpix = window.$openpix || [];

        window.$openpix.push([
          'config',
          {
            appID: 'yourOpenPixAppId',
          },
        ]);

        window.$openpix.push([
          'pix',
          {
            value: 1000,
            correlationID: 'randomCorrelationID',
            description: 'product A',
          },
        ]);
      }
    </script>
  </body>
</html>
```

#### Resultado

![photo-example-plugin](/img/plugin/photo-example-plugin.png)

### Gerando uma cobrança Pix com Cliente

Você pode criar uma nova Cobrança Pix adicionando um cliente assim:

```jsx
window.$openpix.push([
  'pix',
  {
    value: 1000, // R$ 10,00
    correlationID: 'myCorrelationId',
    description: 'product A',
    customer: {
      name: 'Customer',
      email: 'customer@gmail.com',
      taxID: '098.969.330-90',
      phone: '+5511940461111',
    },
  },
]);
```

- customer (opcional): cliente selecionado a ser cobrado
  - name: nome do cliente
  - email: email do cliente
  - taxID: CPF ou CNPJ do cliente
  - phone: telefone do cliente

### Gerando uma cobrança Pix com Informações Adicionais

Você pode criar uma nova cobrança Pix com informações adicionais da seguinte forma:

```jsx
window.$openpix.push([
  'pix',
  {
    value: 1000, // R$ 10,00
    correlationID: 'myCorrelationId',
    description: 'product A',
    additionalInfo: [
      {
        key: 'Product',
        value: 'Pencil',
      },
      {
        key: 'Order',
        value: '1748',
      },
    ],
  },
]);
```

- additionalInfo (opcional): Informações adicionais relacionadas a cobrança
  - key: chave que contêm o valor da informação adicional
  - value: é um valor que contêm a informação adicional passada. Ex: '123'

`Obs: quando o usuário scanear o QrCode ele irá ver`

#### Resultado

![photo-example-additionalInfo](/img/plugin/photo-example-additionalInfo.png)

### Gerando uma cobrança Pix com Tempo de Expiração

Você pode criar uma nova cobrança Pix com um tempo de expiração da seguinte forma:

```jsx
window.$openpix.push([
  'pix',
  {
    value: 1000, // R$ 10,00
    correlationID: 'myCorrelationId',
    expiresIn: 2100, // 35 minutos em segundos
  },
]);
```

- expiresIn (opcional): tempo em segundos que a cobrança permanecerá disponível.
  - Deve ser maior que 15 minutos
  - Exemplo: `expiresIn: 1200` = 20 minutos

#### Quando a cobrança expirar ela terá este layout

![photo-example-expired](/img/plugin/photo-example-expired.png)

### Consultar o Estado de Pagamento do Plugin

Os eventos disponiveis são

- `CHARGE_COMPLETED`: quando a cobrança foi paga pelo cliente e deu baixa na OpenPix.
- `CHARGE_EXPIRED`: quando a cobrança foi expirada.
- `ON_CLOSE`: quando o modal da cobrança foi fechado.
- `ON_ERROR`: quando ocorre algum erro no plugin.

```jsx
const logEvents = (e) => {
  if (e.type === 'CHARGE_COMPLETED') {
    console.log('a cobrança foi paga');
  }

  if (e.type === 'CHARGE_EXPIRED') {
    console.log('a cobrança foi expirada');
  }

  if (e.type === 'ON_CLOSE') {
    console.log('o modal da cobrança foi fechado');
  }

  if (e.type === 'ON_ERROR') {
    console.log('ocorreu um erro');
  }
};

// only register event listener when plugin is already loaded
if (!!window.$openpix?.addEventListener) {
  const unsubscribe = window.$openpix.addEventListener(logEvents);

  // parar de escutar os eventos
  // unsubscribe();
}
```

#### Exemplo de arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Demo OpenPix Plugin</title>
  </head>

  <body>
    <button onclick="displayOpenPixModal()">Clique para abrir o modal</button>
    <script src="https://plugin.openpix.com.br/v1/openpix.js" async></script>
    <script>
      function displayOpenPixModal() {
        window.$openpix = window.$openpix || []; // priorize o objeto já instanciado

        window.$openpix.push([
          'config',
          {
            appID: 'yourAppId',
          },
        ]);

        window.$openpix.push([
          'pix',
          {
            value: 1000, // R$ 10,00
            correlationID: 'yourRandomCorrelationId',
          },
        ]);

        const logEvents = (e) => {
          if (e.type === 'CHARGE_COMPLETED') {
            console.log('a cobrança foi paga');
          }

          if (e.type === 'CHARGE_EXPIRED') {
            console.log('a cobrança foi expirada');
          }

          if (e.type === 'ON_CLOSE') {
            console.log('o modal da cobrança foi fechado');
          }

          if (e.type === 'ON_ERROR') {
            console.log('o modal da cobrança foi fechado');
          }
        };

        // only register event listener when plugin is already loaded
        if (!!window.$openpix?.addEventListener) {
          const unsubscribe = window.$openpix.addEventListener(logEvents);

          // parar de escutar os eventos
          // unsubscribe();
        }
      }
    </script>
  </body>
</html>
```

## Começando com o Plugin de `Order`

O Plugin de `Order` é utilizado somente para mostrar cobranças já criadas na OpenPix, ou seja, você cria essa cobrança em um backend, e depois exibe ela consumindo o plugin de `Order`.
Nele todos os eventos de cobrança paga e expirada funcionam, e são atualizados em tempo real.

### Criando o Plugin de `Order`

Semelhante ao Plugin de `Widget` você precisa criar um arquivo `.html` criar uma div em que você gostaria que o plugin fosse injeto, e criar uma tag script para o plugin.

Porém nessa chamada você informa alguns outros dados, como `appID`, `correlationID` e `node` via query-string. Esse node é referente ao atributo id do elemento que você quer que o plugin seja injetado.
ex: `?appID=<APPIDVALIDO>&correlationID=<CORRELATION-ID-VALIDO>&node=<DIV-PARA-INJETAR>`

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Demo OpenPix Plugin</title>
  </head>

  <body>
    <div id="openpix-order"></div>
    <!-- o node nesse caso é "openpix-order" -->
    <script src="https://plugin.openpix.com.br/v1/openpix.js?appID=appID&correlationID=appID&node=openpix-order"></script>
  </body>
</html>
```

#### Resultado

![order-example-plugin](/img/plugin/photo-example-plugin.png)
