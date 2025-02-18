import {useNuxtApp} from "#app";
import {useLazyAsyncData} from "#imports";
import type {DocumentNode} from "graphql";

export function useGraphQL<Response, Entity = Response>(
    key: string,
    query: DocumentNode,
    variables: Ref<Record<string, any>>,
    mapFn?: (data: Response) => Entity,
    options: { server?: boolean } = {server: false}
) {
    const {$graphql} = useNuxtApp();

    const {data, error, status, refresh} = useLazyAsyncData<Entity>(
        key,
        async (): Promise<Entity> => {
            const response = await $graphql.default.request<Response>(query, variables.value);
            return mapFn ? mapFn(response) : (response as unknown as Entity);
        },
        options
    );

    watch(variables.value, () => {
        refresh().then();
    })

    return {data, error, status, refresh};
}
