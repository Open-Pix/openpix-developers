---
id: ruby-sdk-resources
title: Recursos
sidebar_position: 2
tags:
- api
- ruby
- sdk
---

### Usando os recursos
`Openpix::RubySdk::Client` tem acesso a todos os recursos disponíveis por meio de um método de acesso com o nome do recurso no plural
Ex: Charge -> client.charges (retorna a classe de recurso de cobrança com todos os métodos disponíveis)
```ruby
# Criando a Cobrança
client.charges.init_body(
  params: {
    correlation_id: 'my-correlation-id',
    value: 50000
  }
)
response = client.charges.save
response.success? # should yield true
response.resource_response # API response for this resource, example bellow \/
# {
#   "status" => "ACTIVE",
#   "value" => 100,
#   "comment" => "good",
#   "correlationID" => "9134e286-6f71-427a-bf00-241681624586",
#   ... and so on
# }

# Listando Cobranças
# Default skip is 0 and limit is 100
response = client.charges.fetch(skip: 0, limit: 100) # skip and limit are pagination params, https://developers.woovi.com/api#tag/charge/paths/~1api~1v1~1charge/get
response.pagination_meta # holds information about pagination, like total, hasNextPage and so on
response.resource_response # API response for this resource, should be an array

# If next or previous pages available, there is a convenience method to fetch next or previous pages
# In order to call those methods, you need first to call #fetch or #fetch! to set the pagination params
# Those methods will preserve any :params sent to #fetch or #fetch! method
# BE CAREFUL, those methods only have bang! versions because they have a strong dependency on #fetch, handle properly their errors
client.charges.fetch_next_page!
client.charges.fetch_previous_page!

# Buscando Cobrança
response = client.charges.find(id: 'my-charge-id')
# response has same attributes from save, since it is a single resource response

# Deletando Cobrança
response = client.charges.destroy(id: 'my-charge-id')
response.success? # this operations just returns success
```
### Available resources
Os recursos disponiveis são:
- Charge (charges)
- Customer (customers)
- Payment (payments)
- Refund (refunds)
- Subscription (subscriptions)
- Webhook (webhooks)
### Tratando erros
- Todos os métodos de recursos disponíveis têm seu bang operator, que gera um erro sempre que algo dá errado para que você possa lidar adequadamente com esses casos.
- Todos os erros têm alguma mensagem útil, mostrando o status da resposta e a resposta de erro da API.

As classes de erro são:   
**save!** -> `Openpix::RubySdk::Resources::RequestError`   
**fetch!** -> `Openpix::RubySdk::Resources::RequestError`   
**fetch_next_page!** -> `Openpix::RubySdk::Resources::RequestError`, `Openpix::RubySdk::Resources::NotFetchedError`, `Openpix::RubySdk::Resources::PageNotDefinedError`   
**fetch_previous_page!** -> `Openpix::RubySdk::Resources::RequestError`, `Openpix::RubySdk::Resources::NotFetchedError`, `Openpix::RubySdk::Resources::PageNotDefinedError`   
**find!** -> `Openpix::RubySdk::Resources::RequestError`   
**destroy!** -> `Openpix::RubySdk::Resources::RequestError`

Para a versão segura (sem bang operator) haverá um atributo `error_response` definido na resposta da API sempre que `success?` for falso.
```ruby
response = client.customers.save

unless response.success?
  response.error_response # error response from API
end
```