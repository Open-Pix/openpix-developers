---
id: oracle-commerce-cloud
title: Integrating Oracle Commerce Cloud and OpenPix
sidebar_label: Oracle Commerce Cloud
tags:
- ecommerce
- occ
- oracle
---

### Plugin OpenPix Pix for OCC - Oracle Commerce Cloud

## Summary

This document details a step by step configuration guide for OCC and OpenPix integration

> *Note: This setup requires that you already have an enabled Oracle Commerce Cloud environment.*

## OCC Registered Applications

Inside your OCC Admin instance, go to Settings -> Web APIs -> Registered Applications
Click in Register Application, to create a new application to be used by OpenPix

![Registered Applications](/img/occ/register-application.png)

You are going to use ApplicationID and ApplicationSecret to create an OpenPix application of type Oracle OCC.

## OpenPix Cash Gateway Extension

Inside your OCC Admin instance, go to Settings -> Extensions
Upload OpenPix Cash Gateway Extension

[OpenPix Cash Gateway Extension - version 1.0.0](pathname:///occ/openpix-cash-gateway-1.0.0.zip)

The configuration should be similar as the above image.

![Cash Gateway](/img/occ/cash-gateway.png)

## Configure Payment Gateway

![Payment Gateway](/img/occ/payment-gateway.png)

- OpenPix AppID

Create a new Application of type Oracle OCC inside your OpenPix account to get the AppID. Follow this [step by step guide](../apis/api-getting-started.md)

![App](/img/ecommerce/occ-app.png)

- Payment Methods

Mark payment method `Cash` and also `Include Order` on webhook

- Edit Countries

Select countries where this payment gateway will be available (usually Brazil).

### Storefront configuration

Download OpenPix OSF OCC Widgets reference implementation 
[OpenPix OCC Widgets - version 1.0.0](pathname:///occ/openpix-occ-widgets-1.0.0.zip)

Copy the code inside your OSF Workspace and Storefront App plugins components folder

```
<osf-workspaces>/packages/apps/<storefront-app/src/plugins/components/
```

#### OpenPix Components

- _OpenpixCheckoutCash

OpenpixCheckoutCash enables shopper to select the payment method with Pix inside Checkout Payment and Checkout Pending Payment

You should add it to your `checkout-payment-methods-container` inside Design -> Layout.

![Checkout Payment Methods Container](/img/occ/checkout-payment-methods-container.png)

- _OpenpixCheckoutOrderConfirmation

OpenpixCheckoutOrderConfirmation enables shopper to see Pix QRCode to be able to pay the order from Checkout Order Confirmation or Order Details page.

You should add it to your `profile-order-details-container` of OrderDetails layout, and also to `checkout-order-confirmation-container` of Checkout Order Confirmation layout.

![Profile Order Details Container](/img/occ/profile-order-details-container.png)

![Checkout Order Confirmation Container](/img/occ/checkout-order-confirmation-container.png)

### Shopper View

Inside Checkout Payment shopper will see Pay with Pix payment method.

![Shopper Checkout Pix](/img/occ/shopper-checkout-pix.png)

After place order shopper will see the Pix QRCode inside Order Confirmation page

![Shopper Order Confirmation](/img/occ/shopper-order-confirmation.png)



