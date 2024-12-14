<template>
    <header class="story-hero p-8 text-white">
        <div class="flex flex-column align-items-center pt-8">
            <h1 class="title pt-8 font-light">{{ $t('story.hero.title') }}</h1>
            <p class="subtitle w-6 text-center opacity-70">{{ $t('story.hero.subtitle') }}</p>
            <Button :label="$t('story.hero.contactUs')" class="p-button-rounded p-button-primary w-3 mt-4"/>
        </div>
    </header>
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