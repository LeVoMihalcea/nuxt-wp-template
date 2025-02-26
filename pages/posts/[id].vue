<script setup lang="ts">
    import {useSingleArticle} from "~/composables/useNews";
    import type {Post} from "~/types/Post";
    import PageContent from "~/layouts/page-content.vue";

    const route = useRoute()

    const post: Ref<Post | null> = useSingleArticle(route.params.id.toString()).data;
</script>

<template>
    <div class="container fadein animation-duration-500">
        <generic-hero :background-image="post?.imageUrl"/>
        <page-content>
            <div v-if="post">
                <h1>{{ post.title }}</h1>
                <p>{{ post.date }}</p>
                <div v-html="post.content"></div>
            </div>
            <div v-else>
                <progress-spinner/>
            </div>
        </page-content>
    </div>
</template>

<style scoped>
    :deep(img) {
        width: 100%;
        height: unset !important;
    }
</style>
