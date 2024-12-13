<script setup lang="ts">
    import Hero from "~/components/hero.vue";
    import WhatAwaitsYou from "~/components/what-awaits-you.vue";
    import PageContent from "~/layouts/page-content.vue";
    import WhatWePrepared from "~/components/what-we-prepared.vue";
</script>


<template>
    <hero/>
    <what-awaits-you/>
    <page-content>
        <why-be-a-student/>
    </page-content>
    <page-content>
        <what-we-prepared/>
    </page-content>
</template>

<style scoped>

</style>
