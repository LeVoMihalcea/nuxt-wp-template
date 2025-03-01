<script setup lang="ts">

    import PreparedCard from "~/components/index/prepared-card.vue";
    import {useExtraActivities} from "~/composables/useExtraActivities";

    const {data, status, error} = useExtraActivities();

    const isLoading = computed(() => status.value === 'pending' || status.value === 'error')
</script>

<template>
    <h1>{{ $t('extracurricular-news.title') }}</h1>

    <div v-if="isLoading">
        <div class="grid">
            <div v-for="i of [1, 2, 3, 4]" class="col-12 lg:col-6">
                <skeleton class="400px" height="400px"/>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="grid">
            <div v-for="lab of data" class="col-12 lg:col-6">
                <div>
                    <prepared-card :title="lab.title" :image-url="lab.imageUrl"/>
                    <p v-html="lab.excerpt" class="pl-2"/>
                    <nuxt-link :to="`/extra-activity?id=${lab.id}`">
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
