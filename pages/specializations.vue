<script setup lang="ts">

    import PreparedCard from "~/components/index/prepared-card.vue";
    import PageContent from "~/layouts/page-content.vue";

    const specializations = useSpecializations().data;
</script>

<template>
    <generic-hero
        :title="$t('specializations.hero.title')"
        :subtitle="$t('specializations.hero.subtitle')"
        :button="$t('specializations.hero.contactUs')"
        background-image="/hero/hero-specializations.png"
    />

    <page-content>
<!--        <div class="grid">-->
<!--            <div class="p-6 max-h-3rem">-->
<!--                <prepared-card-->
<!--                    v-for="(specialization, index) in specializations"-->
<!--                    :key="index"-->
<!--                    :secondary="true"-->
<!--                    :title="specialization.title"-->
<!--                    :description="specialization.excerpt"-->
<!--                    :image-url="specialization.imageUrl"-->
<!--                />-->
<!--            </div>-->
<!--        </div>-->
    </page-content>
</template>

<style scoped>
</style>