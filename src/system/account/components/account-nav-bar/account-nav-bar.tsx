import { clsx } from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { ACCOUNTS_ROUTES_MAP } from '@/system/account/core/routes.map';

import { Icon } from '@/shared/components/icon/icon';

const AccountNavBar = () => {
  const router = useRouter();

  return (
    <ul className="menu menu-horizontal max-w-xl bg-base-200 rounded-box">
      {ACCOUNTS_ROUTES_MAP.map(({ href, icon, title }) => (
        <li key={href}>
          <Link href={href} className={clsx({ active: router.pathname === href })}>
            <Icon name={icon} className="w-5 h-5" />
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AccountNavBar;
