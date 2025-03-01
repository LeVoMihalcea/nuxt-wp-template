<script setup lang="ts">
    import type {NuxtError} from '#app'

    const props = defineProps({
        error: Object as () => NuxtError
    })
</script>

<template>
    <div class="m-8">
        <h1>Something went wrong..</h1>
        <pre class="text-gray">
            {{ error?.statusCode }}
            <br>
            {{ error }}
        </pre>

        <NuxtLink to="/">
            <Button>
                Go back home
            </Button>
        </NuxtLink>
    </div>
</template>

<style scoped>

</style>
