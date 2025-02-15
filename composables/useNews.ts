import {useAsyncData} from "#app";
import fetchNewsQuery from "~/queries/posts.graphql";
import fetchArticleQuery from "~/queries/post.graphql";
import type {Post, PostGraphQLResponse, PostsGraphQLResponse} from "~/types/Post";
import {mapPost, mapPosts} from "~/types/Post";

export const useNews = () => {
    const {$graphql} = useNuxtApp();

    const {data, error, status} = useLazyAsyncData<Post[]>(
        "fetchNews",
        async (): Promise<Post[]> => {
            const response: PostsGraphQLResponse = await $graphql.default.request(fetchNewsQuery);
            return mapPosts(response);
        },
        {server: false}
    );

    return {data, error, status};
};

export const useSingleArticle = (id: string) => {
    const {$graphql} = useNuxtApp();

    const {data, error, status} = useAsyncData<Post>(
        "fetchNews",
        async (): Promise<Post> => {
            const response: PostGraphQLResponse = await $graphql.default.request(fetchArticleQuery, {id});
            console.log(response)
            let mapped: Post = mapPost(response);
            console.log("mapped", mapped) //stuck here, doesn't execute
            return mapped;
        },
        {server: false}
    );

    return {data, error, status};
};