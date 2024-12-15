<script setup lang="ts">
    import SpecializationCard, {type Specialization} from "~/components/story/specialization-card.vue";
    import {useSpecializations} from "~/composables/useSpecializations";

    const {t} = useI18n();

    const specializations: Specialization[] = useSpecializations();

    const responsiveOptions = ref([
        {
            breakpoint: "900px",
            numVisible: 1,
            numScroll: 1,
        },
    ]);

    const specializationCountThreshold = 4;
    const shouldShowNavigators = specializations.length > specializationCountThreshold;

</script>

<template>
    <div class="container flex flex-column">
        <div class="header w-full text-white flex flex-column py-8 align-items-center">
            <h1 class="text-6xl font-bold">{{ t('specializations.header') }}</h1>
            <p class="text-lg">{{ t('specializations.subtitle') }}</p>
        </div>

        <Carousel :value="specializations"
                  :num-visible="specializationCountThreshold"
                  :num-scroll="1"
                  :responsive-options="responsiveOptions"
                  :show-indicators="shouldShowNavigators"
                  :show-navigators="shouldShowNavigators"
        >
            <template #item="slotProps">
                <specialization-card :specialization="slotProps.data"/>
            </template>
        </Carousel>
    </div>
</template>

<style scoped>
    .header {
        background-color: var(--blue-contrast);
    }

    .background-text{
        top: 1600px;
    }

    :deep(.p-carousel-item) {
        min-height: 600px !important;
    }
</style>