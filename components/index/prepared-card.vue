<script setup lang="ts">
    const props = defineProps({
        title: String,
        imageUrl: String,
        date: Date,
        description: String,
        secondary: Boolean,
        tall: Boolean,
        url: String,
    });
</script>

<template>
    <div class="container h-full">
        <nuxt-link :to="url">
            <div v-if="!secondary" class="card animated h-full">
                <div class="card-image full-height" :class="{tall}" :style="{ backgroundImage: `url(${imageUrl})` }">
                    <div class="card-overlay w-full">
                        <h3 class="font-normal w-6 xl:w-full text-xl xl:text-4xl">{{ title }}</h3>
                    </div>
                </div>
            </div>
            <div v-else class="card">
                <div class="flex flex-column justify-content-between">
                    <nuxt-img class="w-full h-auto border-round-lg bg-cover" :src="imageUrl"/>
                    <div class="pt-2">
                        <div class="flex flex-column justify-content-start">
                            <p class="accent mt-0">
                                <span class="line"/>
                                <span class="date">{{ date }}</span>
                            </p>
                            <h1 class="mt-0">{{ title }}</h1>
                        </div>
                        <p class="m-0 text-color-secondary">
                            {{ description ?? $t('loremIpsum.short') }}
                        </p>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>

</template>

<style scoped>
    .card {
        border-radius: 8px;
        overflow: hidden;
        margin: 0 auto;
    }

    .line {
        display: inline-block;
        width: 50px;
        border-top: 2px solid var(--accent);
        vertical-align: middle;
        margin-right: 10px;
    }

    .date {
        vertical-align: center;
    }

    a {
        text-decoration: none;
        color: unset;
    }

    .tall {
        height: 400px;
    }

    .animated:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }

    .card-image {
        position: relative;
        background-size: cover;
        background-position: center;
        min-width: 600px;
        min-height: 200px;
        height: 100%;
    }

    .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, color-mix(in srgb, var(--dark-blue), transparent 50%), color-mix(in srgb, var(--dark-blue), transparent 0%));
        padding: 2rem;
        color: white;
    }
</style>
