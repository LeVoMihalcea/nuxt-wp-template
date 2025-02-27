<script setup lang="ts">
    import {useSingleArticle} from "~/composables/useNews";
    import type {Post} from "~/types/Post";
    import PageContent from "~/layouts/page-content.vue";
    import Newsletter from "~/components/index/newsletter.vue";
    import News from "~/components/index/news.vue";

    const route = useRoute()

    const post: Ref<Post | null> = useSingleArticle(route.params.id.toString()).data;
</script>

<template>
    <div class="container fadein animation-duration-500">
        <generic-hero :background-image="post?.imageUrl"/>
        <page-content>
            <div v-if="post">
                <h1 class="text-4xl lg:text-7xl">{{ post.title }}</h1>
                <p class="text-2xl font-light">{{ post.date }}</p>
                <div v-html="post.content"></div>
            </div>
            <div v-else>
                <progress-spinner/>
            </div>
        </page-content>
        <newsletter/>
        <page-content>
            <news/>
        </page-content>
    </div>
</template>

<style scoped>
    :deep(img) {
        width: 100%;
        height: unset !important;
    }
</style>
