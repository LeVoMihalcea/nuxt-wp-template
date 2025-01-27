<script setup lang="ts">
    import SpecializationCard from "~/components/story/specialization-card.vue";
    import { useSpecializations } from "~/composables/useSpecializations";
    import { ref } from "vue";
    import { useI18n } from "vue-i18n";

    const { t } = useI18n();

    const { specializations, loading, error } = useSpecializations();

    const responsiveOptions = ref([
        {
            breakpoint: "900px",
            numVisible: 1,
            numScroll: 1,
        },
    ]);

    const specializationCountThreshold = 4;
</script>

<template>
    <div class="container flex flex-column">
        <div class="header w-full text-white flex flex-column py-8 align-items-center">
            <h1 class="text-6xl font-bold">{{ t('specializations.header') }}</h1>
            <p class="text-lg">{{ t('specializations.subtitle') }}</p>
        </div>

        <client-only>
            <template v-if="loading">
                <div class="loading text-center py-4">
                    {{ t('loading') }}
                </div>
            </template>

            <template v-else-if="error">
                <div class="error text-center py-4">
                    {{ t('errorMessage') }}
                </div>
            </template>

            <Carousel v-else
                      :value="specializations"
                      :num-visible="specializationCountThreshold"
                      :num-scroll="1"
                      :responsive-options="responsiveOptions"
                      :show-indicators="specializations.length > specializationCountThreshold"
                      :show-navigators="specializations.length > specializationCountThreshold"
            >
                <template #item="slotProps">
                    <specialization-card :specialization="slotProps.data" />
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
