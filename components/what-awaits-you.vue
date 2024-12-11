<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div class="grid lg:px-8 text-white font-light">
            <div class="col col-12 lg:col-4 border-right-1 my-6 px-4">
                <h1 class="text-5xl mb-0 font-light">01</h1>
                <p>{{ $t("p1WhatAwaitsYou") }}</p>
            </div>
            <div class="col col-12 lg:col-4 border-right-1 my-6 px-4">
                <h1 class="text-5xl mb-0 font-light">02</h1>
                <p>{{ $t("p2WhatAwaitsYou") }}</p>
            </div>
            <div class="col col-12 lg:col-4 my-6 px-4">
                <h1 class="text-5xl mb-0 font-light">03</h1>
                <p>{{ $t("p3WhatAwaitsYou") }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        background-color: var(--blue-contrast);
    }

    .grid {
        max-width: 1500px;
        margin: 0 auto;
    }
</style>
