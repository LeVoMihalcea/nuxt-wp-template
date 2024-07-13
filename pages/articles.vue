<template>
    <h1>Articles</h1>
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-4" v-for="post in data">
            <Post :post="post"></Post>
        </div>
    </div>
</template>

<script setup lang="ts">
const data = ref(null);
onMounted(async () => {
    data.value = await $fetch('/api/posts?_embed');
});
</script>


<style scoped></style>
