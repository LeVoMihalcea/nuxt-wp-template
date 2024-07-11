<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig();
const {data, refresh, pending} = await useFetch(config.public.wordpressUrl, {
    method: 'get',
    query: {
        query: `
     query NewQuery {
       posts(first:10){
         nodes {
           title
           date
           excerpt
           uri
         }
       }
     }`
    },
    transform(data) {
        return data.data.posts.nodes as Array<Record<'title' | 'date' | 'excerpt' | 'uri', string>>;
    }
});
</script>


<template>
    Main page
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
        <Post v-for="post in data" :key="post.uri" :post="post"></Post>
    </div>
</template>

<style scoped></style>
