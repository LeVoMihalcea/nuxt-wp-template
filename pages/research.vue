<script setup lang="ts">

    import PageContent from "~/layouts/page-content.vue";
    import LabView from "~/components/lab-view.vue";
</script>

<template>
    <generic-hero
        :title="$t('research.title')"
        :subtitle="$t('research.subtitle')"
        :button="$t('research.button')"
        background-image="/hero/hero-about.png"
    />

    <page-content>
        <lab-view/>
    </page-content>
</template>

<style scoped>

</style>