<template>
  <h1>Team</h1>
  <div v-for="category of data.staffCategories?.nodes"
    class="" >
    <h1> {{ category.name }} </h1>
    <div class="grid bg-white">
      <team-member-card v-for="staff of category.staff?.nodes"
                        class="col-12 md:col-3 align-items-center"
                        :name="staff.title ?? 'fallback-name'"
                        :picture="staff.featuredImage?.node.sourceUrl"
                        :department="staff.staffFieldGroup?.department ?? ''"
                        :title="staff.staffFieldGroup?.title ?? ''"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import {useStaff} from "~/composables/useTeam";

const {data, error} = useStaff();

</script>

<style scoped>

</style>

