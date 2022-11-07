---
id: single-sign-on-gmail
title: Configurar Single Sign On usando GSuite
sidebar_label: Google GSuite & Gmail
tags:
- login
- sso
- gmail
---

*Usar o Single-Sign-On é extremamente recomendado, pois fornece uma melhor experiência do usuário e aumenta a segurança.*

##  Entre no Google Admin Apps

Veja em https://admin.google.com/ac/apps

![google_admin](/img/google-admin.png)

- Clique em Saml Apps

Veja em https://admin.google.com/AdminHome?hl=en#AppsList:serviceType=SAML_APPS

![saml_apps](/img/google-saml-apps.png)

- Clique no botão `+` para criar um novo SAML App

### Passo 1

- Configurar detalhes da sua aplicação.

![saml-step1](/img/step-1-google-admin.png)

- Nome da Aplicação;
- Ícone da Aplicação;

### Passo 2

- Configurar detalhes do provedor de identidade do Google

![saml-step2](/img/step-2-google-admin.png)

- Download IDP metadata, opção 1 (será o xml utilizado dentro do OpenPix)

### Passo 3

- Configurar detalhes do provedor de servidor

![saml-step](/img/step-3-google-admin.png)

- ACS URL: https://api.openpix.com.br/saml2/login/callback
- Entity ID (Entidade ID): https://api.openpix.com.br/saml2/metadata
- Name ID (Nome do ID) : Basic Information, Primary Email
- Name ID Format (Formato de ID de nome): EMAIL

# Habilite SAML para todos 

# Adicione metadata xml do IDP à sua organização Openpix

Veja em https://yourcompany.openpix.com.br/home/company/settings/data
![saml-feedbackhouse](/img/login-saml-feedback.png)