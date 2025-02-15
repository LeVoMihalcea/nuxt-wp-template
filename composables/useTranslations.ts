const translationsUrl = 'https://emd.utcluj.ro/wp-content/uploads/translations.json';

export async function useTranslations() {
    return await $fetch<any>(translationsUrl);
}
