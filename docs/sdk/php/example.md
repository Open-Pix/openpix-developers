---
id: sdk-php-example
title: Exemplo de integração
sidebar_position: 2
tags:
  - api
  - php
  - sdk
---

Preparamos um exemplo de utilização com o SDK de PHP no repositório [Open-Pix/php-backend-integration](https://github.com/Open-Pix/php-backend-integration).

Consiste numa API simples para realizar doações.

Demonstramos como você pode criar uma cobrança, lidar com webhooks, instalar o SDK e mais.

O código encontra-se em um formato simples e contém uma quantidade significativa de comentários, a fim de facilitar o seu entendimento.

## Como você pode executar

Faça o clone do repositório: `git clone https://github.com/Open-Pix/php-backend-integration.git`.

Entre no diretório do repositório: `cd php-backend-integration`.

Copie o arquivo `env.example.php` para `env.php` e configure seu AppID da OpenPix.

Caso tenha o [Docker Compose](https://docs.docker.com/compose/install/) instalado, execute o seguinte comando:
```bash
docker-compose up
```

Tendo o [Composer](https://getcomposer.org) e o PHP `>=8.1.0` instalados diretamente em sua máquina, execute o comando `./start-server.sh`.

A partir desse momento, a API estará rodando em http://0.0.0.0:8080 por padrão.

Para tornar as coisas ainda mais convenientes, adicionamos um arquivo [`postman.json`](https://github.com/Open-Pix/php-backend-integration/blob/main/postman.json) ao repositório, o qual contém uma coleção de _endpoints_ do [Postman](https://www.postman.com/).