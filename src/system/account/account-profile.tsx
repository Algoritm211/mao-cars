import { useRouter } from 'next/router';
import React from 'react';

import { AccountProfileInfo } from '@/system/account/components/account-profile-info/account-profile-info';

import { useGetProfileById } from '@/maocars-client/maocars';

export const AccountProfile = () => {
  const router = useRouter();
  const { data } = useGetProfileById(router.query?.id as string);

  console.log(data);
  return <AccountProfileInfo />;
};
