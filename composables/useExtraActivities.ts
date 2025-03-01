import {
    type ExtraActivitiesGraphQLResponse,
    type ExtraActivity,
    type ExtraActivityGraphQLResponse,
    mapExtraActivities,
    mapExtraActivity
} from "~/types/ExtraActivity";
import fetchExtraActivitiesQuery from "~/graphql/queries/extra-activities.graphql";
import fetchSingleExtraActivityQuery from "~/graphql/queries/single-extra-activity.graphql";
import {useI18n} from "vue-i18n";
import {useGraphQL} from "~/composables/useGraphQL";

export const useExtraActivities = () => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase()});

    const {data, error, status, refresh} = useGraphQL<ExtraActivitiesGraphQLResponse, ExtraActivity[]>(
        "fetchExtraActivities",
        fetchExtraActivitiesQuery,
        variables,
        mapExtraActivities
    )

    return {data, error, status, refresh}
};

export const useSingleExtraActivity = (id: Ref<string>) => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase(), id});

    const {data, error, status, refresh} = useGraphQL<ExtraActivityGraphQLResponse, ExtraActivity>(
        'fetchSingleExtraActivity',
        fetchSingleExtraActivityQuery,
        variables,
        mapExtraActivity
    )

    return {data, error, status, refresh};
};
