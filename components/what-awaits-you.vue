<script setup lang="ts">
</script>

<template>
    <div class="container text-center m-4 md:m-8">
        <div class="flex flex-column md:flex-row font-light">
            <nuxt-img src="simple-logo.svg" class="logo"/>

            <div class="md:mx-8 z-1">
                <h1>
                    {{$t('h1WhatAwaitsYou')}}</h1>
                <p class="text-lg md:mx-6">
                    {{ $t("p1WhatAwaitsYou") }}
                </p>
            </div>

            <div class="md:mx-8 z-1">
                <h1>
                    {{$t('h2WhatAwaitsYou')}}</h1>
                <p class="text-lg md:mx-6">
                    {{ $t("p2WhatAwaitsYou") }}
                </p>
            </div>

            <div class="md:mx-8 z-1">
                <h1>
                    {{$t('h3WhatAwaitsYou')}}</h1>
                <p class="text-lg md:mx-6">
                    {{ $t("p3WhatAwaitsYou") }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 5rem;
        color: var(--accent);
    }

    .logo {
        position: absolute;
        transform: translate(-30%, -15%);
        height: 40%;
        overflow: hidden;
    }
</style>
