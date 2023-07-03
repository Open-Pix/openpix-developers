---
id: ruby-sdk-installation
title: Como começar?
sidebar_position: 1
tags:
- api
- ruby
- sdk
---

## Como instalar o OpenPix Ruby Sdk
Para instalar via Bundler, adicione a seguinte linha ao seu `Gemfile`.
```shell
gem 'openpix-ruby_sdk', '~> 0.1.0'
```

Para instalar manualmente `openpix-ruby_sdk` via Rubygems:
```shell
gem install openpix-ruby_sdk -v 1.0.0
```

## Uso
A classe principal `openpix/ruby_sdk/client` é seu ponto de entrada para os endpoints.

### Autenticando cliente
```ruby
require 'openpix/ruby_s

# Seu AppID via https://app.woovi.com/home/applications/tab/list
app_id = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

cliente = Openpix::RubySdk::Client.new(app_id)
```