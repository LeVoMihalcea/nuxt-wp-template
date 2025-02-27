<script setup lang="ts">
    import TwoColumnsResponsive from "~/layouts/two-columns-responsive.vue";

    const email = ref("");
</script>

<template>
    <div class="container z-1">
        <two-columns-responsive reverse-if-on-mobile>
            <template #first>
                <div class="w-full relative">
                </div>
            </template>

            <template #second>
                <div class="gradient text-white p-5 lg:p-8">
                    <div class="text-4xl w-12 font-bold">
                        <h1 class="font-normal">
                            {{ $t('newsletter.headline') }}
                        </h1>
                    </div>
                    <p>{{$t('loremIpsum.medium')}}</p>

                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <InputText id="email"
                                       v-model="email"
                                       type="text"
                                       name="email"
                                       :placeholder="$t('newsletter.email.label')"
                                       class="text-box input-text w-full my-6"
                                       required/>
                        </div>

                        <Button type="submit"
                                class="button background-primary justify-content-center w-full mt-3"
                                rounded>
                            {{ $t("newsletter.button") }}
                        </Button>
                    </form>
                </div>
            </template>
        </two-columns-responsive>
    </div>
</template>

<style scoped>
    .container{
        background-image: url('public/newsletter/model.png');
        object-fit: contain;
        background-position: center;
    }

    .gradient{
        background: linear-gradient(to bottom, color-mix(in srgb, var(--dark-blue), transparent 0%), color-mix(in srgb, var(--dark-blue), transparent 20%));
    }
</style>
