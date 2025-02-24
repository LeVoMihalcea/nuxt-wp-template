export type SocialMedia = {
    title: string;
    url: string;
    iconUrl: string;
}

interface SocialMediaGraphQL {
    title: string;
    socialMediaFieldGroup: {
        url: string;
        iconUrl: {
            node: {
                sourceUrl: string;
            }
        };
    };
}

export type SocialMediasGraphQLResponse = {
    allSocialMedia: {
        nodes: SocialMediaGraphQL[];
    };
}

export type SocialMediaGraphQLResponse = {
    socialMedia: SocialMediaGraphQL
}

export const mapSocialMediaGraphQLToSocialMediaDTO = (socialMedia: SocialMediaGraphQL): SocialMedia => {
    return {
        title: socialMedia.title,
        url: socialMedia.socialMediaFieldGroup.url,
        iconUrl: socialMedia.socialMediaFieldGroup.iconUrl?.node.sourceUrl,
    }
};

export const mapSocialMedia = (apiResponse: SocialMediaGraphQLResponse): SocialMedia => {
    return mapSocialMediaGraphQLToSocialMediaDTO(apiResponse.socialMedia)
}


export const mapSocialMedias = (apiResponse: SocialMediasGraphQLResponse): SocialMedia[] => {
    return apiResponse.allSocialMedia.nodes.map((socialMedia: SocialMediaGraphQL) => mapSocialMediaGraphQLToSocialMediaDTO(socialMedia));
};
