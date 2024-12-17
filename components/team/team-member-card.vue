<script setup lang="ts">
    export type TeamMember = {
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
        <div v-if="props.picture">
            <img :src="props.picture" alt="profile picture"
                 class="profile-picture flex justify-content-center"/>
        </div>

        <div class="name flex flex-column justify-content-evenly text-white text-center">
            <h3 class="md:text-lg my-0">{{ capitalizeLastWord(name) }}</h3>
            <p class="opacity-70 font-light md:text-base my-0 uppercase">{{ title }}</p>
        </div>
    </div>
</template>

<style scoped>
    .profile-picture {
        background-size: auto;
        background: url('public/simple-logo-transparent.svg') center;
        position: relative;
        object-fit: cover;
        object-position: top;
        width: 15rem;
        height: 15rem;
    }

    .name {
        background-color: var(--blue-contrast);
        width: 15rem;
        height: 6rem;
    }
</style>
