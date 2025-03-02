export type Post = {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    imageUrl: string;
};

export type PostNode = {
    title: string;
    slug: string;
    date: string;
    content?: string;
    postfieldgroup?: {
        description?: string;
    };
    featuredImage?: {
        node?: {
            mediaItemUrl?: string;
        };
    };
};



export type PostEdge = {
    node: PostNode;
    cursor: string;
};

export type PageInfo = {
    hasNextPage: boolean;
    hasPreviousPage: boolean
    endCursor?: string;
    startCursor?: string;
};

export type GraphQLPostsResponse = {
    posts?: {
        edges: PostEdge[];
        pageInfo: PageInfo;
    };
};

export type GraphQLSinglePostResponse = {
    post: PostNode;
};

export type PaginatedPosts = {
    posts: Post[];
    pageInfo: PageInfo;
};

export const mapSingleGraphQLPostToPost = (postNode: PostNode) => {
    return {
        id: postNode.slug, // Using slug as the unique identifier
        title: postNode.title,
        content: postNode.content ?? "", // Not available in query, setting as empty string
        excerpt: postNode.postfieldgroup?.description || "", // Mapping description to excerpt
        date: new Date(postNode.date).toLocaleDateString(),
        imageUrl: postNode.featuredImage?.node?.mediaItemUrl || "", // Providing fallback
    };
}

export const mapGraphQLResponseToPosts = (response: GraphQLPostsResponse): PaginatedPosts => {
    return {
        posts: response.posts?.edges.map((node: PostEdge) => mapSingleGraphQLPostToPost(node.node)) || [],
        pageInfo: response.posts?.pageInfo || {hasNextPage: false, endCursor: ''} as PageInfo,
    };
};

export const mapGraphQLSinglePostResponseToPost = (response: GraphQLSinglePostResponse): Post => {
    return mapSingleGraphQLPostToPost(response.post);
};

