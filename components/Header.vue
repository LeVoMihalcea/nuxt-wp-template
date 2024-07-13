<script setup lang="ts">
    import type {MenuItem} from 'primevue/menuitem';

    const {locale, t} = useI18n();
    let localePath = useLocalePath();

    const items = ref<MenuItem[]>([]);

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
                label: t('team'),
                url: localePath('/team'),
            },
            {
                label: t('about'),
                url: localePath('/about'),
            },
            {
                label: t('articles'),
                url: localePath('/articles'),
            },
            {
                label: t('gallery'),
                url: "https://www.flickr.com/photos/200576225@N02/albums",
            },
        ];
    };

    updateItems();
</script>

<template>
    <header>
        <Menubar :model="items">
        </Menubar>
    </header>
</template>

<style scoped>
    .p-menubar {
        background: none;
        border: none;
        flex-direction: row-reverse;
        position: relative;
    }

    /* todo(leo): re-enable deep selector once design is done */
    .p-menubar-root-list{
        background: #041936;
    }

</style>
