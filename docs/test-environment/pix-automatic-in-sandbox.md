---
id: pix-automatic-in-sandbox
title: Pix Automatico em sandbox
tags:
  - pix-automatic
  - sandbox
---

## Pix Automátio Em sandbox

Para criar um pix automatico em sandbox você tera que seguir os seguintes passos:
* Cria um pix automatico (api ou plataforma)
* Simular assinatura e gerar parcelas
* Simular pagamento de parcelas

### Criar uma novo pix automático

Acesse a pagina: https://app.woovi-sandbox.com/home/subscription/tab/pixAutomatic/list e clique em "Novo Pix automático"

![Onde criar um novo Pix Automático](/img/pix-automatic/sandbox-new-button.png)

Um formulário será aberto para você definir o cliente, o valor das cobranças e as configurações da assinatura.

![Formulário de novo Pix Automático](/img/pix-automatic/sandbox-form-empty.png)

prencha os dados nescessarios e clique em salvar

![Formulário de Pix Automático preenchido](/img/pix-automatic/sandbox-form-filled.png)

### Simular assinatura e gerar parcelas

Logo após salvar o pix automatico você será redirecionado para os detalhe do pix automatico, clique em simular assinatura

![Botão simular assinatura de Pix Automático](/img/pix-automatic/sandbox-simulate-subscription.png)

Ele cria a assinatura e já gera as parecelas

OBS: se tiver webhook do evento `PIX_AUTOMATIC_APPROVED` configurado, a plataforma irá emiti-lo neste momento


### Simular pagamento de parcelas

Acesse a pagina: https://app.woovi-sandbox.com/home/subscription/tab/pixAutomatic/installments/list, aqui aparecerão as parecelas que foram geradas
para pagar basta clicar no botão simular pagamento

![Botão simular pagamento de parcela](/img/pix-automatic/sandbox-simulate-payment.png)

OBS: se tiver webhook do evento `PIX_AUTOMATIC_COBR_COMPLETED` configurado, a plataforma irá emiti-lo neste momento
