<script setup lang="ts">
    import SpecializationCard from "~/components/story/specialization-card.vue";
    import {useSpecializations} from "~/composables/useSpecializations";
    import {ref} from "vue";
    import {useI18n} from "vue-i18n";

    const {t} = useI18n();

    const specializations = useSpecializations().data;

    const responsiveOptions = ref([
        {
            breakpoint: "900px",
            numVisible: 1,
            numScroll: 1,
        },
    ]);

    const showIndicators: Ref<Boolean> = computed<Boolean>(() => specializations?.length && specializations.length > specializationCountThreshold);

    const specializationCountThreshold = 4;
</script>

<template>
    <div class="container flex flex-column">
        <div class="header w-full text-white flex flex-column py-8 align-items-center">
            <h1 class="text-6xl font-bold">{{ t('specializations.header') }}</h1>
            <p class="text-lg">{{ t('specializations.subtitle') }}</p>
        </div>

        <client-only>
            <Carousel
                :value="specializations"
                :num-visible="specializationCountThreshold"
                :num-scroll="1"
                :responsive-options="responsiveOptions"
                :show-indicators="!!showIndicators"
                :show-navigators="!!showIndicators"
            >
                <template #item="slotProps">
                    <specialization-card :specialization="slotProps.data"/>
                </template>
            </Carousel>
        </client-only>
    </div>
</template>

<style scoped>
    .header {
        background-color: var(--blue-contrast);
    }

    .background-text {
        top: 1600px;
    }

    :deep(.p-carousel-item) {
        min-height: 600px !important;
    }
</style>
