---
id: payment-failed-errors
title: Como identificar os erros de um pagamento falho?
tags:
  - payment
  - error
---

## Erros e Descrições

| Código do Erro         | Descrição                                                 | Detalhe                                                                              |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------ | --- |
| ALIAS_LIMIT_ERROR      | Limite de consultas chave pix excedido                    | Toda conta possui um limite de consulta de chaves pix sem ter o pagamento liquidado. |
| PAY_PIX_KEY_ERROR      | Erro ao realizar o pagamento para a chave pix informada   | Erro ao processar o pagamento para a chave pix do pagamento                          |
| PIX_KEY_INFO_ERROR     | Erro ao consultar informações da chave pix do pagamento   | Erro durante a consulta de informações da chave pix                                  |
| PIX_KEY_INFO_NOT_FOUND | Chave pix informada não encontrada/registrada em um banco | A chave pix não esta registrada em uma instituição bancária                          |
| REACH_TRANSFER_LIMIT   | Limite de trasferência atingido                           | A conta atingiu o limite diurno/noturno de trasferência pix                          |
| NOT_ENOUGH_BALANCE     | Saldo insuficiente                                        | A conta não possuí saldo suficiente para realizar a transferência                    | A   |

### Limite de consultas chave pix excedido

As consultas de chaves pix utiliza o algoritmo "Leaky Bucket" para fazer controle da mesma.

#### O que é o Leaky Bucket?

O "leaky bucket" é um algoritmo usado para limitar as requisições feitas ao DICT (Diretório de Identificadores de Contas Transacionais). Ele funciona como um balde com um pequeno furo embaixo. As requisições são como a água que entra no balde, e a capacidade de processamento do sistema é o furo por onde a água escoa. Se muita água entra de uma vez (muitas requisições), o balde enche e algumas requisições podem ser limitadas ou bloqueadas.

#### Limitação de Consultas de Chave Pix

Quando você consulta uma chave Pix, o sistema verifica se o recebedor é autêntico e cria uma mensagem de instrução de pagamento. No entanto, se você consulta uma chave e não conclui o pagamento, isso pode levar a uma limitação ou bloqueio das suas consultas futuras. Se a chave Pix for inválida, suas tentativas podem se esgotar rapidamente, resultando no bloqueio da operação.

#### Política de Limitação

Existem diferentes políticas de limitação com base no tipo de usuário, para empresas a regra o seguinte:

Pessoa Jurídica (PJ): O limite é de 20 consultas. A cada consulta não concluída, esse saldo é reduzido. O saldo é reestabelecido após 2 horas para cada token.

Entender esses limites é essencial para evitar bloqueios indesejados. Recomendamos que as consultas de chave Pix sejam feitas com a intenção de completar o pagamento, e que se evite consultas desnecessárias ou repetitivas.

:::info
Artigo Original [https://ajuda.openpix.com.br/pt-br/article/como-funciona-o-limite-de-consulta-de-chave-pix-para-realizar-pagamentos-kbsxq8/#2-o-que-e-o-leaky-bucket](https://ajuda.openpix.com.br/pt-br/article/como-funciona-o-limite-de-consulta-de-chave-pix-para-realizar-pagamentos-kbsxq8/#2-o-que-e-o-leaky-bucket)
:::
