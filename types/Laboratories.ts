export type Laboratory = {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    imageUrl: string;
    equipments: string[]
}

interface LaboratoryGraphQL {
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    labFieldGroup: {
        equipments: string
    }
    featuredImage: {
        node: {
            sourceUrl: string;
        }
    }
}

export type LaboratoriesGraphQLResponse = {
    laboratories: {
        edges: LaboratoryGraphQL[];
    };
}

export type LaboratoryGraphQLResponse = {
    laboratory: LaboratoryGraphQL
}

export const mapLaboratoryGraphQLToLaboratoryDTO = (laboratory: LaboratoryGraphQL): Laboratory => {
    return {
        id: laboratory.slug,
        title: laboratory.title,
        content: laboratory.content,
        excerpt: laboratory.excerpt,
        imageUrl: laboratory.featuredImage.node.sourceUrl,
        equipments: laboratory.labFieldGroup?.equipments.split('\n')
    }
};

export const mapLaboratory = (apiResponse: LaboratoryGraphQLResponse): Laboratory => {
    return mapLaboratoryGraphQLToLaboratoryDTO(apiResponse.laboratory)
}


export const mapLaboratories = (apiResponse: LaboratoriesGraphQLResponse): Laboratory[] => {
    return apiResponse.laboratories.edges
        .map((node: any) => node.node)
        .map((laboratory: LaboratoryGraphQL) => mapLaboratoryGraphQLToLaboratoryDTO(laboratory));
};
