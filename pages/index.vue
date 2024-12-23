<script setup lang="ts">
    import Hero from "~/components/index/hero.vue";
    import WhatAwaitsYou from "~/components/index/what-awaits-you.vue";
    import PageContent from "~/layouts/page-content.vue";
    import WhatWePrepared from "~/components/index/what-we-prepared.vue";
    import WhyBeAStudent from "~/components/index/why-be-a-student.vue";
    import Newsletter from "~/components/index/newsletter.vue";
    import News from "~/components/index/news.vue";

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


<template>
    <hero/>
    <what-awaits-you/>
    <why-be-a-student/>
    <page-content>
        <what-we-prepared/>
    </page-content>
    <newsletter/>
    <page-content>
        <news/>
    </page-content>
</template>

<style scoped>

</style>
