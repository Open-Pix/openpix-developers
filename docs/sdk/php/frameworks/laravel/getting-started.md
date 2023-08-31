---
id: sdk-php-laravel-getting-started
title: Começando sua integração OpenPix com Laravel
tags:
  - php
  - api
  - sdk
---

[Laravel](https://laravel.com/) é um poderoso framework em PHP com uma sintaxe elegante e expressiva, que permite avançar rapidamente em suas soluções, sem se preocupar com detalhes pequenos.

A [OpenPix](https://woovi.com) vai além de uma plataforma: é um portal para o futuro dos negócios. Nesse espaço, você não só recebe pagamentos via Pix, mas também mergulha em oportunidades para encantar clientes, aumentar vendas e reinventar a gestão financeira do seu negócio. Com a OpenPix, você não apenas vende; você **transcende**.

Unindo a força do Laravel à OpenPix, você não apenas **aumentará suas vendas**, mas também se moverá de forma **rápida**.

## Instalando o SDK de PHP em seu projeto Laravel

O SDK PHP foi criado com o propósito de simplificar a integração dos serviços da OpenPix às suas aplicações em PHP, assegurando uma integração suave e eficiente. Essa é a abordagem **ideal** para implementar a OpenPix em seus projetos do Laravel.

Comece garantindo que você tenha instalado um cliente HTTP e uma implementação PSR-17:

```bash
composer require guzzlehttp/guzzle guzzlehttp/psr7
```

Após esse passo, prossiga instalando nosso SDK:

```bash
composer require open-pix/php-sdk
```

## Configurando o SDK de PHP

### Autenticação

É necessário você possuir um AppID para autenticação.

É possível criar acessando a [plataforma](https://app.woovi.com/home/applications/add) na página de criar uma nova API/Plugin.

### Armazenando as configurações

Agora que você tem um AppID, é necessário armazená-lo de forma segura dentro da sua aplicação, evitando compartilhá-lo nos sistemas de controle de versão.

O local ideal para armazenar configurações da API seria em seu arquivo `.env`. [Saiba mais](https://laravel.com/docs/10.x/configuration#environment-configuration) na documentação do Laravel.

Esse arquivo é utilizado para armazenar configurações e não é enviado para seu sistema de controle de versão, como o Git.

Adicione essas duas configurações em seu arquivo `.env`:
```bash
OPENPIX_APP_ID="COLOQUE SEU APP ID AQUI"
OPENPIX_BASE_URI="https://api.openpix.com.br"
```

Após esse passo, limpe o [cache de configurações](https://laravel.com/docs/10.x/configuration#configuration-caching):
```bash
php artisan config:clear
```

### Registrando o SDK

Iremos registrar o SDK no [contêiner de serviços](https://laravel.com/docs/10.x/container) do Laravel utilizando [service providers](https://laravel.com/docs/10.x/providers).

De forma simplificada, o contêiner de serviços é responsável por gerenciar os objetos de serviço da aplicação, enquanto um provedor de serviço (_service provider_) tem a responsabilidade de registrar um objeto nesse contêiner.

Ao registrar o SDK no contêiner, você poderá [utilizá-lo em qualquer parte](https://laravel.com/docs/10.x/container#resolving) da sua aplicação com facilidade, sem a necessidade de instanciá-lo repetidamente.

Para criar o provedor de serviço `OpenPixServiceProvider`, execute o [comando abaixo](https://laravel.com/docs/10.x/providers#writing-service-providers):

```bash
php artisan make:provider OpenPixServiceProvider
```

Altere o método register para que possa efetuar o registro do cliente no contêiner, utilizando como referência o provedor de serviço abaixo:

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use OpenPix\PhpSdk\Client;

class OpenPixServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(Client::class, function () {
            $appId = env('OPENPIX_APP_ID');
            $baseUri = env('OPENPIX_BASE_URI', 'https://api.openpix.com.br');

            return Client::create($appId, $baseUri);
        });
    }
}
```

Após criar o provedor de serviços, é necessário [registrá-lo](https://laravel.com/docs/10.x/providers#registering-providers), adicionando-o ao arquivo de configuração `config/app.php`:

```php
    // ...
    'providers' => ServiceProvider::defaultProviders()->merge([
        // ...

        /*
         * Application Service Providers...
         */

        // ...
        App\Providers\OpenPixServiceProvider::class,
    ])->toArray(),
    // ...
```

Não se esqueça de limpar o cache de configuração, já que você fez uma atualização nas configurações:

```bash
php artisan config:clear
```

## Como utilizar o SDK

Após ter realizado o registro do SDK no contêiner, utilizar nossa API nos controller, classes de serviço, rotas, entre outros, torna-se uma tarefa bastante simples. Explore as diversas possibilidades disponíveis na [documentação do Laravel](https://laravel.com/docs/10.x/container#resolving).

Por exemplo, para utilizar a nossa API em um controller, siga o exemplo abaixo:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenPix\PhpSdk\Client;

class DonationController extends Controller
{
    public function __construct(private Client $openpix)
    {}

    public function create()
    {
        $this->openpix->charges()->create([
            // Cria uma cobrança de 1 centavo.
            "value" => 1,
        ]);
    }
}
```

Nesse exemplo, estamos utilizando a funcionalidade de [injeção automática](https://laravel.com/docs/10.x/container#automatic-injection) do Laravel.