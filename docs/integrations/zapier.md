---
id: zapier-with-openpix
title: Integração Zapier com openpix
tags:
  - integration
  - zapier
---

A [Zapier](https://zapier.com) é uma plataforma poderosa que viabiliza a integração fluida de mais de 5.000 aplicativos diversos em fluxos de trabalho automatizados e interconectados.

Com o selo oficial da openpix, [o nosso aplicativo](https://zapier.com/apps/openpix/integrations) está agora disponível na ampla gama de apps listados na Zapier. Isso abre a porta para a integração dos serviços de Pix com outras aplicações, incluindo, por exemplo, a capacidade de sincronizar dados com planilhas do Google e envio de notificações no Slack.

## O que você pode alcançar com o app da openpix?

Ao aproveitar o aplicativo da openpix, você desbloqueia um universo de oportunidades. Aqui estão alguns exemplos de integrações práticas:

- Notificações no Slack: Receba alertas instantâneos no Slack para novas cobranças na openpix.
- Registro em Planilhas Google: Mantenha registros automáticos de novos clientes em planilhas Google.
- Integração com Email Marketing: Adicione automaticamente novos clientes da openpix à sua lista de contatos de email marketing.
- Gerenciamento de Reembolsos: Envie notificações de reembolso aos clientes e mantenha registros internos.
- Sincronização Financeira: Crie entradas financeiras em plataformas como QuickBooks para novas cobranças na openpix.

## Ações e gatilhos

Nosso aplicativo possui as seguintes [ações](https://help.zapier.com/hc/en-us/articles/8496257774221-Set-up-your-Zap-action) (_actions_) que você pode utilizar em conjunto com outros aplicativos:

- Criar uma cobrança
- Remover uma cobrança
- Criar um cliente
- Criar reembolso de uma cobrança

Você também pode utilizar o [gatilho](https://help.zapier.com/hc/en-us/articles/8496244568589-Types-of-triggers-in-Zaps) (_trigger_) de webhook, que permite ativar outras ações (como enviar uma notificação no Slack) quando um evento acontece (como uma cobrança sendo paga).

## Autenticação

Ao utilizar alguma triger ou action da openpix em seu fluxo no Zapier, é necessário se autenticar.

Isso é realizado na seção _Account_, através do botão _Sign In_:

![Seção de configuração da conta Zapier](./__assets__/zapier-setup-account-section.png)

Ao apertar esse botão, uma nova janela será aberta, onde você deverá adicionar o seu _App ID_ e um nome para sua conta (no campo _App name_).

## Ações

### Como adicionar uma ação da openpix

Em seu fluxo Zapier, [adicione uma nova ação](https://help.zapier.com/hc/en-us/articles/8496257774221-Set-up-your-Zap-action) pesquisando por _openpix_ no início de sua _action_:

![Pesquisando pelo app da openpix no criador de actions](./__assets__/zapier-action-searching-openpix.png)

Agora é necessário selecionar um evento, que diz qual ação tomar. Por exemplo, aqui estamos selecionando o evento _Create charge_ para criação de uma cobrança:

![Selecionando o evento para criar uma cobrança](./__assets__/zapier-action-selecting-create-charge-event.png)

Devemos estar na seção _Account_ no momento, onde a [autenticação](#autenticação) deve ser feita.

Após a autenticação, é o momento de configurar sua action na seção _Action_, de acordo com o evento dela:

![Configurando a action de criação de cobrança](./__assets__/zapier-create-charge-configuration.png)

Tendo configurado a nossa action, agora você deve estar na seção _Test_ para testes da action:

![Seção de testes de uma action](./__assets__/zapier-testing-action.png)

Ao apertar o botão _Test action_ você efetuará o teste dela:

![Botão para testar uma action](./__assets__/zapier-test-action-button.png)

### Como criar uma cobrança?

Neste cenário de exemplo, faremos uso do Google Planilhas. Aqui, uma planilha de cobranças será configurada, onde cada nova linha inserida resultará na geração automática de uma cobrança.

Em primeiro lugar, crie uma planilha com os seguintes campos e adicione uma nova linha:

![Planilha de exemplo para criação de cobranças](./__assets__/zapier-create-charge-spreadsheet.png)

Após isso crie um [Zap](https://help.zapier.com/hc/en-us/articles/8496309697421-Create-Zaps) com o trigger _Ǹew Spreadsheet Row_ (nova linha na planilha) do app [Google Sheets](https://www.google.com/sheets/about/).

Tendo configurado e testado a trigger, adicione uma nova action da openpix com o evento _Create charge_ (criar cobrança).

Ajuste os campos da ação na seção _Action_ de forma a coincidirem com as colunas da planilha:

![Planilha de exemplo para criação de cobranças](./__assets__/zapier-create-charge-configuration.png)

No campo `Type` selecione `DYNAMIC` para criação de uma cobrança à vista.

Após isso, prossiga para a seção _Test_ para testar o seu fluxo.

### Como remover uma cobrança?

[Adicione uma action](#como-adicionar-uma-ação-da-openpix) com o evento _Delete a charge_ em seu fluxo do Zapier.

Configure os campos da action na seção _Action_:

![Configurando a action de remover uma cobrança](./__assets__/zapier-remove-charge-action-configuration.png)

Como campo da action, temos o `id` que é onde você deve colocar o [`correlationID`](../concepts/correlation-id) ou o identificador da cobrança.

### Como criar um cliente?

[Adicione uma action](#como-adicionar-uma-ação-da-openpix) com o evento _Create customer_ em seu fluxo do Zapier.

Configure os campos da action na seção _Action_:

![Configurando a action de criar um cliente](./__assets__/zapier-create-customer-action-configuration.png)

A action possui as seguintes entradas pro cliente:
- `Name` (obrigatório): Nome.
- `Email`: E-mail do cliente.
- `Phone`: Número de telefone.
- `CorrelationID`: É o [`correlationID`](../concepts/correlation-id) do cliente, um identificador.
- `Address`: Endereço do cliente.
  - `Zip Code`: Coloque aqui o CEP.
  - `Street`: A rua do cliente.
  - `Number`: Número do endereço.
  - `Neighborhood`: Bairro.
  - `City`: Cidade.
  - `State`: Estado do cliente.
  - `Complement`: Complemento do endereço.
  - `Country`: País. Por exemplo: `BR` para Brasil.

### Como criar reembolso de uma cobrança?

[Adicione uma action](#como-adicionar-uma-ação-da-openpix) com o evento _Create a Charge Refund_ em seu fluxo do Zapier.

Configure os campos da action na seção _Action_:

![Configurando a action de criar um reembolso](./__assets__/zapier-create-charge-refund-action-configuration.png)

A action possui as seguintes entradas:

- `Refund CorrelationID`: Seu [`correlationID`](../concepts/correlation-id) para acompanhar este reembolso.
- `Charge Correlation ID`: O [correlationID](../concepts/correlation-id.md) da cobrança.
- `Value`: Valor do reembolso em centavos.
- `Comment`: Comentário da cobrança.

## Gatilhos

### Como configurar o webhook?

Os webhooks permitem que diferentes sistemas se comuniquem em tempo real, transmitindo dados de forma automática e instantânea.

É possível configurar um webhook no Zapier utilizando um trigger que é acionado sempre que uma cobrança for completamente paga, por exemplo.

Para utilizar, crie um novo Zap e ative o [trigger](https://help.zapier.com/hc/en-us/articles/8496244568589-Types-of-triggers-in-Zaps) da openpix.

Ao criar um novo Zap, é possível encontrar o trigger da openpix pesquisando por _openpix_:

![Pesquisando pelo trigger](./__assets__/zapier-trigger-search.png)

Selecione _New Webhook Event_ no campo de evento da trigger:

![Selecionando o evento da trigger](./__assets__/zapier-trigger-selecting-event.png)

[Realize a autenticação](#autenticação) na seção de _Account_.

![Realizando a autenticação](./__assets__/zapier-trigger-auth.png)

Configure a trigger:

![Configurando a trigger](./__assets__/zapier-trigger-configuration.png)

A trigger possui as seguintes entradas:

- `Webhook Name`: Nome do seu webhook. Coloque aqui o nome da sua integração, por exemplo.
- `Event Type`: Indica quando a trigger é ativada. No exemplo ela será ativada sempre quando uma cobrança for totalmente paga. Veja as possibilidades de eventos:
  - `OPENPIX:CHARGE_CREATED` - Uma cobrança foi criada.
  - `OPENPIX:CHARGE_COMPLETED` - Uma cobrança foi totalmente paga. 
  - `OPENPIX:CHARGE_EXPIRED` - Uma cobrança não foi totalmente paga e expirou.
  - `OPENPIX:TRANSACTION_RECEIVED` - Uma transação PIX foi recebida.
  - `OPENPIX:TRANSACTION_REFUND_RECEIVED` - Novo reembolso de transação PIX recebido ou reembolsado.
  - `OPENPIX:MOVEMENT_CONFIRMED` - A transação do pix referente ao pagamento é confirmada.
  - `OPENPIX:MOVEMENT_FAILED` - Falha no pagamento é quando o pagamento é aprovado e ocorre um erro.
  - `OPENPIX:MOVEMENT_REMOVED` - O pagamento foi removido por um usuário.
- `Is Active?`: É necessário ativar esta opção para que o webhook funcione.

Agora realize o teste de sua trigger na seção _Test_:

![Testando a trigger](./__assets__/zapier-trigger-test.png)