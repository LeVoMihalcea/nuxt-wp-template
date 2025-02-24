export type Specialization = {
    title: string;
    url: string;
    iconUrl: string;
}

interface SpecializationGraphQL {
    title: string;
    specializationFieldGroup: {
        url: string;
        iconUrl: {
            node: {
                sourceUrl: string;
            }
        };
    };
}

export type SpecializationsGraphQLResponse = {
    allSpecialization: {
        nodes: SpecializationGraphQL[];
    };
}

export type SpecializationGraphQLResponse = {
    specialization: SpecializationGraphQL
}

export const mapSpecializationGraphQLToSpecializationDTO = (specialization: SpecializationGraphQL): Specialization => {
    return {
        title: specialization.title,
        url: specialization.specializationFieldGroup.url,
        iconUrl: specialization.specializationFieldGroup.iconUrl?.node.sourceUrl,
    }
};

export const mapSpecialization = (apiResponse: SpecializationGraphQLResponse): Specialization => {
    return mapSpecializationGraphQLToSpecializationDTO(apiResponse.specialization)
}


export const mapSpecializations = (apiResponse: SpecializationsGraphQLResponse): Specialization[] => {
    return apiResponse.allSpecialization.nodes.map((specialization: SpecializationGraphQL) => mapSpecializationGraphQLToSpecializationDTO(specialization));
};
