import React from 'react';
import { AccountLayout } from '@/system/account/layout/account-layout';
import { AccountProfile } from '@/system/account/account-profile';
import {GetStaticPropsContext} from "next";

const Account = () => {
  return (
    <AccountLayout>
      <AccountProfile />
    </AccountLayout>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`)).default
    }
  };
}
export default Account;
