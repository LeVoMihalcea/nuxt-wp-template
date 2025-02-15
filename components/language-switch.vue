<script setup lang="ts">

const { locale, availableLocales, setLocale } = useI18n();

const changeLocale = async (newLocale: string) => {
    await setLocale(newLocale);
};

</script>

<template>
    <SelectButton :model-value="locale"
                  :options="availableLocales"
                  aria-labelledby="locale"
                  @update:model-value="changeLocale($event)"/>
</template>

<style scoped></style>
