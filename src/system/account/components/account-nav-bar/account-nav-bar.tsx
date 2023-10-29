import React from 'react';
import Link from "next/link";
import {Icon} from "@/shared/components/icon/icon";
import {useRouter} from "next/router";
import {clsx} from "clsx";

const AccountNavBar = () => {
  const router = useRouter();

  return (
    <ul className="menu menu-horizontal md:menu-vertical max-w-xs bg-base-200 rounded-box">
      <li>
        <Link href='/account' className={clsx({'active': router.pathname ==='/account'})}>
          <Icon name='user' className='w-5 h-5'/>
          <span>Accounts</span>
        </Link>
      </li>
      <li>
        <Link href='/account/listings' className={clsx({'active': router.pathname ==='/account/listings'})}>
          <Icon name='list' className='w-5 h-5'/>
          <span>Listings</span>
        </Link>
      </li>
    </ul>
  );
};

export default AccountNavBar;
