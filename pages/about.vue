<template>
    <story-hero/>
    <page-content>
        <who-we-are/>
    </page-content>
</template>

<script setup lang="ts">
    import StoryHero from "~/components/story/story-hero.vue";
    import PageContent from "~/layouts/page-content.vue";
    import WhoWeAre from "~/components/story/who-we-are.vue";
</script>