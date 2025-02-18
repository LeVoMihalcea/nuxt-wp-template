import {useAsyncData} from '#app';
import fetchStaffQuery from '~/queries/staff.graphql';
import {useI18n} from "vue-i18n";
import {watchEffect} from "vue";
import {useLazyAsyncData} from "#imports";

export const useStaff = () => {
    const {$graphql} = useNuxtApp();
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase()});

    const {data, error, refresh} = useLazyAsyncData(
        'fetchStaff',
        async () => {
            return await $graphql.default.request(fetchStaffQuery, variables.value);
        },
        {server: false
    });

    watchEffect(() => {
        refresh().then();
    });

    return {data, error};
};
