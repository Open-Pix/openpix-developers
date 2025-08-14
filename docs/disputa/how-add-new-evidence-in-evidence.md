---
id: how-add-new-evidence-in-dispute
title: Como adicionar uma nova evidência em uma disputa?
tags:
  - disputa
---

Quando se está respondendo ou iniciando uma disputa, é possível enviar documentos que serão usados como evidências e provas de que o seu argumento é válido e coerente, serve tanto para defesa quanto para quem contesta.

Para enviar evidências para uma disputa, basta seguir os seguintes passos:

### 1. Obter o id da disputa
  * Entre na plataforma e crie um webhook para o evento "OPENPIX:DISPUTE_CREATED".
  * No payload do evento, obtém-se o id da disputa.

### 2. Fazer upload do documento
  * Faça o upload dos seus arquivos em um provedor de arquivos de sua preferência.
  * Obtenha uma URL pública, essa URL será usada no próximo passo.

### 3. Fazer requisição para envio de evidencia
  * Utilize o endpoint de registro de conta para registrar uma nova conta.
  * Utilize a chave de API para autenticar a requisição.
  * Faça a requisição.
 ```JSON
    curl -X POST "https://api.woovi.com/api/v1/dispute/:IdDisputa/evidence \
      -H "Authorization: <apiKey>" \
      -H "Content-Type: application/json" 
        --data-raw '
{
    "documents": [
      {
        "url": "https://s3.amazonaws.com/woovi-media-development/company%2F672bea98d43d284db6da362d%2F67c8eb595af8b7caf0e72204",
        "description": "Foto do comprovante de recebimento",
        "correlationID": "correlationID123"
      }
    ]
}'
 ```

### 4. Entendendo o retorno
  * Caso tudo ocorra corretamente, um código 200 será retornado.
  * No corpo da resposta terá:
 ```JSON
{
    "documents": [
      {
        "url": "https://woovi-media-development.s3.us-east-1.amazonaws.com/company/6762e45c55eb2e0a3b3cbc44/dispute/688a9e07f335deb4986896de/evidence/correlationID123/688a9e07f335deb4986896de.pdf",
        "description": "Foto do comprovante de recebimento",
        "correlationID": "correlationID123",
        "createdAt": "<now>"
      }
    ]
}'
 ```

OBS: ao finalizar o processamento da requisição, é gerada uma nova url para download, isso se deve ao fato de usarmos a url presente no corpo da requisição para fazer o download dos seus documentos e imediatamente em seguida é realizado o upload novamente em um servidor próprio, nós disponibilizamos essa url no payload do response, logo se tudo der certo, a url que é enviada no corpo da request é diferente da url que é obtida no response.


## Casos de Uso

- Resposta de Disputa

