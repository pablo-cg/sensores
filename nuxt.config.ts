export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@hebilicious/vue-query-nuxt',
    'nuxt-headlessui',
  ],
  css: ['@unocss/reset/tailwind.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      SENSORS_API: process.env.SENSORS_API,
    },
  },
  headlessui: {
    prefix: 'HUI',
  },
});
