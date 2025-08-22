---
id: pix-key-fraud-statistic
title: Estatísticas de Fraude da Chave PIX
sidebar_label: Estatísticas de Fraude da Chave PIX
description: Consultar estatísticas de fraude e indicadores de risco para chaves PIX
---

# Estatísticas de Fraude da Chave PIX

A API de Estatísticas de Fraude da Chave PIX permite consultar estatísticas abrangentes de fraude e indicadores de risco para chaves PIX. Este endpoint fornece informações detalhadas sobre marcadores de fraude, relatórios de infração e padrões de transação associados tanto ao proprietário da chave quanto à chave PIX específica.

## Visão Geral

Esta API retorna estatísticas de fraude e indicadores de risco que ajudam instituições financeiras a avaliar o nível de risco das chaves PIX antes de processar transações. A resposta inclui duas seções principais:

- **Estatísticas do Proprietário**: Informações relacionadas ao proprietário da chave consultada
- **Estatísticas da Chave**: Informações específicas da chave PIX em si

## Endpoint da API

```
GET /pix-key-fraud-statistic
```

## Parâmetros da Requisição

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `pixKey` | string | Sim | A chave PIX a ser consultada (CPF, CNPJ, email, telefone ou chave aleatória) |

## Estrutura da Resposta

A resposta da API contém estatísticas abrangentes de fraude organizadas em duas seções principais:

### Estatísticas do Proprietário (`ownerStatistics`)

Informações relacionadas ao proprietário da chave PIX consultada.

#### SPI (Sistema de Pagamentos Instantâneos)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `watermark` | string | Data da última atualização dos dados |
| `settlements` | object | Liquidações/transações realizadas em diferentes períodos |
| `settlements.d90` | string | Últimos 90 dias |
| `settlements.m12` | string | Últimos 12 meses |
| `settlements.m60` | string | Últimos 60 meses (5 anos) |

#### Marcadores de Fraude (`fraudMarkers`)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `watermark` | string | Data da última atualização dos dados de fraude |
| `applicationFrauds` | object | Fraudes em aplicações/cadastros por período |
| `muleAccounts` | object | Contas identificadas como "mulas" (intermediárias para movimentação de recursos ilícitos) |
| `scammerAccounts` | object | Contas identificadas como de golpistas |
| `otherFrauds` | object | Outros tipos de fraudes não categorizadas |
| `unknownFrauds` | object | Fraudes de natureza desconhecida ou não classificada |
| `totalFraudTransactionAmount` | object | Valor total das transações fraudulentas por período |
| `distinctFraudReporters` | object | Número de diferentes instituições que reportaram fraudes |

#### Relatórios de Infração (`infractionReports`)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `watermark` | string | Data da última atualização dos dados de infração |
| `openReports` | string | Número de relatórios de infração em aberto |
| `openReportsDistinctReporters` | string | Número de diferentes instituições que têm relatórios abertos |
| `rejectedReports` | object | Relatórios rejeitados nos períodos especificados |

#### Entradas (`entries`)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `watermark` | string | Data da última atualização dos dados de entrada |
| `registeredAccounts` | string | Número de contas registradas associadas à chave |

### Estatísticas da Chave (`keyStatistics`)

Informações específicas sobre a chave consultada.

#### SPI (Sistema de Pagamentos Instantâneos)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `watermark` | string | Data da última atualização dos dados |
| `settlements` | object | Liquidações/transações realizadas em diferentes períodos |
| `settlements.d90` | string | Últimos 90 dias |
| `settlements.m12` | string | Últimos 12 meses |
| `settlements.m60` | string | Últimos 60 meses (5 anos) |

#### Marcadores de Fraude (`fraudMarkers`)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `watermark` | string | Data da última atualização dos dados de fraude |
| `applicationFrauds` | object | Fraudes em aplicações/cadastros por período |
| `muleAccounts` | object | Contas identificadas como "mulas" |
| `scammerAccounts` | object | Contas identificadas como de golpistas |
| `otherFrauds` | object | Outros tipos de fraudes não categorizadas |
| `unknownFrauds` | object | Fraudes de natureza desconhecida |
| `totalFraudTransactionAmount` | object | Valor total das transações fraudulentas por período |
| `distinctFraudReporters` | object | Número de diferentes instituições que reportaram fraudes |

#### Relatórios de Infração (`infractionReports`)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `watermark` | string | Data da última atualização dos dados de infração |
| `openReports` | string | Número de relatórios de infração em aberto |
| `openReportsDistinctReporters` | string | Número de diferentes instituições que têm relatórios abertos |
| `rejectedReports` | object | Relatórios rejeitados nos períodos especificados |

#### Entradas (`entries`)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `watermark` | string | Data da última atualização dos dados de entrada |
| `distinctAccounts` | object | Número de contas distintas associadas à chave por período |

## Períodos de Tempo

A API utiliza os seguintes indicadores de período:

- **d90**: Últimos 90 dias
- **m12**: Últimos 12 meses
- **m60**: Últimos 60 meses (5 anos)

## Exemplo de Resposta

```json
{
  "success": true,
  "data": {
    "ownerStatistics": {
      "spi": {
        "watermark": "2025-04-08T10:19:11.308Z",
        "settlements": {
          "d90": "0",
          "m12": "9",
          "m60": "9"
        }
      },
      "fraudMarkers": {
        "watermark": "1970-01-01T00:00:00Z",
        "applicationFrauds": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "muleAccounts": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "scammerAccounts": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "otherFrauds": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "unknownFrauds": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "totalFraudTransactionAmount": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "distinctFraudReporters": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        }
      },
      "infractionReports": {
        "watermark": "1970-01-01T00:00:00Z",
        "openReports": "0",
        "openReportsDistinctReporters": "0",
        "rejectedReports": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        }
      },
      "entries": {
        "watermark": "2025-05-24T19:38:15.063Z",
        "registeredAccounts": "1"
      }
    },
    "keyStatistics": {
      "spi": {
        "watermark": "1970-01-01T00:00:00Z",
        "settlements": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        }
      },
      "fraudMarkers": {
        "watermark": "1970-01-01T00:00:00Z",
        "applicationFrauds": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "muleAccounts": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "scammerAccounts": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "otherFrauds": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "unknownFrauds": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "totalFraudTransactionAmount": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        },
        "distinctFraudReporters": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        }
      },
      "infractionReports": {
        "watermark": "1970-01-01T00:00:00Z",
        "openReports": "0",
        "openReportsDistinctReporters": "0",
        "rejectedReports": {
          "d90": "0",
          "m12": "0",
          "m60": "0"
        }
      },
      "entries": {
        "watermark": "2025-05-24T19:38:15.063Z",
        "distinctAccounts": {
          "d90": "0",
          "m12": "1",
          "m60": "1"
        }
      }
    }
  }
}
```

## Entendendo a Resposta

### Valores Zero
Todos os valores que mostram "0" indicam que não há registros de fraudes, infrações ou problemas associados à chave consultada.

### Datas Watermark
- **Datas recentes** (ex: "2025-04-08T10:19:11.308Z") indicam atualizações recentes de dados
- **Datas epoch** (ex: "1970-01-01T00:00:00Z") indicam que não há dados disponíveis para essa categoria

### Significado Prático
Este relatório serve como uma ferramenta de verificação de segurança e histórico financeiro para instituições financeiras avaliarem riscos antes de processar transações. Os marcadores temporais (d90, m12, m60) permitem avaliar tanto o comportamento recente quanto os padrões históricos.

## Casos de Uso

- **Avaliação de Risco**: Avaliar o nível de risco das chaves PIX antes de processar transações
- **Conformidade**: Atender aos requisitos regulatórios para prevenção de fraude
- **Due Diligence**: Realizar verificações de antecedentes dos proprietários de chaves PIX
- **Prevenção de Fraude**: Identificar chaves potencialmente arriscadas antes que causem perdas

## Tratamento de Erros

A API retornará respostas de erro apropriadas para requisições inválidas ou quando a chave PIX não for encontrada. Cenários de erro comuns incluem:

- Formato de chave PIX inválido
- Chave PIX não encontrada
- Erros de autenticação/autorização
- Limite de taxa excedido
