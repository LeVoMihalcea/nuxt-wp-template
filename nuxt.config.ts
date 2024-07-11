// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json'

export default defineNuxtConfig({
    devtools: {enabled: true},

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },

    modules: [
        'nuxt-primevue',
        '@nuxtjs/i18n',
        ['@nuxtjs/robots', { configPath: "~/robots.config" }],
        "@nuxt/image",
        "@nuxt/image-edge",
        '@nuxt/content',
        'nuxt-viewport'
    ],
    primevue: {},
    css: [
        'primevue/resources/themes/aura-dark-blue/theme.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],
    runtimeConfig: {
        public: {
            clientVersion: pkg.version,
            wordpressUrl: 'http://192.168.0.124:8060/graphql'
        }
    },
    i18n: {
        defaultLocale: 'ro',
        // locales: ['en', 'ro'],
        locales: ['ro'],
        strategy: 'prefix_and_default',
        vueI18n: './i18n.config.ts',
    },
})
