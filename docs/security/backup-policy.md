---
id: backup-policy
title: Política de Backup
tags:
- security
- backup
---

*Versão: Março de 2021*


*Histórico do documento*

| Data  | Descrição | Autor | Revisores |
| -  | - | - | - |
| Março de 2021 | Adicionar notas sobre criptografia em repouso | RAT | SIBS, RAT |
| Janeiro de 2021 | Publicar a Política de Cópia de Segurança como um Documento Separado | ANB | SIBS |


## Guia de Backup

**Os dados devem ser protegidos, armazenados em um ambiente seguro e com backup regular.** 

## Política de backup & Segurança

### Política de backup
 
- Os backups serão executados automaticamente a cada 2 horas
- Os backups serão arquivados (cold storage) após 24 horas
- Os backups serão excluídos permanentemente (exclusão definitiva) após 30 dias

### Segurança de backup

A segurança de backups é complementar à [Política de Segurança](security-policy) 

| Item | Descrição |
| - | - |
| Encriptação em descanso | Os dados de backup devem ser criptografados usando chaves de criptografia exclusivas.<br/><br/>As chaves devem ser armazenadas em um hardware [HSM] de enclave seguro. Isto garante que os dados não sejam lidos por uma pessoa não autorizada, caso os arquivos sejam comprometidos.<br/><br/>Com a criptografia em descanso, os bancos de dados criptografam os dados antes de armazená-los no disco.<br/><br/>O acesso às chaves [HSM] deve ser protegido por chaves [IAM]. |
| Chaves de acesso exclusivas | As chaves de acesso [IAM] são necessárias para fazer upload e recuperar dados de backup e devem ser executadas de forma diferente e funções de acesso separadas. |
| Isolamento de cluster | Os backups de ambientes de produção devem ser armazenados em depósitos separados. |
| Excluir | Os dados de backup devem ser automaticamente excluídos permanentemente após 30 dias. |
| Sem meio físico | Os backups só são armazenados em arquivos digitais, não deve ser utilizado nenhum meio físico, como fitas, discos, discos rígidos externos. |

[IAM]: https://en.wikipedia.org/wiki/Identity_management
[HSM]: https://en.wikipedia.org/wiki/Hardware_security_module