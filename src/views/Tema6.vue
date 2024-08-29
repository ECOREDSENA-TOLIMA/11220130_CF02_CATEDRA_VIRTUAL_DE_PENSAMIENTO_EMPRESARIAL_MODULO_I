<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Mejoramiento del plan estratégico
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema6/img1.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Las empresas requieren de un plan estratégico que permita la adecuada administración de los procesos, donde queden registrados los movimientos diarios, las entradas y salidas de los proveedores, así como el flujo de la relación de clientes internos y externos; con lo anterior, se logra contar con un esquema de registro de información justo a tiempo, haciendo visible el norte de la organización y las metas a dónde se quiere llegar.
        P Es función de los indicadores de gestión medir el desempeño de los procesos y procedimientos. Si existen desviaciones o no conformidades, se debe establecer el plan de mejoramiento.

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 8.
      span  #[i  Mejoramiento del plan estratégico]

    .row.justify-content-center.mb-5
      .col-md-8.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema6/img2.svg', alt='Figura que contiene un gráfico que a través de diversas líneas entre los ejes X y Y, representa un mejoramiento del plan estratégico, por medio de sus diferentes series y categorías.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema6/img2_1.svg', alt='Figura que contiene un gráfico que a través de diversas líneas entre los ejes X y Y, representa un mejoramiento del plan estratégico, por medio de sus diferentes series y categorías.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-4
          p El mejoramiento de la estrategia promocional de la venta, debe partir de los resultados que se obtienen al aplicar los indicadores de control para medir su eficacia. Los principales son: incremento de las ventas y nuevos clientes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Es preciso que la organización realice controles externos e internos, para poder reaccionar con prontitud, ante los cambios que identifique y que requieran el replanteamiento de los objetivos de las estrategias. El plan debe convertirse en el instrumento que regula, controla y dirige toda la acción de la empresa sobre sus mercados. Esto implica que se debe estar atento ante las desviaciones, para establecer las acciones correctivas y los planes de mejoramiento que no solo permitan eliminar la causa de la misma, sino ajustar la estrategia en función de la eficacia.

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
