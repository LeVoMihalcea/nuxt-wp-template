<template>
    <two-columns-responsive>
        <template #first>
            <div class="md:w-8">
                <h1 class="text-6xl">{{ $t('whoWeAre.title') }}</h1>
                <p class="text-lg mt-3 text-color-secondary">{{ $t('whoWeAre.subtitle1') }}</p>
                <p class="text-lg mt-3 text-color-secondary">{{ $t('whoWeAre.subtitle2') }}</p>
                <p class="text-lg mt-3 text-color-secondary">{{ $t('whoWeAre.subtitle3') }}</p>
            </div>
        </template>

        <template #second>
            <div class="flex flex-row justify-content-center">
            <nuxt-img src="who-we-are/img.png" class="w-8"/>
            </div>
        </template>
    </two-columns-responsive>
</template>

<script setup lang="ts">
    import TwoColumnsResponsive from "~/layouts/two-columns-responsive.vue";
</script>

<style scoped>
</style>