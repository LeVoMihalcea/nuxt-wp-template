<script setup>
    useSeoMeta({
        title: "MAE - Departamentul de mașini și acționari electrice",
        ogTitle: "MAE - Departamentul de mașini și acționari electrice",
        description:
            "Viitorul tehnologiilor electrice: MAE pregătește ingineri prin excelență academică, inovație, parteneriate industriale și studii moderne în electricitate și digitalizare.",
        ogDescription:
            "Viitorul tehnologiilor electrice: MAE pregătește ingineri prin excelență academică, inovație, parteneriate industriale și studii moderne în electricitate și digitalizare.",
        ogImage: "http://localhost:3000/twitter_image.png",
        twitterCard: "summary_large_image",
        robots: "index, follow",
    });

    useHead({
        script: [
            {
                "@context": "https://schema.org",
                "@type": "CollegeOrUniversity",
                "name": "MAE - Departamentul de mașini și acționari electrice",
                "url": "https://emd.utcluj.ro/",
                "logo": "https://emd.utcluj.ro/_nuxt/public/logo.svg",
                "sameAs": "https://www.facebook.com/mae.utcn",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Strada George Barițiu 26-28",
                    "addressLocality": "Cluj-Napoca",
                    "postalCode": "400027",
                    "addressCountry": "RO"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+4 0264 401 242",
                    "contactType": "Customer Service",
                    "areaServed": "RO",
                    "availableLanguage": "Romanian"
                }
            }
        ],
        link: [
            { rel: 'canonical', href: 'https://emd.utcluj.ro/' }
        ],
    });
</script>

<template>
    <NuxtLoadingIndicator :height="5"/>
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
        --primary: var(--dark-blue);
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
