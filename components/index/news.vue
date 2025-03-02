<script setup lang="ts">
    import PreparedCard from "~/components/index/prepared-card.vue";
    import {useNews} from "~/composables/useNews";
    import type {Post} from "~/types/Post";

    const cards: Ref<Post[] | null> = ref<Post[]>([]);

    const {data, status} = useNews(ref(3));

</script>

<template>
    <div class="container p-2 xl:p-8">
<!--        <h1 class="background-text hidden xl:block">{{ $t('news.articles') }}</h1>-->
        <h2 class="text-6xl font-normal mb-4">{{ $t('news.news') }}</h2>
        <div v-if="cards" class="flex xl:flex-row flex-column align-items-stretch">
            <div v-for="(card, index) in data?.posts">
                <prepared-card
                    :title="card.title"
                    :image-url="card.imageUrl"
                    :date="card.date"
                    :description="card.excerpt"
                    :url="`/post?id=${card.id}`"
                    :secondary="index !== 0 && $viewport.isGreaterOrEquals('tablet')"
                    class="m-2"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .background-text {
        top: 3600px;
    }
</style>
