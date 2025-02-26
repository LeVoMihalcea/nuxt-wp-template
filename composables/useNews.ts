import {useAsyncData} from "#app";
import fetchArticleQuery from "~/graphql/queries/post.graphql";
import fetchNewsQuery from "~/graphql/queries/posts.graphql";
import {mapPost, mapPosts, type Post, type PostGraphQLResponse, type PostsGraphQLResponse} from "~/types/Post";
import {useGraphQL} from "~/composables/useGraphQL";

export const useNews = () => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase()});

    const {data, error, status, refresh} = useGraphQL<PostsGraphQLResponse, Post[]>(
        'useNews',
        fetchNewsQuery,
        variables,
        mapPosts
    )

    return {data, error, status, refresh};
};

export const useSingleArticle = (id: string) => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase(), id});

    const {data, error, status, refresh} = useGraphQL<PostGraphQLResponse, Post>(
        'fetchPost',
        fetchArticleQuery,
        variables,
        mapPost
    )

    return {data, error, status, refresh};
};