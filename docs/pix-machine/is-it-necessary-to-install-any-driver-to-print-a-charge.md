---
id: is-it-necessary-to-install-any-driver-to-print-a-charge
sidebar_position: 3
title: É necessário instalar algum driver para imprimir uma cobrança?
tags:
  - pix
  - pix-machine
  - pdv
  - maquininha
  - maquininha-pix
  - maquininha pix
  - impressora
  - impressora termica
  - imprimir
---

Dependendo da especificação do sistema operacional e do seu dispositivo em que está sendo utilizado, será necessário sim instalar drivers adicionais para funcionar corretamente.

## macOS

No macOS não possui nenhuma restrição. Você pode conectar o seu dispositivo e imprimir normalmente sem nenhuma
reivindicação.

## Windows

Atualmente para você conectar sua impressora na plataforma será necessário instalar os drivers do seu dispositivo.

Aqui está os links de alguns drivers que recomendados, dado o conhecimentos dos principais modelos:

Modelo                | Drivers
----------------------|-------
MP-4200 TH (Bematech) | https://www.bztech.com.br/downloads/driver-bematech-mp-4200
EPSON TM-T20X         | https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-de-recibos/Epson-TM-T20x/s/SPT_C31CH26031
Jetway JP 500         | http://www.jetway.com.br/suporte-e-downloads/

Caso você já tenha os drivers instalados e não obteve exitô ao
conectar seu dispositivo. Você pode utiliza o [Zadig](https://zadig.akeo.ie/) para reinstalar o driver USB do seu dispositivo.

### Como utilizar o Zadig

1. Entre no site https://zadig.akeo.ie/ e faça o download da última versão
2. Abra o Zadig
3. Clique em `Options` no menu superior

4. Marque a opção `List All Devices`

![step-1](/img/thermal-printer/zadig-step-1.png)

5. Depois selecione seu dispositivo

![step-2](/img/thermal-printer/zadig-step-2.png)

6. Selecione o driver `WinUSB`
7. Clique em `Reinstall Driver`

![step-3](/img/thermal-printer/zadig-step-3.png)

## Linux

Ainda não suportado.
