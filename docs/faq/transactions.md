---
id: faq-transactions
title: Transações
sidebar_label: Transações
tags:
- faq
- transaction
---

### O que é uma transação?

Uma transação representa qualquer movimentação financeira via pix na plataforma.

Para acessá-las, selecione o menu `Transações`.

![Menu Transactions](/img/FAQ/transactions-menu.png)


### O que é um Pix avulso?

É uma transação enviada diretamente para a sua chave Pix sem uma cobrança ou um qrcode estático previamente veiculado.

Exemplo: um cliente transfere um valor para a chave Pix da sua empresa, ao invés de ler o QR code da cobrança.

### Pix avulso é cobrado?

Sim, caso o cliente realize um Pix avulso para a chave aleatória da sua conta virtual OpenPix haverá cobrança da taxa de R$ 0,50.

### Como localizar uma transação?

A melhor forma de localizar uma transação Pix é pelo endToEndId.

Basta pesquisar em `Transações` o endToEndId da transação que deseja encontrar.

![endToEndId](/img/FAQ/endToEndId.png)

O cliente final pode encontrar essa informação no comprovante de pagamento.

### O que é um endToEndId?

É um código identificador único que toda transação Pix possui. Normalmente essa informação está presente no comprovante de pagamento disponibilizado por todos os bancos.

Ele é gerado automaticamente pelo Pix(Bacen) e é único para cada transação.

Exemplo de um endToEndId que é mostrado no detalhe de uma transação:

![endToEndId Detail](/img/FAQ/endToEndId-detail.png)

### Onde encontrar o endToEndId no comprovante do banco?

Exemplo de um endToEndId que é mostrado no comprovante de pagamento:

![endToEndId Pag](/img/FAQ/pag-endToEndId.png)

Geralmente o endToEndId inicia com a letra maiscula `E`.

### Posso reembolsar uma transação?

Sim, você pode reembolsar totalmente uma transação dentro da plataforma em até 90 dias.

Basta ir em `Transações`

![Menu Transactions](/img/FAQ/transactions-menu.png)

Buscar pela transação que deseja reembolsar

![Transactions](/img/FAQ/transactions.png)

E clicar no botão `Reembolsar`

![Transactions detail](/img/FAQ/transaction-detail.png)

Depois confirmar o endToEndId da transação digitando os últimos 4 caracteres do endToEndId.

![Refund transactions](/img/FAQ/refund.png)

Lembre-se, após a conclusão o reembolso não pode ser desfeito.

### Como reprocessar os webhooks de uma transação?
Você pode reprocessar os webhooks de uma transação indo até o detalhe da mesma e disparando via o botão `Reenviar Webhook`. 

Você encontrará o botão logo abaixo da tabela `Webhooks` conforme imagem abaixo.

![Webhooks transactions](/img/FAQ/transaction_webhooks.png)

### Como ver os logs de um webhook de uma transação?
Clicando em cima de uma linha da tabela de webhooks você pode ver os logs do especifico webhook selecionado.

![Webhooks transactions log](/img/FAQ/transaction_webhooks_log.png)


