---
id: idempotencia
title: Idempotência
tags:
  - api
  - conceito
  - idempotencia
---

## Idempotência

Idempotência, no contexto de desenvolvimento, significa que chamar uma determinada função uma vez ou várias vezes deve ter o mesmo efeito no estado do sistema.

Uma função ser idempotente não significa que o retorno é sempre igual, mas que essa função, caso ela tenha alterado o estado do sistema, não faça nenhuma nova alteração, caso ela seja chamada logo em seguida com os mesmos parâmetros.

Então, por exemplo, uma função que retorna o saldo de uma conta é idempotente, mesmo que ela retorne valores diferentes (porque outras funções podem ter alterado o estado do sistema entre uma chamada e outra.)

### Por que idempotência é relevante?

Um problema recorrente em sistemas orientados a eventos, é duplicação de eventos, isso pode ocorrer por diversas razões, como falhas de comunicação, invocações paralelas das funções que geram os eventos, etc.

Sistemas resilientes são construídos considerando que esses problemas podem e vão frequentemente acontecer, e se preparando de maneira adequada para que falhas de comunicação não causem um estado interno ruim.

Então, a principal importância da idempotência é fazer que seu sistema seja resiliente e confiável.

### Quando uma função deve ser idempotente?

Como tudo no desenvolvimento, depende fortemente do objetivo do projeto e das regras de negócio.

Entretanto, existem alguns padrões:

#### REST APIs

##### Rotas PUT

Todas as rotas com o verbo PUT, que fazem alterações em entidades.

Ex.: Uma rota que serve para mudar o endereço de um cliente.

Enquanto o novo endereço for o mesmo, não deve fazer diferença para o estado do sistema quantas vezes essa rota for chamada.

##### Rotas GET

Todas as rotas com o verbo GET, que servem para ler informações.

Ex.: Uma rota que serve para ler o saldo atual de uma conta bancária.

Mesmo que o saldo mude com o passar do tempo, é seguro chamar essa rota várias vezes, sem que ela cause alterações no estado do sistema.

##### Rotas DELETE

Todas as rotas com o verbo DELETE, que servem para apagar entidades.

Ex.: Uma rota que sirva para deletar uma cobrança.

Uma vez chamada, a função vai apagar a conta bancária, chamadas subsequentes não devem apagar outras contas, mas retornar alguma mensagem dizendo que essa conta já foi deletada.

#### WebHooks e sistemas orientados a eventos

Rotas que lidam com webhooks ou outras formas de orientação a eventos, por causa da insegurança da comunicação, tem a necessidade de serem idempotentes.

### Como implementar idempotência?

Esses são alguns padrões de como implementar idempotência>

#### Padrão getOrCreate

A ideia dessa padrão é verificar se a entidade que a função está tentando criar já não tem um equivalente criado no banco de dados.

Supondo essa função:

```js
const createCustomerBankAccount = function(customer, params){

    // Validações do modelo
    ...

    // Criando a conta no banco de dados
    db.customerBankAccount.create({ ...params, customer: customer.id })
}
```

Aplicando este padrão, ela pode ser rescrita da seguinte forma:

```js
const getOrCreateCustomerBankAccount = function(customer, params){

    // Antes de fazer validações para criação, podemos procurar pelos parâmetros mais importantes no nosso banco de dados e retornar uma conta já existente
    const existingCustomerBankAccount = db.customerBankAccount.get({
        customer: customer.id,
        bankId: params.bankId
    })

    if (existingCustomerBankAccount){
        return existingCustomerBankAccount;
    }

    // Validações do modelo
    ...

    // Criando a conta no banco de dados
    db.customerBankAccount.create({ ...params, customer: customer.id })
}
```

#### Padrão histórico de chamadas

A ideia desse padrão é salvar todas as chamadas feitas para a rota que lida com os eventos e ao receber uma nova chamada, verificar se não existe uma chamada igual que foi feita anteriormente.

Supondo essa função:

```js
const createCustomerBankAccount = function(customer, params){

    // Validações do modelo
    ...

    // Criando a conta no banco de dados
    db.customerBankAccount.create({ ...params, customer: customer.id })
}
```

Aplicando este padrão, ela pode ser rescrita da seguinte forma:

```js
const createCustomerBankAccount = function(customer, params){

    const newRequest = { customer, ...params }

    const existingRequest = db.events.get(newRequest);

    if (existingRequest){
        return;
    }

    // Validações do modelo
    ...

    // Criando a conta no banco de dados
    db.customerBankAccount.create({ ...params, customer: customer.id })

    db.events.create({...newRequest})
}
```

Ou ainda, usando hashing para poupar armazenamento:

```js
const createCustomerBankAccount = function(customer, params){

    const newRequestHash = MD5(JSON.stringify({ customer, ...params }));

    const existingRequest = db.events.get(hash: newRequestHash);

    if (existingRequest){
        return;
    }

    // Validações do modelo
    ...

    // Criando a conta no banco de dados
    db.customerBankAccount.create({ ...params, customer: customer.id })

    db.events.create({ hash: newRequestHash})
}
```
