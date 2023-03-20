---
id: security-self-assessment
title: Security Self Assessment
tags:
- security
---

*Versão: Março de 2021*

*Histórico do documento*

| Data  | Descrição | Autor | Revisores |
| -  | - | - | - |
| Março de 2021 | Inclusão novas questões | JHS | SIBS, RAT |


## Self Assessment - Security Questionnaire 


> Name of Company: OpenPix / Woovi LLC
>
> Applications: In scope for this Security Questionnaire 
>
> OpenPix is a instant payment provider

**Primary Contact for Security**
> Name: Sibelius Seraphini
>
> Job Title: CTO
>
> Email: sibelius (at) openpix.com.br


**Secondary Contact for Security**
> Name: Rafael Turk
> 
> Job Title: CoFounder
> 
> Email: rafael (at) openpix.com.br


## Company Information

| Question | Comments | 
| --  | -- | 
| Geographic Country location of employees, including contractors with access to production infrastructure and applications | Brazil | 
| Company Certifications and Accreditations e.g. ISO, SAS-70, PCI DSS or other | Certification is in progress expected for 4Q |
| Regulatory compliance requirements and industry standards e.g. HIPAA or other | Brazil LGDP |
| Data Center Information | AWS |
| Data Center Country Location | GRU - AWS GRU - São Paulo Region |
| Who is responsible for the data center facility? | Cloud based, AWS |
| Who is responsible for system administration? Also, note any Third party companies for Data Center Hosting and Operations | OpenPix |
| Any Third party companies have access to Data Center Hosting and Operations? | No. Restricted to OpenPix |
| Give details of the facility’s data center security and business continuity resources e.g. closed room, physical access controls, card reader, video surveillance, power, cooling, etc. | AWS managed |
| Security Practices In your solution do you test for OWASP and other vulnerabilities? | Yes. | 

## Product information

| Question | Comments | 
| --  | -- | 
| Does your solution involve PII/Sensitive data originating from Cloud Software as a Service (SaaS)? | Yes. | 
| The platform may use Customer data originating from Cloud Services (Saas) to authorize payments transactions? | Yes. This is a core feature of the platform |
| Does your solution store retrieve PII/Sensitive data in Cloud Services (SaaS, PaaS)? | Yes. <br/>Ecommerce plugins may pass Customer Name and TaxID to enrich payment information |
| Gateway may use Customer data originating from  Cloud Services (Saas) to authorize payments transactions. | Yes. |
| Does your solution retrieve PII/Sensitive data from  Cloud Services (SaaS, PaaS) or on-premise applications? | No. |
| Gateway may use Customer data originating from  Cloud Services (Saas) to authorize payments transactions. | Yes. |
| Do you have a mobile application that persists PII/Sensitive data on the device? | No. Solution don't use any kind of Mobile Apps |


## Web App information

| Question | Comments | 
| -  | - | 
| Does your solution implement CORS Support? | Yes. <br/>Across all apps, and all domain properties. |
| Do you have a process to discover and track security vulnerabilities and corrective measures in Open Source or 3rd party software your deliverables have a dependency on? | Yes. <br/>We have an internal Blue Team and Red Teams. Additional external third party security review, via independent partner every quarter |
| Do you have a channel for external researchers to report security vulnerabilities to your directly? | Yes. <br/> via email at security@openpix.com.br or infosec@openpix.com.br |
| Do you support Security.txt? | Yes.  https://openpix.com.br/.well-known/security.txt |


## Customer Security
| Question | Comments | 
| -  | - | 
| Do you have a process to notify your customers about security vulnerabilities and distribute security patches in your deliverables? | Yes. |
| Do you have a process to notify your customers about security vulnerabilities in Open Source that your deliverables include? | Yes. |


## Vendor security 
| Question | Comments | 
| -  | - | 
| Do you have a process to validade your vendors? | Yes. |


