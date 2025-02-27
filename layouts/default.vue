<template>
    <div id="app" class="animation-duration-500 fadein flex flex-column min-h-screen justify-content-between">
        <Header class="absolute w-full"/>
        <main>
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

    main {
        max-width: 2560px;
        margin: 0 auto;
    }
</style>
