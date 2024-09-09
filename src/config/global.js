export default {
  global: {
    componenteFormativo: 'Innovación y mejoramiento estratégico',
    descripcionCurso:
      'El tener un producto o servicio como soporte del desarrollo empresarial de la organización, trae consigo el deber misional, correlacionado con la visión a donde se quiere llegar. Además, luego pasa por un proceso de venta, llevado al mercado con rigurosas acciones promocionales, no solo con el fin de contactar al consumidor, sino también para conocer sus preferencias y gustos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comportamiento del mercado',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Creación e innovación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Presupuesto para la promoción de ventas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acciones promocionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguimiento y control de la venta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Mejoramiento del plan estratégico',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_11220130_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Creación e innovación',
      referencia: 'Prado, D. (s.f.). Revista Recrearte.',
      tipo: 'Página web',
      link: 'https://www.yumpu.com/es/revistarecrearte.net',
    },
    {
      tema: 'Presupuesto para la promoción de ventas',
      referencia:
        'Gananci.com. (2015). 12 estrategias de promoción para aumentar tus ventas.',
      tipo: 'Página web',
      link: 'https://gananci.org/estrategias-de-promocion/',
    },
  ],
  glosario: [
    {
      termino: 'Acciones promocionales',
      significado:
        'conjunto de actividades para motivar al consumidor hacia la compra de los productos o servicios.',
    },
    {
      termino: 'Efectividad',
      significado: 'es hacer las tareas correctamente.',
    },
    {
      termino: 'Eficacia',
      significado: 'es la capacidad de alcanzar un objetivo predeterminado.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'es cumplir un objetivo con el mínimo de los recursos disponibles en el menor tiempo posible.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'son datos o números que indican los resultados de los procesos.',
    },
    {
      termino: 'Mejoramiento estratégico',
      significado:
        'son las acciones de mejoramiento para corregir las fallas o errores.',
    },
    {
      termino: 'Sistema de control',
      significado:
        'es un conjunto de instrumentos para administrar, dirigir o regular los procesos y procedimientos, con el objetivo de minimizar los errores y así alcanzar mejores resultados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cabrera, J. (2011). La innovación, el trabajo de todos. Cabrera Magnamment Consultants.',
      link:
        'https://www.managementsociety.net/2013/03/10/la-innovacion-el-trabajo-de-todos/',
    },
    {
      referencia:
        'Fred, D. (2008). Conceptos de Administración Estratégica. México. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'González, M. (2002). Diseño de estrategias de comercialización.',
      link:
        'https://www.gestiopolis.com/diseno-estrategias-comercializacion/#goog_rewarded',
    },
    {
      referencia:
        'Prentice Hall. Crawford, R. (1980). Estrategias para la creatividad. Buenos Aires: Ed. Paidós.',
      link: '',
    },
    {
      referencia:
        'Quijano, G. (2016). 4 Razones que hacen de Steve Jobs el Innovador más Grande del Mundo.',
      link: 'http://www.marketingyfinanzas.net/2016/05/steve-jobs-innovador/',
    },
    {
      referencia:
        'Quijano, G. (2016). 5 Estrategias que toda Pyme debe tener Hoy para no Morir en el Mercado.',
      link:
        'http://www.marketingyfinanzas.net/2016/05/5-estrategias-que-toda-pyme-debe-tener-hoy/',
    },
    {
      referencia:
        'Rincón, L. y Rincón, A. (2009). Estrategias de Comercialización.',
      link:
        'http://marketingglobal2009.blogspot.com/2009/03/estrategias-de-comercializacion.html',
    },
    {
      referencia:
        'Schultz, E. y Robinson, W. (1995). Cómo dirigir la promoción de sus ventas: Una guía completa para incentivar las ventas de sus productos o servicios. Barcelona, España: Ediciones Gránica.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Herney Sánchez Pizarro',
          cargo: 'Experto temático',
          centro: 'Dirección General SENA',
        },
        {
          nombre: 'Kennia Andrea Peña Barrera',
          cargo: 'Asesora pedagógica',
          centro: 'Dirección General SENA',
        },
        {
          nombre: 'Zulma Yurany Viancha Rodríguez',
          cargo: 'Líder de la línea de producción',
          centro: 'Dirección General SENA',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Contanza Morales Cruz',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
