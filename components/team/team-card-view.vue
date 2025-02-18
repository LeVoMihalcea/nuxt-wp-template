<script setup lang="ts">
    import {useStaff} from "~/composables/useStaff";
    import type {TeamMember} from "~/components/team/team-member-card.vue";
    import TeamMemberModalCard from "~/components/team/team-member-modal-card.vue";

    const {data, error} = useStaff();
    const modalVisible = ref(false);
    //todo(leo): make this type safe
    const modalPayload = ref<TeamMember | null | any>(null);

    const nonZeroCategories = computed(() => (data.value as any)?.staffCategories.nodes.filter((c: any) => c.staff.nodes.length).reverse());

    function changeModalPayload(staff: TeamMember) {
        modalPayload.value = staff;
        modalVisible.value = true;
    }
</script>

<template>
    <div>
        <Dialog v-model:visible="modalVisible"
                class="w-11 xl:w-8"
                :show-header="false"
                modal dismissable-mask
        >
            <team-member-modal-card
                :name="modalPayload.title"
                :title="modalPayload.staffFieldGroup?.title"
                :picture="modalPayload.featuredImage?.node.sourceUrl ?? 'default-picture.svg'"
                :content="modalPayload.content"
                :description="modalPayload.staffFieldGroup?.description"
            />

        </Dialog>

        <div v-if="!data" class="placeholder">

        </div>
        <div v-else>
            <client-only>
                <div v-for="(category, index) of nonZeroCategories"
                     :class="{blue: index % 2 === 1, 'text-white': index % 2 === 1}" class="text-center py-8">

                    <!--        <h1 class="background-text w-full z-0 hidden xl:inline-block"> {{ category.name }} </h1>-->
                    <h1 class="uppercase text-xl xl:text-7xl"> {{ category.name }} </h1>
                    <div class="grid w-full xl:w-6 m-auto z-1">
                        <team-member-card v-for="staff of category.staff?.nodes"
                                          class="align-items-center col-6 xl:col-3 mb-8"
                                          :class="{'text-white': index % 2 === 1}"
                                          :name="staff.title ?? 'fallback-name'"
                                          :picture="staff.featuredImage?.node.sourceUrl ?? 'default-picture.svg'"
                                          :department="staff.staffFieldGroup?.department ?? ''"
                                          :title="staff.staffFieldGroup?.title ?? ''"
                                          @click="() => changeModalPayload(staff)"
                        />
                    </div>
                </div>
            </client-only>
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