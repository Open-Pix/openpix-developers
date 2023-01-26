---
id: magento2-plugin
title: Integrating OpenPix with Magento2
sidebar_label: Magento2 OpenPix Plugin
---

### Magento2 Plugin Pix

## Start

This document details steps required to connect your Magento2-based e-Commerce platform to OpenPix. The OpenPix platform performs the reconciliation between your Bank and your e-Commerce in real time.
After connecting your OpenPix account it is possible to charge customers in real time with QrCodes Pix, send Payment Links, manage charges including refunds.

> *Note: This document expects you to already have an active Magento2 environment.*

## 1. Install OpenPix Plugin on your Magento2 instance

[OpenPix For Magento2](https://marketplace.magento.com/openpix-pix.html)

![Banner](/img/ecommerce/woocommerce-banner.png)
![Install](/img/ecommerce/magento2/magento2-marketplace-search.png)

[Download OpenPix Magento2 Plugin - versão 2.0.6](pathname:///magento2/openpix_pix.2.0.6.zip) - Actual version

## 2. Configuring Magento2 Plugin

Go to Magento2 Admin -> Stores > Configuration -> Sales -> Payment Method.

![Payments](/img/ecommerce/magento2/magento2-payments.png)

By clicking on `Credentials` in the OpenPix Plugin.

- [ ] Register an AppID of type Plugin. Create an appID [here](../apis/api-getting-started.md)
- [ ] Create a password for Webhook integration. Webhook is required to update the status of Orders in real time when the Pix charge is paid.

![Credentials](/img/ecommerce/magento2/magento2-credentials.png)

By clicking on `Payment via Pix` in the OpenPix Plugin.

- [ ] Enable or Disable Plugin
- [ ] Customize the payment title within your Store

![Customize](/img/ecommerce/magento2/magento2-customize.png)

### 2.2 Configuring Customer

To save the order's customer in your OpenPix billing, the TaxVat field must be activated to save the respective value of the Customer's CPF/CNPJ.

**Note: If you go without the configuration of this field, your charges will be saved without the same customer.**

Enter Magento2 Admin -> Stores > Configuration -> Customers -> Customer Configuration

![customer-sidemenu](/img/ecommerce/magento2/magento2-customer-sidemenu.png)

First enable the `Show VAT Number on Storefront` field in `Create New Account Options`:

![magento2-customer-create-new-account-options](/img/ecommerce/magento2/magento2-customer-create-new-account-options.png)

Then in `Name and Address Options` activate the field `Show Tax/VAT Number`:

![magento2-customer-name-address-options.png](/img/ecommerce/magento2/magento2-customer-name-address-options.png)

From now on, customers will have to fill in this field with their CPF or CNPJ and, it will be used to save the customer on the OpenPix platform.

### 2.3 Giftback

Important reminder about the [Giftback](../giftback/what-is-giftback.md) feature for magento2. The plugin supports it, but for customers to be covered, only those who use CPF in their purchases will be included in it.

> **The minimum version of the Magento2 plugin to consume the giftback feature is 2.0.6**

## 3. Create the Webhook within the OpenPix Platform

When setting up the Store go back to the OpenPix Platform and register the Webhook who will be responsible for updating your Magento2 Store when a Pix charge is paid.

To register a new Webhook follow the steps below:

- Go to the OpenPix platform and access: Admin -> Settings -> API/Plugins -> New Webhook
- Use the same password registered in your Magento2 store. Webhook is required to update the status of Orders in real time when the Pix charge is paid.
- The Callback URL that must be used in the registration is found right below the field where the webhook password is registered within your Magento2 Store. The default is: <https://youstore.com.br/openpix/index/webhook>

![Webhook](/img/ecommerce/magento2/magento2-openpix-webhook.png)

## 4. Place Order with Pix

Choose the option to pay the order using Pix

![Pay Pix](/img/ecommerce/magento2/magento2-checkout-cart.png)

Pay Pix using your bank's app.

![Order](/img/ecommerce/magento2/m2-cs-1.png)
![Order](/img/ecommerce/magento2/m2-cs-2.png)

Validate Order status changed after payment.

## 5. View Order with Pix

Your customer will be able to view the order placed via Pix within the order details. Just click on the button that will appear inside the order detail page "Click here to see your QRCode"

![Order](/img/ecommerce/magento2/m2-od-1.png)
![Order](/img/ecommerce/magento2/m2-od-2.png)

## Updating the plugin
We advise OpenPix customers to always be up to date with the latest version of the plugin. You can identify it in the installation step.

If your plugin is out of date, just follow the steps of the same installation step and update the plugin files in your ecommerce.

## Debug

To debug the OpenPix plugin we have the log file and you can find it inside `var/log`:

- `openpix.log`: file that concentrates logs referring to the process of creating a new Magento order and consequently the charge on the OpenPix side and the process of updating the Order when paid.
