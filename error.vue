<script setup lang="ts">
    import type {NuxtError} from '#app'

    const props = defineProps({
        error: Object as () => NuxtError
    })
</script>

<template>
    <div class="lg:m-8 h-24rem flex flex-column">
        <h1>Something went wrong..</h1>
        <p class="text-gray">
            {{ error?.statusCode }}
            <br>
            {{ error }}
        </p>

        <NuxtLink to="/">
            <Button>
                Go back home
            </Button>
        </NuxtLink>
    </div>
</template>

<style scoped>

</style>
