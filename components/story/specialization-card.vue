<script setup lang="ts">

    export type Specialization = {
        name: string,
        level: string[]
        description: string,
        imageUrl: string
    }

    const levelIconMap: { [key: string]: string } = {
        'licenta': 'specializations/graduation_cap.svg',
        'master': 'specializations/graduation_cap_sparkle.svg',
        'doctorat': 'specializations/graduation_cap_sparkle.svg',
    }

    const props = defineProps({
        specialization: {
            type: Object as () => Specialization,
            required: true,
        },
    })
</script>
<template>
    <div class="container text-white p-8 w-full bg-cover bg-no-repeat"
         :style="{ backgroundImage: `url(${specialization?.imageUrl})` }">

        <div class="content flex flex-column justify-content-between ">
            <h1 class="custom-underline">
                <nuxt-img :src="levelIconMap[specialization.level[0]]" alt="graduation cap"
                     class="h-4rem vertical-align-middle"/>
                {{ specialization.level[1] }}
            </h1>

            <h1 class="title">{{ specialization.name }}</h1>
            <p class="description text-lg light-paragraph" v-html="specialization.description"></p>

            <Button :label="$t('news.findOut')" icon="pi pi-arrow-up-right"
                    class="text-white w-6 pl-0 justify-content-start" iconPos="right" variant="text"/>
        </div>
    </div>
</template>

<style scoped>
    .container {
        position: relative;
        overflow: hidden;
        align-items: stretch;
        height: 100%;
    }

    .container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 47, 108, 0.5);
        z-index: 1;
    }

    .content {
        position: relative;
        z-index: 2;
        height: 100%;
    }

    /* todo(leo): find workaround, this is ugly */
    :deep(.p-button-text:not(:disabled):hover) {
        background: transparent;
        color: var(--accent) !important;
        border-color: transparent;
    }

</style>
