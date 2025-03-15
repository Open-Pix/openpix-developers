---
id: customizing-click-pix-button
title: Customizando seu próprio botão ClickPix
tags:
  - plugin
  - clickpix
---

Leia sobre os passos inicias de como iniciar sua integração com ClickPix

- [Começando com o ClickPix](./click-pix-starting.md)

## Passo a passo da configuração

1) Adicione a tag script do nosso plugin no head da página
```html
<script src="https://plugin.openpix.com.br/v1/openpix.js" async>
```
2) Crie uma div com as propriedades necessárias para o carregamento do seu botão clickpix e defina um `id` para ela, e oculte este botão utilizando CSS adicionando a propriedade `display: none`
> Em nosso exemplo estamos utilizando o id `clickpix-product-1` para este botão, que será usado exclusivamente para buscar o elemento na página
Atributos obrigatórios:
- data-clickpix
- data-appid
- data-value (valor em centavos Ex: 888 = R$ 8,88)
- data-customer-fields (campos que o cliente deve preencher Ex: email,phone)

```html
<div
  id="clickpix-product-1"
  style="display: none;"
  data-clickpix
  data-appid="YOUR_APPID"
  data-value="888"
  data-customer-fields="email,phone"
></div>
```
> Para saber se o código do plugin está sendo carregado corretamente, você pode remover a propriedade `style` temporariamente e ver se aparece um botão do `clickpix`, se aparecer é sinal que está sendo carregado
3) Agora você pode criar seu botão customizado e definir um `id` para ele
> Em nosso exemplo este botão está definido com o id `product-1`
```html
  <button class="my-custom-button" id="product-1">Buy here $ 8,88</button>
```
4) Crie uma tag script para colocar o script de busca e gatilho<br />
Para alterar o script, basta você ajustar os valores do `document.querySelector` para os id que você definiu
```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Utilizaremos a função `document.querySelector` para pegar o nosso botão customizado através do atributo id
    const myCustomButton = document.querySelector('#product-1')

    // Criamos um novo evento de click no nosso botão customizado
    myCustomButton.onclick = () => {
      // Agora, fazemos uma busca no nosso botão utilizando o id do botão do clickpix que definimos anteriormente
      // E falamos para a consulta avançar um nível na camada DOM para obter o botão de enviar do clickpix
      const clickpix = document.querySelector('#clickpix-product-1 button')
      // Emitimos um evento de click
      clickpix.click()
    }
  })
</script>
```
5) Pronto! Seguindo esses passos seu botão clickpix estará customizado e pronto para ser utilizado

:::info
Evite usar o atributo `hidden` do javascript no nosso botão clickpix para garantir que ele carregue corretamente
:::

> Resumo: use seu botão personalizado como um gatilho para o botão clickpix e oculte o botão clickpix usando CSS com `display: none`

## Exemplos
Aqui você poderá ver um exemplo completo de como você pode fazer a integração do seu próprio botão utilizando o clickpix<br />
Você precisará apenas criar um `index.html`, copiar nosso exemplo e trocar `YOUR_APPID` pelo seu appID de teste (caso queira testar) ou de produção

### Usando único botão customizado
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
      data-appid="YOUR_APPID"
      data-value="888"
      data-customer-fields="email,phone"
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

## Usando múltiplos botões com clickpix

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
        data-appid="YOUR_APPID"
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
        data-appid="YOUR_APPID"
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
        data-appid="YOUR_APPID"
        data-value="2888"
      ></div>
    </div>
  </div>
  <!-- Plugin Script -->
  <script src="https://plugin.openpix.com.br/v1/openpix.js" async></script>
  <script>
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
