<template>
    <story-hero/>
    <page-content>
        <who-we-are/>
    </page-content>
    <departments/>

    <page-content>
        <testimonials/>
    </page-content>

    <team-section/>

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
    import TeamSection from "~/components/story/team-section.vue";

    useSeoMeta({
        title: "MAE - UTCN",
        // ogTitle: "Solis UTCN - Solar Racing Team",
        // description:
        //     "Welcome to Solis UTCN! Discover Solis-EV UTCN, where we push the boundaries of solar racing challenges and innovative electric vehicle technologies",
        // ogDescription:
        //     "Welcome to Solis UTCN! Discover Solis-EV UTCN, where we push the boundaries of solar racing challenges and innovative electric vehicle technologies",
        // twitterCard: "summary_large_image",
        // robots: "index, follow",
    });

</script>