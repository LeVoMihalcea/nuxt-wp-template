<script setup>
</script>

<template>
    <NuxtLoadingIndicator :height="20"/>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<style>
    * {
        font-family: "Inter var", sans-serif
    }

    body {
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: unset;
    }

    :root {
        --dark-blue: #031021;
        --blue-contrast: #13263F;
    }

</style>
