<script setup lang="ts">
    import TwoColumnsResponsive from "~/layouts/two-columns-responsive.vue";

    const email = ref("");
</script>

<template>
    <div class="container z-1">
        <two-columns-responsive reverse-if-on-mobile>
            <template #first>
                <div class="gradient text-white p-8">
                    <div class="text-4xl w-12 font-bold">
                        <h1 class="font-normal">
                            {{ $t('teamSection.header') }}
                        </h1>
                    </div>
                    <p class="font-light text-lg w-10">{{$t('teamSection.subtitle')}}</p>

                   <Button :label="$t('teamSection.button')" class="mt-6" rounded/>
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
    .container{
        background-image: url('public/team-section/img.png');
        object-fit: contain;
        background-position: 0 40%;
    }

    .gradient{
        background: linear-gradient(to bottom, color-mix(in srgb, var(--dark-blue), transparent 0%), color-mix(in srgb, var(--dark-blue), transparent 20%));
        min-height: 600px;
    }
</style>
