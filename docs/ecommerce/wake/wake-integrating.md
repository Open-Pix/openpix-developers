---
id: wake-integrating
title: Integrando Wake na OpenPix
sidebar_position: 0
tags:
  - ecommerce
  - wake
---

:::caution Atenção
Este documento espera que você já tenha um ambiente Wake, e uma conta criada na OpenPix
:::

## Plugin Pix para Wake

### 1. Acesse a configuração da Wake

Entre na plataforma da OpenPix e [clique aqui](https://app.woovi.com/home/applications/wake/add) ou vá em `API/Plugins` > `Plugin Wake` > `Adicionar`

![1](./__assets__/wake-integrating-1.png)

### 2. Acesse a configuração da Wake na OpenPix

![2](./__assets__/wake-integrating-2.png)

### 2.1. Copie o App ID gerado

![3](./__assets__/wake-integrating-3.png)

### 3. Acesse o dashboard do seu ADMIN dentro da Wake

![4](./__assets__/wake-integrating-4.png)

### 4. Vá até `Pagamentos > Conectores de Pagamento F-Gateway`

![5](./__assets__/wake-integrating-5.png)

### 5. Procure a opção Custom

### 6. Clique em `Adicionar configuração`

![6](./__assets__/wake-integrating-6.png)

### 7. Preencha com as seguintes informações

![7](./__assets__/wake-integrating-7.png)

### 8. Adicione a configuração

### 9. Vá para a configuração que você acabou de criar e preencha as seguintes informações:

- Configuração do Endpoint de Pagamento: https://api.woovi.com/api/wake
- Versão: Completa
- Headers:
  - paymentType: pix
  - appID: Coloque o AppID que você gerou na etapa [2.1](#21-copie-o-app-id-gerado)

### 10. Vá até `Pagamentos > Grupos e Parcelamentos`

![8](./__assets__/wake-integrating-8.png)

### 11. Crie um novo grupo

![9](./__assets__/wake-integrating-9.png)

### 12. Preencha com as seguintes informações

![10](./__assets__/wake-integrating-10.png)

### 13. Após salvar, volte em `Pagamentos > Grupos e Parcelamentos`

### 14. Vincule a forma de pagamento que você criou anteriormente

![11](./__assets__/wake-integrating-11.png)

![12](./__assets__/wake-integrating-12.png)

![13](./__assets__/wake-integrating-13.png)

![14](./__assets__/wake-integrating-14.png)

### 15. Vá `Pagamentos > Estrutura de pagamentos`

![15](./__assets__/wake-integrating-15.png)

### 16. Crie uma nova estrutura

![16](./__assets__/wake-integrating-16.png)

![17](./__assets__/wake-integrating-17.png)

### 17. Configure o grupo de pagamento que você acabou de criar nessa nova estrutura

![18](./__assets__/wake-integrating-18.png)

### 18. Salve a estrutura

![19](./__assets__/wake-integrating-19.png)

Pronto, o método de pagamento Pix da OpenPix está configurado na sua Wake!
