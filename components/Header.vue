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
                label: t('home'),
                url: localePath('/'),
            },
            {
                label: t('about'),
                url: localePath('/about'),

            },
            {
                label: t('humanResources'),
                url: localePath('/human-resources'),
            },
            {
                label: t('research'),
                url: localePath('/research'),
            },
            {
                label: t('forStudents'),
                url: localePath('/for-students'),
            },
            {
                label: t('contact'),
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
                <nuxt-img src="icon.svg" class="h-2rem"/>
            </template>
            <template #item="{ item, props, hasSubmenu }">
                <a :href="item.url">{{ item.label }}</a>
            </template>
        </Menubar>
    </header>
</template>

<style scoped>
    .p-menubar {
        background: linear-gradient(to right, color-mix(in srgb, var(--dark-blue), transparent 0%), color-mix(in srgb, var(--dark-blue), transparent 20%));
    }

    :deep(.p-menubar-root-list) {
        background: var(--dark-blue);
    }

    a {
        text-decoration: none;
    }
</style>
