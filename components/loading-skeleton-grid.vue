<script setup lang="ts">

</script>

<template>
    <div class="grid">
        <div v-for="i of [1, 2, 3, 4]" class="col-12 lg:col-6">
            <skeleton class="400px" height="400px"/>
        </div>
    </div>
</template>

<style scoped>

</style>