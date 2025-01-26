<script setup lang="ts">
    export type TeamMember = {
        name: string;
        title: string;
        picture?: string;
        content?: string;
        description?: string;
    };

    const props = defineProps<TeamMember>();
</script>

<template>
    <div class="container flex flex-column w-full h-full -p-8 text-white">
        <div class="flex flex-row justify-content-evenly">
            <img :src="picture" alt="profile picture" class="profile-picture w-5">
            <div class="name-box flex flex-column justify-content-start align-items-center w-full md:p-8 p-4 font-light">
                <h1 class="md:text-6xl my-0 uppercase text-center font-light">{{ name }}</h1>
                <h4 class="uppercase mt-0 text-black-alpha-90 font-light">{{ title }}</h4>
                <div v-html="description" class="description"/>
            </div>
        </div>
        <div class="md:px-8 px-2 py-4" v-html="content"/>
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
        object-fit: cover;
        object-position: top;
        max-height: 400px;
    }

    .name-box {
        background: linear-gradient(to bottom, color-mix(in srgb, var(--accent), transparent 0%), color-mix(in srgb, var(--accent), transparent 100%));
    }

    .description {
        overflow: auto;
        max-height: 100px;
    }
</style>