<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Comportamiento del mercado
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Esta temática tiene como referente el estudio del sector o la industria como medio para observar y conocer el comportamiento del mercado, donde se desarrollará su idea de negocio. Aquí se resalta la importancia como escenario donde se conoce qué quiere, qué busca y cuáles son las expectativas del cliente, frente a los productos o servicios que compra para satisfacer sus necesidades o deseos.
    .titulo-sexto.color-acento-contenido.offset-2(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i  Comportamiento del mercado]

    .row.justify-content-center.mb-5
      .col-md-8.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Figura que contiene un gráfico que ejemplifica el comportamiento del mercado, con datos de diferentes categorías y series.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1_1.svg', alt='Figura que contiene un gráfico que ejemplifica el comportamiento del mercado, con datos de diferentes categorías y series.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img2.png', alt='Imagen decorativa')
      .col-lg-7(data-aos="fade-right")
        p El concepto mercado está directamente relacionado con el concepto de oferta, debido a que este involucra a los competidores, productores o fabricantes y la demanda a clientes y consumidores. En el mercado intervienen tanto competidores, como productores para realizar la compraventa de bienes y servicios. Existen diferentes estudios orientados a observar cómo y qué determina dicho comportamiento, con el fin de identificar tendencias, gustos y preferencias, disposición al consumo, entre otros factores. Tal es el caso de la planeación y de la psicología del consumidor.
        .cajon.color-secundario.p-4.mb-4
          p Lo anterior aporta conceptos y herramientas útiles al emprendedor para que conozca y defina los requisitos y especificaciones que deben tener los productos o servicios que llevará al mercado. Se trata de adquirir una marcada ventaja competitiva que lo diferenciará de los productos de los demás competidores, convirtiéndose en único frente a los clientes.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img5.svg')})`}"
            )
          .bloque-texto-g__texto.p-4
            p.mb-0  El conocimiento del comportamiento del mercado es fundamental porque tanto la demanda como la oferta, orientadas al consumo, impactan la economía, las organizaciones y aspectos como el social, económico y ambiental.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p(data-aos="fade-right") Es importante tener en cuenta que la demanda tiene que ver con el comportamiento del cliente y la manera en que evoluciona su consumo.
        p(data-aos="fade-right") El emprendedor debe encontrar la clave para establecer su estrategia de diseño de productos o servicios creativos e innovadores que satisfagan las necesidades, colmen las expectativas y atiendan los gustos o preferencias de los clientes. Lo anterior exige ocuparse de las tendencias del mercado, estudiando y analizando su comportamiento. Como emprendedor se debe entender la importancia de tal estudio y análisis, con el fin de garantizar el crecimiento económico y la generación de riqueza sostenible.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        p Pero, la importancia de conocer el comportamiento del mercado no termina ahí, ya que, habiéndose considerado la globalización como fenómeno resultante del auge de las tecnologías en la sociedad de la información y del conocimiento, se produjo una reestructuración en el sector productivo del país. Es así que la estructura comercial y los modelos que orientan las relaciones comerciales y las transacciones B2B (relaciones comerciales entre empresas) y B2C (relaciones comerciales entre clientes) se han visto modificadas. Lo anterior, propone estructuras de empresas que aprovechan las tecnologías y el ciberespacio, manteniendo de esta forma una mejor relación comercial con sus clientes. La planeación estratégica en este tipo de organizaciones debe fortalecer la dinámica del mercado #[i online].
        p Según lo expuesto anteriormente, no importa cuál sea el tipo de organización que tenga la empresa, esta deberá estar en permanente observación y análisis del comportamiento del mercado, debido a que esto constituye la fuente que soporta las estrategias gerenciales que definen el destino de la misma.
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Desde el punto de vista del producto, las empresas se deben basar en los deseos, gustos y preferencias del cliente, es ahí donde se encuentra toda la información suficiente para crear, innovar y sacar ofertas al mercado con valor agregado, cuya ventaja competitiva incremente las ventas y garantiza el cumplimiento de las mismas.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
