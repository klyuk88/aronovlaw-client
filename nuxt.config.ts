// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        title: 'Аронов и партенры',
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
          { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
          { rel: 'preconnect', href: 'href="https://fonts.gstatic.com'},
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
          { rel: "shortcut icon", href: "/favicon.png", type: "image/x-icon" }
        ],
      },
      
    },
    css: [
      '@/assets/scss/common.scss'
    ],
    runtimeConfig: {
      public: {
        api: process.env.NODE_ENV === 'production'
        ? 'http://localhost:1337'
        : 'http://server3.1096137-cd86361.tmweb.ru'
      }
    }
})
