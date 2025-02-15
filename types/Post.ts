export type Post = {
    id: string;
    title: string;
    content: string;
    date: string;
    imageUrl: string;
}

interface PostGraphQL {
    id: string;
    title: string;
    content: string;
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
        id: post.id,
        title: post.title,
        content: post.content ?? "",
        date: post.date,
        imageUrl: post.featuredImage?.node.mediaItemUrl
    }
};

export const mapPost = (apiResponse: PostGraphQLResponse): Post => {
    console.log("mapping post", apiResponse);
    return mapPostGraphQLToPostDTO(apiResponse.post)
}


export const mapPosts = (apiResponse: PostsGraphQLResponse): Post[] => {
    return apiResponse.posts.nodes.map((post: PostGraphQL) => mapPostGraphQLToPostDTO(post));
};
