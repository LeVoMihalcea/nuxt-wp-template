<script setup lang="ts">
    import type {MenuItem} from 'primevue/menuitem';
    import Menubar from 'primevue/menubar';

    const {locale, t} = useI18n();
    let localePath = useLocalePath();
    const baseUrl = "/preview";

    const items = ref<MenuItem[] | undefined>([]);

    watch(() => locale.value, () => {
        updateItems();
    });

    const updateItems = () => {
        items.value = [
            {
                label: t('pages.home'),
                url: localePath(baseUrl + '/'),
            },
            {
                label: t('pages.about'),
                url: localePath(baseUrl + '/about'),

            },
            {
                label: t('pages.humanResources'),
                url: localePath(baseUrl + '/human-resources'),
            },
            {
                label: t('pages.research'),
                url: localePath(baseUrl + '/research'),
            },
            {
                label: t('pages.forStudents'),
                url: localePath(baseUrl + '/for-students'),
            },
            {
                label: t('pages.contact'),
                url: localePath(baseUrl + '/contact'),
            },
        ];
    };

    updateItems();
</script>

<template>
    <header>
        <Menubar :model="items" class="xl:h-5rem xl:pr-8 flex flex-row justify-content-between menubar">
            <template #start>
                <nuxt-link to="/">
                    <nuxt-img src="logo.svg" class="logo w-12 xl:ml-5 ml-1 mt-1"/>
                </nuxt-link>
                <language-switch v-if="useRoute().fullPath === '/'" class="ml-8"/>
            </template>
            <template #item="{ item }">
                <a :href="item.url">
                    <Button :label="item.label as string" variant="link" class="text-white"/>
                </a>
            </template>
        </Menubar>
    </header>
</template>

<style scoped>
    .p-menubar {
        background: linear-gradient(to right, color-mix(in srgb, var(--dark-blue), transparent 0%), color-mix(in srgb, var(--dark-blue), transparent 20%));
    }
</style>
