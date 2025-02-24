<script setup lang="ts">
    const socialMedia = useSocialMedias().data;
</script>

<template>
    <div class="container">
        <div class="flex flex-row justify-content-between">
            <div v-for="platform in socialMedia">
                <a :href="platform.url" target="_blank">
                    <img :src="platform.iconUrl" :alt="platform.title" class=""/>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        fill: white;
        width: 32px;
        height: 32px;
        margin: 0 auto 16px;
    }
</style>