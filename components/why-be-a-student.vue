<script setup lang="ts">
    import TwoColumnsResponsive from "~/layouts/two-columns-responsive.vue";
</script>

<template>
    <div class="container">
        <two-columns-responsive reverse-if-on-mobile>
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
                <div class="w-full relative">
<!--                    <nuxt-img src="ying-yang.svg" class="w-full"/> todo: re-enable this-->
                    <nuxt-img src="why-model.png" class="why-model w-full"/>
                </div>
            </template>
        </two-columns-responsive>
    </div>
</template>

<style scoped>
    .mobile {
        transform: translateY(-7.4%) translateX(6.8%);
    }

    .desktop{
        transform: translateY(-25%) translateX(20%) !important;
    }

    img {
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.5));
    }

    .why-model {
        //position: absolute;
        //right: 0;
    }
</style>
