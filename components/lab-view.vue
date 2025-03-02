<script setup lang="ts">
    import {useLaboratories} from "~/composables/useLaboratories";
    import PreparedCard from "~/components/index/prepared-card.vue";
    import LoadingSkeletonGrid from "~/components/loading-skeleton-grid.vue";

    const {data, status} = useLaboratories();

    const isLoading = computed(() => status.value === 'pending' || status.value === 'error');
</script>

<template>
    <div class="mb-6">
        <h1 class="text-6xl">{{ $t('labView.title') }}</h1>
        <p class="text-color-secondary">{{ $t('labView.description') }}</p>
    </div>

    <div v-if="isLoading">
        <loading-skeleton-grid/>
    </div>
    <div v-else>
        <div class="grid">
            <div v-for="lab of data" class="col-12 lg:col-6">
                <div>
                    <prepared-card :title="lab.title" :image-url="lab.imageUrl"/>
                    <p v-html="lab.excerpt" class="pl-2"/>
                    <nuxt-link :to="`/laboratory?id=${lab.id}`">
                        <Button :label="$t('news.findOut')"
                                icon="pi pi-arrow-up-right"
                                iconPos="right"
                                class="ml-0"
                                variant="text"
                        />
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>