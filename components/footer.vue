<script setup lang="ts">
    // import { baseURL } from '~/utils/config';

    const baseURL = "";
    const config = useRuntimeConfig();
    const version = config.public["clientVersion"];
</script>

<template>
    <footer>
        <div class="grid md:w-10 text-white mt-6">
            <div class="follow-us col-12 lg:text-left md:col-5 text-center">
                <nuxt-img src="../public/logo.svg" loading="lazy"/>

                <p class="text-color-secondary">{{ $t('loremIpsum.short') }}</p>

                <p class="font-bold accent opacity-50">{{ $t("footer.contact") }}</p>
                <p>+4-0264-401-242</p>
                <p>TEGZES@emd.utcluj.ro</p>
                <p>Barițiu 26-28, sala 27 Cluj-Napoca</p>
            </div>

            <div class="menu col-12 lg:text-left md:col-3 text-center">
                <p class="font-bold accent opacity-50">{{ $t("footer.menu") }}</p>
                <p>
                    <nuxt-link-locale to="/" class="no-underline text-white" :prefetch="false">{{ $t("pages.home") }}
                    </nuxt-link-locale>
                </p>
                <p>
                    <nuxt-link-locale to="/about" class="no-underline text-white" :prefetch="false">
                        {{ $t("pages.about") }}
                    </nuxt-link-locale>
                </p>
                <p>
                    <nuxt-link-locale to="/human-resources" class="no-underline text-white" :prefetch="false">
                        {{ $t("pages.humanResources") }}
                    </nuxt-link-locale>
                </p>
                <p>
                    <nuxt-link-locale to="/research" class="no-underline text-white" :prefetch="false">
                        {{ $t("pages.research") }}
                    </nuxt-link-locale>
                </p>
                <p>
                    <nuxt-link-locale to="/for-students" class="no-underline text-white" :prefetch="false">
                        {{ $t("pages.forStudents") }}
                    </nuxt-link-locale>
                </p>
                <p>
                    <nuxt-link-locale to="/contact" class="no-underline text-white" :prefetch="false">
                        {{ $t("pages.contact") }}
                    </nuxt-link-locale>
                </p>
            </div>

            <div class="docs col-12 lg:text-left md:col-3 text-center">
                <p class="font-bold accent opacity-50">{{ $t("footer.legalDocs") }}</p>
                <p>
                    <nuxt-link-locale :to="{ path: '/legal-page/cookie-policy' }"
                                      class="no-underline text-white" :prefetch="false">{{ $t("pages.cookiesPolicy") }}
                    </nuxt-link-locale>
                </p>
                <p>
                    <nuxt-link-locale :to="{ path: '/legal-page/data-processing-policy' }"
                                      class="no-underline text-white" :prefetch="false">{{ $t("pages.dataPolicy") }}
                    </nuxt-link-locale>
                </p>
                <p>
                    <nuxt-link-locale :to="{ path: '/legal-page/website-terms-of-use' }"
                                      class="no-underline text-white" :prefetch="false">{{ $t("pages.websiteTerms") }}
                    </nuxt-link-locale>
                </p>
                <p>
                    <nuxt-link-locale :to="{ path: '/legal-page/limitation-of-liability-provision' }"
                                      class="no-underline text-white" :prefetch="false">
                        {{ $t("pages.liabilitySituations") }}
                    </nuxt-link-locale>
                </p>
            </div>
        </div>

        <p class="text-white">{{ $t("footer.copyright") }}</p>
        <p class="text-color-secondary">v{{ version }}</p>
    </footer>
</template>

<style scoped>
    footer {
        text-align: center;
        background: var(--dark-blue);
    }

    .grid {
        margin: 0 auto;
    }
</style>
