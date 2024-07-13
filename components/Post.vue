<template>
    <div class="border-1 border-primary border-round m-2 mt-6">
        <div class="mb-3">
            <div class="relative mx-auto" v-if="post._embedded['wp:featuredmedia']">
                <nuxt-img :src="post._embedded['wp:featuredmedia'][0]?.link" class="w-full border-round"
                          alt="Blog post cover image"/>
            </div>
        </div>
        <div class="p-3">
            <div class="title text-lg mb-4 font-semibold">{{ post.title.rendered }}</div>
            <div class="flex justify-content-between align-items-center h-2rem text-color-secondary">
                <div>{{ post.excerpt.rendered }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    post: any
}>();

</script>