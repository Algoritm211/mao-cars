import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export const AccountListingsEmpty = () => {
  const t = useTranslations('Account_Page.listings.empty_state');
  return (
    <div className="flex flex-col my-4 justify-center">
      <p className="text-center">{t('no_cars')}</p>
      <Link href="/sell-car/submit" className="btn btn-accent m-auto my-4">
        {t('get_started')}
      </Link>
    </div>
  );
};
