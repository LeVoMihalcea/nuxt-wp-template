<script setup lang="ts">
    import TwoColumnsResponsive from "~/layouts/two-columns-responsive.vue";
</script>

<template>
    <div class="container z-1">
        <two-columns-responsive reverse-if-on-mobile>
            <template #first>
                <div class="gradient text-white p-5 lg:p-8">
                    <div class="text-4xl w-12 xl:w-6 font-bold">
                        <h1 class="font-normal">
                            {{ $t('student.title') }}
                            <span class="underline accent">{{ $t('student.fieQuestion') }}</span>
                        </h1>
                    </div>

                    <h3 class="primary-light"><span class="pi pi-verified"/> Cursuri si seminarii online</h3>
                    <p class="pl-3">{{$t('loremIpsum.short')}}</p>

                    <h3 class="primary-light"><span class="pi pi-verified"/> Inovație și tehnologie</h3>
                    <p class="pl-3">{{$t('loremIpsum.short')}}</p>

                    <h3 class="primary-light"><span class="pi pi-verified"/> Dezvoltare profesională</h3>
                    <p class="pl-3">{{$t('loremIpsum.short')}}</p>

                    <h3 class="primary-light"><span class="pi pi-verified"/> Competențe tehnice solide</h3>
                    <p class="pl-3">{{$t('loremIpsum.short')}}</p>

                    <Button class="xl:ml-3 mt-4 w-12 xl:w-6" secondary rounded :label="$t('student.enrollNow')"/>
                </div>
            </template>

            <template #second>
                <div class="w-full relative">
                </div>
            </template>
        </two-columns-responsive>
    </div>
</template>

<style scoped>
    .container {
        background-image: url('/public/why-be-a-student/model.png');
        object-fit: contain;
        background-position: center top;
    }

    .gradient {
        background: linear-gradient(to bottom, color-mix(in srgb, var(--dark-blue), transparent 0%), color-mix(in srgb, var(--dark-blue), transparent 20%));
    }
</style>
