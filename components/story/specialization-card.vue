<script setup lang="ts">

    import type {Specialization} from "~/types/Specialization";

    const levelIconMap: { [key: string]: string } = {
        'licenta': '/specializations/graduation_cap.svg',
        'master': '/specializations/graduation_cap_sparkle.svg',
        'doctorat': '/specializations/graduation_cap_sparkle.svg',
    }

    const props = defineProps({
        specialization: {
            type: Object as () => Specialization,
            required: true,
        },
        narrow: {
            type: Boolean,
            required: false
        }
    })
</script>
<template>
    <div class="container text-white p-8 w-full bg-cover bg-no-repeat"
         :style="{ backgroundImage: `url(${specialization?.imageUrl})` }">

        <div class="content flex flex-column justify-content-between" :class="{narrow}">
            <h1 class="custom-underline">
                <img :src="levelIconMap[specialization.level[0]]" alt="graduation cap"
                     class="h-4rem vertical-align-middle"/>
                {{ specialization.level[1] }}
            </h1>

            <h1 class="title">{{ specialization.title }}</h1>
            <p class="description text-lg light-paragraph" v-html="specialization.excerpt"></p>

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

    .narrow {
        max-width: 300px;
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
