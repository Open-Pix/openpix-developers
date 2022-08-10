---
id: flow-company-bank-test
title: Testing Pix without Real Money
---

To generate new charges in OpenPix you need to create a Company Bank that represents a bank Pix Provider.

To avoid costs while testing OpenPix, we have a special Company Bank for tests.
Each charge created using the Company Bank test won't generate costs in your Bank neither will have you spend any money.

## How to create a Test Company Bank

Click on `Ajustes -> Pix -> Registrar nova Conta Bancária` [https://yourcompany.openpix.com.br/home/openpix/bank-create](https://yourcompany.openpix.com.br/home/openpix/bank-create)

Select Bank 555 - Test, and fill all the other fields with any dummy data.

![Company Bank Test](/img/company-bank-test.png)

Mark this Company Bank as your default provider like below:

![Company Bank Default](/img/company-bank-default.png)

After this you can create a new Charge and scan the QRCode using your Mobile Phone Camera

The QRCode isn't a valid EMV BRCode, but a url that simulates the payment
