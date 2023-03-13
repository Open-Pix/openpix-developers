---
id: plugin
title: Plugin
tags:
- plugin
---
A OpenPix possui 2 plugins para ser utilizados em seu negócio, o Plugin de `Order` e o Plugin de `Widget`.

## O que é necessário saber antes de utilizar os plugins?

- É necessário entender que para utilizar as API's e plugins disponibilizados dentro da OpenPix você precisa ter um AppID válido, veja como criar [aqui](./app-id).

- Ao tentar consumir o plugin para criar uma cobrança você precisa gerar um correlationID único, para conseguir buscar essa cobrança dentro da OpenPix, se você não informar um novo correlationID para uma nova cobrança, sera mostrado a cobrança anterior relacionada a esse correlationID

## Começando com o Plugin de `Widget`

O Plugin de `Widget` permite criar facilmente cobranças Pix dentro do seu frontend Javascript.
E deve ser utilizado quando a cobrança ainda precisa ser criada na OpenPix.

### Criando o Plugin de `Widget`

A primeira coisa é incluir a tag de script do plugin OpenPix na parte inferior do arquivo html
