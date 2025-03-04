// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json'
import CustomPreset from "./themes/mae";

export default defineNuxtConfig({
    compatibilityDate: '2024-07-12',
    devtools: {
        enabled: true
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        },
    },
    nitro: {
        prerender: {
            routes: ["/"],
            crawlLinks: true
        },
    },
    css: [
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],
    modules: [
        '@nuxtjs/i18n',
        ['@nuxtjs/robots', {configPath: "~/robots.config"}],
        ['@nuxtjs/google-fonts', {
            families: {
                Audiowide: true
            }
        }],
        '@nuxt/image',
        '@nuxt/image-edge',
        '@nuxt/content',
        'nuxt-viewport',
        '@primevue/nuxt-module',
        'nuxt-graphql-request'
    ],
    runtimeConfig: {
        public: {
            clientVersion: pkg.version
        }
    },
    build: {
        transpile: ['nuxt-graphql-request'],
    },
    graphql: {
        clients: {
            default: {
                endpoint: 'https://emd.utcluj.ro/graphql',
                options: {},
            },
        },
        options: {
            method: 'get',
        },
        includeNodeModules: true,
    },
    primevue: {
        importTheme: {from: '~/themes/mae.js'},
        options: {
            theme: {
                preset: CustomPreset,
                options: {
                    darkModeSelector: '.dark-mode',
                    cssLayer: false
                }
            }
        }
    },
    i18n: {
        defaultLocale: 'ro',
        locales: ['ro', 'en'],
        strategy: 'no_prefix',
        vueI18n: './i18n.config.ts'
    },
})