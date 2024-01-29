---
id: sdk-php-laravel-getting-started-example
title: Começando sua integração OpenPix com Laravel
tags:
  - php
  - api
  - sdk
---

Temos um exemplo de integração com o SDK de PHP e Laravel preparado para você em nosso repositório do GitHub: [https://github.com/Open-Pix/laravel-backend-integration](https://github.com/Open-Pix/laravel-backend-integration)

Mostra o fluxo do SDK de PHP em ação, incluindo a criação de cobranças, a atualização dos status das doações em tempo real por meio de webhooks, bem como a instalação e configuração do SDK de PHP, e muito mais.

## Instalação

### Pré-requisitos

- Tenha um [App ID](https://developers.openpix.com.br/docs/plugin/app-id) em sua conta OpenPix.
- Ter Docker ou Composer e MySQL instalados.

### Laravel Sail / Docker (maneira recomendada)

Nossa aplicação de exemplo dispõe de uma configuração do [Laravel Sail](https://laravel.com/docs/10.x/sail), a qual está disponível para proporcionar uma interface perfeitamente integrada com o Docker em suas aplicações Laravel.

Siga as etapas abaixo para usar o Docker via Sail:

- Tenha o [Docker Compose](https://docs.docker.com/compose/install/) instalado.
- Clone o repositório: `git clone https://github.com/Open-Pix/laravel-backend-integration`
- Vá para o diretório do repositório: `cd laravel-backend-integration`
- [Instale as dependências do Composer utilizando Docker](https://laravel.com/docs/10.x/sail#installing-composer-dependencies-for-existente-projects):

  ```bash
  docker run --rm \
     -u "$(id -u):$(id -g)" \
     -v "$(pwd):/var/www/html" \
     -w /var/www/html \
     laravelsail/php82-composer:latest \
     composer install --ignore-platform-reqs
  ```

- Copie `.env.example` para `.env`: `cp .env.example .env`
- Configure seu AppID no arquivo `.env`.
- Inicie os serviços (servidor, banco de dados e etc.): `./vendor/bin/sail up -d`.
- Gere uma chave de criptografia: `./vendor/bin/sail art key:generate`
- Execute as migrações do banco de dados: `./vendor/bin/sail art migrate`.
- [Certifique-se de que as alterações no arquivo `.env` tenham efeito limpando o cache:](https://laravel.com/docs/10.x/configuration#configuration-caching): `php artisan config:clear`.

### Composer

Tendo o [Composer](https://getcomposer.org) e o PHP `>=8.2.0` instalados diretamente em sua máquina, siga os passos:

- Clone o repositório: `git clone https://github.com/Open-Pix/laravel-backend-integration`
- Vá para o diretório do repositório: `cd laravel-backend-integration`
- Instale as dependências do Composer: `composer install`
- Copie `.env.example` para `.env`: `cp .env.example .env`
- Gere uma chave de criptografia: `php artisan key:generate`
- Execute as migrações do banco de dados: `php artisan migrate`
- Inicie o servidor: `php artisan serve`
- Configure seu AppID no arquivo `.env`.
- [Certifique-se de que as alterações no arquivo `.env` tenham efeito limpando o cache:](https://laravel.com/docs/10.x/configuration#configuration-caching): `php artisan config:clear`.

## Acessando o exemplo

Por padrão, a aplicação web é executada na URL [http://0.0.0.0](http://0.0.0.0).

## Visualização de logs

Os logs deste exemplo de integração estarão na pasta de armazenamento de logs do Laravel, sendo por padrão `storage/logs`.

Saiba mais na [documentação do Laravel](https://laravel.com/docs/10.x/logging).

## Solução de problemas

Preparamos um guia para você com possíveis soluções para problemas. [Saiba mais](./troubleshooting.md).
