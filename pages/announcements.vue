<script setup lang="ts">

    import PageContent from "~/layouts/page-content.vue";
    import AnnouncementsPagination from "~/components/announcements-pagination.vue";
</script>

<template>
    <generic-hero
        :title="$t('announcements.hero.title')"
        :subtitle="$t('annoucements.hero.subtitle')"
        background-image="/hero/hero-annoucements.png"
    >
        <searchbar/>
    </generic-hero>
    <page-content>
        <div class="container">
            <div class="flex align-items-center">
                <h1 class="lg:text-6xl">{{ $t('annoucements.title') }}</h1>
                <div class="line w-full ml-6"/>
            </div>
            <announcements-pagination/>
        </div>
    </page-content>
</template>

<style scoped>
    .line {
        display: inline-block;
        border-top: 2px solid var(--accent);
    }
</style>