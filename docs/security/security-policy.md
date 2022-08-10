---
id: security-policy
title: Política de Segurança
---

*Versão: Abril de 2021*

*Histórico do documento*

| Data  | Descrição | Autor | Revisores |
| -  | - | - | - |
| Abril de 2021 | Diretrizes de desenvolvimento de Software em documento próprio | RAT | SIBS |
| Março de 2021 | Revisão Política de Fornecedores | DNS | RAT, SIBS |
| Janeiro de 2021 | Primeira versão | RAT | RAT, SIBS |

## Objetivo
Este documento descreve a política de segurança que é adotada em toda a organização. Esta política se aplica à Colaboradores, Clientes, Usuários, Fornecedores, Sistemas, Infra-estrutura, Produtos e Serviços. Esta política tem como objetivo  proteger os dados de todos os Stakeholders.

## Princípios de segurança que nos norteiam:

**1. SEGURANÇA NÃO É NEGOCIÁVEL.**

**2. ZELAR PELA SEGURANÇA É UM ATO CONTÍNUO. Cultura de segurança deve estar presente sempre que nos relacionamos com nossos Clientes, Usuários, Colaboradores e Fornecedores** 

**3. SEGURANÇA DEVE ESTAR PRESENTE EM TODOS NOSSOS PRODUTOS E SERVIÇOS; Segurança deve compreender todo o ciclo de vida dos nossos produtos e serviços abrangendo Documentação, Código, Código Fonte, Testes, Mensagens, Análises, Imagens e qualquer infra-estrutura seja física ou digital usada para fornecer serviços ou produtos aos nossos clientes.**

**4. TODOS SÃO RESPONSÁVEIS. Todos devem zelar, manter e assegurar segurança para nossos clientes, usuários, colaboradores, produtos, serviços e serviços.**


## Política de Usuários e Senhas

| Item | Descrição |
| - | - |
| **Usuários Únicos** | Todos os colaboradores, usuários, clientes, e ou fornecedores com acesso à sistemas devem ter contas de acesso únicas e nominais. Sendo expressamente vetado compartilhamento de senhas. |
| **Senhas** | Uso de senhas é obrigatório para acesso a todo e qualquer sistema. Indiferente se sejam sistemas internos ou externos. |
| **Senhas Fortes** | Sistemas de login e cadastro de usuários devem impor uso de senhas fortes. <br/>Sistemas de login não devem bloquear ou restringir uso de aplicativos de armazenamento de senhas. |
| **MFA** | Todos os sistemas devem suportar [MFA]. Plataforma deve recomendar e encorajar uso de [MFA] |
| **SSO** | Usuários de clientes empresariais podem acessar seus respectivos ambientes utilizando [SSO]. Plataforma deve, sempre que possível, recomendar, encorajar e facilitar uso de [SSO]. |
| **Logs** | Todos os acessos às plataformas, incluindo falhas de acesso, devem ser monitorados. |
| **Monitoramento** | Acesso à sistemas plataformas deve ser monitorado em tempo real. |
| **Criptografia** | Senhas devem ser, obrigatoriamente, criptografadas usando hashes assimétricos que impendem que a senha original seja recuperada. |
| **Segregação de acesso** | Sistemas devem implementar níveis de acesso para cada usuário, baseado em [RBAC] |


## Política de Equipamentos

| Item | Descrição |
| - | - |
| **Anti-virus** | Todos equipamentos devem usar anti-virus continuamente. <br/>O Anti-virus não pode ser desabilitado pelo usuário. |
| **Senhas** | Uso de senhas é obrigatório para acesso a todo e qualquer equipamento. |
| **Criptografia** | Sistemas operacionais dos usuários devem usar criptografia em todos seus discos. |
| **Logs** | Todos os acessos às dispositivos, incluindo falhas de acesso deve ser monitorado. |

## Política de segurança de Backend e Plataformas 

| Item | Descrição |
| - | - |
| **Segregação de ambientes** | Ambientes de produção, testes e desenvolvimento são segregados e apartados. |
| **Acesso restrito** | Acesso ao ambientes de produção devem ser estritamente restrito aos usuários devidamente qualificados e autorizados para acesso ao backend. |
| **Monitoramento** | Todo e qualquer acesso ao ambiente de produção, testes e desenvolvimento tem que ser monitorado em tempo real. Incluindo falhas. |
| **Criptografia** | Todo o acesso à plataforma deve ser criptografado. Armazenamento de dados de ambientes devem ser criptografado. |
| **Desenvolvimento Seguro** | Software deve ser desenvolvido, tesado e homologado com cultura de segurança. <br/>Desenvolvimento de Software seguro tem diretrizes de seguranças próprias [Diretriz de desenvolvimento de Software Seguro](security-guidelines) |

## Política de Segurança para ambientes Cloud
 
A plataforma é executada na (Cloud) nuvem. A nuvem reduz nosso tempo de entrada no mercado, permite prototipagem rápida e custos controlados. No entanto, a nuvem é inevitavelmente um ambiente de terceiros e deve ser considerado um
ambiente que pode ser comprometido. **Independentemente do provedor de nuvem utilizado a segurança da plataforma permanece sob nossa responsabilidade.**

### Premissas de segurança na Nuvem

| Item | Descrição |
| - | - |
| **Confiança Zero** | A nuvem é apenas o servidor de outra empresa, gerenciado por terceiros. Devemos levar em consideração em nosso código que o provedor de nuvem pode e será eventualmente comprometido. |
| **Tolerância à falhas** | Mesmo o melhor provedor de nuvem irá falhar. Mesmo o melhor esquema de replicação falhará. A plataforma, código, ambientes e sistemas deve prever e se proteger de falhas de terceiros. |
| **Criptografia** | Os dados devem ser criptografados o tempo todo. Os dados devem ser criptografados durante o percurso ou quando armazenados. |

### Requisitos de segurança da Nuvem

| Item | Descrição |
| - | - |
| **Criptografia em repouso** | Os dados do banco de dados devem ser criptografados usando chaves de criptografia exclusivas. As chaves devem ser armazenadas em chaves [HSM]. Isso garante que os dados não sejam lidos por uma pessoa não autorizada, caso os arquivos sejam comprometidos.<br/><br/>Com a criptografia em repouso, os bancos de dados criptografam os dados antes de armazená-los no disco.<br/><br/>O acesso às chaves [HSM] deve ser protegidas por chaves [IAM].
| **Containers** | Todos os serviços de back-end devem ser executados em seu próprio contêiner designado. |
| **Diretrizes de código** | Desenvolvimento de software deve levar em consideração ambiente Cloud, exposição de APIs na Internet, e ambiente e usuários hostil. <br/>Desenvolvimento de Software seguro tem diretrizes de seguranças próprias [Diretriz de desenvolvimento de software seguro](security-guidelines) | |
| **Separação de deveres** | A separação de funções e o controle de acesso baseado em funções são inerentes ao design da nuvem.<br/><br/>Os sistemas que executam códigos ou monitoram a saúde e a disponibilidade da rede de seus não devem estar envolvidos na criação e gerenciamento de outros ambientes. |
| **Acesso limitado à infraestrutura em nuvem** | O acesso ao provedor de nuvem é restrito a um número reduzido de desenvolvedores seniores na empresa, todos membros da empresa.<br/><br/>Os desenvolvedores só têm acesso ao código-fonte. O ambiente de desenvolvimento é separado do ambiente produtivo (ambiente de preparação).<br/><br/>As alterações de código, seja no desenvolvimento, teste ou produção, são realizadas apenas por meio da plataforma de implantação contínua, portanto, é possível rastrear e controlar cada alteração no código. |
| **MFA** | Os colaboradores humanos devem, obrigatóriamente, usar a autenticação com [MFA] ao se conectar à infraestrutura em nuvem. |
| **Gerenciamento de chave IAM** | Each environment will use its own set of keys. Keys will be loaded directly into Kubernetes. |
| **Rotação de chaves** | Chaves devem ser rotacionadas a cada 6 meses. A rotação de chaves é realizada diretamente no ambiente de configuração do Kubernetes. |

## Política de segurança de Fornecedores

| Item | Descrição |
| - | - |
| **Pré-certificação** | Fornecedores devem certificados previamente validados e para aferir usas capacidades de segurança. |
| **Mesma Barra** | Fornecedores devem atingir ou superar a barra de segurança em seus processos e controles internos. |

### Política de Backup
 
Política de backup é definida em documento dedicado [Política de backup](backup-policy)


[RBAC]: https://en.wikipedia.org/wiki/Role-based_access_control
[SSO]: https://en.wikipedia.org/wiki/Single_sign-on
[MFA]: https://en.wikipedia.org/wiki/Multi-factor_authentication
[HSM]: https://en.wikipedia.org/wiki/Hardware_security_module
[IAM]: https://en.wikipedia.org/wiki/Identity_management