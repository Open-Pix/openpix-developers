---
id: ruby-sdk-resources
title: Recursos
sidebar_position: 2
tags:
- api
- ruby
- sdk
---

## Lista de recursos disponíveis

### Charges
```ruby
require 'openpix/ruby_sdk'

app_id = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

client = Openpix::RubySdk::Client.new(app_id)

# Listar Charges
response = client.charges.fetch(skip: 0, limit: 10)

# Buscar próxima página
response = client.charges.fetch_next_page!

# Buscar página anterior
response = client.charges.fetch_previous_page!

# Criar um Charge
charge_params = {
  correlation_id: 'my-correlation-id',
  value: 50000
}
# inicializar o body
client.charges.init_body(params: charge_params)
# faz o request para criar o recurso
response = client.charges.save

# Metodos auxiliares para ajudar a construir body de criaçao
# adicionar additional_info
key = "minha-chave#123"
value = "valor desejado"
client.charges.add_additional_info(key, value)

# adicionar interests
interest = 0.5
client.charges.set_interests(interest)

# adicionar fines
fine = 0.2
client.charges.set_fines(fine)

# Buscar um Charge específico
response = client.charges.find(id: "id-do-charge")

# Deletar um Charge específico
response = client.charges.destroy(id: "id-do-charge")
```

### Customer
```ruby
require 'openpix/ruby_sdk'

app_id = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

client = Openpix::RubySdk::Client.new(app_id)

# Listar Customers
response = client.customers.fetch(skip: 0, limit: 10)

# Buscar próxima página
response = client.customers.fetch_next_page!

# Buscar página anterior
response = client.customers.fetch_previous_page!

# Criar um Customer
customer_params = {
  name: 'Client Name',
  tax_id: 12306252832
}
# inicializar o body
client.customers.init_body(params: customer_params)
# faz o request para criar o recurso
response = client.customers.save

# Buscar um Customer específico
response = client.customers.find(id: "id-do-customer")
```

### Payment
```ruby
require 'openpix/ruby_sdk'

app_id = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

client = Openpix::RubySdk::Client.new(app_id)

# Listar Payments
response = client.payments.fetch(skip: 0, limit: 10)

# Buscar próxima página
response = client.payments.fetch_next_page!

# Buscar página anterior
response = client.payments.fetch_previous_page!

# Criar um Payment
payment_params = {
  value: 100,
  correlation_id: "my-correlation-id-123-!@#"
}
# inicializar o body
client.payments.init_body(params: payment_params)
# faz o request para criar o recurso
response = client.payments.save

# Buscar um Payment específico
response = client.payments.find(id: "id-do-payment")
```

### Refund
```ruby
require 'openpix/ruby_sdk'

app_id = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

client = Openpix::RubySdk::Client.new(app_id)

# Listar Refunds
response = client.refunds.fetch(skip: 0, limit: 10)

# Buscar próxima página
response = client.refunds.fetch_next_page!

# Buscar página anterior
response = client.refunds.fetch_previous_page!

# Criar um Refund
refund_params = {
  value: 100,
  correlation_id: "my-correlation-id-123-!@#",
  transaction_end_to_end_id: "my-transaction-id-123-!@#"
}
# inicializar o body
client.refunds.init_body(params: refund_params)
# faz o request para criar o recurso
response = client.refunds.save

# Buscar um Refund específico
response = client.refunds.find(id: "id-do-refund")
```

### Subscription
```ruby
require 'openpix/ruby_sdk'

app_id = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

client = Openpix::RubySdk::Client.new(app_id)

# Criar um Subscription
subscription_params = {
  client: {
    name: "Cliente Legal",
    tax_id: "123456"
  },
  value: 1234
}
# inicializar o body
client.refunds.init_body(params: subscription_params)
# faz o request para criar o recurso
response = client.subscriptions.save

# Buscar um Subscription específico
response = client.subscriptions.find(id: "id-do-subscription")
```

### Webhooks
```ruby
require 'openpix/ruby_sdk'

app_id = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

client = Openpix::RubySdk::Client.new(app_id)

# Listar Webhooks
response = client.webhooks.fetch(skip: 0, limit: 10)

# Buscar próxima página
response = client.webhooks.fetch_next_page!

# Buscar página anterior
response = client.webhooks.fetch_previous_page!

# Criar um Webhook
webhook_params = {
  name: "nome do webhook",
  event: "OPENPIX:CHARGE_CREATED",
  url: "https://meu-endpoint/openpix/webhooks"
}
# inicializar o body
client.webhooks.init_body(params: webhook_params)
# faz o request para criar o recurso
response = client.webhooks.save

# Deletar um Webhook específico
response = client.webhooks.destroy(id: "id-do-webhook")
```
