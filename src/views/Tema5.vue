<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Seguimiento y control de la venta
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Un principio en calidad señala que: “Lo que no se mide, no se controla y lo que no se controla, no se puede mejorar”; de ahí la importancia del seguimiento y control de las ventas. Sin embargo, no es fácil hacerlo y más cuando la fuerza de venta es numerosa. Pero lo que sí es claro, es que la información analizada debe servir para tomar acciones orientadas preferiblemente a la prevención y no a la corrección de las desviaciones. En este caso, deben estar referidas a las metas y a la cuantificación del plan de acción de ventas, de modo que permitan mejorar los indicadores de gestión previa a los procedimientos o las acciones.
    .titulo-sexto.color-acento-contenido.offset-2(data-aos="zoom-in")
      h5 Figura 7.
      span  #[i  Seguimiento y control de la venta]

    .row.justify-content-center.mb-5
      .col-md-8.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img1.svg', alt='Figura que contiene un esquema que ejemplifica el seguimiento y control de la venta, el cual por medio de una gráfica traza una línea entre dos ejes.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img1_1.svg', alt='Figura que contiene un esquema que ejemplifica el seguimiento y control de la venta, el cual por medio de una gráfica traza una línea entre dos ejes.')

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Controles de venta
    
    .row.justify-content-center.align-items-center
      .col-lg-12
      h4.titulo-cuarto(style="color:#615842")(data-aos='fade-right')
        ul.lista-ul
          li
            i.lista-ul__vineta(style="color:#615842")
            | ¿Cuál es la función de los indicadores de gestión?
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Su función es mejorar la forma de hacer el seguimiento y el control de las ventas. Estos deben ser prácticos, fáciles de manipular y consolidar. Es recomendable que se analice la gestión individual de cada vendedor, porque la efectividad de cada uno es distinta. A los resultados de la medición se le debe establecer un plan de mejoramiento particular y al plan del día actual se le proyecta una meta a alcanzar, el cual se revisará al día siguiente.

    .row.bg--gradientBlue.mb-5
      .col-12
        .row.justify-content-center.align-items-center.mb-3(style="margin-inline:3em;")
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema5/img2.jpg', alt='Imagen decorativa')
          .col-lg-8.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .row.justify-content-center.align-items-center
              .col-lg-12
              h4.titulo-cuarto(style="color:#615842")(data-aos='fade-right')
                ul.lista-ul
                  li
                    i.lista-ul__vineta(style="color:#615842")
                    | ¿En qué momento se aplican los controles de venta?
            p Puesto en marcha el plan de acción para alcanzar la estrategia de venta, se deben establecer medidas de control para comprobar que las acciones planificadas se llevan a cabo con éxito y de este modo, se cumplan los objetivos previstos para las ventas. Las medidas de control deben ser herramientas cuantitativas fáciles de aplicar.
            p Si se detecta que las acciones planificadas no se llevan a cabo o no consiguen el resultado esperado, se debe analizar las causas y establecer las medidas necesarias que permitan corregir las desviaciones. Al analizar las causas de las desviaciones, es posible que se evidencien diferentes problemas, por ejemplo: objetivos demasiado ambiciosos, nuevas tendencias o un nuevo competidor.
            p Algunas medidas de control de las ventas, son:
            ul.lista-ul
              li
                i.fas.fa-calculator
                | Nuevos clientes.
              li
                i.fas.fa-calculator
                | Incremento de ventas.
    .row.justify-content-center.align-items-center
      .col-lg-12
      h4.titulo-cuarto(style="color:#615842")(data-aos='fade-right')
        ul.lista-ul
          li
            i.lista-ul__vineta(style="color:#615842")
            | Elementos de un sistema de control
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos='fade-right')
        P Se poseen los siguientes elementos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row(titulo="")
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              p Fijación de normas o criterios de medida en el área de comercialización, para cada uno de los elementos del plan.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
              figure 
                img(src="@/assets/curso/temas/tema5/img3.jpg")
          .row(titulo="")
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
              figure 
                img(src="@/assets/curso/temas/tema5/img4.jpg")
            .col-md-8.mb-4.mb-md-0(data-aos="fade-right")          
              p Medida de los resultados para detectar las desviaciones con respecto a la norma.
          .row(titulo="")
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              p Análisis de las causas cuando se detecta una desviación importante.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
              figure 
                img(src="@/assets/curso/temas/tema5/img5.jpg")
          .row(titulo="")
            .col-lg-4.col-8.mb-lg-0.mb-4
              figure 
                img(src="@/assets/curso/temas/tema5/img6.jpg")
            .col-md-8.mb-4.mb-md-0(data-aos="fade-right")
              p Aplicación de medidas correctoras, las que tienen como finalidad rectificar los resultados para que se ajusten a lo planificado.
    .row.justify-content-center.align-items-center
      .col-lg-12
      h4.titulo-cuarto(style="color:#615842")(data-aos='fade-right')
        ul.lista-ul
          li
            i.lista-ul__vineta(style="color:#615842")
            | ¿Qué tipos de control existen que aplican a la actividad de la comercialización?
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos='fade-right')
        P Existen tres:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema5/img7.svg', alt='Imagen Decorativa')

          h3.text-center Control del plan anual
          p Tiene como propósito examinar si los resultados previstos en el plan se han alcanzado y tomar las medidas correctoras cuando se considere necesario.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema5/img8.svg', alt='Imagen Decorativa')

          h3.text-center Control de la rentabilidad
          p Consiste en determinar dónde está ganando o perdiendo dinero la empresa.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema5/img9.svg', alt='Imagen Decorativa')

          h3.text-center Control de eficiencia
          p Sirve para valorar y mejorar la eficiencia e impacto de los gastos de comercialización y el control estratégico, donde revisará si las estrategias básicas de comercialización se ajustan a las oportunidades y recursos de su empresa.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos='fade-right')
        P A medida que se implante el plan de mercadotecnia, hay que determinar los indicadores de desempeño para medir los esfuerzos. Estos criterios se derivan de los objetivos de mercadotecnia, así como del programa de acción.
        P Entre estos indicadores o criterios se pueden incluir: los ingresos, la participación de mercado, los costos de mercadotecnia, las ganancias, efectividad de los anuncios publicitarios, productividad de las fuerzas de venta, eficiencia de la distribución, de las promociones, entre otros.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p En esta etapa es necesario establecer los sistemas de información y los procedimientos para asegurar que la información sea emitida correctamente por la persona adecuada y en el momento oportuno.
</template>

<script>
export default {
  name: 'Tema5',
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
