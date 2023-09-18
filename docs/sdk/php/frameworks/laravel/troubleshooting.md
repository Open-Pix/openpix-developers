---
id: sdk-php-troubleshooting
title: Solução de problemas
tags:
  - laravel
  - api
  - sdk
---

Veja sobre os possíveis problemas que podem ocorrer ao utilizar nossa integração com o Laravel:

## `cURL error 60: SSL certificate problem: unable to get local issuer certificate`

Esse erro ocorre quando o certificado SSL está ausente ou inválido, principalmente ao acessar um servidor local de desenvolvimento ou um servidor com configurações de segurança inadequadas.

Para resolver:

1. Baixe o último certificado em https://curl.haxx.se/ca/cacert.pem
2. Adicione essa configuração em seu arquivo `php.ini`: `curl.cainfo="/caminho/para/o/arquivo/cacert.pem"`
3. Reinicie o servidor se necessário.

Veja alguns links que podem ser úteis:

- https://stackoverflow.com/questions/24611640/curl-60-ssl-certificate-problem-unable-to-get-local-issuer-certificate
- https://github.com/guzzle/guzzle/issues/1935#issuecomment-371756738
