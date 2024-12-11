<template>
    <header class="bg-cover bg-no-repeat py-8 pl-4 md:pl-8 w-full text-white">
        <h1 class="md:text-6xl font-bold md:w-6 mb-3 mt-6">{{ $t('heroTitle1') }}</h1>
        <h1 class="md:text-6xl font-bold md:w-6 my-3">{{ $t('heroTitle2') }}</h1>
        <h1 class="md:text-6xl font-bold md:w-6 mt-3">{{ $t('heroTitle3') }}</h1>
        <h4 class="font-light md:w-4">{{ $t('heroSubtitle') }}</h4>

        <searchbar/>
    </header>
</template>

<script setup>
    const {t: $t} = useI18n();
    const searchQuery = ref("");
</script>

<style scoped>
    header {
        background-image: url('public/hero/img.png');
        background-position: center right;
        min-height: 600px;
    }
</style>