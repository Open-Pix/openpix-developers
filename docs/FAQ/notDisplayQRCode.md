---
id: faq-not-display-QRCode-checkout
title: QrCode-Magento1
sidebar_label: QrCode Checkout Magento1
---

### O QR Code não aparece no checkout Magento1

Caso você possua um checkout personalizado em sua loja Magento, pode ser que o QR Code não apareça no checkout. Isso por que nossos arquivos ficam nas pastas padrões do Magento e o checkout personalizado em outra.

Para corrigir isso, você precisa copiar os arquivos da pasta
`app/design/frontend/base/default/template/openpix/*` e da pasta `app/design/frontend/base/default/layout/openpix/*` para a pasta em que está o seu checkout personalizado ex: `app/design/frontend/layout-personalizado/template/openpix/*` e `app/design/frontend/layout-personalizado/layout/openpix/*`.
