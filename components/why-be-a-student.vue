<script setup lang="ts">
    import TwoColumnsResponsive from "~/layouts/two-columns-responsive.vue";
</script>

<template>
    <div class="container">
        <two-columns-responsive>
            <template #first>
                <div class="text-4xl w-12 md:w-6 font-bold">
                    <h1 class="font-normal">
                        {{ $t('whyBeAStudent') }}
                        <span class="underline accent">{{ $t('fieQuestion') }}</span>
                    </h1>
                </div>
                <h3 class="primary-light"><span class="pi pi-verified"/> Cursuri si seminarii online</h3>
                <p class="pl-3">Lorem ipsum dolor sit amet consectetur. Mauris id ut id arcu cursus tortor morbi tortor
                    eget.</p>
                <h3 class="primary-light"><span class="pi pi-verified"/> Inovație și tehnologie</h3>
                <p class="pl-3">Lorem ipsum dolor sit amet consectetur. Mauris id ut id arcu cursus tortor morbi tortor
                    eget.</p>
                <h3 class="primary-light"><span class="pi pi-verified"/> Dezvoltare profesională</h3>
                <p class="pl-3">Lorem ipsum dolor sit amet consectetur. Mauris id ut id arcu cursus tortor morbi tortor
                    eget.</p>
                <h3 class="primary-light"><span class="pi pi-verified"/> Competențe tehnice solide</h3>
                <p class="pl-3">Lorem ipsum dolor sit amet consectetur. Mauris id ut id arcu cursus tortor morbi tortor
                    eget.</p>

                <Button class="md:ml-3 mt-4 w-12 md:w-6" secondary rounded :label="$t('enrollNow')"/>
            </template>

            <template #second>
                <div class="w-full hidden md:flex">
                    <nuxt-img src="why-model.png"/>
                </div>
            </template>

        </two-columns-responsive>
    </div>

</template>

<style scoped>
</style>
