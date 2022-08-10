---
id: api-getting-started
title: Getting Started
---

This document will help you with getting started with OpenPix APIs. 

### Creating new API key

All APIs request must be authenticated with a API key. 

In order to use APIs you first need to create a new API key. You can create API keys any time at your company API options page (*needs to be logged*).

`Admin Panel` > `Permissions` > `APIs` and generate a new API key. 

In order to create APIs keys you need to have `ADMIN` privileges.

### API Usage Guidelines

- All API `requests` and `responses` use JSON format
- API backend servers IPs and Certificates change constantly, please don't cache neither sever IPs nor certificates
- All requests must be encrypted using `https`

### APIs Keys Security

APIs keys are extremely powerful since they can create or read data from your company. Key should be stored and shared with extra care.

API Guidelines:

- Don't share keys with third parties
- Don't re-use keys - Access Keys, you can generate multiple keys
- Only generate keys when needed
- Disable unused keys

### APIs Restrictions

- Header and Payload Size limits: Any request, regardless of the endpoint used, must not exceed 10Mb. 
- Rate limit: You can't exceed 10 requests/second.
