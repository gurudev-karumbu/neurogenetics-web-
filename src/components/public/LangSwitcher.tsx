'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'ms', label: 'MS' },
  { code: 'zh', label: '中文' },
  { code: 'ta', label: 'தமிழ்' },
];

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    if (next === locale) return;
    // Strip current locale prefix if present, then add new one
    const withoutLocale = ['ms', 'zh', 'ta'].some(l => pathname.startsWith(`/${l}`))
      ? pathname.replace(/^\/[a-z-]+/, '') || '/'
      : pathname;
    const newPath = next === 'en' ? withoutLocale : `/${next}${withoutLocale}`;
    startTransition(() => router.replace(newPath));
  }

  return (
    <div className="flex items-center gap-0.5">
      {LANGS.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => switchLocale(lang.code)}
            disabled={isPending}
            className={`text-xs px-1.5 py-0.5 rounded transition-colors font-medium ${
              locale === lang.code
                ? 'text-yellow-500 dark:text-yellow-400 font-bold'
                : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {lang.label}
          </button>
          {i < LANGS.length - 1 && (
            <span className="text-gray-200 dark:text-gray-700 text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
