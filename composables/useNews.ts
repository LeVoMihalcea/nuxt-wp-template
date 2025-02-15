import {useAsyncData} from "#app";
import fetchNewsQuery from "~/queries/posts.graphql";
import fetchArticleQuery from "~/queries/post.graphql";
import type {Post, PostGraphQLResponse, PostsGraphQLResponse} from "~/types/Post";
import {mapPost, mapPosts} from "~/types/Post";

export const useNews = () => {
    const {$graphql} = useNuxtApp();
    const {locale} = useI18n();

    const {data, error, status, refresh} = useLazyAsyncData<Post[]>(
        "fetchNews",
        async (): Promise<Post[]> => {
            const response: PostsGraphQLResponse = await $graphql.default.request(fetchNewsQuery, {language: locale.value.toUpperCase()});
            return mapPosts(response);
        },
        {server: false}
    );

    watchEffect(() => {
        refresh().then();
    })

    return {data, error, status};
};

export const useSingleArticle = (id: string) => {
    const {$graphql} = useNuxtApp();
    const {locale} = useI18n();

    const {data, error, status, refresh} = useAsyncData<Post>(
        "fetchNews",
        async (): Promise<Post> => {
            const response: PostGraphQLResponse = await $graphql.default.request(fetchArticleQuery, {id, language: locale.value});
            return mapPost(response);
        },
        {server: false}
    );

    watchEffect(() => {
        refresh().then();
    })

    return {data, error, status};
};