<script setup lang="ts">
    import TwoColumnsResponsive from "~/layouts/two-columns-responsive.vue";

    const {t} = useI18n();

    type Testimonial = {
        name: string,
        title: string,
        text: string
    }

    const testimonials: Testimonial[] = [
        {
            name: 'Alin Nastase',
            title: 'Inginer Electric',
            text: t('loremIpsum.medium'),
        },
        {
            name: 'Somebody else',
            title: 'Inginer Electric',
            text: t('loremIpsum.medium'),
        },
        {
            name: 'Ion Nastase',
            title: 'Inginer Electric',
            text: t('loremIpsum.medium'),
        },
        {
            name: 'Some rando',
            title: 'Inginer Electric',
            text: t('loremIpsum.medium'),
        },
    ]
</script>

<template>
    <div class="mt-8">
        <two-columns-responsive>
            <template #first>
                <div class="w-8">

                <h1 class="background-text w-full">{{ t('testimonials.backgroundText') }}</h1>
                <h1 class="text-7xl">{{ t('testimonials.header') }}</h1>
                <p class="text-lg font-light text-color-secondary">{{ t('testimonials.subtitle') }}</p>
                </div>
            </template>
            <template #second>
                <div class="flex flex-column h-full justify-content-center">
                <Carousel :value="testimonials"
                          :numVisible="1"
                          :numScroll="1"
                          :show-indicators="false"
                          class="mt-8"
                          :autoplay-interval="10000"
                          circular
                >
                    <template #item="slotProps">
                        <div class="p-4 flex flex-column text-center">
                            <h1 class="accent mb-0 text-4xl">{{ slotProps.data.name }}</h1>
                            <h3 class="font-light mt-0">{{ slotProps.data.title }}</h3>
                            <p class="font-light mt-0">{{ slotProps.data.text }}</p>
                        </div>
                    </template>
                </Carousel>
                </div>

            </template>
        </two-columns-responsive>
    </div>
</template>

<style scoped>
    .background-text {
        top: 2800px;
        font-size: 15rem;
        margin: 0 auto;
    }
</style>