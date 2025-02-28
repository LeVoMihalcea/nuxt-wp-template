<script setup lang="ts">
    import SocialMediaZone from "~/components/social-media-zone.vue";

    const props = defineProps({
        title: {
            type: String,
        },
        backgroundImage: {
            type: String
        },
        subtitle: {
            type: String
        },
        button: {
            type: String
        },
        buttonCallback: {
            type: Object as PropType<() => any>
        }
    })
</script>

<template>
    <header class="story-hero p-8 text-white "
        :style="{'background-image': `url(.${props.backgroundImage})`}"
    >
        <div v-if="button" class="flex flex-column align-items-center pt-8">
            <h1 class="title pt-8 font-light uppercase text-2xl lg:text-6xl text-center">{{ title }}</h1>
            <h2 class="subtitle xl:w-6 text-center opacity-70 font-light">{{ subtitle }}</h2>
            <Button :label="button" @click="buttonCallback" class="p-button-rounded p-button-primary xl:w-3 mt-4"/>
            <social-media-zone class="w-12 h-full lg:w-2 mt-8"/>
        </div>
    </header>
</template>

<style scoped>
    .story-hero {
        background-size: cover;
        background-position: 30%;
        min-height: 800px;
    }

    .subtitle{
        text-wrap: balance;
    }

    h1{
        font-size: 64px;
    }
</style>