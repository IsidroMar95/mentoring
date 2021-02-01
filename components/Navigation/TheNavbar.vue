<template>
  <div id="navbar" class="bg-white fixed top-0 left-0 z-50 w-full">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
      <div class="flex justify-between items-center py-4">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-12 w-auto sm:h-16" src="@/static/images/logo.svg" alt="">
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" @click="isNavbarOpen = true">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-8">
          <a href="#" class="font-semibold text-primary-500 hover:text-primary-600"> Equipo </a>
          <a href="#" class="font-semibold text-secondary-500 hover:text-secondary-600"> Nosotros </a>
          <a href="#" class="font-semibold text-primary-500 hover:text-primary-600"> Proyectos </a>
          <a href="#" class="font-semibold text-primary-500 hover:text-primary-600"> JuventudEsGTO </a>
          <a href="#" class="font-semibold text-primary-500 hover:text-primary-600"> Inspiring Change  </a>
          <a href="#" class="font-semibold text-primary-500 hover:text-primary-600"> Blog  </a>
        </nav>
      </div>
    </div>
    <transition
      enter-active-class="duration-200 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isNavbarOpen" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img class="h-12 w-auto" src="@/static/images/logo.svg" alt="">
            </div>
            <div class="-mr-2">
              <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600" @click="isNavbarOpen = false">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="pt-5 pb-6" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <div class="px-2 space-y-1" role="none">
              <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-primary-500 hover:text-primary-600 hover:bg-primary-50" role="menuitem">Equipo</a>
              <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-primary-500 hover:text-primary-600 hover:bg-primary-50" role="menuitem">Nosotros</a>
              <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-primary-500 hover:text-primary-600 hover:bg-primary-50" role="menuitem">Proyectos</a>
              <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-primary-500 hover:text-primary-600 hover:bg-primary-50" role="menuitem">JuventudEsGTO </a>
              <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-primary-500 hover:text-primary-600 hover:bg-primary-50" role="menuitem">Inspiring Change </a>
              <a href="#" class="block px-3 py-2 rounded-md text-base font-semibold text-primary-500 hover:text-primary-600 hover:bg-primary-50" role="menuitem">Blog </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  data () {
    return {
      isNavbarOpen: false
    }
  },
  mounted () {
    let scrollpos = window.scrollY
    const header = document.querySelector('#navbar')

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY

      if (scrollpos >= 10) {
        header.classList.add('shadow-lg')
      } else {
        header.classList.remove('shadow-lg')
      }
    })
  },
  methods: {
    toggleNavbar () {
      this.isNavbarOpen = !this.isNavbarOpen
    }
  }
}
</script>

<style>
#navbar,
a {
  transition: all 0.3s ease;
}
</style>
