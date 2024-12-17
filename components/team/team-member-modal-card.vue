<script setup lang="ts">
    export type TeamMember = {
        name: string;
        title: string;
        picture?: string;
    };

    const props = defineProps<TeamMember>();
</script>

<template>
    <div class="container flex flex-column w-full h-full -p-8 text-white">
        <div class="flex flex-row justify-content-evenly">
            <img :src="picture" alt="profile picture" class="profile-picture w-24rem">
            <div class="name-box flex flex-column justify-content-start align-items-center w-full p-8 font-light">
                <h1 class="text-6xl my-0 uppercase text-center font-light">{{ name }}</h1>
                <h1 class="uppercase mt-0 text-black-alpha-90 font-light">{{ title }}</h1>
                <p>{{ $t('loremIpsum.long') }}</p>
                <p>{{ $t('loremIpsum.long') }}</p>
                <p>{{ $t('loremIpsum.xl') }}</p>
            </div>
        </div>
        <div class="px-8 py-4">
            <h1>Educație</h1>
            <p>Doctorat în Inginerie: [Domeniul specific, Universitatea, Anul finalizării]</p>
            <p>Studi de Masterat: [Domeniul specific, Universitatea, Anul finalizării]</p>
            <p>Studi de Licență: [Domeniul specific, Universitatea, Anul finalizării]</p>
        </div>
    </div>
</template>

<style scoped>
    img {
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    }

    .profile-picture {
        background-size: auto;
        background: url('public/simple-logo-transparent.svg') center;
        position: relative;
        object-fit: contain;
        object-position: top;
    }

    .name-box {
        background: linear-gradient(to bottom, color-mix(in srgb, var(--accent), transparent 0%), color-mix(in srgb, var(--accent), transparent 100%));
    }
</style>