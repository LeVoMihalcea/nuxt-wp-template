<script setup lang="ts">
    import type {MenuItem} from 'primevue/menuitem';
    import Menubar from 'primevue/menubar';

    const {locale, availableLocales, t} = useI18n();
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
                url: localePath(baseUrl + '/staff'),
            },
            {
                label: t('pages.research'),
                url: localePath(baseUrl + '/research'),
            },
            {
                label: t('pages.forStudents'),
                items: [
                    {
                        label: t('pages.specializations'),
                        url: localePath(baseUrl + '/specializations'),
                    },
                    {
                        label: t('pages.extra-curriculum'),
                        url: localePath(baseUrl + '/extra-curriculum'),
                    },
                    {
                        label: t('pages.announcements'),
                        url: localePath(baseUrl + '/announcements'),
                    },
                ]
            },
            {
                icon: 'pi pi-language',
                items: availableLocales.map(loc => ({
                    label: loc.toUpperCase(),
                    command: () => locale.value = loc
                }))
            }

        ];
    };

    updateItems();
</script>

<template>
    <header>
        <Menubar :model="items" class="xl:h-5rem xl:pr-8 flex flex-row justify-content-between menubar">
            <template #start>
                <nuxt-link to="/">
                    <img src="../public/logo.svg" class="logo w-10 xl:ml-5 ml-1 mt-1"/>
                </nuxt-link>
            </template>
        </Menubar>
    </header>
</template>

<style scoped>
    .p-menubar {
        background: linear-gradient(to right, color-mix(in srgb, var(--dark-blue), transparent 0%), color-mix(in srgb, var(--dark-blue), transparent 20%));
    }
</style>
