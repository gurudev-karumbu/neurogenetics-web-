import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ms', 'zh', 'ta'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // English has no prefix: neurogenetics.my/
                              // Others: neurogenetics.my/ms, /zh, /ta
});
