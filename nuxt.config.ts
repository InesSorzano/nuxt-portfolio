// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        // '@nuxtjs/i18n'
    ],
    colorMode:{
        classSuffix: ''
    },
    ssr: false,
    
    // i18n: {
    //     locales: [
    //         {
    //             code:'en',
    //             iso: 'en-US',
    //             file: "en.ts"
    //         },
    //         {
    //             code:'es',
    //             iso: 'es-ES',
    //             file: "es.ts"

    //         }
    //     ],
    //     langDir: "locales/",
    //     defaultLocale: 'es',
    //     strategy: 'prefix_except_default'
    // },
    app: {
        baseURL: '/nuxt-portfolio/'
    }
})
