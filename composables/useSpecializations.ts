import {type NuxtError, useAsyncData} from '#app';
import fetchSpecializationsQuery from '~/queries/specializations.graphql';
import type {Specialization} from "~/components/story/specialization-card.vue";
import type {_AsyncData} from "#app/composables/asyncData";

export const useSpecializations = (): Specialization[] => {
    const { $graphql } = useNuxtApp();

    const { data, error }: _AsyncData<any, NuxtError<unknown> | null> & Promise<_AsyncData<any, NuxtError<unknown> | null>> = useAsyncData('fetchSpecializations', async () => {
        return await $graphql.default.request(fetchSpecializationsQuery);
    });


    if (data.value && data.value.specializations?.edges) {
        let specializations = data.value.specializations.edges.map((edge: any) => {
            return {
                name: edge.node.title,
                level: edge.node.specializationFieldGroup.level,
                description: edge.node.content,
                imageUrl: edge.node.featuredImage?.node?.sourceUrl,
            } as Specialization
        });
        return specializations.reverse();
    } else {
        console.error(error?.value);
        return [];
    }
};
