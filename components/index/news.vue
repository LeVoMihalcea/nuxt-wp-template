<script setup lang="ts">
    import {ref} from "vue";
    import PreparedCard from "~/components/index/prepared-card.vue";

    const { $viewport } = useNuxtApp();
    const onMobile = !$viewport.isGreaterOrEquals('tablet')

    const cards = ref([
        {title: "Cursuri si seminarii online", imageUrl: "/cards/courses.png"},
        {title: "Servicii de educatie si cercetare", imageUrl: "/cards/education-services.png"},
        {title: "Prezentare cadre didactice", imageUrl: "/cards/teachers.png"},
    ]);
</script>

<template>
    <div class="container p-2 md:p-8">
        <h1 class="background-text hidden md:block">{{$t('news.articles')}}</h1>
        <h2 class="text-6xl font-normal mb-4">{{ $t('news.news') }}</h2>

        <div class="flex md:flex-row flex-column">
            <prepared-card v-for="(card, index) in cards"
                           :title="card.title"
                           :image-url="card.imageUrl"
                           :class="{'w-8': index === 0}"
                           :tall="index === 0"
                           :secondary="index !== 0 && !onMobile"
                           class="m-2"
            />
        </div>
    </div>
</template>

<style scoped>
    .background-text {
        top: 3600px;
    }
</style>
