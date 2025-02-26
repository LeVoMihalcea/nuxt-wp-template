import {mapSocialMedias, type SocialMedia, type SocialMediasGraphQLResponse} from "~/types/SocialMedia";
import fetchSocialMediasQuery from '~/graphql/queries/social-media.graphql'

export const useSocialMedias = () => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase()});

    const {data, error, status, refresh} = useGraphQL<SocialMediasGraphQLResponse, SocialMedia[]>(
        "fetchSocialMedias",
        fetchSocialMediasQuery,
        variables,
        mapSocialMedias
    )

    return {data, error, status, refresh}
};