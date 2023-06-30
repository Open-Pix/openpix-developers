---
id: ecommerce-workflow
title: Como integrar a OpenPix com ecommerces
tags: 
  - integration
  - ecommerce
---

Para integrar ecommerces a proposta para desenvolvimento vai ser dividido em duas partes

## 1. Criar cobranças utilizando a OpenPix como meio de pagamento

### 1.1 Pré-requisitos

- 1. Ter uma conta na OpenPix
- 2. Ter um ecommerce
- 3. Criar um appID dentro da plataforma da OpenPix do tipo plugin
- 4. Salvar o appID dentro do ecommerce

### 1.2 Fluxo de criação de cobrança

Nesse ponto é esperado que o lojista já consiga fazer os seguintes passos

- 1. Se possível, visualizar o plugin da OpenPix no store do ecommerce
- 2. Instalar o plugin da OpenPix no ecommerce
- 3. Configurar o plugin da OpenPix no ecommerce ( colocar o appID  )
- 4. Criar uma cobrança dentro do ecommerce utilizando a OpenPix como meio de pagamento.
  - 4.1.  Quando a cobrança for criada é estritamente necessário ser salvo um correlationID dentro do   pedido do ecommerce, e o mesmo deve ser enviado na requisição para a api da OpenPix.
  - 4.2. O cliente final deve conseguir escolher a OpenPix como meio de pagamento
  - 4.3. O lojista deve conseguir visualizar esse pedido(charge) dentro da plataforma da OpenPix
  - 4.4. O lojista deve conseguir visualizar esse pedido(charge) dentro do ecommerce
  - 4.5. O cliente final deve conseguir visualizar esse pedido dentro da aba meus pedidos
- 5. Deve ser possível passar informações como email, nome, idade, e CPF

## 2. Após ser criada a cobrança, e paga pelo cliente final

### 2.1 Pré-requisitos

- 2. Criar um webhook dentro da plataforma da OpenPix do tipo CHARGE COMPLETED
- 1. Conseguir executar o fluxo de criação de cobrança
- 3. Abrir um endpoint no ecommerce para receber a notificação da OpenPix
- 4. Validar se a notificação é realmente da OpenPix ( PONTO PRINCIPAL )

Nesse ponto entra a parte de notificação, onde a OpenPix vai notificar o ecommerce que a cobrança foi paga sendo assim é esperado que:

- 1. Quando o cliente final pagar a cobrança, a OpenPix vai notificar o ecommerce
- 2. O plugin recebe a notificação e valida se a notificação é realmente da OpenPix
- 3. O plugin busca o pedido pelo correlationID e atualiza o status do pedido para pago
- 4. Após feita essa busca é esperado que atualize o pedido para pago.
