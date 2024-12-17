<script setup lang="ts">
    const props = defineProps({
        reverseIfOnMobile: {
            type: Boolean,
            default: false
        }
    });

    const viewport = useNuxtApp().$viewport;
    const reverse = computed(() => props.reverseIfOnMobile && viewport.isLessThan('tablet'))
</script>

<template>
    <section class="grid">
        <div class="col-12 md:col-6 p-0 m-0 h-full">
            <slot :name="!reverse ? 'first' : 'second'" />
        </div>
        <div class="col-12 md:col-6 p-0 m-0 h-full">
            <slot :name="!reverse ? 'second' : 'first'" />
        </div>
    </section>
</template>

<style scoped>
    section {
        margin: 5% auto;
        max-width: 1600px;
    }
</style>
