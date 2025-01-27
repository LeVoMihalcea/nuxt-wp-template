import { useAsyncData } from '#app';
import fetchStaffQuery from '~/queries/staff.graphql';

export const useStaff = () => {
    const { $graphql } = useNuxtApp();

    const { data, error } = useAsyncData('fetchStaff', async () => {
        return await $graphql.default.request(fetchStaffQuery);
    }, {
        server: false
    });

    return { data, error };
};
