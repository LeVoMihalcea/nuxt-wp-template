<script setup lang="ts">
    import { ref } from "vue";
    import PreparedCard from "~/components/index/prepared-card.vue";

    const cards = ref([
        { title: "Cursuri si seminarii online", imageUrl: "/cards/courses.png" },
        { title: "Servicii de educatie si cercetare", imageUrl: "/cards/education-services.png" },
        { title: "Prezentare cadre didactice", imageUrl: "/cards/teachers.png" },
        { title: "Specializari", imageUrl: "/cards/departments.png" },
        { title: "Grupuri cercetare", imageUrl: "/cards/research-groups.png" },
        { title: "Laboratoare", imageUrl: "/cards/laboratories.png" },
    ]);
</script>

<template>
    <div class="container p-2 xl:p-8">
        <h1 class="background-text hidden xl:block">OPORTUNITĂȚI.</h1>
        <h2 class="text-6xl font-normal mb-4">CE ȚI-AM PREGĂTIT</h2>
        <p class="mb-6 w-full xl:w-6">
            Lorem ipsum dolor sit amet consectetur. Mauris id ut id arcu cursus tortor morbi tortor eget. Feugiat bibendum
            diam quam lacus adipiscing arcu at neque. Pellentesque maecenas ipsum velit sit molestie.
        </p>

        <div class="grid">
            <div
                v-for="(card, index) in cards"
                :key="index"
                class="col-12 xl:col-4"
            >
                <prepared-card :image-url="card.imageUrl" :title="card.title" />
            </div>
        </div>
<!--        <img src="simple-logo.svg" class="logo hidden xl:block"/>-->
    </div>
</template>

<style scoped>
    .logo {
        position: absolute;
        right: -100px;
        transform: translateY(-200px);
        scale: 1.5;
        overflow: hidden;
        z-index: -1;
    }

    .background-text{
        top: 1800px;
    }
</style>
