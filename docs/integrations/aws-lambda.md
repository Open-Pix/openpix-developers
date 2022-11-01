---
id: integration-aws-lambda
title: Integrando Pix com AWS Lambda (serverless)
sidebar_label: AWS Lambda
---

### Configurando a AWS CLI

Precisamos ter a `aws` CLI configurada também. É necessário, pois ela quem irá controlar toda
a questão de acesso para a sua conta e o script que vai fazer o _deploy_ da sua aplicação, via CDK.

Neste [link](https://aws.amazon.com/cli/), contém a instalação para a CLI de acordo com o seu
sistema operacional.

Depois disso será necessário que você configure a CLI a partir do comando: `aws configure`. Ele irá
pedir alguns valores como: `AWS Access Key ID`, `AWS Secret Access Key`, etc. Para entender como de
fato conseguir tais valores, sugerimos ver a documentação da própria [AWS](https://docs.aws.amazon.com/pt_br/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-creds), ela vai instruir o
passo a passo completo a respeito.

#### Referências

- [Instalação rápida da nova configuração](https://docs.aws.amazon.com/pt_br/cli/latest/userguide/getting-started-quickstart.html#getting-started-quickstart-new)

### Configurando o CDK

Primeiro de tudo, é necessário instalar o CDK. Para isso, como pré-requisito é necessário ter o 
[npm](https://www.npmjs.com/) instalado na sua máquina também (se preferir, pode usar o Yarn).

Após instalação do NPM, você irá instalar o toolkit da AWS CDK da seguinte forma:

```
npm install --global aws-cdk
```

Após finalizar, valide que tudo ocorreu da forma correta com:

```
cdk --version
```

#### Referências

- [Começando com o CDK](https://docs.aws.amazon.com/pt_br/cdk/v2/guide/getting_started.html#getting_started_install)

### Repositório de boilerplate para CDK + AWS Lambda

Para os próximos passos, temos um repositório com _boilerplate_. Caso for do seu
interesse para continuar as próximas etapas, você pode acessá-lo por [aqui](https://github.com/Open-Pix/aws-cdk-rest-lambda-boilerplate).

### Fazendo o _bootstrap_ do CDK

Por debaixo dos panos, o CDK utiliza outros recursos como os _buckets_ do S3, etc. Precisamos criar eles
para assegurar que todo o fluxo ocorra da forma correta. Para isso, execute:

```
cdk boostrap aws://ACCOUNT-NUMBER/REGION
```

Para você pegar tanto o `ACCOUNT-NUMBER` quanto a `REGION` desejada, caso não tenha em mãos,
via a AWS CLI que já utilizou anteriormente, execute o comando:

```
aws sts get-caller identity
```

Com isso você vai ver algumas informações a respeito da sua conta,incluindo `REGION`
e o `ACCOUNT-NUMBER`.

### Fazendo o deploy da minha stack CDK

Após configurar corretamente A CLI do CDK, precisamos fazer mais dois passos para, por fim, termos
nossa stack rodando na AWS:

Primeiro de tudo, vamos "sintetizar" a nossa aplicação, para ficar de acordo com o esperado pelo
CloudFormation, isto é, um serviço que é usado pela CDK, por debaixo dos panos, para lidar com
toda a responsabilidade de deployment, etc.

Para sintetizarmos, precisamos executar esse comando:

```
cdk synth
```

Isso vai fazer com que toda a sua aplicação converta para um formato YML amigável que será lido
pelo AWS CloudFormation.

---

Depois de sintetizado, basta fazer o _deploy_  da nossa stack, para isso execute o comando:

```
cdk deploy
```

Com isso, você conseguiu deployar a sua aplicação com sucesso! É possível acessar os recursos como:

- API Gateway
- Lambda

E ver que tudo foi deployado corretamente.

#### Referências

- [Sua primeira aplicação CDK](https://docs.aws.amazon.com/pt_br/cdk/v2/guide/hello_world.html)

## Como usar?

Para usar, precisamos ter três pontos configurados corretamente:

- API Gateway (você já configurou no ponto anterior);
- O webhook;

### Configurando o webhook

Para criarmos o webhook, acesse a rota de [API/Plugins](https://app.openpix.com.br/home/api/list)
dentro da nossa plataforma e clique no botão: `Novo webhook`. Você irá cair neste formulário:

![Webhook](/img/integrations/new-webhook-form.png)

Preenchendo ele, você seguirá a seguinte ordem:

1. `Nome`, insira o nome que preferir para os webhooks.
2. `Evento`, neste caso, é o evento que esperamos acontecer para disparar o webhook,
você selecionará o evento de: **Transação Pix Recebida**.
3. `Url`, aqui, coloque a URL do API Gateway que vai servir como gatilho (trigger)
para a sua função Lambda.

Depois de preencher esses três campos, clique em `Salvar`. Parabéns, você criou seu
novo webhook!

Para mais informações a respeito de como configurar seu webhook, temos outras
documentações a respeito:

- [Criando um webhook para interceptar um Pix e chamar uma API](../webhook/platform/webhook-platform-api.mdx)
- [Configurando os cabeçalhos HTTP do meu webhook](../webhook/webhook-headers.mdx)
