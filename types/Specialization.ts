export type Specialization = {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    imageUrl: string;
    level: [string, string];
}

interface SpecializationGraphQL {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    featuredImage: {
        node: {
            sourceUrl: string;
        }
    }
    specializationFieldGroup: {
        level: [string, string]
    },
}

export type SpecializationsGraphQLResponse = {
    specializations: {
        edges: SpecializationGraphQL[];
    };
}

export type SpecializationGraphQLResponse = {
    specialization: SpecializationGraphQL
}

export const mapSpecializationGraphQLToSpecializationDTO = (specialization: SpecializationGraphQL): Specialization => {
    return {
        id: specialization.id,
        title: specialization.title,
        content: specialization.content,
        excerpt: specialization.excerpt,
        imageUrl: specialization.featuredImage.node.sourceUrl,
        level: specialization.specializationFieldGroup.level,
    }
};

export const mapSpecialization = (apiResponse: SpecializationGraphQLResponse): Specialization => {
    return mapSpecializationGraphQLToSpecializationDTO(apiResponse.specialization)
}


export const mapSpecializations = (apiResponse: SpecializationsGraphQLResponse): Specialization[] => {
    return apiResponse.specializations.edges
        .map((node: any) => node.node)
        .map((specialization: SpecializationGraphQL) => mapSpecializationGraphQLToSpecializationDTO(specialization));
};
