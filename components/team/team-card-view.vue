<script setup lang="ts">
    import {useSingleStaff, useStaff} from "~/composables/useStaff";
    import TeamMemberModalCard from "~/components/team/team-member-modal-card.vue";
    import type {Staff} from "~/types/Staff";
    import {watch} from "vue";

    const {locale} = useI18n();
    const route = useRoute();
    const router = useRouter();
    const {data, status} = useStaff();
    const modalVisible = ref(false);
    const modalPayload = ref<Staff | null>(null);
    const id = ref<string>(route.query.id?.toString() ?? "");
    console.log(route.query);
    const singleStaff = useSingleStaff(id).data;

    watch(() => singleStaff.value, () => {
        if(id.value === "") return;
        changeModalPayload(singleStaff.value!)
    });

    function changeModalPayload(staff: Staff) {
        console.log("triggering once")
        modalPayload.value = staff;
        modalVisible.value = true;

        router.replace({
            path: route.path,
            query: { ...toRaw(route.query), id: staff.id }
        });
    }

    function removeIdQueryParam() {
        const newQuery = { ...toRaw(route.query) };
        delete newQuery.id;

        router.replace({
            path: route.path,
            query: newQuery
        });
    }

</script>

<template>
    <div>
        <Dialog v-model:visible="modalVisible"
                class="w-11 xl:w-8"
                :show-header="false"
                modal dismissable-mask
                @after-hide="removeIdQueryParam"
        >
            <team-member-modal-card
                :name="modalPayload?.name ?? ''"
                :description="modalPayload?.description ?? ''"
                :content="modalPayload?.content ?? ''"
                :title="modalPayload?.title ?? ''"
                :picture="modalPayload?.imageUrl ?? 'default-picture.svg'"
            />

        </Dialog>

        <div v-if="!data" class="placeholder">

        </div>
        <div v-else>
            <div v-for="(category, index) of data"
                 :class="{blue: index % 2 === 1, 'text-white': index % 2 === 1}" class="text-center py-8">
                <h1 class="uppercase text-xl xl:text-7xl"> {{ category.name }} </h1>
                <div class="grid w-full xl:w-6 m-auto z-1">
                    <team-member-card v-for="staff of category.staff"
                                      class="align-items-center col-6 xl:col-3 mb-8"
                                      :class="{'text-white': index % 2 === 1}"
                                      :id="staff.id"
                                      :name="staff.name"
                                      :image-url="staff.imageUrl.length > 0 ? staff.imageUrl : 'default-picture.svg'"
                                      :department="staff.department"
                                      :title="staff.title"
                                      @click="() => changeModalPayload(staff)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .blue {
        background-color: var(--dark-blue);
    }

    .placeholder {
        min-height: 1000px;
    }
</style>