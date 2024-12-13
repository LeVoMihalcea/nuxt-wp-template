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
        max-width: 100vw !important;
        overflow-x: hidden !important;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: unset;
    }

    :root {
        --dark-blue: #031021;
        --light-blue: #3B84C2;
        --primary-color: var(--dark-blue);
        --blue-contrast: #13263F;
        --accent: #D42126;
        --text-color-secondary: #565656;
    }

    .accent {
        color: var(--accent);
    }

    .primary-light{
        color: var(--light-blue);
    }

</style>
