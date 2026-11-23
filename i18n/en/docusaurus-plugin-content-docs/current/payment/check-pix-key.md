---
id: check-pix-key
sidebar_position: 3
title: Pix Key Check
tags:
  - payment
  - api
---

:::warning Only to start a payment
This endpoint is only for identifying the recipient of a Pix before the payer confirms the payment, as set out in art. 75 of the Pix Regulation. Every check must be followed by creating the payment with the returned `pixKeyEndToEndId`.

Do not use this endpoint to:

- look up or enrich registration data about people or companies;
- validate accounts or identity during sign-up, onboarding, credit analysis or KYC;
- check keys or build databases without the intention of making a payment.

Checks without a subsequent payment are monitored and automatically blocked on every account (see [Check limits](#check-limits)). Misuse can lead to the account being closed.
:::

This document explains how to identify the recipient of a Pix before confirming the payment.

A Pix key is an identifier (CPF/CNPJ, email, phone number or random key) linked to a transactional account held at a Pix participant. That link is registered in the DICT, the key directory operated by the Central Bank of Brazil. The Pix is paid to that account, not to the key.

The check looks up the holder and the institution of that account in the DICT, so the payer can review the recipient before confirming the Pix.

![Pix key check sequence diagram](./__assets__/sequenceDiagrama_checagem_de_chave_pix.png)

The Pix Key Check endpoint returns data about a Pix key. The key can be sent in the path (GET) or in the request body (POST).

- Using GET with the key in the path:
```bash
curl -X GET "https://api.woovi.com/api/v1/pix-keys/{pix-key}/check" \
  -H "Authorization: {APP_ID}"
```

See the [API reference](/api#tag/pixkey-check-request-access/GET/api/v1/pix-keys/{pixKey}/check) for this _endpoint_.

- Using POST with the key in the body (useful when the key has characters that don't fit well in a path, such as e-mails):
```bash
curl -X POST "https://api.woovi.com/api/v1/pix-keys/check" \
  -H "Authorization: {APP_ID}" \
  -H "Content-Type: application/json" \
  --data-raw '{
    "pixKey": "<pix key>"
  }'
```

See the [API reference](/api#tag/pixkey-check-request-access/POST/api/v1/pix-keys/check) for this _endpoint_.

## Key format

Send the key in the format of its type. Phone numbers always in international format, with `+55` and the area code (`+5511912345684`): a digits-only number that is a valid CPF is looked up as a CPF, even if it is also a mobile number. See [Pix key format](https://developers.woovi.com/en/docs/payment/pix-key-format).

## Check limits

Woovi controls how many DICT lookups each account can make. There are two controls:

- **Checks on keys that do not exist.** After a few `404`s, the check starts answering `429` until the limiter is refilled. See [Token Bucket](https://developers.woovi.com/en/docs/payment/pix-key-token-bucket).
- **Checks without a payment.** Applies to every account: 10 checks without the matching payment trigger an automatic block.
  - On BaaS accounts, Pix key checks are blocked for 24 hours and answer `429`. See [Pix key checks without payment](https://developers.woovi.com/en/docs/baas/consultas-chave-pix-sem-pagamento).
  - On all other accounts, access to the endpoint is removed and the check answers `403 PIX_KEY_CHECK_NOT_ALLOWED`. To check keys again, access must be requested again.

### What is returned?

- `type` is one of: `CPF`, `CNPJ`, `EMAIL`, `PHONE`, `RANDOM` or `EVP`.
- `pixKey` comes back **normalized**, regardless of how you sent it:
  - CPF / CNPJ → digits only (`00000000191`, `00000000000191`)
  - EMAIL → lowercase
  - PHONE → E.164 international format (`+5511999998888`)
  - RANDOM / EVP → 36-char UUID, unchanged
- `owner.name` comes back in full (not masked), as registered in the DICT.
- `owner.taxID`: for a **CPF** it is partially masked, keeping the first 3 and last 2 digits (e.g. `111.***.***-80`); for a **CNPJ** it comes back in full and formatted (e.g. `00.000.000/0001-91`).
- `owner.branch` and `owner.account` are always fully masked with a fixed value: `****` and `********************` (20 asterisks). The real branch and account numbers are never returned.
- `owner.psp` is the **ISPB code** (8 digits) of the key's PSP, not the bank name. To display the name, keep an ISPB → institution mapping on your side.
- Every call queries the DICT again and generates a new `pixKeyEndToEndId`. This identifier is what you need to store and send to the [Create Payment](./payment-how-to-use-api-to-create.mdx) endpoint.

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

## Possible errors

- `400` — invalid key format (not a valid `CPF` / `CNPJ` / `EMAIL` / `PHONE` / 36-char UUID)
- `404 PIX_KEY_INFO_NOT_FOUND` — valid key, but not registered in the DICT
- `400` for a risky key — `Pix key related to an account suspected of fraud`
- `400` when the DICT is unavailable — `Error verifying pix key`
- `429` — DICT lookup limit reached (see [Check limits](#check-limits))
- `429` with `Too many Pix key checks without a payment. Try again tomorrow.` — the BaaS account reached 10 checks without payment and Pix key checks are blocked for 24 hours (see [Pix key checks without payment](https://developers.woovi.com/en/docs/baas/consultas-chave-pix-sem-pagamento))
- `403 PIX_KEY_CHECK_NOT_ALLOWED` — your account does not have the feature enabled, or it was removed after 10 checks without payment (non-BaaS accounts)

On the `GET` route errors come back with `error` + `errorCode`. On the `POST` route only `error` is returned.

## AI prompt

Paste the snippet below into an AI coding tool (Claude / Cursor / Gemini / ChatGPT) to implement the integration in your app:

> Implement a `checkPixKeyBeforePayment(pixKey)` function that checks the recipient of a Pix through Woovi, to show the data to the payer before they confirm the payment.
>
> **Mandatory usage rule — include it in the code and follow it in the implementation:** this endpoint is exclusively for identifying the recipient of a Pix that will be paid right after, as set out in art. 75 of the Pix Regulation. Every call must be followed by creating the payment with the returned `pixKeyEndToEndId`. Do not implement any use for looking up or enriching registration data, validating accounts or identity (sign-up, onboarding, credit, KYC), bulk key checks or building databases. Do not call the endpoint unless there is a payment to make. Checks without a subsequent payment are monitored and automatically blocked.
>
> **Endpoint**: `POST https://api.woovi.com/api/v1/pix-keys/check`
> **Header**: `Authorization: <APP_ID>` and `Content-Type: application/json`
> **Body**: `{ "pixKey": "<key>" }` (accepts CPF, CNPJ, e-mail, phone or EVP/UUID; does not accept a BR Code/copy-and-paste — use the decode/emv endpoint for that)
>
> **Success response (200)**:
> ```json
> {
>   "pixKeyEndToEndId": "E12345678202601011200abcdefghijk",
>   "pixKey": "<normalized key>",
>   "type": "CPF" | "CNPJ" | "EMAIL" | "PHONE" | "RANDOM" | "EVP",
>   "owner": {
>     "name": "<account holder name>",
>     "taxID": "<partially masked CPF or full CNPJ>",
>     "psp": "<8-digit ISPB of the key's bank>",
>     "branch": "****",
>     "account": "********************"
>   }
> }
> ```
>
> **Expected flow**:
> 1. The payer enters the Pix key.
> 2. The function calls the endpoint and shows the payer the name, masked document and institution, for review.
> 3. The payer confirms.
> 4. The app creates the payment sending the `pixKeyEndToEndId` (see [Create Payment](https://developers.woovi.com/en/docs/payment/payment-how-to-use-api-to-create)).
>
> If the payer gives up, do not repeat the check automatically and do not store the returned data beyond what is needed to complete the payment.
>
> **Errors to handle**: 400 (invalid key format or key not eligible for payment), 404 `PIX_KEY_INFO_NOT_FOUND` (key not found), 429 (DICT lookup limit reached — wait for the token bucket to refill, or 24 hours if the message is about checks without payment), 403 `PIX_KEY_CHECK_NOT_ALLOWED` (feature not enabled for the account, or removed after checks without payment).
>
> **Important details**:
> - `psp` is only the ISPB code (8 digits) — to show the bank name, keep an ISPB → institution mapping on your side.
> - `pixKey` always comes back normalized: phone in E.164 (`+55...`), e-mail in lowercase, CPF/CNPJ digits only.
> - A CPF `owner.taxID` comes back masked (e.g. `111.***.***-80`); a CNPJ comes back in full.
> - Use the check only to identify the recipient before the payer confirms a Pix (art. 75 of the Pix Regulation). Every check must be followed by creating the payment with the returned `pixKeyEndToEndId`; do not use it to validate accounts, KYC or enrich data.
> - Each `pixKeyEndToEndId` is valid for one payment: only run a new check when there is a new payment.
