---
id: getting-started
title: Setup the OpenPix Platform
sidebar_label: Getting Started
---

OpenPix platform is designed to facilitate developer experience while ensuring highest level of security. This document helps Developers or system administrators to properly setup the platform.

*Using automated methods such as Single-Sign-On and APIs are preferred since they provide better user experience, increase security and automate processes.*

## Getting started

Once logged for the first time in the platform you'll be able to invite more users to the platform, setup login methods such as single-sign-on, APIs or even import users using Excel files.

## Setting up Single Sign-On (SSO)

OpenPix supports multiple SSO identity providers (IdP). An Identity Provider is a server that can provide identity information about users of your company. For example, Google can be an Identity Provider for companies using the G Suite solution. If your company is using G Suite you can log automatically into OpenPix using your Google account. then a Google server will send your identity information to that site.

### Azure Single Sign On

If your company uses Azure Single Sign On you'll be able to automatically login into OpenPix using Azure as IdP. In order to use this login strategy you need to active this option in the settings menu.

### Google Single Sign On

If your company uses G Suite you'll be able to automatically log into OpenPix using Google as IdP.

### SAML Single Sign on

If your company uses SAML be able to automatically log into OpenPix SAML Servers as IdP.

## Security & Firewall

### Whitelisting OpenPix Domains

In order to properly operate your company users need to be able to access OpenPix servers. OpenPix uses standard web technologies and enforces encryption in all communications, in most cases your setup should work out of the box with not additional requirements.

If you encounter issues using the platform please check the following requirements.

- Ensure you have white list OpenPix domains in your proxy server, or internal firewall. Your users should be able to access all domains and subdomains.
  
  > You have to white list all OpenPix domains *.openpix.com.br

- Ensure you are not blocking emails from OpenPix domain.
  
  > You have to white list all OpenPix domains *.openpix.com.br in your email provider
  
- Do not cache

    > Do not change or enforce new cache policies for OpenPix static content or IP address. OpenPix uses a global CDN network and additional server protections so IPs change often and without notice.
