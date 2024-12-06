// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json'

import {MAE} from './themes/mae'

export default defineNuxtConfig({
    compatibilityDate: '2024-07-12',

    devtools: {
        enabled: true
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        }
    },

    css: [
        'primeicons/primeicons.css',
        'primeflex/primeflex.css'
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
                endpoint: 'http://localhost:8060/graphql',
                options: {},
            },
        },

        options: {
            method: 'get', // Default to `POST`
        },

        includeNodeModules: true,
    },

    primevue: {
        importTheme: {
            from: '~/themes/mae.js'
        }
    },

    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:8060/wp-json/wp/v2',
                    changeOrigin: true,
                    rewrite: (path: string) => {
                        let replaced = path.replace(/^\/api/, '');
                        console.log(path, "==>", replaced);
                        return replaced;
                    }
                },
                // '/graphql': {
                //     target: 'http://localhost:8060/graphql',
                //     changeOrigin: true
                // }
            }
        }
    },

    i18n: {
        defaultLocale: 'ro',
        locales: ['ro'],
        strategy: 'prefix_and_default',
        vueI18n: './i18n.config.ts'
    }
})