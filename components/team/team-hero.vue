<template>
    <generic-hero
        :title="$t('team.hero.title')"
        :subtitle="$t('team.hero.subtitle')"
        :button="$t('team.hero.button')"
        background-image="/hero/hero-staff.png"
    />
</template>

<script setup>
</script>

<style scoped>
    .story-hero {
        background-image: url('/public/hero/hero-about.png');
        background-size: cover;
        background-position: 30%;
        min-height: 800px;
    }

    .subtitle{
        text-wrap: balance;
    }

    h1{
        font-size: 64px;
    }
</style>