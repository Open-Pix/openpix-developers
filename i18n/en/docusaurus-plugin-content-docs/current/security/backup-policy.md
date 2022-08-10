---
id: backup-policy
title: Backup Policy
---

*Version: January 2021*


*Document history*

| Date  | Description | Author | Approvers |
| -  | - | - | - |
| January 2021 | Publish Backup Policy as Separated Document | ANB | SIBS |


## Backup Guidelines

**Data must be protected, stored in a secure environment and backed up regularly.** 

## Backup Policy & Security

### Backup Policy
 
- Backups will run automatically every 2 hours
- Backups will be archived (cold storage) after 24 hours
- Backups will be permanently excluded (hard delete) after 30 days

### Backup Security

Backup security follow the security guidelines, refer to [main security document](security-guidelines) 

| Item | Description |
| - | - |
| Encryption at rest | Backup data must be encrypted using unique encryption keys.<br/><br/>Keys must be stored in a secure enclave HSM hardware.<br/><br/>This ensures that data is not readable by an unauthorized person in the event that the files are compromised.<br/><br/>With encryption at rest databases encrypt the data before storing it into disk<br/><br/>HSM keys access must be protected by IAM keys. |
| Unique access keys | IAM Access keys required to upload and retrieve backup data must be performed different, and separated access roles |
| Cluster isolation | Backups from production environments must be stored in separated buckets |
| Deletion | Backup data must be automatically, permanently deleted after 30 days |
| No physical medium | Backups are only stored in digital archives, no physical medium such as tapes, disks, external hard drives should be used |
