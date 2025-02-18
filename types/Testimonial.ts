export type Testimonial = {
    title: string;
    author: string;
    role: string;
}

interface TestimonialGraphQL {
    title: string;
    testimonialFieldGroup: {
        autor: string;
        rol: string;
    };
}

export type TestimonialsGraphQLResponse = {
    testimonials: {
        nodes: TestimonialGraphQL[];
    };
}

export type TestimonialGraphQLResponse = {
    testimonial: TestimonialGraphQL
}

export const mapTestimonialGraphQLToTestimonialDTO = (testimonial: TestimonialGraphQL): Testimonial => {
    console.log(testimonial)
    let mappedTestimonial = {
        title: testimonial.title,
        author: testimonial.testimonialFieldGroup?.autor,
        role: testimonial.testimonialFieldGroup?.rol,
    };
    console.log(mappedTestimonial);
    return mappedTestimonial
};

export const mapTestimonial = (apiResponse: TestimonialGraphQLResponse): Testimonial => {
    return mapTestimonialGraphQLToTestimonialDTO(apiResponse.testimonial)
}


export const mapTestimonials = (apiResponse: TestimonialsGraphQLResponse): Testimonial[] => {
    return apiResponse.testimonials.nodes.map((testimonial: TestimonialGraphQL) => mapTestimonialGraphQLToTestimonialDTO(testimonial));
};
