---
id: integrating-pix-with-whatsapp
title: Integrando Pix com WhatsApp via OpenPix + BotConversa
tags:
  - whatsapp
  - integration
---

## 1. Criando o webhook no BotConversa

Dentro da seção `Automação`, acesse a opção de `Webhook`. Você irá cair nesta página:

![Criar um webhook dentro da plataforma BotConversa](/img/botconversa-create-webhook.png)

Clique no botão `Criar webhook`. Será adicionado um novo item a lista de webhooks,
você pode inserir o nome que desejar. Neste caso, vamos nomeá-lo como `Teste` por ora.

O que você deve estar vendo deverá ser algo semelhante a isto:

![Webhook do BotConversa criado](/img/botconversa-webhook-created.png)

Após criar o webhook em questão, você pode clicar no mesmo e será levado para uma tela
detalhando algumas informações e ações do respectivo webhook.

O que você estará vendo é semelhante a isto:

![BotConversa webhook detalhe](/img/botconversa-webhook-detail.png)

No lugar do borrão preto você estará vendo o respectivo URL do seu webhook, será esta
URL que você irá cadastrar na nossa plataforma.

Clique no botão `Copiar` para copiar o respectivo URL do seu webhook.

## 2. Criando o webhook na OpenPix

Para criar o webhook na OpenPix, recomendamos que você siga o nosso 
[tutorial](/docs/webhook/platform/webhook-platform-api).

### Requisição de teste do webhook

Após você adicionar o webhook, volte ao detalhe do webhook dentro do BotConversa.
Clique no botão `Receber dados`. Se tudo ocorreu bem, você verá uma opção contendo
a resposta a sua primeira requisição:

![OpenPix webhook primeira resposta](/img/botconversa-webhook-first-response.png)

Essa será as informações que você verá na resposta da requisição do webhook.

Você pode ignorá-la por enquanto. A primeira requisição que fazemos em todo endpoint
de webhook é responsável por validar se é uma URL válida ou não, serve estritamente
para testar o endpoint em questão.

### Requisição válida do webhook

Após receber a requisição de teste, você será capaz de receber as requisições reais
do nosso webhook. Neste caso, selecionamos a opção de `Nova Cobrança criada` para
seguirmos com o tutorial. Portanto, após:

1. Criar uma nova cobrança dentro da OpenPix
2. Pressionar o botão de reload no detalhe do webhook no BotConversa

O que você verá são as seguintes informações:

![OpenPix webhook resposta de cobrança criada](/img/botconversa-webhook-valid-response.png)

Isso é um _payload_ válido de um webhook quando se cria uma cobrança. Ali estará contido informações
como: valor da cobrança, informações do cliente, link de pagamento, BR code para pagamento (Pix copia e cola),
entre outras informações úteis.

## 3. Configurando o contato do webhook no BotConversa

Após adicionar o webhook do BotConversa dentro da OpenPix, é necessário adicionar o contato
que receberá a mensagem no WhatsApp.

Você verá o seguinte formulário:

![BotConversa estado inicial do formulário de contato](/img/botconversa-webhook-initial-form-contact.png)

Preencha ambas as informações de acordo com o esperado. Como no exemplo abaixo:

![BotConversa estado inicial do formulário de contato](/img/botconversa-webhook-filled-form-contact.png)

## 4. Iniciando o fluxo de conversa e enviando a mensagem

Caso opte pela maneira mais simples. Você pode adicionar uma nova ação e escolher a opção `Enviar mensagem`,
desta forma, você pode adicionar a mensagem que será enviada ao respectivo contato.

Porém, nós recomendamos que tais ações seja feitas a partir de um "Fluxo de conversa", isto garante
que você tenha um melhor controle e um melhor detalhamento a respeito de como e quando as mensagens
serão enviadas.

### Criando o fluxo de conversa

Para criar o fluxo de conversa, acesse a opção no `Fluxo de conversas` no menu lateral.
Você verá a seguinte tela:

![BotConversa - Fluxo de conversas](/img/botconversa-conversation-flow-screen.png)

Após acessar a tela, clique no botão `Criar`. Aparecerá um modal onde você poderá inserir o nome do
respectivo fluxo. Para este exemplo, nomearemos como `Teste`.

Após criar o fluxo, acesse-o clicando no mesmo. O que você irá ver é o detalhe do fluxo em questão.
As caixinhas são blocos de ações, você pode ver mais a respeito neste tutorial [aqui](https://ajuda.botconversa.com.br/construtor-de-fluxos-botconversa/fluxos-de-conversa/o-que-e-um-bloco-de-conteudo).

Seu fluxo estará semelhante a este aqui:

![BotConversa - Detalhe do fluxo de conversa](/img/botconversa-conversation-detail.png)

Clique no bloco de conteúdo. Você será capaz de inserir um texto da forma que preferir.
Também é possível separar em múltiplas mensagens ou adicionar outras lógicas a depender
do que precise.

### Associando o fluxo de conversa a ação do webhook

Após criar e configurar o seu fluxo de conversa, volte ao detalhe do respectivo webhook
e adicione mais uma ação.

Selecione a opção `Enviar fluxo` e selecione o fluxo que você acabou de criar (ou o
fluxo que você desejar).

![BotConversa - Ação de fluxo de conversa](/img/botconversa-webhook-flow-action.png)

O que você verá é algo semelhante a imagem acima.

Deste modo, você irá executar o fluxo de conversa de acordo com a execução do webhook
dentro do BotConversa.

Parabéns! Você configurou o BotConversa com a OpenPix!

## 5. Passos adicionas (opcional)

### Adicionando dados do webhook ao texto do fluxo de conversa

Caso queira inserir dados e informações da resposta do webhook, assista o tutorial a seguir: 
[Webhook disponibilizado para BotConversa ser acionado por outros sistemas sem intermediários](https://us06web.zoom.us/rec/play/3Xj5dcuBRDULOApuSKMPgwJa4eCmjzHkyBwRXvgR4OHDKq2FZwyiE-YZ3Rweygr4qn8kOOo74Zcyffc7.6-YttRdjMSm1VdNm?startTime=1664975296000&_x_zm_rtaid=PZVKWRNiRkeAYNHwBjDPnA.1673398847814.5bd6a02e3760d79e2115e1c2c8286b28&_x_zm_rhtaid=589).
