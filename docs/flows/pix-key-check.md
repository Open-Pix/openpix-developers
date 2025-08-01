---
id: pix-key-check
title: Verificação de Chave Pix
tags:
  - api
  - pix
  - key
  - check
  - validation
---

## Verificação de Chave Pix

O endpoint de verificação de chave Pix permite validar e obter informações sobre uma chave Pix antes de processar pagamentos. Este endpoint é essencial para garantir a precisão dos dados de destino do pagamento e obter o `pixKeyEndToEndId` necessário para solicitações de pagamento.

## Detalhes do Endpoint

**URL:** `GET /api/v1/pix-keys/{pixKey}/check`

**URLs Base:**
- Produção: `https://api.woovi.com.br`
- Sandbox: `https://api.woovi-sandbox.com`

**Autorização:** AppID obrigatório

## Parâmetros da Requisição

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| pixKey | string | Sim | A chave Pix a ser verificada (CPF, CNPJ, email, telefone ou chave aleatória) |

## Estrutura da Resposta

### Resposta de Sucesso (200)

```json
{
  "pixKey": {
    "key": "31928282008",
    "type": "CPF",
    "account": {
      "accountId": "6290cxfd42831958a405debc",
      "accountType": "CHECKING",
      "bankName": "Banco do Brasil",
      "bankCode": "001",
      "branchCode": "0001",
      "accountNumber": "12345678"
    },
    "owner": {
      "name": "João Silva",
      "taxID": {
        "taxID": "0000000000",
        "type": "BR:CPF"
      }
    },
    "pixKeyEndToEndId": "9134e2866f71427abf00241681624586"
  }
}
```

### Resposta de Erro (400)

```json
{
  "error": "Invalid Pix key format",
  "message": "The provided Pix key does not match any valid format"
}
```

## Fluxo de Uso

### Passo 1: Verificar Chave Pix

Antes de criar um pagamento, valide a chave Pix de destino:

```bash
curl -X GET "https://api.woovi.com.br/api/v1/pix-keys/31928282008/check" \
  -H "Authorization: YOUR_APP_ID" \
  -H "Content-Type: application/json"
```

### Passo 2: Criar Pagamento com pixKeyEndToEndId

Use o `pixKeyEndToEndId` da resposta de verificação para criar um pagamento:

```bash
curl -X POST "https://api.woovi.com.br/api/v1/payment" \
  -H "Authorization: YOUR_APP_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "PIX_KEY",
    "value": 1000,
    "destinationAlias": "31928282008",
    "destinationAliasType": "CPF",
    "correlationID": "payment-123",
    "pixKeyEndToEndId": "9134e2866f71427abf00241681624586",
    "comment": "Pagamento via Chave Pix",
    "metadata": {
      "source": "api",
      "version": "1.0"
    }
  }'
```

## Fluxo Completo de Pagamento

### Processo de Verificação e Pagamento

Para processar um pagamento por chave Pix, siga estes passos:

1. **Verifique a chave Pix** usando o endpoint de verificação
2. **Extraia o pixKeyEndToEndId** da resposta de verificação
3. **Crie o pagamento** incluindo o pixKeyEndToEndId obtido
4. **Monitore o status** do pagamento através de webhooks

### Exemplo Prático

Suponha que você queira fazer um pagamento de R$ 10,00 para a chave Pix `31928282008`:

Primeiro, verifique a chave Pix:

```bash
curl -X GET "https://api.woovi.com.br/api/v1/pix-keys/31928282008/check" \
  -H "Authorization: YOUR_APP_ID"
```

A resposta incluirá o `pixKeyEndToEndId` necessário. Use esse valor para criar o pagamento:

```bash
curl -X POST "https://api.woovi.com.br/api/v1/payment" \
  -H "Authorization: YOUR_APP_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "PIX_KEY",
    "value": 1000,
    "destinationAlias": "31928282008",
    "destinationAliasType": "CPF",
    "correlationID": "pagamento-001",
    "pixKeyEndToEndId": "9134e2866f71427abf00241681624586",
    "comment": "Pagamento de teste"
  }'
```

## Notas Importantes

### pixKeyEndToEndId

O campo `pixKeyEndToEndId` é obrigatório para pagamentos por chave Pix e deve ser obtido através do endpoint de verificação de chave Pix. Este identificador é usado para rastrear consultas de chave Pix e garantir a validade da transação.

No endpoint de criação de pagamento, você deve enviar o `pixKeyEndToEndId` no corpo da requisição para que possamos rastrear as consultas de chave Pix:

```bash
curl -X POST "https://api.woovi.com/api/v1/payment" \
  -H "Authorization: {APP_ID}" \
  -H "Content-Type: application/json" \
  -d '{
    "pixKeyEndToEndId": "...",
    "type": "PIX_KEY",
    "value": 1000,
    "destinationAlias": "31928282008",
    "destinationAliasType": "CPF",
    "correlationID": "payment-123"
  }'
```

### Validação

Sempre valide as chaves Pix antes de processar pagamentos para garantir a precisão dos dados. A verificação prévia ajuda a identificar problemas como chaves inválidas ou contas bloqueadas.

### Tratamento de Erros

Implemente tratamento adequado de erros para ambos os endpoints. Erros comuns incluem chaves Pix inválidas, problemas de conectividade e erros de autorização.

### Limite de Taxa

O endpoint está protegido por um limitador de taxa devido às restrições do Bacen. Por isso, a Woovi possui um limite de taxa neste endpoint.

O único problema ocorre quando você recebe um 404 em uma chave Pix. Após alguns 404s, você receberá um 429 e precisará aguardar o reabastecimento do seu limitador de taxa.

## Tipos de Chave Pix Suportados

- **CPF**: CPF de pessoa física brasileira
- **CNPJ**: CNPJ de pessoa jurídica brasileira
- **EMAIL**: Endereço de email
- **PHONE**: Número de telefone
- **RANDOM**: Chave alfanumérica aleatória
