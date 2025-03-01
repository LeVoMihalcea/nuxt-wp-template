<script setup lang="ts">

    import PageContent from "~/layouts/page-content.vue";
    import TwoColumnsResponsive from "~/layouts/two-columns-responsive.vue";

    const route = useRoute();

    const id = ref(route.query?.id?.toString() ?? "");
    const {data, status} = useSingleExtraActivity(id);

    const isLoading = computed(() => status.value === 'pending' || status.value === 'error')
</script>

<template>
    <page-content>

        <div v-if="isLoading">
            <skeleton width="400px" height="400px" class="mx-auto"/>
        </div>
        <div v-else>
            <h1 class="lg:text-6xl font-light">{{ data?.title }}</h1>
            <two-columns-responsive reverse-if-on-mobile>
                <template #first>
                    <p v-html="data?.content"/>
                </template>
                <template #second>
                    <div class="flex flex-column justify-content-center align-items-center">
                        <img :src="data?.imageUrl" alt="Article Cover" class="w-10 mb-3">
                    </div>
                </template>
            </two-columns-responsive>
        </div>
    </page-content>
</template>

<style scoped>

</style>