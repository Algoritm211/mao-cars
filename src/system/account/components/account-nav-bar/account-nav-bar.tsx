import React from 'react';
import Link from 'next/link';
import { Icon } from '@/shared/components/icon/icon';
import { useRouter } from 'next/router';
import { clsx } from 'clsx';
import { ACCOUNTS_ROUTES_MAP } from '@/system/account/core/routes.map';

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
