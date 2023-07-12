---
id: ruby-sdk-installation
title: Como começar?
sidebar_position: 1
tags:
- api
- ruby
- sdk
---

## Instalando
Se o seu projeto utiliza Bundle para gerenciar dependencias, simplesmente adicione ao seu Gemfile

```
gem 'openpix-ruby_sdk', '~> 1.1.1' # como boa prática, use a restrição para versões sempre mais especifica possivel, evitando breaking changes
```

## Uso
A classe principal para interagir com o SDK é a `Openpix::RubySdk::Client`.

### Inicializando o client
```ruby
require 'openpix/ruby_sdk'

# Seu AppID via https://app.woovi.com/home/applications/tab/list
app_id = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

client = Openpix::RubySdk::Client.new(app_id)
```

### Chamando a API
O client da acesso aos endpoints da API da OpenPix, no qual sua documentação se encontra [aqui](https://developers.openpix.com.br/api).

Os endpoints disponiveis atraves do SDK sāo:
- Charge (cobranças)
- Customer (clientes)
- Payment (pagamentos)
- Refund (reembolso)
- Subscription (assinaturas/recorrência)
- Webhook (webhooks)

```ruby
# Os endpoints estāo disponiveis dentro do client através de "recursos", acessiveis atraves do nome do recurso no plural, por exemplo, para cobranças (charge)
client.charges # retorna acesso ao endpoint de cobranças

# Com uma instancia de recurso, você ganha acesso aos métodos disponiveis para aquele endpoint
# Por exemplo, para buscar cobranças
api_response = client.charges.fetch

# O retorno da API é devolvido através de uma instancia de Openpix::RubySdk::ApiResponse
# Esse objeto guarda informações da resposta do request, como:
api_response.success? # se o request foi completado sem erros
api_response.pagination_meta # informações sobre paginaçāo
api_response.resource_response # retorno com as cobranças, ou o recurso solicitado

# Caso prefira tratar erros/lidar com Errors ao chamar um endpoint, existem as versões com bang (! exclamaçāo) dos métodos que chamam a API
client.charges.fetch! # levanta um Error caso o request nāo seja bem sucedido
```

### Operações disponiveis em recursos
Em cada recurso podem existir os seguintes métodos:
- `init_body` para inicializar o body de um request POST (criar um recurso)
- `save` para criar request de POST, criando um recurso
- `fetch` para criar um request de GET, listando uma coleçāo de um recurso
- `find` para criar um request de GET, buscando um recurso em especifico
- `destroy` para criar um request de DELETE, deletando um recurso em especifico

#### Descricao de cada operaçāo
`init_body`
```ruby
# Recebe como params
# params (um hash com os atributos de cada recurso)
# rest (um hash para atributos não normalizados/listados na documentaçao que queira enviar mesmo assim)

charge_params = {
  correlation_id: 'my-correlation-id',
  value: 50000
}

client.charges.init_body(params: charge_params)

# uso com rest
client.charges.init_body(params: charge_params, rest: { 'key' => 'value' })
```

`save`
```ruby
# Recebe como params
# extra_headers (um hash que oferece a possibilidade de adicionar headers extras na request)
# return_existing (um boolean que faz com que seja retornado um recurso, caso ele ja exista, saiba mais aqui https://developers.openpix.com.br/docs/concepts/idempotence)

# apos inicializar o body
response = client.charges.save

# uso com return_existing
response = client.charges.save(return_existing: true)

# uso com extra_headers
response = client.charges.save(extra_headers: { authentication: 'BEARER token' })
```

`fetch`
```ruby
# Recebe como params
# skip (parametro utilizado para paginacao, define quantos records "pular" ao retornar os recursos)
# limit (parametro utilizado para paginacao, define quantos records retornar por pagina)
# params (parametro utilizado para passar outros params na URL, por exemplo filtros, como "start", "end")
# extra_headers (um hash que oferece a possibilidade de adicionar headers extras na request)

response = client.charges.fetch

# uso com paginacao
response = client.charges.fetch(skip: 10, limit: 5)

# uso com params
response = client.charges.fetch(params: { start: '2020-01-01T00:00:00Z', end: '2020-01-05T00:00:00Z' })

# uso com extra_headers
response = client.charges.fetch(extra_headers: { authentication: 'BEARER token' })
```

`find`
```ruby
# Recebe como params
# id (parametro utilizado para identificar o recurso que deseja buscar)
# extra_headers (um hash que oferece a possibilidade de adicionar headers extras na request)

response = client.charges.find(id: 'my-id')

# uso com extra_headers
response = client.charges.find(id: 'my-id', extra_headers: { authentication: 'BEARER token' })
```

`destroy`
```ruby
# Recebe como params
# id (parametro utilizado para identificar o recurso que deseja deletar)
# extra_headers (um hash que oferece a possibilidade de adicionar headers extras na request)

response = client.charges.destroy(id: 'my-id')

# uso com extra_headers
response = client.charges.destroy(id: 'my-id', extra_headers: { authentication: 'BEARER token' })
```

### Objeto ApiResponse
O objeto `Openpix::RubySdk::ApiResponse` possui os seguintes metodos para ler a resposta:

- `success?` retorna um booleano indicando se o request foi bem sucedido
- `body` retorna o body retornado pela API atraves de um hash, parseado do JSON recebido
- `status` retorna o status code da resposta da API
- `resource_response` retorna os records retornados pela API, pode ser um Array de records, no caso de uma collection, ou um recurso unico
- `error_response` retorna a mensagem de erro caso o request nāo tenha sido bem sucedido
- `pagination_meta` retorna metadados referente a paginaçao de recursos, no caso de uma collection

### Paginaçao

A SDK possui alguns métodos que ajudam a trabalhar com paginação no caso de recursos de uma collection.

O parametros utilizados para paginação são:
- `skip` define quantos records "pular", ou seja, vai retornar a partir do record skip + 1, **o valor default é 0**
- `limit` define quantos records retornar por página, **o valor default é 100**

```ruby
# Para começar devemos fazer um request com fetch para setar os parametros iniciais
response = client.charges.fetch(skip: 0, limit: 10)

# A partir dai, podemos chamar o fetch_next_page! ou fetch_previous_page! e buscar a proxima página
response = client.charges.fetch_next_page! # perceba que o método possui bang, ou seja, ele vai levantar um error caso a operação seja impossivel de ser executada, faça os tratamentos necessários para poder cuidar desses casos

# IMPORTANTE
# O a paginação vai manter o escopo de filtro utilizado no fetch inicial, ou seja, se você esta filtrando os records por data ou outros filtros, ele irão se manter ao buscar outras páginas.
```

**IMPORTANTE**
A paginação vai manter o escopo de filtro utilizado no fetch inicial, ou seja, se você esta filtrando os records por data ou outros filtros, ele irão se manter ao buscar outras páginas.

### Tratamento de Erros
Todos os recursos disponiveis possuem sua versão com bang (!), que levantam um `Error` sempre que algo de errado aconteça, seja como resposta do request, ou erros de paginação, por exemplo.
Todos os erros estão acompanhados de mensagens e o status code da resposta da API para ajudar a resolver o problema.

Os métodos e as possiveis classes de erro a serem levantadas são:
**save!** -> `Openpix::RubySdk::Resources::RequestError`
**fetch!** -> `Openpix::RubySdk::Resources::RequestError`
**fetch_next_page!** -> `Openpix::RubySdk::Resources::RequestError`, `Openpix::RubySdk::Resources::NotFetchedError`, `Openpix::RubySdk::Resources::PageNotDefinedError`
**fetch_previous_page!** -> `Openpix::RubySdk::Resources::RequestError`, `Openpix::RubySdk::Resources::NotFetchedError`, `Openpix::RubySdk::Resources::PageNotDefinedError`
**find!** -> `Openpix::RubySdk::Resources::RequestError`
**destroy!** -> `Openpix::RubySdk::Resources::RequestError`

Caso não queira que erros sejam levantados, utilize a versão safe (sem bang !), você pode ver a resposta de erro no `error_response` do objeto de resposta sempre que `success?` esteja retornando `false`.
