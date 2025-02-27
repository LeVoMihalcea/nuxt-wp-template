export type Post = {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    imageUrl: string;
}

interface PostGraphQL {
    slug: string;
    title: string;
    content: string;
    postfieldgroup: {
        description: string;
    };
    date: string;
    featuredImage: {
        node: {
            mediaItemUrl: string;
        };
    };
}

export type PostsGraphQLResponse = {
    posts: {
        nodes: PostGraphQL[];
    };
}

export type PostGraphQLResponse = {
    post: PostGraphQL
}

export const mapPostGraphQLToPostDTO = (post: PostGraphQL): Post => {
    return {
        id: post.slug,
        title: post.title,
        content: post.content ?? "",
        excerpt: post.postfieldgroup?.description ?? "",
        date: new Date(post.date).toLocaleDateString(),
        imageUrl: post.featuredImage?.node.mediaItemUrl,
    }
};

export const mapPost = (apiResponse: PostGraphQLResponse): Post => {
    return mapPostGraphQLToPostDTO(apiResponse.post)
}


export const mapPosts = (apiResponse: PostsGraphQLResponse): Post[] => {
    return apiResponse.posts.nodes.map((post: PostGraphQL) => mapPostGraphQLToPostDTO(post));
};
