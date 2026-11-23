---
id: check-pix-key
sidebar_position: 3
title: Verificação de Chave Pix
tags:
  - payment
  - api
---

:::warning Uso exclusivo para iniciar um pagamento
Este endpoint serve apenas para identificar o destinatário de um Pix antes de o pagador confirmar o pagamento, conforme o art. 75 do Regulamento do Pix. Toda consulta deve ser seguida da criação do pagamento usando o `pixKeyEndToEndId` retornado.

Não use este endpoint para:

- consultar ou enriquecer dados cadastrais de pessoas ou empresas;
- validar contas ou identidade em cadastro, onboarding, análise de crédito ou KYC;
- verificar chaves ou montar bases de dados sem a intenção de realizar um pagamento.

Consultas sem pagamento posterior são monitoradas e bloqueadas automaticamente em todas as contas (veja [Limitação de Taxa](#limitação-de-taxa)). O uso indevido pode levar ao encerramento da conta.
:::

Este documento explica como identificar o destinatário de um Pix antes de confirmar o pagamento.

A chave Pix é um identificador (CPF/CNPJ, e-mail, celular ou chave aleatória) vinculado a uma conta transacional mantida em um participante do Pix. Esse vínculo fica registrado no DICT, o diretório de chaves operado pelo Banco Central. O Pix é pago para essa conta, e não para a chave.

A consulta busca no DICT o titular e a instituição dessa conta, para que o pagador confira o destinatário antes de confirmar o Pix.

![diagram sequencial checagem de chave pix](./__assets__/sequenceDiagrama_checagem_de_chave_pix.png)

O endpoint de verificação de chave de pix retornará os dados sobre uma chave de pix. A chave pode ser informada no path (GET) ou no corpo da requisição (POST).

- Usando GET com a chave no path:
```bash
curl -X GET "https://api.woovi.com/api/v1/pix-keys/{pix-key}/check" \
  -H "Authorization: {APP_ID}"
```

Você pode acessar [aqui](https://developers.woovi.com/api#tag/pixkey-check-request-access/GET/api/v1/pix-keys/{pixKey}/check) a documentação referente a esse _endpoint_.

- Usando POST com a chave no corpo (útil quando a chave contém caracteres que ficam ruins no path, como e-mails):
```bash
curl -X POST "https://api.woovi.com/api/v1/pix-keys/check" \
  -H "Authorization: {APP_ID}" \
  -H "Content-Type: application/json" \
  --data-raw '{
    "pixKey": "<chave pix>"
  }'
```

Você pode acessar [aqui](https://developers.woovi.com/api#tag/pixkey-check-request-access/POST/api/v1/pix-keys/check) a documentação referente a esse _endpoint_.

## Formato da chave

Envie a chave no formato do seu tipo. Telefone sempre no formato internacional, com `+55` e o DDD (`+5511912345684`): um número só com dígitos que seja um CPF válido é consultado como CPF, mesmo que também seja um celular. Veja [Formato da chave Pix](https://developers.woovi.com/docs/payment/pix-key-format).

## Limitação de Taxa

A Woovi controla quantas consultas ao DICT cada conta pode fazer. São dois controles:

- As consultas ao DICT têm um limite, que pesa as consultas a chaves inexistentes: após alguns `404`, você receberá um `429` e precisará aguardar a reposição do limite. Veja [Token Bucket](https://developers.woovi.com/docs/payment/pix-key-token-bucket).
- Toda conta pode fazer no máximo 10 consultas sem o pagamento correspondente. Ao atingir esse limite:
  - nas contas do modo BaaS, a consulta de chave fica bloqueada por 24 horas, com `429`. Veja [Consultas de chave Pix sem pagamento](https://developers.woovi.com/docs/baas/consultas-chave-pix-sem-pagamento);
  - nas demais contas, o acesso ao endpoint é retirado e as consultas passam a responder `403 PIX_KEY_CHECK_NOT_ALLOWED`.

### O que é retornado ?

- O campo `type` segue o enum: `CPF`, `CNPJ`, `EMAIL`, `PHONE`, `RANDOM` ou `EVP`.
- `pixKey` volta na **forma normalizada**, independente de como você enviou:
  - CPF / CNPJ → só dígitos (`00000000191`, `00000000000191`)
  - EMAIL → em lowercase
  - PHONE → formato internacional E.164 (`+5511999998888`)
  - RANDOM / EVP → UUID de 36 chars intacto
- `owner.name` volta inteiro (não mascarado), como está registrado no DICT.
- `owner.taxID`: para **CPF** vem parcialmente mascarado, preservando os 3 primeiros e os 2 últimos dígitos (ex: `111.***.***-80`); para **CNPJ** vem inteiro e formatado (ex: `00.000.000/0001-91`).
- `owner.branch` e `owner.account` voltam sempre totalmente mascarados, com valor fixo: `****` e `********************` (20 asteriscos). Os números reais da agência e da conta não são retornados.
- `owner.psp` é o **código ISPB** (8 dígitos) do PSP da chave, não o nome do banco — se precisar exibir o nome, mantenha um mapeamento ISPB → instituição do seu lado.
- A cada chamada o DICT é consultado de novo e um novo `pixKeyEndToEndId` é gerado. Esse identificador é o que você precisa guardar e enviar no endpoint de [Criar Pagamento](./payment-how-to-use-api-to-create.mdx).

```json
{
  "pixKeyEndToEndId": "E12345678202601011200abcdefghijk",
  "pixKey": "00000000191",
  "type": "CPF",
  "owner": {
    "name": "Fulano de Tal",
    "taxID": "000.***.***-91",
    "psp": "12345678",
    "branch": "****",
    "account": "********************"
  }
}
```

## Erros possíveis

- `400` — chave em formato inválido (não passou em `CPF` / `CNPJ` / `EMAIL` / `PHONE` / UUID de 36 chars)
- `404 PIX_KEY_INFO_NOT_FOUND` — chave válida mas não cadastrada no DICT
- `400` para chave de risco — `Pix key related to an account suspected of fraud`
- `400` para DICT indisponível — `Error verifying pix key`
- `429 TOO_MANY_REQUESTS` — limite de consultas ao DICT atingido (veja a seção "Limitação de Taxa" acima)
- `429` com `Muitas consultas de chave Pix sem pagamento. Tente novamente amanhã.` — a conta BaaS atingiu 10 consultas sem pagamento e a consulta de chave fica bloqueada por 24 horas (veja [Consultas de chave Pix sem pagamento](https://developers.woovi.com/docs/baas/consultas-chave-pix-sem-pagamento))
- `403 PIX_KEY_CHECK_NOT_ALLOWED` — sua conta não tem a feature liberada, ou o acesso foi retirado depois de 10 consultas sem pagamento

Na rota `GET` os erros voltam com `error` + `errorCode`. Na rota `POST` apenas `error` é retornado.

## Prompt para IA

Copie o trecho abaixo numa IA de coding (Claude / Cursor / Gemini / ChatGPT) pra implementar a integração no seu app:

> Implemente uma função `checkPixKeyBeforePayment(pixKey)` que verifica o destinatário de um Pix via Woovi, para exibir os dados ao pagador antes de ele confirmar o pagamento.
>
> **Regra de uso obrigatória — inclua no código e respeite na implementação:** este endpoint serve exclusivamente para identificar o destinatário de um Pix que será pago em seguida, conforme o art. 75 do Regulamento do Pix. Toda chamada deve ser seguida da criação do pagamento usando o `pixKeyEndToEndId` retornado. Não implemente nenhum uso para consulta ou enriquecimento de dados cadastrais, validação de conta ou identidade (cadastro, onboarding, crédito, KYC), verificação de chaves em lote ou montagem de bases de dados. Não chame o endpoint sem que haja um pagamento a ser feito. Consultas sem pagamento posterior são monitoradas e bloqueadas automaticamente.
>
> **Endpoint**: `POST https://api.woovi.com/api/v1/pix-keys/check`
> **Header**: `Authorization: <APP_ID>` e `Content-Type: application/json`
> **Body**: `{ "pixKey": "<chave>" }` (aceita CPF, CNPJ, e-mail, telefone ou EVP/UUID; não aceita BR Code/copia e cola — use o endpoint de decode/emv pra isso)
>
> **Resposta de sucesso (200)**:
> ```json
> {
>   "pixKeyEndToEndId": "E12345678202601011200abcdefghijk",
>   "pixKey": "<chave normalizada>",
>   "type": "CPF" | "CNPJ" | "EMAIL" | "PHONE" | "RANDOM" | "EVP",
>   "owner": {
>     "name": "<nome do titular>",
>     "taxID": "<CPF parcialmente mascarado ou CNPJ inteiro>",
>     "psp": "<ISPB de 8 dígitos do banco da chave>",
>     "branch": "****",
>     "account": "********************"
>   }
> }
> ```
>
> **Fluxo esperado**:
> 1. O pagador informa a chave Pix.
> 2. A função chama o endpoint e exibe ao pagador nome, documento mascarado e instituição, para conferência.
> 3. O pagador confirma.
> 4. O app cria o pagamento enviando o `pixKeyEndToEndId` (ver [Criar Pagamento](https://developers.woovi.com/docs/payment/payment-how-to-use-api-to-create)).
>
> Se o pagador desistir, não repita a consulta automaticamente nem armazene os dados retornados além do necessário para concluir o pagamento.
>
> **Erros a tratar**: 400 (chave em formato inválido ou não elegível para pagamento), 404 `PIX_KEY_INFO_NOT_FOUND` (chave não encontrada), 429 (limite de consultas ao DICT atingido — aguarde a reposição do token bucket, ou 24 horas se a mensagem for de consultas sem pagamento), 403 `PIX_KEY_CHECK_NOT_ALLOWED` (funcionalidade não liberada para a conta ou retirada após consultas sem pagamento).
>
> **Detalhes importantes**:
> - `psp` é só o código ISPB (8 dígitos) — pra mostrar o nome do banco, mantenha um mapeamento ISPB → instituição do seu lado.
> - `pixKey` sempre volta normalizada: telefone em E.164 (`+55...`), e-mail em lowercase, CPF/CNPJ só dígitos.
> - `owner.taxID` de CPF vem mascarado (ex.: `111.***.***-80`); de CNPJ vem inteiro.
> - Use a consulta só para identificar o destinatário antes de o pagador confirmar um Pix (art. 75 do Regulamento do Pix). Toda consulta deve ser seguida da criação do pagamento com o `pixKeyEndToEndId` retornado; não use para validar contas, KYC ou enriquecer dados.
> - Cada `pixKeyEndToEndId` vale para um pagamento: gere uma nova consulta só quando houver um novo pagamento.
