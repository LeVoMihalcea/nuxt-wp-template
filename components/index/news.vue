<script setup lang="ts">
    import PreparedCard from "~/components/index/prepared-card.vue";
    import { useNews } from "~/composables/useNews";
    import type { Post } from "~/types/Post";

    const { $viewport } = useNuxtApp();
    const onMobile = !$viewport.isGreaterOrEquals("tablet");

    const cards: Ref<Post[] | null> = ref<Post[] | null>(null);

    const news = useNews();

    watchEffect(() => {
        if (news.data.value) {
            cards.value = news.data.value;
        }
    });

    const lastThreeArticles = computed(() => cards.value?.slice(0, 3));
</script>

<template>
    <div class="container p-2 md:p-8">
        <h1 class="background-text hidden md:block">{{ $t('news.articles') }}</h1>
        <h2 class="text-6xl font-normal mb-4">{{ $t('news.news') }}</h2>
        <div v-if="cards" class="flex md:flex-row flex-column justify-content-center">
            <div v-for="(card, index) in lastThreeArticles">
                <prepared-card
                    :title="card.title"
                    :image-url="card.imageUrl"
                    :class="{'w-8': index === 0}"
                    :tall="index === 0"
                    :secondary="index !== 0 && !onMobile"
                    :url="`/posts/${card.id}`"
                    class="m-2 w-full"
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
