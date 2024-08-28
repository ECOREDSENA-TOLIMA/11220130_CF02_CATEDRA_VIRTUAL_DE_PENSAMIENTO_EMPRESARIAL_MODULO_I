<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p ¡Quien emprende, desea vender!

        p Esta es una afirmación que todo emprendedor siempre se realiza, pues en últimas, este es el propósito que se tiene cuando se tiene un bien o servicio. Pero, para lograrlo, se debe seguir una serie de procesos, que este componente formativo intentará dar a conocer, así que, como primera medida, es importante que, por medio del siguiente video, se tenga una contextualización al respecto y luego con la temática a tratar, se logre tener más argumentos de la afirmación inicial:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
