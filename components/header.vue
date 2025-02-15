<script setup lang="ts">
    import type {MenuItem} from 'primevue/menuitem';
    import Menubar from 'primevue/menubar';

    const {locale, t} = useI18n();
    let localePath = useLocalePath();

    const items = ref<MenuItem[] | undefined>([]);

    watch(() => locale.value, () => {
        updateItems();
    });

    const updateItems = () => {
        items.value = [
            {
                label: t('pages.home'),
                url: localePath('/'),
            },
            {
                label: t('pages.about'),
                url: localePath('/about'),

            },
            {
                label: t('pages.humanResources'),
                url: localePath('/human-resources'),
            },
            {
                label: t('pages.research'),
                url: localePath('/research'),
            },
            {
                label: t('pages.forStudents'),
                url: localePath('/for-students'),
            },
            {
                label: t('pages.contact'),
                url: localePath('/contact'),
            },
        ];
    };

    updateItems();
</script>

<template>
    <header>
        <Menubar :model="items" class="md:h-5rem md:pr-8 flex flex-row justify-content-between menubar">
            <template #start>
                <nuxt-img src="logo.svg" class="logo w-12 lg:ml-5 ml-1 mt-1"/>
            </template>
            <template #item="{ item }">
                <a :href="item.url">
                    <Button :label="item.label as string" variant="link" class="text-white"/>
                </a>
            </template>
            <template #end>
                <language-switch/>
            </template>
        </Menubar>
    </header>
</template>

<style scoped>
    .p-menubar {
        background: linear-gradient(to right, color-mix(in srgb, var(--dark-blue), transparent 0%), color-mix(in srgb, var(--dark-blue), transparent 20%));
    }
</style>
