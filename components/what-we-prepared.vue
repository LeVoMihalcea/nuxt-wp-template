<script setup lang="ts">
    import { ref } from "vue";

    const cards = ref([
        { title: "Cursuri si seminarii online", image: "/images/courses.jpg" },
        { title: "Specializari", image: "/images/specializations.jpg" },
        { title: "Servicii de educatie si cercetare", image: "/images/education-services.jpg" },
        { title: "Prezentare cadre didactice", image: "/images/teachers.jpg" },
        { title: "Infrastructură", image: "/images/infrastructure.jpg" },
        { title: "Grupuri cercetare", image: "/images/research-groups.jpg" },
        { title: "Laboratoare", image: "/images/laboratories.jpg" },
    ]);
</script>

<template>
    <div class="container text-center">
        <h2 class="text-4xl font-bold mb-4">CE ȚI-AM PREGĂTIT</h2>
        <p class="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet consectetur. Mauris id ut id arcu cursus tortor morbi tortor eget. Feugiat bibendum
            diam quam lacus adipiscing arcu at neque. Pellentesque maecenas ipsum velit sit molestie.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
                v-for="(card, index) in cards.slice(0, 2)"
                :key="index"
                class="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            >
                <img :src="card.image" alt="" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div class="absolute bottom-4 left-4 text-white font-bold text-lg">
                    {{ card.title }}
                </div>
            </div>

            <div class="col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 class="text-2xl font-bold text-dark-blue">Descoperă mai multe</h3>
                <p class="text-gray-500 mt-2">
                    Explorează oferta noastră completă de cursuri, infrastructură și servicii de cercetare pentru a-ți atinge
                    obiectivele academice și profesionale.
                </p>
            </div>

            <div
                v-for="(card, index) in cards.slice(4)"
                :key="index"
                class="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            >
                <img :src="card.image" alt="" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div class="absolute bottom-4 left-4 text-white font-bold text-lg">
                    {{ card.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
