import fetchStaffQuery from '~/graphql/queries/staff.graphql';
import fetchSingleStaffQuery from '~/graphql/queries/single-staff.graphql';
import {useI18n} from "vue-i18n";
import type {SingleStaffGraphQLResponse, Staff, StaffCategoriesGraphQLResponse, StaffCategory} from "~/types/Staff";
import {mapSingleStaff, mapStaff} from "~/types/Staff";
import {useGraphQL} from "~/composables/useGraphQL";

export const useStaff = () => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase()});

    const {data, error, status, refresh} = useGraphQL<StaffCategoriesGraphQLResponse, StaffCategory[]>(
        "fetchStaffs",
        fetchStaffQuery,
        variables,
        mapStaff
    )

    return {data, error, status, refresh}
}

export const useSingleStaff = (id: Ref<string>) => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase(), id});

    const {data, error, status, refresh} = useGraphQL<SingleStaffGraphQLResponse, Staff>(
        'fetchSingleStaff',
        fetchSingleStaffQuery,
        variables,
        mapSingleStaff
    )

    return {data, error, status, refresh};
};