---
id: getting-started
title: Configure a plataforma OpenPix
sidebar_label: Começando
tags:
- flow
- getting-started
- comecando
---

A plataforma OpenPix foi criada para facilitar a experiência do programador, garantindo ao mesmo tempo o mais alto nível de segurança. Esta documentação ajuda os programadores ou administradores dos sistemas a configurar corretamente a plataforma.

*Utilizar métodos automatizados tais como Single-Sign-On e APIs são preferenciais, uma vez que proporcionam uma melhor experiência ao usuário, aumentam a segurança e automatizam os processos.*

## Começando

Uma vez registrado na plataforma, você será capaz de convidar mais usuários para a plataforma, configurar métodos de login como single-sign-on, APIs ou mesmo importar usuários utilizando arquivos Excel. 

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

Se você se deparar com problemas utilizando a plataforma, por favor verifique os seguintes requisitos.

- Certifique-se de que possui uma lista de domínios permitidos da OpenPix no seu servidor proxy, ou firewall interno. Os seus utilizadores devem poder acessar a todos os domínios e subdomínios.
  
  > Tem que listar todos os domínios permitidos da OpenPix *.openpix.com.br

- Certifique-se de que não está bloqueando os e-mails do domínio da OpenPix.
  
  > Tem que listar todos os domínios permitidos da Openpix *.openpix.com.br em seu fornecedor de e-mail
  
- Não armazenar em cache

    > Não alterar ou impor novas políticas de cache para conteúdo estático OpenPix ou endereço IP. OpenPix utiliza uma rede CDN global e proteções adicionais de servidor para que os IPs mudem frequentemente e sem aviso prévio.
