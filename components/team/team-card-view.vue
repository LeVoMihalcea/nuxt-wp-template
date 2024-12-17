<script setup lang="ts">
    import {useStaff} from "~/composables/useTeam";
    import type {TeamMember} from "~/components/team/team-member-card.vue";
    import TeamMemberModalCard from "~/components/team/team-member-modal-card.vue";

    const {data, error} = useStaff();
    const modalVisible = ref(false);
    //todo(leo): make this type safe
    const modalPayload = ref<TeamMember | null | any>(null);

    const nonZeroCategories = computed(() => data.value.staffCategories.nodes.filter((c: any) => c.staff.nodes.length).reverse());

    function changeModalPayload(staff: TeamMember) {
        modalPayload.value = staff;
        modalVisible.value = true;
    }
</script>

<template>
    <div>
        <Dialog v-model:visible="modalVisible"
                class="w-full md:w-8"
                :show-header="false"
                modal dismissable-mask
        >
            <team-member-modal-card
                :name="modalPayload.title"
                :title="modalPayload.staffFieldGroup?.title"
                :picture="modalPayload.featuredImage.node.sourceUrl"
            />

        </Dialog>
        <div v-for="(category, index) of nonZeroCategories"
             :class="{blue: index % 2 === 1, 'text-white': index % 2 === 1}" class="text-center py-8">

            <!--        <h1 class="background-text w-full z-0 hidden md:inline-block"> {{ category.name }} </h1>-->
            <h1 class="uppercase text-7xl"> {{ category.name }} </h1>

            <div class="grid w-full md:w-8 m-auto z-1">
                <team-member-card v-for="staff of category.staff?.nodes"
                                  class="align-items-center col-12 md:col-3 mb-8"
                                  :class="{'text-white': index % 2 === 1}"
                                  :name="staff.title ?? 'fallback-name'"
                                  :picture="staff.featuredImage?.node.sourceUrl"
                                  :department="staff.staffFieldGroup?.department ?? ''"
                                  :title="staff.staffFieldGroup?.title ?? ''"
                                  @click="() => changeModalPayload(staff)"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .blue {
        background-color: var(--dark-blue);
    }
</style>