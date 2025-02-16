<script setup lang="ts">
</script>

<template>
    <div class="container text-center m-4 xl:m-8">
        <div class="flex flex-column xl:flex-row font-light">
            <nuxt-img src="simple-logo.svg" class="logo"/>

            <div class="xl:mx-8 z-1">
                <h1>
                    {{$t('whatAwaitsYou.h1')}}</h1>
                <p class="text-lg xl:mx-6">
                    {{ $t("whatAwaitsYou.p1") }}
                </p>
            </div>

            <div class="xl:mx-8 z-1">
                <h1>
                    {{$t('whatAwaitsYou.h2')}}</h1>
                <p class="text-lg xl:mx-6">
                    {{ $t("whatAwaitsYou.p2") }}
                </p>
            </div>

            <div class="xl:mx-8 z-1">
                <h1>
                    {{$t('whatAwaitsYou.h3')}}</h1>
                <p class="text-lg xl:mx-6">
                    {{ $t("whatAwaitsYou.p3") }}
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
        z-index: -1;
    }
</style>
