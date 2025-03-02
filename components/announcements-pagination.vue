<script setup lang="ts">
    import {computed, ref} from "vue";
    import Paginator, {type PageState} from "primevue/paginator";
    import {useNews} from "~/composables/useNews";
    import PreparedCard from "~/components/index/prepared-card.vue";

    const first = ref(10);
    const after = ref<string | null>(null);
    const pageNumber = ref(0);

    const pageHistoryStack: Ref<(string | null)[]> = ref([]);

    const {data, refresh} = useNews(first, after)

    const pageInfo = computed(() => data.value?.pageInfo || null);
    const posts = computed(() => data.value?.posts ?? []);

    const onPageChange = (event: PageState) => {
        if (pageNumber.value < event.page) {
            // navigating forward
            pageHistoryStack.value.push(after.value);
            after.value = pageInfo.value?.endCursor || null;
        } else {
            // navigating backwards
            after.value = pageHistoryStack.value.pop() ?? null;
        }
        pageNumber.value = event.page;
    };

    const paginatorTemplate = computed(() => {
        let template = "";
        if (pageInfo.value?.hasPreviousPage) {
            template += "PrevPageLink ";
        }
        if (pageInfo.value?.hasNextPage) {
            template += "NextPageLink ";
        }
        return template;
    })
</script>

<template>
    <div class="p-2 mx-auto">
        <div class="grid">
            <div v-for="article of posts" class="col-12 lg:col-6 lg:p-6">
                <prepared-card :title="article.title"
                               :description="article.excerpt"
                               :image-url="article.imageUrl"
                               :date="article.date"
                               :url="`/post?id=${article.id}`"
                               class="mb-8"
                               secondary
                />
            </div>
        </div>

        <Paginator
            :rows="first"
            :totalRecords="20"
            @page="onPageChange"
            :template="paginatorTemplate"
            class="mt-6"
            :disabled="false"
        />
    </div>
</template>

<style scoped>
</style>
