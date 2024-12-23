<script setup lang="ts">
    const props = defineProps({
        title: String,
        imageUrl: String,
        date: Date,
        description: String,
        secondary: Boolean,
        tall: Boolean,
    });
</script>

<template>
    <div>
        <div v-if="!secondary" class="card animated">
            <div class="card-image full-height" :class="{tall}" :style="{ backgroundImage: `url(${imageUrl})` }">
                <div class="card-overlay">
                    <h3 class="card-title">{{ title }}</h3>
                </div>
            </div>
        </div>
        <div v-else class="card">
            <div class="flex flex-column justify-content-between">
                <nuxt-img class="w-full border-round-lg" :src="imageUrl"/>
                <div class="p-2">
                    <div class="flex flex-column justify-content-start">
                        <p class="accent mt-0">09.11.2024</p>
                        <h1 class="mt-0">{{ title }}</h1>
                    </div>
                    <p class="m-0 text-color-secondary">
                        {{ description ?? $t('loremIpsum.short') }}
                    </p>
                    <div class="flex gap-4 mt-1 text-color-secondary">
                        <Button :label="$t('news.findOut')" icon="pi pi-arrow-up-right" iconPos="right" variant="text"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .card {
        border-radius: 8px;
        overflow: hidden;
    }

    .full-height {
        max-height: 300px;
        height: 250px;
        width: 100%;
    }

    .tall{
        max-height: 400px !important;
        height: 400px !important;
    }

    :deep(.p-card-body) {
        padding-bottom: 0;
        height: 200px;
        justify-content: space-between;
    }

    .animated:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }

    .card-image {
        position: relative;
        background-size: cover;
        background-position: center;
    }

    .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, color-mix(in srgb, var(--dark-blue), transparent 50%), color-mix(in srgb, var(--dark-blue), transparent 0%));
        padding: 3rem;
        color: white;
    }

    .card-title {
        margin: 0;
        font-size: 2rem;
        font-weight: normal;
    }
</style>
