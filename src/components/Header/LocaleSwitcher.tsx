'use client'
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [activeLang, setActiveLang] = useState(locale);

    const changeLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setActiveLang(newLocale);
    }

    return (
        <div>
            {activeLang !== 'en' && (
                <button
                    onClick={() => changeLocale('en')}
                    className='bg-bgColor p-1 text-primary'
                >
                    {t('locale', { locale: 'en' })}
                </button>
            )}
            {activeLang !== 'ar' && (
                <button
                    onClick={() => changeLocale('ar')}
                    className='bg-bgColor p-1 text-primary'
                >
                    {t('locale', { locale: 'ar' })}
                </button>
            )}
        </div>
    )
}
