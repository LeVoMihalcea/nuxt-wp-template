<template>
    <header class="bg-cover bg-no-repeat py-8 pl-4 xl:pl-8 w-full text-white">
        <h1 class="xl:text-6xl font-bold xl:w-6 mb-3 mt-8 pt-8">{{ $t('hero.title1') }}</h1>
        <h1 class="xl:text-6xl font-bold xl:w-6 my-3">{{ $t('hero.title2') }}</h1>
        <h1 class="xl:text-6xl font-bold xl:w-6 mt-3">{{ $t('hero.title3') }}</h1>
        <h4 class="font-light xl:w-4">{{ $t('hero.subtitle') }}</h4>

        <searchbar/>
        <social-media-zone class="w-full lg:w-1 mt-8"/>
    </header>
</template>

<script setup>
    import SocialMediaZone from "~/components/social-media-zone.vue";

    const {t: $t} = useI18n();
    const searchQuery = ref("");
</script>

<style scoped>
    header {
        background-image: url('public/hero/img.png');
        background-position: center right;
        min-height: 800px;
    }
</style>