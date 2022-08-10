---
id: single-sign-on-gmail
title: Setup Single Sign On using GSuite
sidebar_label: Google GSuite & Gmail
---

*Using Single-Sign-On is extremely recommend since they provide better user experience and increase security.*

##  Go inside Google Admin Apps

https://admin.google.com/ac/apps

![google_admin](/img/google-admin.png)

- Click on Saml Apps

https://admin.google.com/AdminHome?hl=en#AppsList:serviceType=SAML_APPS

![saml_apps](/img/google-saml-apps.png)

- Click on `+` button to create a new SAML App

![saml-step1](/img/google-saml-step1-sso.png)

- Click on `Setup my own custom app`

![saml-step2](/img/google-saml-step2-idp.png)

- Download IDP metadata, option 2 (it will be the xml used inside OpenPix)

![saml-step](/img/google-saml-step3-custom-app.png)

Application Name: OpenPix
Description: OpenPix

You can get use one of the following icons for OpenPix Application:


- Configure Service Provider

![saml-step4](/img/google-saml-step4-sp.png)

ACS URL: https://api.openpix.com.br/saml2/login/callback
Entity ID https://api.openpix.com.br/saml2/metadata
Name ID Basic Information Primary Email
Name ID Format EMAIL

# Enable SAML to everybody


# Add IDP xml metadata to your OpenPix organization

https://yourcompany.openpix.com.br/home/company/settings/data
![saml-feedbackhouse](/img/login-saml-feedback.png)