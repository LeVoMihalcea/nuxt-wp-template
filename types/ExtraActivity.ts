export type ExtraActivity = {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    imageUrl: string;
}

interface ExtraActivityGraphQL {
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    featuredImage: {
        node: {
            sourceUrl: string;
        }
    }
}

export type ExtraActivitiesGraphQLResponse = {
    extraActivities: {
        edges: ExtraActivityGraphQL[];
    };
}

export type ExtraActivityGraphQLResponse = {
    extraActivity: ExtraActivityGraphQL
}

export const mapExtraActivityGraphQLToExtraActivityDTO = (extraActivity: ExtraActivityGraphQL): ExtraActivity => {
    return {
        id: extraActivity.slug,
        title: extraActivity.title,
        content: extraActivity.content,
        excerpt: extraActivity.excerpt,
        imageUrl: extraActivity.featuredImage?.node.sourceUrl,
    }
};

export const mapExtraActivity = (apiResponse: ExtraActivityGraphQLResponse): ExtraActivity => {
    return mapExtraActivityGraphQLToExtraActivityDTO(apiResponse.extraActivity)
}


export const mapExtraActivities = (apiResponse: ExtraActivitiesGraphQLResponse): ExtraActivity[] => {
    return apiResponse.extraActivities.edges
        .map((node: any) => node.node)
        .map((extraActivity: ExtraActivityGraphQL) => mapExtraActivityGraphQLToExtraActivityDTO(extraActivity));
};
