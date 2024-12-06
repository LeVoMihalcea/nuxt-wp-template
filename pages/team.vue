<template>
  <h1>Team</h1>
  <div v-for="category of data.staffCategories?.nodes">
    <h1> {{ category.name }} </h1>
    <div class="grid">
      <team-member-card v-for="staff of category.staff?.nodes"
                        class="col-12 md:col-6"
                        :name="staff.title ?? 'fallback-name'"
                        :picture="'http://localhost:8060' + staff.featuredImage?.node.uri"
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

