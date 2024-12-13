<script setup lang="ts">
    import Hero from "~/components/index/hero.vue";
    import WhatAwaitsYou from "~/components/index/what-awaits-you.vue";
    import PageContent from "~/layouts/page-content.vue";
    import WhatWePrepared from "~/components/index/what-we-prepared.vue";
    import WhyBeAStudent from "~/components/index/why-be-a-student.vue";
    import Newsletter from "~/components/index/newsletter.vue";
</script>


<template>
    <hero/>
    <what-awaits-you/>
    <why-be-a-student/>
    <page-content>
        <what-we-prepared/>
    </page-content>
    <newsletter/>
</template>

<style scoped>

</style>
