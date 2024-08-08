import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { LOCALE_KEY } from '@/core/constants';

import { Icon } from '@/shared/components';

const locales: Record<string, string> = {
  'en-US': '🇬🇧 EN',
  'uk-UA': '🇺🇦 UA',
};

export const LocaleToggle = () => {
  const queryClient = useQueryClient();
  const { locale, asPath } = useRouter();

  const onChangeLocale = (locale: string) => {
    // localStorage?.setItem(LOCALE_KEY, locale);
    void queryClient.clear();
  };

  return (
    <div className="dropdown dropdown-end min-w-fit">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        {locales[locale || 'en-US']}
        <Icon name="chevron-down" className="w-4 h-4" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
      >
        <li>
          <Link onClick={() => onChangeLocale('en-US')} href={asPath} locale="en-US">
            {locales['en-US']}
          </Link>
        </li>
        <li>
          <Link onClick={() => onChangeLocale('uk-UA')} href={asPath} locale="uk-UA">
            {locales['uk-UA']}
          </Link>
        </li>
      </ul>
    </div>
  );
};
