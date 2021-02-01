<template>
  <!-- start hero section -->
  <section class="relative px-4 pt-32 pb-48 text-center bg-lightGray sm:px-8 lg:px-16 xl:px-32 sm:pb-64 md:pt-40 md:pb-48 lg:pt-40 xl:pb-64 sm:text-left">
    <div>
      <div class="relative z-10 w-full sm:w-2/3 lg:w-1/2">
        <h1 class="text-3xl font-extrabold leading-tight lg:text-4xl xl:text-6xl text-primary-500">
          Mentoring
        </h1>
        <p class="mt-4 text-base leading-snug text-gray-700">
          Mentoring es un programa educativo estratégico de la Dirección de Política Educativa y Liderazgo Social de EDUCAFIN, qué busca en modalidad virtual impulsar a las trayectorias académicas, sociales y profesionales de jóvenes estudiantes de nivel medio superior de Guanajuato, a través de la metodología inspiring change.
        </p>
        <a href="#" class="block px-6 py-2 mt-8 text-lg text-white rounded-full sm:inline-block bg-primary-500 hover:bg-primary-600">Ver más</a>
      </div>

      <div class="absolute bottom-0 right-0 w-full" />
    </div>
  </section>
  <!-- end hero section -->
</template>

<script>
export default {
  head () {
    return {
      title: 'Mentoring',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Mentoring'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Mentoring'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Mentoring'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Mentoring es un programa educativo estratégico de la Dirección de Política Educativa y Liderazgo Social de EDUCAFIN'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '' // the size has to be more 200px at least
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `www.mentoring-gto.mx${this.$route.path}`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'www.mentoring-gto.mx'
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'es'
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/jpeg'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: ''
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: 'www.mentoring-gto.mx'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Mentoring'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Mentoring es un programa educativo estratégico de la Dirección de Política Educativa y Liderazgo Social de EDUCAFIN'
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: 'www.mentoring-gto.mx'
        },
        {
          hid: 'twitter:image:src',
          property: 'twitter:image:src',
          content: ''
        },
        {
          hid: 'twitter:domain',
          property: 'twitter:domain',
          content: 'www.mentoring-gto.mx'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ''
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `www.mentoring-gto.mx${this.$route.path}`
        }
      ]
    }
  }
}
</script>
