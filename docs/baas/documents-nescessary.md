---
id: documents-nescessary
title: Documentos Nescessários para conta BAAS
tags: 
  - baas 
  - api
  - account-register
---

Este documento irá ajuda-lo a entender os documentos nescessários para abrir uma conta baas.

### Documentos necessários
**Representantes/socios:** 
| Type           | Descrição               |
|----------------|-------------------------|
| PICTURE        | Foto de perfil          |
| CNH            | Imagen completa da CNH   |
| CNH_FRONT      | Imagen frontal da CNH   |
| CNH_BACK       | Imagen traseira da CNH  |
| IDENTITY_FRONT | Imagem frontal do RG    |
| IDENTITY_BACK  | Imagem traseira do RG   |

Apenas esses conjuntos de documentos serão aceitos: 
* PICTURE + CNH
* PICTURE + (CNH_FRONT + CNH_BACK)
* PICTURE + (IDENTITY_FRONT + IDENTITY_BACK)


**Empresa:**
| Type            | Descrição                    |
|-----------------|------------------------------|
| ATA             | Ata da assembleia dos sócios |
| BYLAWS          | Estatuto da organização      |
| SOCIAL_CONTRACT | Contrato social              |

Documentos nescessários por tipo de cnpj:
* MEI: nenhum documento é necessário, apenas os dos sócios
* ONG, IGREJA: SOCIAL_CONTRACT, BYLAWS
* LTDA: SOCIAL_CONTRACT, ATA, BYLAWS


### Descrição dos campos a serem enviados para o registro de contas.

**campos:**
| Nome                | Descrição                                                                                      |
|---------------------|------------------------------------------------------------------------------------------------|
| officialName        | Nome oficial e jurídico da empresa, conforme registrado nos órgãos competentes (razão social). |
| tradeName           | Nome fantasia utilizado comercialmente pela empresa.                                           |
| taxID               | Número do CNPJ da empresa.                                                                     |
| businessDescription | Website oficial ou principal canal de vendas utilizado pela empresa.                           |
| businessProduct     | Descrição dos produtos e/ou serviços oferecidos pela empresa.                                  |
| businessLifetime    | Período de atuação da empresa no mercado.                                                      |
| businessGoal        | Finalidade e objetivo da empresa ao se registrar e utilizar os serviços de BaaS da Woovi.      |
| billingAddress      | Endereço comercial da empresa.                                                                 |
| representatives     | Dados dos sócios, administradores e representantes legais da empresa, para fins de KYC/KYB.    |

