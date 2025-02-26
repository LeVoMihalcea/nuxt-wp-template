<script setup lang="ts">

    import PageContent from "~/layouts/page-content.vue";
    import SpecializationCard from "~/components/story/specialization-card.vue";
    import type {Specialization} from "~/types/Specialization";

    const specializations = useSpecializations().data;

    const groupedByLevel = computed(() => {
        return specializations.value?.reduce((acc, specialization) => {
            if (!acc[specialization.level[1]]) {
                acc[specialization.level[1]] = [];
            }
            acc[specialization.level[1]].push(specialization);
            return acc;
        }, {} as { [level: string]: Specialization[] });
    });

    function getLevelFromGroup(group: Specialization[]): string {
        if (group.length === 0) return "";
        return group[0].level[1];
    }

</script>

<template>
    <generic-hero
        :title="$t('specializations.hero.title')"
        :subtitle="$t('specializations.hero.subtitle')"
        :button="$t('specializations.hero.contactUs')"
        background-image="/hero/hero-specializations.png"
    />

    <page-content>
        <div v-for="level of groupedByLevel">
            <h1 class="text-7xl font-light">
                {{getLevelFromGroup(level)}}
            </h1>
            <div class="grid">
                <div v-for="(specialization, index) in level"
                     class="col-12 lg:col-6">
                    <specialization-card
                        :key="index"
                        :specialization="specialization"
                    />
                </div>

            </div>
        </div>


    </page-content>
</template>

<style scoped>
</style>