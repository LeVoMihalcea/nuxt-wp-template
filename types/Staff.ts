export type Staff = {
    id: string;
    name: string;
    imageUrl?: string;
    department: string;
    title: string;
    description?: string;
    content?: string;
}

export type StaffCategory = {
    id: string;
    name: string;
    staff: Staff[];
}

export type StaffGraphQL = {
    slug: string;
    title: string;
    featuredImage: {
        node: {
            sourceUrl: string;
        }
    },
    staffFieldGroup: {
        department: string;
        title: string;
        description: string;
    }
    content: string;
}

export type SingleStaffGraphQLResponse = {
    staff: StaffGraphQL;
}

export type StaffCategoryGraphQL = {
    id: string;
    name: string;
    staff: {
        nodes: StaffGraphQL[]
    };
}

export type StaffCategoriesGraphQLResponse = {
    staffCategories: {
        nodes: StaffCategoryGraphQL[];
    };
}

export const mapStaffGraphQLToStaffDTO = (staff: StaffGraphQL): Staff => {
    return {
        id: staff.slug,
        name: staff.title,
        imageUrl: staff.featuredImage?.node.sourceUrl,
        title: staff.staffFieldGroup.title ?? "",
        department: staff.staffFieldGroup.department ?? "",
        description: staff.staffFieldGroup.description ?? "",
        content: staff.content ?? ""
    }
};

export const mapStaffCategory = (staffCategory: StaffCategoryGraphQL): StaffCategory => {

    let staff = staffCategory.staff?.nodes.map((staff: StaffGraphQL) => mapStaffGraphQLToStaffDTO(staff));

    return {
        id: staffCategory.id,
        name: staffCategory.name,
        staff: staff
    } as StaffCategory;
}

export const mapSingleStaff = (staffGraphQL: SingleStaffGraphQLResponse): Staff => {
    return mapStaffGraphQLToStaffDTO(staffGraphQL.staff);
}


export const mapStaff = (apiResponse: StaffCategoriesGraphQLResponse): StaffCategory[] => {
    return apiResponse.staffCategories.nodes
        .filter((staffCategory: StaffCategoryGraphQL) => staffCategory.staff.nodes.length > 0)
        .map((staffCategory: StaffCategoryGraphQL) => mapStaffCategory(staffCategory));
};
