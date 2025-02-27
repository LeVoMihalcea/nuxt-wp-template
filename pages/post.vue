<script setup lang="ts">
    import {useSingleArticle} from "~/composables/useNews";
    import type {Post} from "~/types/Post";
    import PageContent from "~/layouts/page-content.vue";
    import Newsletter from "~/components/index/newsletter.vue";
    import News from "~/components/index/news.vue";
    import {watch} from "vue";

    const route = useRoute()


    const isLoading = computed(() => status.value === 'pending' || status.value === 'error')

    const getId = () => route.query.id?.toString() ?? "";

    const id = ref(getId());
    watch(() => route.query.id, () => {id.value = getId()})

    const {data, status, refresh} = useSingleArticle(id);
    const post: Ref<Post | null> = data;
</script>

<template>
    <div class="container fadein animation-duration-500 w-screen">
        <div v-if="isLoading">
            <div class="w-full p-4 lg:w-6 mx-auto mt-2">
                <skeleton width="w-full" height="15rem" class="mb-4"/>
                <skeleton width="w-full" height="12rem" class="mb-4"/>
                <skeleton width="10rem" class="mb-4"/>
                <skeleton width="w-full" height="2rem" class="mb-2"/>
                <skeleton width="w-full" height="2rem" class="mb-2"/>
                <skeleton width="w-full" height="2rem" class="mb-2"/>
                <skeleton width="w-full" height="2rem" class="mb-2"/>
            </div>
        </div>

        <div v-else>
            <div class="w-full flex justify-content-center">
                <img :src="post?.imageUrl" alt="Article Cover">
            </div>
            <page-content>
                <div>
                    <h1 class="text-4xl">{{ post?.title }}</h1>
                    <p class="lg:text-2xl font-light">{{ post?.date }}</p>
                    <div v-html="post?.content" class="lg:text-lg"></div>
                </div>
            </page-content>
        </div>
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

    img {
        max-width: 100%;
        max-height: 600px;
        width: auto;
    }
</style>
