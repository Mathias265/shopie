// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build:{
    // vue-toastification - old commonjs module 
    transpile: ['vue-toastification'],
  },
  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate",
    "@nuxt/image",
    "@vite-pwa/nuxt"
  ]
})