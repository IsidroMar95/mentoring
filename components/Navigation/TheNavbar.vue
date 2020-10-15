<template>
  <div class="fixed top-0 left-0 z-50 w-full px-4 py-6 bg-lightGray sm:px-8 lg:px-16 xl:px-32" id="navbar">
    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <nuxt-link to="/">
            <img class="w-auto h-12" src="@/assets/images/logo_wtext.svg" alt="Logo Mentoring">
          </nuxt-link>
          <div class="flex items-center -mr-2 md:hidden">
            <button @click="toggleNavbar" type="button" class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-secondary-500 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none focus:bg-secondary-100 focus:text-secondary-500">
              <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="items-center justify-center hidden ml-auto space-x-5 md:flex">
        <nuxt-link to="/equipo" class="py-2 text-xl font-bold text-primary-500">
          Equipo
        </nuxt-link>
        <nuxt-link to="/nosotros" class="py-2 text-xl font-bold text-primary-500">
          Nosotros
        </nuxt-link>
        <nuxt-link to="/proyectos" class="py-2 text-xl font-bold text-primary-500">
          Proyectos
        </nuxt-link>
        <nuxt-link to="/blog" class="py-2 text-xl font-bold text-primary-500">
          Blog
        </nuxt-link>
        <nuxt-link to="/contacto" class="py-2 text-xl font-bold text-primary-500">
          Contacto
        </nuxt-link>
        <nuxt-link to="/inspiring-change" class="hidden px-4 py-2 text-xl font-bold transition duration-300 ease-in-out border-2 rounded-full text-primary-500 border-primary hover:bg-primary-500 hover:text-white lg:inline">
          Inspiring Change
        </nuxt-link>
      </div>
    </nav>
    <transition enter-class="transition-all transform scale-90 opacity-0" enter-active-class="transition duration-75 ease-out" enter-to-class="transform scale-100 opacity-100" leave-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-to-class="transform scale-90 opacity-0">
      <div v-if="navIsOpen" class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
        <div class="rounded shadow-md">
          <div class="overflow-hidden bg-white rounded-lg shadow-xs">
            <div class="flex items-center justify-between px-5 pt-4">
              <nuxt-link to="/" @click.native="toggleNavbar">
            <img class="w-auto h-10" src="@/assets/images/logo.svg" alt="Logo Mentoring">
              </nuxt-link>
              <div class="-mr-2">
                <button @click="toggleNavbar" type="button" class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-secondary-500 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none focus:bg-secondary-100 focus:text-secondary-500">
                  <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <nuxt-link to="/equipo" @click.native="toggleNavbar" class="block px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md text-secondary-600 hover:text-primary-500 hover:bg-secondary-50 focus:outline-none focus:text-primary-500 focus:bg-secondary-50">
                Equipo
              </nuxt-link>
              <nuxt-link to="/nosotros" @click.native="toggleNavbar" class="block px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md text-secondary-600 hover:text-primary-500 hover:bg-secondary-50 focus:outline-none focus:text-primary-500 focus:bg-secondary-50">
                Nosotros
              </nuxt-link>
              <nuxt-link to="/proyectos" @click.native="toggleNavbar" class="block px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md text-secondary-600 hover:text-primary-500 hover:bg-secondary-50 focus:outline-none focus:text-primary-500 focus:bg-secondary-50">
                Proyectos
              </nuxt-link>
              <nuxt-link to="/blog" @click.native="toggleNavbar" class="block px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md text-secondary-600 hover:text-primary-500 hover:bg-secondary-50 focus:outline-none focus:text-primary-500 focus:bg-secondary-50">
                Blog
              </nuxt-link>
              <nuxt-link to="/contacto" @click.native="toggleNavbar" class="block px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md text-secondary-600 hover:text-primary-500 hover:bg-secondary-50 focus:outline-none focus:text-primary-500 focus:bg-secondary-50">
                Contacto
              </nuxt-link>
              <nuxt-link to="/inspiring-change" @click.native="toggleNavbar" class="block w-auto px-3 py-2 text-base font-bold text-center transition duration-300 ease-in-out border-2 rounded-full text-primary-500 border-primary hover:bg-primary-500 hover:text-white">
                Inspiring Change
              </nuxt-link>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import src from '@tailwindcss/custom-forms'
import _ from 'lodash'
export default {
  name: 'TheNavbar',
  data() {
    return {
      navIsOpen: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.navIsOpen = !this.navIsOpen
    },
  },
  mounted: function () {
    let scrollpos = window.scrollY
    const header = document.querySelector('#navbar')

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY

      if (scrollpos >= 10) {
        header.classList.add('bg-white', 'md:py-4', 'shadow-sm')
        header.classList.remove('md:py-8', 'bg-lightGray')
      } else {
        header.classList.remove('bg-white', 'md:py-4', 'shadow-sm')
        header.classList.add('md:py-8', 'bg-lightGray')
      }
    })
  },
}
</script>

<style>
#navbar,
a {
  transition: all 0.3s ease;
}
</style>
