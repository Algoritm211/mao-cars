import React from 'react';
import {useRouter} from "next/router";
import {Icon} from "@/shared/components";
import Link from "next/link";

const locales: Record<string, string> = {
  en_US: '🇬🇧 EN',
  uk_UA: '🇺🇦 UA'
}

export const LocaleToggle = () => {
  const {locale, asPath} = useRouter();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        {locales[locale || 'en_US']}
        <Icon name='chevron-down' className='w-4 h-4' />
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
        <li><Link href={asPath} locale='en_US'>{locales.en_US}</Link></li>
        <li><Link href={asPath} locale='uk_UA'>{locales.uk_UA}</Link></li>
      </ul>
    </div>
  );
};
