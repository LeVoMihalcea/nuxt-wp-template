<script setup lang="ts">
</script>

<template>
    <div class="grid lg:px-8 text-white">
        <div class="col col-12 lg:col-4">
            <h1>01</h1>
            <p>{{ $t("p1WhatAwaitsYou") }}</p>
        </div>
        <div class="col col-12 lg:col-4">
            <h1>02</h1>
            <p>{{ $t("p2WhatAwaitsYou") }}</p>
        </div>
        <div class="col col-12 lg:col-4">
            <h1>03</h1>
            <p>{{ $t("p3WhatAwaitsYou") }}</p>
        </div>
    </div>
</template>

<style scoped>
    .grid{
        background-color: var(--blue-contrast);
    }
</style>
