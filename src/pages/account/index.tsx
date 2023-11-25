import React from 'react';
import { AccountLayout } from '@/system/account/layout/account-layout';
import { AccountProfile } from '@/system/account/account-profile';

const Account = () => {
  return (
    <AccountLayout>
      <AccountProfile />
    </AccountLayout>
  );
};

export default Account;
