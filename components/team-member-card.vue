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
    <div class="container flex flex-row">
        <div class="" v-if="props.picture">
            <img :src="props.picture" alt="profile picture"
                 class="profile-picture flex justify-content-center border-circle border-1 border-primary"/>
        </div>

        <div class="">
            <p class="description mt-3 mb-0 mr-1 ml-1 md:text-base text-xs">{{ title }}</p>
            <h1 class="uppercase my-0 mr-1 ml-1 text-left md:text-base text-xs">{{ remove(name) }}</h1>
            <p class="mt-0 mb-0 ml-1 md:text-base text-xs">{{ department }}</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    border-radius: 700px;
    border: solid 3px #041936;
}

.description {
    color: #BBD1EA;
}

.profile-picture {
    object-fit: cover;
    object-position: top;
    width: 10rem;
    height: 10rem;
    border-radius: 700px;
}

.social-media-icon {
    margin: 0.5rem;
    vertical-align: middle;
}
</style>
