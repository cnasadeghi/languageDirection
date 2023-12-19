export default defineNuxtPlugin((nitro) => {
    console.log("nitro")
    console.log(nitro)
    nitro.hooks.hook('render:html', (html) => {
      html.head.push('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">')
    })
  })