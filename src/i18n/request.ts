import { getRequestConfig } from 'next-intl/server';

export const locales = ['zh-TW', 'en'] as const;
export const defaultLocale = 'zh-TW';

export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`../locales/${locale}.json`)).default
}));
