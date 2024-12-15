<template>
    <story-hero/>
    <page-content>
        <who-we-are/>
    </page-content>
    <departments/>

    <page-content>
        <testimonials/>
    </page-content>

    <page-content>
        <news/>
    </page-content>
</template>

<script setup lang="ts">
    import StoryHero from "~/components/story/story-hero.vue";
    import PageContent from "~/layouts/page-content.vue";
    import WhoWeAre from "~/components/story/who-we-are.vue";
    import Departments from "~/components/story/departments.vue";
    import News from "~/components/index/news.vue";
    import Testimonials from "~/components/story/testimonials.vue";
</script>