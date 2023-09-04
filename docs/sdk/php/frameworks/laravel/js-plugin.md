---
id: sdk-php-laravel-js-plugin
title: Renderizando o QR Code de uma cobrança Pix no Laravel
tags:
  - php
  - api
  - sdk
  - laravel
---

Para renderizar o QR Code de uma cobrança Pix em uma página da sua aplicação Laravel, acesse o template Blade que irá exibir a cobrança.

Após isso, crie um elemento com o ID `openpix-order` que irá renderizar a cobrança Pix.

```blade
<div id="openpix-order"></div>
```

É necessário carregar um script que renderizará a cobrança Pix:

```blade
<script src="https://plugin.openpix.com.br/v1/openpix.js?appID={{ $appID }}&correlationID={{ $correlationID }}"></script>
```

Nesse template Blade, é necessário passar as seguintes variáveis:
- `correlationID`: O [correlationID](../../../../concepts/correlation-id.md) específico da cobrança.
- `appID`: Seu código de autenticação utilizado durante a criação da cobrança.
