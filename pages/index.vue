<template>
  <div class="flex flex-col space-y-16 pb-10">
    <div class="relative">
      <div class="px-6 lg:px-8">
        <div class="relative shadow-xl rounded xs:rounded-xl xs:overflow-hidden">
          <div class="absolute inset-0">
            <img class="h-full w-full object-cover" src="@/static/images/hero-index.jpg" alt="People working on laptops">
            <div class="absolute inset-0 bg-gray-100" style="mix-blend-mode: multiply;" />
          </div>
          <div class="relative px-4 py-10 sm:px-6 sm:pt-16 sm:pb-36 lg:px-8">
            <h1 class="md:text-left text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
              <span class="block text-primary-500">Mentoring</span>
            </h1>
            <p class="mt-4 max-w-lg md:text-left text-center mx-auto md:mx-0 text-lg text-primary-500 md:max-w-2xl">
              Mentoring es un programa educativo estratégico de la Dirección de Política Educativa y Liderazgo
              Social de EDUCAFIN, qué busca en modalidad virtual impulsar a las trayectorias académicas,
              sociales y profesionales de jóvenes estudiantes de nivel medio superior de Guanajuato, a través de
              la metodología inspiring change.
            </p>
            <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-secondary-700 bg-white hover:bg-secondary-50 sm:px-8">
                  Ver más
                </a>
                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary-500 sm:px-8">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        Bienvenido a Mentoring
      </h2>
      <p class="mt-2 mx-auto text-xl font-medium text-gray-900">
        Estamos trabajando para ti
      </p>
    </div>
    <div class="relative bg-white px-6 lg:px-8">
      <div class="h-56 bg-primary-600 sm:h-72 lg:absolute lg:h-full lg:w-1/2">
        <img class="w-full h-full object-cover" src="@/static/images/hero02-index.jpg" alt="Support team">
      </div>
      <div class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
        <div class="lg:pl-6 flex flex-col">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestro propósito
          </h2>
          <p class="mt-6 text-lg text-gray-500">
            Contribuir a la permanencia y transición educativa de jóvenes
            guanajuatenses estudiantes de Nivel Medio Superior (NMS)
            a través de un modelo de mentoría cuyos componentes
            prometen desarrollar habilidades de comunicación en
            lengua extranjera (inglés) y habilidades socio-emocionales.
          </p>
          <div class="mt-8 overflow-hidden">
            <dl class="-mx-8 -mt-8 flex flex-wrap">
              <div class="flex flex-col px-8 pt-8">
                <dt class="order-2 text-base font-medium text-gray-500">
                  Administrativos
                </dt>
                <dd class="order-1 text-2xl font-extrabold text-primary-600 sm:text-3xl">
                  32
                </dd>
              </div>
              <div class="flex flex-col px-8 pt-8">
                <dt class="order-2 text-base font-medium text-gray-500">
                  Mentores
                </dt>
                <dd class="order-1 text-2xl font-extrabold text-primary-600 sm:text-3xl">
                  85
                </dd>
              </div>
              <div class="flex flex-col px-8 pt-8">
                <dt class="order-2 text-base font-medium text-gray-500">
                  Mentorados
                </dt>
                <dd class="order-1 text-2xl font-extrabold text-primary-600 sm:text-3xl">
                  1340
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
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
