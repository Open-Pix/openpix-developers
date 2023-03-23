---
id: security-self-assessment
title: Security Self Assessment
tags:
- security
---

*Versão: Março de 2023*

*Histórico do documento*

| Data  | Descrição | Autor | Revisores |
| -  | - | - | - |
| Março de 2023 | Atulizar data ultimo Pentest | JHS | RAT |
| Fevereiro de 2023 | Inclusão novas questões | JHS | RAT |
| Março de 2021 | Inclusão novas questões | JHS | SIBS, RAT |


## Self Assessment - Security Questionnaire 


> Name of Company: OpenPix / Woovi LLC
>
> Applications: In scope for this Security Questionnaire 
>
> OpenPix is a instant payment provider

**Primary Contact for Security**
> Name: Infosec Team
>
> Email: security (at) openpix.com.br

**Secondary Contact for Security**
> Name: Sibelius Seraphini
>
> Job Title: CTO
>
> Email: sibelius (at) openpix.com.br

**Tertiary Contact for Security**
> Name: Rafael Turk
> 
> Job Title: CoFounder
> 
> Email: rafael (at) openpix.com.br


## Company Information
| Question | Comments | 
| --  | -- | 
| Geographic Country location of employees, including contractors with access to production infrastructure and applications | Brazil | 
| Company Certifications and Accreditations e.g. ISO, SAS-70, PCI DSS, HIPAA or other | Certification is in progress expected for 4Q |
| Regulatory compliance requirements and industry standards | Brazil LGDP |
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
| Does your solution retrieve PII/Sensitive data from  on-premise applications? | N/A <br/>Our platform don't have any onpremisse solutions. |
| Gateway may use Customer data originating from  Cloud Services (Saas) to authorize payments transactions. | Yes. |
| Do you have a mobile application that persists PII/Sensitive data on the device? | N/A. <br/>Our platform don't use any kind of Mobile Apps. |


## Web App information
| Question | Comments | 
| -  | - | 
| Does your solution implement CORS Support? | Yes. <br/>Across all apps, and all domain properties. |
| Do you use a digital certificate to encrypt data communication? | Yes. <br/>Across all domain properties. | 
| Do you use Application firewall (WAF)  to detect and block intrusion attempts? | Yes. <br/>Multiple layers across all domain properties. |
| Do you use load balancers? | Yes. <br/>We use load balancers, plus multiple datacenter locations (Datacenter Zones) to support High availability. |
| Do you have a process to discover and track security vulnerabilities and corrective measures in Open Source or 3rd party software your deliverables have a dependency on? | Yes. <br/>We have an internal Blue Team and Red Teams. Additional external third party security review, via independent partner every quarter |
| Do you have a channel for external researchers to report security vulnerabilities to your directly? | Yes. <br/> via email at security@openpix.com.br or infosec@openpix.com.br |
| Do you support Security.txt? | Yes.  <br/>https://openpix.com.br/.well-known/security.txt |


## Customer Security
| Question | Comments | 
| -  | - | 
| Do you have a process to notify your customers about security vulnerabilities and distribute security patches in your deliverables? | Yes. |
| Do you have a process to notify your customers about security vulnerabilities in Open Source that your deliverables include? | Yes. |


## Vendor security 
| Question | Comments | 
| -  | - | 
| Do you have a process to validade your vendors? | Yes. <br/> [Vendor Policy](https://developers.openpix.com.br/docs/security/security-policy#pol%C3%ADtica-de-seguran%C3%A7a-de-fornecedores)|

## Pentest
| Question | Comments | 
| --  | -- | 
| Do you perform regular pentests? | Yes. <br/> We perform several automated pentests with software based external audit tools and multiple internal pentests with our on internal infosec team. |
| Do you perform regular independet (third party)? | Yes. <br/> We perform several external via third party infosec companies. |
| When was the last external (via independent partner) pentest? | Last pentest was performed in January 2023. |

## Training and awareness 
| Question | Comments | 
| -  | - | 
| Your business has regular information security awareness training for all staff, including temporary, locum or contracted employees, to ensure they are all aware of and fulfil their responsibilities. | Partially implemented. |

