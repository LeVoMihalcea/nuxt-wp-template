<script setup lang="ts">
    export type TeamMember = {
        id?: string,
        name: string;
        title: string;
        department?: string;
        picture?: string;
    };

    const props = defineProps<TeamMember>();

    function capitalizeLastWord(name: string) {
        const rest = name.substring(0, name.lastIndexOf(" ") + 1);
        const last = name.substring(name.lastIndexOf(" ") + 1, name.length);
        return rest + ' ' + last.toUpperCase();
    }
</script>

<template>
    <div class="container flex flex-column">
        <div v-if="props.picture" class="w-full profile-picture">
            <img v-if="props.picture" :src="props.picture" alt="profile picture" class="avatar w-full"/>
            <img v-else src="../../public/default-picture.svg" alt="profile picture" class="w-full translate-y-100"/>
        </div>

        <div class="name flex flex-column justify-content-evenly text-white text-center w-full">
            <h3 class="xl:text-lg my-0">{{ capitalizeLastWord(name) }}</h3>
            <p class="opacity-70 font-light xl:text-base my-0 uppercase">{{ title }}</p>
        </div>
    </div>
</template>

<style scoped>
    .profile-picture {
        background: linear-gradient(
            to bottom,
            color-mix(in srgb, #3B68A3, transparent 96%) 0%,
            color-mix(in srgb, #0B264A, transparent 23%) 90%
        ), url(public/simple-logo.svg) center, no-repeat;
        background-size: 180%;
        overflow: hidden;

        position: relative;
        height: 250px;
        object-position: top;

        img {
            min-height: 250px;
        }
    }

    .name {
        background-color: var(--blue-contrast);
        height: 6rem;
    }
</style>
