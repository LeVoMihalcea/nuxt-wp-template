<template>
    <div id="app">
        <Header/>
        <main class="fadein animation-duration-500">
            <slot/>
        </main>
        <Footer/>
    </div>
</template>

<script setup>
    import Header from '~/components/header.vue'
    import Footer from '~/components/footer.vue'
</script>

<style scoped>
    #app{
        display: flex;
        flex-direction: column;
    }
</style>
