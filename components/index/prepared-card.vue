<script setup lang="ts">
    interface Card {
        title: string;
        imageUrl: string;
    }

    const props = defineProps<Card>();
</script>

<template>
    <div class="card">
        <div class="card-image" :style="{ backgroundImage: `url(${imageUrl})` }">
            <div class="card-overlay">
                <h3 class="card-title">{{ title }}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
    }

    .card-image {
        position: relative;
        background-size: cover;
        background-position: center;
        height: 300px;
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
