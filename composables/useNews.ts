import fetchArticleQuery from "~/graphql/queries/single-post.graphql";
import fetchNewsQuery from "~/graphql/queries/posts.graphql";
import {
    type GraphQLPostsResponse,
    type GraphQLSinglePostResponse,
    mapGraphQLResponseToPosts,
    mapGraphQLSinglePostResponseToPost,
    type PaginatedPosts,
    type Post
} from "~/types/Post";
import {useGraphQL} from "~/composables/useGraphQL";

export const useNews = (first: Ref<number> = ref(3), after: Ref<string | null> = ref(null)) => {
    const {locale} = useI18n();
    const variables = ref({
        language: locale.value.toUpperCase(),
        first,
        after
    });

    const {data, error, status, refresh} = useGraphQL<GraphQLPostsResponse, PaginatedPosts>(
        'useNews',
        fetchNewsQuery,
        variables,
        mapGraphQLResponseToPosts
    )

    return {data, error, status, refresh};
};

export const useSingleArticle = (id: Ref<string>) => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase(), id});

    const {data, error, status, refresh} = useGraphQL<GraphQLSinglePostResponse, Post>(
        'fetchPost',
        fetchArticleQuery,
        variables,
        mapGraphQLSinglePostResponseToPost
    )

    return {data, error, status, refresh};
};