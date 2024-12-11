<script setup lang="ts">
    import Hero from "~/components/hero.vue";
    import WhatAwaitsYou from "~/components/what-awaits-you.vue";
    import PageContent from "~/layouts/page-content.vue";
</script>


<template>
    <hero/>
    <page-content>
        <what-awaits-you/>
    </page-content>
    <page-content>
        <why-be-a-student/>
    </page-content>
</template>

<style scoped>


</style>
