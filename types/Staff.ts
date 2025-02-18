export type Staff = {
    id: string;
    name: string;
    imageUrl: string;
    department: string;
    title: string;
    description: string;
    content: string;
}

export type StaffCategory = {
    id: string;
    name: string;
    staff: Staff[];
}

interface StaffGraphQL {
    id: string;
    name: string;
    staff: {
        nodes: {
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
    }
}

export type StaffCategoryGraphQL = {
    id: string;
    name: string;
    staff: StaffGraphQL[];
}

export type StaffGraphQLResponse = {
    staffCategories: {
        nodes: StaffCategoryGraphQL[];
    };
}

// export type StaffMemberGraphQLResponse = {
//     staffMember: Staff
// }

export const mapStaffGraphQLToStaffDTO = (staff: StaffGraphQL): Staff => {
    console.log(staff);
    let mapped = {
        id: staff.id,
        name: staff.name,
        imageUrl: staff.staff.nodes?.featuredImage.node.sourceUrl ?? "default-picture.png",
        title: staff.staff.nodes.staffFieldGroup.title,
        department: staff.staff.nodes.staffFieldGroup.department,
        description: staff.staff.nodes.staffFieldGroup.description,
        content: staff.staff.nodes.content
    };
    console.log("mapped", mapped)
    return mapped
};

// export const mapStaff = (apiResponse: StaffGraphQLResponse): Staff => {
//     return mapStaffGraphQLToStaffDTO(apiResponse.staff)
// }

export const mapStaffCategory = (staffCategory: StaffCategoryGraphQL) => {
    if(staffCategory.staff.length === 0) return [];
    return staffCategory.staff?.map((staff: StaffGraphQL) => mapStaffGraphQLToStaffDTO(staff));
}


export const mapStaff = (apiResponse: StaffGraphQLResponse): StaffCategory[] => {
    console.log("mapStaff", apiResponse)
    return apiResponse.staffCategories.nodes.map((staffCategory: StaffCategoryGraphQL) => mapStaffCategory(staffCategory));
};
