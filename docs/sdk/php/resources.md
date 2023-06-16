---
id: sdk-php-resources
title: Recursos
tags:
  - api
  - php
---

## Clientes

Chame o método `customers` seu cliente da API para obter o recurso de clientes.

([Acesse a documentação deste endpoint da API Rest para mais detalhes](https://developers.openpix.com.br/api#tag/customer)).

### Criar um cliente

Chame o método `create` no recurso de clientes passando um array com os dados do cliente:

([Acesse a documentação deste endpoint da API Rest para mais detalhes](https://developers.openpix.com.br/api#tag/customer/paths/~1api~1v1~1customer/post)).

```php
$customer = [
    "name" => "Dan",
    "taxID" => generateCPF(),
    "email" => "email0@example.com",
    "phone" => "5511999999999",
    "correlationID" => "test-php-sdk-" . generateUUID(),
];

$result = $client->customers()->create($customer);

/**
 * Exemplo de resultado:
 *
 * $result = [
 *     "customer" => [
 *         "name" => "Dan",
 *         "email" => "email0@example.com",
 *         "phone" => "+5511999999999",
 *         "correlationID" => "test-php-sdk-be734fd4-ce4f-4f37-853b-cac3e73ed223",
 *         "taxID" => [
 *           "taxID" => "0000000000",
 *           "type" => "BR:CPF",
 *         ],
 *     ],
 * ];
 */
```

### Obter um cliente

Obtenha um cliente por um ID chamando `getOne` no recurso de clientes:

([Acesse a documentação deste endpoint da API Rest para mais detalhes](https://developers.openpix.com.br/api#tag/customer/paths/~1api~1v1~1customer/get)).

```php
$result = $client->customers()->getOne("test-php-sdk-8e7e3622-b209-46ef-b353-ec568e893177");

/**
 * Exemplo de resultado:
 *
 * $result = [
 *   "status" => "OK",
 *   "customer" => [
 *       "name" => "Dan",
 *       "email" => "email0@example.com",
 *       "phone" => "+5511999999999",
 *       "correlationID" => "test-php-sdk-8e7e3622-b209-46ef-b353-ec568e893177",
 *       "taxID" => [
 *           "taxID" => "00000000000",
 *           "type" => "BR:CPF",
 *       ],
 *   ],
 * ];
 */
```

### Listar clientes

Liste clientes chamando o método `list` no recurso de clientes, que retorna um paginador:

([Acesse a documentação deste endpoint da API Rest para mais detalhes](https://developers.openpix.com.br/api#tag/customer/paths/~1api~1v1~1customer/get)).

```php
$paginator = $client->customers()->list();

$remainingCustomers = 10;

foreach ($paginator as $result) {
    foreach ($result["customers"] as $customer) {
        echo $customer["taxID"]["taxID"]; // CPF do Cliente

        $remainingCustomers--;

        if ($remainingCustomers == 0) break 2;
    }
}
```
