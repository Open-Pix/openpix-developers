---
id: customizing-click-pix-button
title: Customizando seu proprio botão ClickPix
tags:
  - plugin
  - clickpix
---

Leia sobre os passos inicias de como iniciar sua integração com ClickPix

- [Começando com o ClickPix](./click-pix-starting.md)

## Passos

1) Crie a estrutura HTML e adicione a tag scrit do nosso plugin
2) Crie uma div com as propriedades necessarias para o carregamento do seu botão clickpix e defina um `id` para ela, e oculte este botão utilizando CSS adicionado a propriedade `display: none`
> Em nosso exemplo estamos utilizando o id `clickpix-product-1` para este botão
3) Crie seu botão customizado e defina um `id` para ele
> Em nosso exemplo este botão está definido com o id `product-1`
4) Crie uma tag script para definir um evento ao seu botão customizado
5) Utiliza a função `document.querySelector` para pegar o seu botão customizado através do `id`
6) Defina um evento para ela, e busque o nosso botão do clickpix através do atributo `id` também e garante que será buscado o elemento `button` de dentro de nossa div `clickpix`

:::info
Evite usar o atributo `hidden` do javascript no nosso botão clickpix para garantir que ele carregue corretamente
:::

> Resumo: use seu botão personalizado como um gatilho para o botão clickpix e oculte o botão clickpix usando css com `display: none`

## Exemplo com um único botão customizado

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Demo ClickPix</title>
    <style>
      /* Your custom css */
      .my-custom-button {
        text-transform: uppercase;
        text-decoration: none;
        padding: 15px 40px;
        display: inline-block;
        border-radius: 100px;
        background-color: #03d69d;
        border: none;
        color: #fff;
        cursor: pointer;
        font-weight: 800;
      }
    </style>
  </head>
  <body>

  <div id="root">
    <!-- Your custom button -->
    <button class="my-custom-button" id="product-1">Buy here $ 8,88</button>

    <!-- ClickPix button -->
    <div
      id="clickpix-product-1"
      style="display: none;"
      data-clickpix
      data-appid="<YOU-APPID>"
      data-value="888"
    ></div>
  </div>

  <!-- Plugin Script -->
  <script src="https://plugin.openpix.com.br/v1/openpix.js" async></script>
  <script>
    // trigger clickpix button when custom button is clicked
    document.addEventListener('DOMContentLoaded', () => {
      const myCustomButton = document.querySelector('#product-1')

      myCustomButton.onclick = () => {
        const clickpix = document.querySelector('#clickpix-product-1 button')
        clickpix.click()
      }
    })
  </script>
  </body>
</html>
```

## Exemplo multiplos botões customizados

```html

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Demo ClickPix</title>
    <style>
      /* Your custom css */
      .my-custom-button {
        text-transform: uppercase;
        text-decoration: none;
        padding: 15px 40px;
        display: inline-block;
        border-radius: 100px;
        background-color: #03d69d;
        border: none;
        color: #fff;
        cursor: pointer;
        font-weight: 800;
      }

      #root {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        height: 100vh;
      }
    </style>
  </head>
  <body>

  <div id="root">
    <!-- Your wrapper for buttons -->
    <div class="clickpix-button" id="product-1">
      <!-- Your custom button -->
      <button class="my-custom-button">Buy here R$ 8,88</button>

      <!-- ClickPix button -->
      <div
        class="button-action"
        style="display: none;"
        data-clickpix
        data-appid="<YOUR-APPID>"
        data-value="888"
      ></div>
    </div>

    <!-- Your wrapper for buttons -->
    <div class="clickpix-button" id="product-2">
      <!-- Your custom button -->
      <button class="my-custom-button">Buy here R$ 18,88</button>

      <!-- ClickPix button -->
      <div
        class="button-action"
        style="display: none;"
        data-clickpix
        data-appid="<YOUR-APPID>"
        data-value="1888"
      ></div>
    </div>

    <!-- Your wrapper for buttons -->
    <div class="clickpix-button" id="product-3">
      <!-- Your custom button -->
      <button class="my-custom-button">Buy here R$ 28,88</button>

      <!-- ClickPix button -->
      <div
        class="button-action"
        style="display: none;"
        data-clickpix
        data-appid="<YOUR-APPID>"
        data-value="2888"
      ></div>
    </div>
  </div>
  <!-- Plugin Script -->
  <script src="https://plugin.openpix.com.br/v1/openpix.js" async></script>
  <script>
    // trigger clickpix button when custom button is clicked
    document.addEventListener('DOMContentLoaded', () => {
      // get all clickpix buttons
      const clickpixButtons = document.querySelectorAll('.clickpix-button')

      clickpixButtons.forEach((clickpixButton) => {
        // get you custom button
        const customButton = clickpixButton.querySelector('button.my-custom-button')

        // set a trigger event in your custom button
        customButton.onclick = () => {
          // get our clickpix button container
          const clickpixDivContainer = clickpixButton.querySelector('.button-action')
          // get our clickpix submit button
          const clickpixSubmitButton = clickpixDivContainer.querySelector('button')
          // emit click event
          clickpixSubmitButton.click()
        }
      })
    })
  </script>
  </body>
</html>
```
