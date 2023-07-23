---
id: sdk-php-error-handling
title: Manipulação de erros
tags:
  - php
  - api
  - sdk
---

Ao utilizar o SDK de PHP, espera-se que a integração seja robusta; sendo assim, é fundamental lidar com possíveis imprevistos da API ou do transporte de dados na forma de [_exceptions_](https://www.php.net/manual/en/language.exceptions.php).

Quando a API retorna um erro, uma exception do tipo `\OpenPix\PhpSdk\ApiErrorException` é lançada.

Caso ocorra algum erro no transporte dos dados, o cliente HTTP utilizado irá lançar uma exceção que _estende_ `\Psr\Http\Client\ClientExceptionInterface` de acordo com a [PSR-18](https://www.php-fig.org/psr/psr-18/#clientexceptioninterface).

A mensagem de erro de uma possível exceção pode ser obtida pelo método  [`getMessage`](https://www.php.net/manual/pt_BR/exception.getmessage.php).

Veja como você pode capturar todos os possíveis erros do SDK:

```php
use OpenPix\PhpSdk\ApiErrorException;
use Psr\Http\Client\ClientExceptionInterface;

try {
    $charge = [
        "value" => 100, // R$ 100,00
        "correlationID" => "anothercorrelationid-" . strval(time()),
    ];

  /** @var \OpenPix\PhpSdk\Client $client */
    $result = $client->charges()->create($charge);
} catch (ApiErrorException|ClientExceptionInterface $e) {
    // Lida com os erros relacionados ao SDK.
    echo "Ocorreu um erro durante a criação da cobrança: " . $e->getMessage() . "<br>\n";
}
```