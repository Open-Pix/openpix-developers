---
id: how-to-calculate-split-with-percentage
title: Como calcular divisão com porcentagem
tags:
  - split
---

:::info
Para a utilização dessa funcionalidade é necessário possuir uma conta na OpenPix e a funcionalidade Split, entre em contato com nosso time de suporte para habilitar essa funcionalidade
:::

:::info
Você também precisará de um `appID` também para fazer requisições na nossa API, caso não tenha recomenda-mos fortemente você consultar nossa documenta de [começando uma integração](../apis/api-getting-started.md)
:::

## Como lidar com o calculo de split

Neste exemplo estou considerando um cenário onde quero criar uma cobrança de R$ 100,00 e enviar 20% do valor dessa cobrança para o recebedor (sub-conta) desse split, que no caso seria R$ 20,00

```ts
// função para lidar com calculo do valor split em porcentagem
const calculateSplitPercentage = (value: number, percentage: number) => {
  return value * (percentage / 100)
}

const createCharge = () => {
  // 100 reais em centavos
  const totalValueCharge = 10000
  // a porcentagem que será paga para o recebedor (sub-conta)
  // essa porcentagem pode ser ajustada baseado nas suas necessidades e regras de negócio
  const splitPercentageRecipient = 20
  // calculando o valor que o recebedor deverá receber
  const valueSplitRecipient = calculateSplitPercentage(totalValueCharge, splitPercentageRecipient)

  // agora estou chamando uma abstração de uma chamada para API da OpenPix
  // nessa requisição o valor total da cobrança e o valor split do recebedor (sub-conta) e as demais informações
  fetchOpenPixApi('/api/v1/charge', {
    method: 'POST',
    body: {
      "value": totalValueCharge,
      "correlationID": "c782e0ac-833d-4a89-9e73-9b60b2b41d3a",
      "splits": [
        {
          "pixKey": "destinatario1@openpix.com.br",
          "value": valueSplitRecipient
        }
      ]
    },
    headers: {
      Authorization: 'MEU_APP_ID'
    }
  })
}
```
