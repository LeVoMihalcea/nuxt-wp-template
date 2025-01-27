import { ref, onMounted } from "vue";
import fetchSpecializationsQuery from "~/queries/specializations.graphql";
import type { Specialization } from "~/components/story/specialization-card.vue";

export const useSpecializations = () => {
    const specializations = ref<Specialization[]>([]);
    const loading = ref(true);
    const error = ref<Error | null>(null);

    const fetchSpecializations = async () => {
        try {
            const { $graphql } = useNuxtApp();
            const response = await $graphql.default.request(fetchSpecializationsQuery);

            if (response?.specializations?.edges) {
                specializations.value = response.specializations.edges
                    .map((edge: any) => ({
                        name: edge.node.title,
                        level: edge.node.specializationFieldGroup.level,
                        description: edge.node.content,
                        imageUrl: edge.node.featuredImage?.node?.sourceUrl,
                    }))
                    .reverse();
            }
        } catch (err) {
            console.error("Failed to fetch specializations:", err);
            error.value = err;
        } finally {
            loading.value = false;
        }

    };

    onMounted(fetchSpecializations);

    return {
        specializations,
        loading,
        error,
    };
};
