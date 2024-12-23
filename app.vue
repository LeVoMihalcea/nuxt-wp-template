<script setup>
    useSeoMeta({
        title: "MAE - UTCN",
        // ogTitle: "Solis UTCN - Solar Racing Team",
        // description:
        //     "Welcome to Solis UTCN! Discover Solis-EV UTCN, where we push the boundaries of solar racing challenges and innovative electric vehicle technologies",
        // ogDescription:
        //     "Welcome to Solis UTCN! Discover Solis-EV UTCN, where we push the boundaries of solar racing challenges and innovative electric vehicle technologies",
        // twitterCard: "summary_large_image",
        // robots: "index, follow",
    });

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
        scrollbar-gutter: stable both-edges !important;
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
        --text-light-paragraph: #DADADA;
    }

    .accent-underline {
        text-decoration-color: var(--accent) !important;
        text-underline-offset: 1rem;
    }

    .accent {
        color: var(--accent);
    }

    .primary-light{
        color: var(--light-blue);
    }

    .dark-blue{
        color: var(--dark-blue);
    }

    .light-paragraph {
        color: var(--text-light-paragraph);
    }

    .background-text{
        z-index: -1;
        left: 0;
        position: absolute;
        color: #eeeeee;
        font-size: 11rem;
    }

    .custom-underline{
        text-underline-offset: 0.5em;
        text-decoration: underline;
        text-decoration-color: var(--accent);
    }
</style>
