<script setup lang="ts">
const config = useRuntimeConfig();
const version = config.public['clientVersion'];
</script>

<template>
    <footer>
        <Card>
            <template #content>
                <p>&copy; {{ $t('copyright') }}</p>
                <p class="text-color-secondary">v{{ version ?? " 0.0.1" }}</p>
            </template>
        </Card>
    </footer>
</template>

<style scoped>
footer {
    text-align: center;
}

.p-card {
    background: none;
}

</style>
