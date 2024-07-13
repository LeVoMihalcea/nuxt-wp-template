<template>
    <h1>Team</h1>
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-4" v-for="member in data">
            <team-member-card
                :name=member.title?.rendered
                :picture="member._embedded['wp:featuredmedia'][0]?.link"
                department="random"
                title="some else"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const data: Ref<any> = ref(null);
onMounted(async () => {
    data.value = await $fetch('/api/staff?_embed');
});
</script>


<style scoped></style>
	