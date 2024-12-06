<script setup lang="ts">
import {remove} from "diacritics";

const props = defineProps({
    name: {type: String, required: true},
    title: {type: String, required: true},
    department: {type: String, required: false},
    picture: {type: String, required: false},

})
</script>

<template>
    <div class="container flex flex-column align-items-center">
        <div class="" v-if="props.picture">
            <img :src="props.picture" alt="profile picture"
                 class="profile-picture flex justify-content-center border-circle"/>
        </div>

        <div class="flex flex-column align-items-center">
            <p class="text-color-secondary md:text-base text-xs">{{ title }}</p>
            <h1 class="text-primary uppercase md:text-2xl">{{ remove(name) }}</h1>
        </div>
    </div>
</template>

<style scoped>
.profile-picture {
    object-fit: cover;
    object-position: top;
    width: 10rem;
    height: 10rem;
}
</style>
