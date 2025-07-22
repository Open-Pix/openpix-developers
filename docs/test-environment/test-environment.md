---
id: test-environment
title: Acessando o Ambiente de teste openpix
sidebar_label: Ambiente de teste
tags:
- flow
- getting-started
- comecando
- test environment
---

A plataforma openpix foi desenvolvida com o objetivo de simplificar e gerenciar totalmente geração, cobrança, liquidação e conciliação em tempo real de pagamentos instantâneos usando Pix. Proporcionando ao mesmo tempo ótima experiência de programção atentendo requisitos de máximos de segurança. Esta documentação visa auxiliar os programadores e administradores de sistemas na configuração adequada da plataforma, especialmente em relação ao método de pagamento Pix.

*Utilizar métodos automatizados tais como Single-Sign-On e APIs são preferenciais, uma vez que proporcionam uma melhor experiência ao usuário, aumentam a segurança e automatizam os processos.*

## Começando

:::caution

Os dados de produção não funcionam no ambiente de testes.

Para acessar o ambiente de testes, 

Registre-se novamente através da seguinte URL:

👉 https://app.openpix-sandbox.com/

:::

Após se registrar no ambiente de testes, você terá acesso a todas as funcionalidades do ambiente de produção, mas em um ambiente seguro para testes.

Você poderá:

- Convidar outros usuários para a plataforma;

- Configurar métodos de login;

- Gerar cobranças individuais ou em lote;

- Utilizar APIs e integrações;

- Importar usuários via arquivos Excel.

## Configurando o Single Sign-On (SSO)

OpenPix suporta múltiplos SSO identity providers (IdP). Um Identity Provider é um servidor que pode fornecer informações de identidade sobre os usuários da sua empresa. Por exemplo, o Google pode ser um fornecedor de identidade para empresas que utilizam a solução G Suite. Se a sua empresa está utilizando a solução G Suite, pode entrar automaticamente na OpenPix utilizando a sua conta Google. então um servidor Google enviará a sua informação de identidade para esse site.

### Azure Single Sign On

Se a sua empresa utiliza o Azure Single Sign On, poderá entrar automaticamente na OpenPix utilizando o Azure como IdP. Para utilizar esta estratégia de login, é preciso ativar esta opção no menu de definições.

### Google Single Sign On

Se a sua empresa utiliza a G Suite, poderá iniciar automaticamente uma sessão na OpenPix utilizando o Google como IdP.

### SAML Single Sign on

Se a sua empresa utiliza SAML, poderá entrar automaticamente no OpenPix SAML Servers como IdP.

## Segurança e Firewall

### Lista de Domínios Openpix permitidos

A fim de operar corretamente os usuários da sua empresa precisam ter acesso aos servidores da OpenPix. A OpenPix utiliza tecnologias web padrão e aplica a encriptação em todas as comunicações, na maioria dos casos a sua configuração deve funcionar fora da caixa, sem requisitos adicionais.

Se você se deparar com problemas utilizando a plataforma, por favor verifique os seguintes requisitos:

- Certifique-se que os domínios da OpenPix estão liberados seu servidor proxy ou firewall. Além disso seus clientes também devem ter poder acessar todos os domínios e subdomínios.
  
  > Permitir todo tráfego para OpenPix *.openpix.com.br 
  > Permitir todo tráfego para OpenPix *.openpix.com

- Certifique-se de que não está bloqueando os e-mails do domínio da OpenPix.
  
  > Permitir emails da Openpix *.openpix.com.br em seu fornecedor de e-mail
  > Permitir emails da Openpix *.openpix.com em seu fornecedor de e-mail
  
- Não armazenar em cache

    > Não alterar ou impor novas políticas de cache para conteúdo estático OpenPix ou endereço IP. 
    > OpenPix utiliza uma rede CDN global e proteções adicionais de servidor para que os IPs mudem frequentemente e sem aviso prévio.
