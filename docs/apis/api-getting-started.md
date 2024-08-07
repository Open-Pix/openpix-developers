---
id: api-getting-started
title: Começando
tags:
  - api
  - comecando
  - getting-started
sidebar_class_name: hidden
---

Este documento irá ajudá-lo a começar a utilizar as APIs e Plugins da OpenPix.

### Criando uma nova chave de API/Plugin

Todas as solicitações de APIs/Plugins devem ser autenticadas com uma chave de API.

Para usar APIs ou Plugin, você primeiro precisa criar uma nova chave de API ou um Plugin. Você pode criar chaves API e Plugins a qualquer momento na página de opções de API/Plugins da sua empresa (_precisa estar autenticado_).

### Passo 1 - Criar um novo aplicativo

Vá para `Api/Plugins` na barra lateral e clique em `Nova API/Plugin`.

> **Importante**: para visualizar o sidebar API/Plugins é necessário ter a permissão de: ADMIN.
>
> Caso você não possua uma das permissão solicite para o admin da sua plataforma a inserção da mesma para seu usuário.
>
> O usuário admin pode seguir este tutorial para [atualizar permissões de usuários](/docs/FAQ/faq-users)

![appid-1](/img/appId-1.png)

Dentro da tela de criação, coloque um nome para a integração, e selecione `API` ou `Plugin`

> **API**: api para ser utilizada em um ambiente/servidor
>
> **PLUGIN**: api para ser utilizada com nossos plugins ecommerce ou js

![appid-2](/img/appId-2.png)

Você será redirecionado para a tela de dados da `API/Plugin`, e basta copiar o AppID para utilizar em suas integrações.

![appid-3](/img/appId-3.png)

![AddNewApi](/img/apis/add-new-api.png)

Para criar chaves de APIs e Plugins, você precisa ter permissões de `ADMIN`.

### Guia de uso da API

- Todas as `requests` e `responses` da API usam o formato JSON
- Os IPs e certificados dos servidores backend da API mudam constantemente, não armazene em cache nem IPs do servidor nem certificados
- Todas as solicitações (requests) devem ser criptografadas usando `https`

### Segurança de chaves APIs

As chaves de API são extremamente poderosas, pois podem criar ou ler dados de sua empresa. A chave deve ser armazenada e compartilhada com cuidado extra.

Orientações da API:

- Não compartilhe chaves com terceiros
- Não reutilize chaves - Chaves de acessos, você pode gerar várias chaves
- Apenas gere chaves quando for necessário
- Desative chaves não utilizadas

### Restrições de APIs

- Limites de tamanho de Header e Payload Size: Qualquer solicitação, independente do endpoint usado, não deve exceder 10 MB
- Taxa de limite: Você não pode exceder 10 solicitações/segundo.
