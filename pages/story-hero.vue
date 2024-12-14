<template>
    <div class="story-hero p-8">
        <div class="content text-white flex flex-column pt-8 justify-content-center">
            <h1 class="title pt-8 text-6xl">{{ $t('story.hero.title') }}</h1>
            <p class="subtitle">{{ $t('story.hero.subtitle') }}</p>
            <Button :label="$t('story.hero.contactUs')" class="p-button-rounded p-button-primary"/>
        </div>
    </div>
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
</style>