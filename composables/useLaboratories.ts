import {
    type LaboratoriesGraphQLResponse,
    type Laboratory,
    type LaboratoryGraphQLResponse,
    mapLaboratories,
    mapLaboratory
} from "~/types/Laboratories";
import fetchLaboratoriesQuery from "~/graphql/queries/laboratories.graphql";
import fetchSingleLaboratoryQuery from "~/graphql/queries/singleLaboratory.graphql";
import {useI18n} from "vue-i18n";
import {useGraphQL} from "~/composables/useGraphQL";

export const useLaboratories = () => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase()});

    const {data, error, status, refresh} = useGraphQL<LaboratoriesGraphQLResponse, Laboratory[]>(
        "fetchLaboratories",
        fetchLaboratoriesQuery,
        variables,
        mapLaboratories
    )

    return {data, error, status, refresh}
};

export const useSingleLaboratory = (id: Ref<string>) => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase(), id});

    const {data, error, status, refresh} = useGraphQL<LaboratoryGraphQLResponse, Laboratory>(
        'fetchSingleLaboratory',
        fetchSingleLaboratoryQuery,
        variables,
        mapLaboratory
    )

    return {data, error, status, refresh};
};
