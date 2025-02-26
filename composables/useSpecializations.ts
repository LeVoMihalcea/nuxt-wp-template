import type {Specialization, SpecializationsGraphQLResponse} from "~/types/Specialization";
import fetchSpecializationsQuery from "~/graphql/queries/specializations.graphql";
import {mapSpecializations} from "~/types/Specialization";

export const useSpecializations = () => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase()});

    const {data, error, status, refresh} = useGraphQL<SpecializationsGraphQLResponse, Specialization[]>(
        "fetchSpecializations",
        fetchSpecializationsQuery,
        variables,
        mapSpecializations
    )



    return {data, error, status, refresh}    
};
