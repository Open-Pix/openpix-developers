---
id: webhook-platform-role
title: Adicionando um usuário para ter acesso as funcionalidades de API e Webhook
---

Pela Openpix é possível criar webhooks para interceptar quando um pix for realizado. Hoje, há duas maneiras de realizar a criação do mesmo: via plataforma ou API.

Para adicionar um novo usuário através da plataforma para ter acesso as funcionalidades de API e Webhook siga o seguinte passo a passo:

### Step 1 - Crie um novo usuário

- Procure no menu de administrador por `permissões`

![AdminPanel](/img/webhook/menu-admin-permissions.png)

- Clique em `Adicionar usuário`

![Add user](/img/webhook/add-user.png)

- Preencha todos os campos e clique em salvar

![Add user form](/img/webhook/add-user-form.png)

### Step 2 - Adicione a permissão `OPEN_PIX::API_WEBHOOK` para dar acesso ao usuário

- Depois de criado você irá nos detalhes do respectivo usuário e clique em `Permissões`

![User list](/img/webhook/user-list.png)

![User detail](/img/webhook/user-detail.png)

- Selecione a permissão `OPEN_PIX::API_WEBHOOK`

![Webhook role](/img/webhook/webhook-role.png)

## Step 3 - Visão do usuário com permissão `OPEN_PIX::API_WEBHOOK`

- Depois de adicionado a permissão ao usuário ele terá acesso ao menu administrador com `API/Plugins` onde será possível criar novos webhooks

![Menu webhook](/img/webhook/menu-webhook.png)