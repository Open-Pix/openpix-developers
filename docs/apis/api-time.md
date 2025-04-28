---
title: Retorno de Data e hora na API
tags:
  - api
  - time
  - timezone
---

## Horários retornados na API

Todos os horários retornados pela API OpenPix são fornecidos em UTC (Tempo Universal Coordenado). Este é o padrão utilizado para transações financeiras no Brasil, garantindo consistência e precisão nas informações de tempo, independentemente da localização geográfica.

Exemplos de campos de data e hora retornados em UTC:
- `paidAt`: "2025-04-17T21:24:58.683Z"
- `createdAt`: "2025-04-17T21:08:15.036Z"
- `updatedAt`: "2025-04-17T21:25:09.816Z"
- `expiresDate`: "2025-04-18T21:08:11.130Z"

O sufixo "Z" ao final das datas indica que o horário está em UTC (também conhecido como "Zulu time").

## Fusos horários no Brasil

É importante considerar que o Brasil possui diferentes fusos horários:

- Horário de Brasília (BRT): UTC-3 - Utilizado na maior parte do país, incluindo as regiões Sul, Sudeste, Nordeste e os estados de Goiás, Distrito Federal, Tocantins, Pará e Amapá.
- Horário do Amazonas: UTC-4 - Utilizado nos estados do Amazonas, Rondônia, Roraima e parte do Pará.
- Horário do Acre: UTC-5 - Utilizado no estado do Acre e parte do Amazonas.

Ao integrar com a API OpenPix, recomendamos converter os horários recebidos de UTC para o fuso horário adequado da sua aplicação ou usuário final.

## Conversão de horários para exibição

Para exibir os horários corretamente aos usuários, é importante converter o tempo UTC para o fuso horário local. Abaixo estão exemplos de como realizar esta conversão em diferentes linguagens:

```javascript
// JavaScript
const utcDate = new Date("2025-04-17T21:24:58.683Z");
// Converte para horário de Brasília (UTC-3)
const brasiliaTime = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
  dateStyle: 'full',
  timeStyle: 'long'
}).format(utcDate);
```

```python
# Python com pytz
import datetime
import pytz

utc_date = datetime.datetime.fromisoformat("2025-04-17T21:24:58.683Z".replace('Z', '+00:00'))
brasilia_tz = pytz.timezone('America/Sao_Paulo')
brasilia_time = utc_date.astimezone(brasilia_tz)
```
