import {mapTestimonials, type Testimonial, type TestimonialsGraphQLResponse} from "~/types/Testimonial";
import fetchTestimonialsQuery from '~/graphql/queries/testimonials.graphql'

export const useTestimonials = () => {
    const {locale} = useI18n();
    const variables = ref({language: locale.value.toUpperCase()});

    const {data, error, status, refresh} = useGraphQL<TestimonialsGraphQLResponse, Testimonial[]>(
        "fetchTestimonials",
        fetchTestimonialsQuery,
        variables,
        mapTestimonials
    )

    return {data, error, status, refresh}
};