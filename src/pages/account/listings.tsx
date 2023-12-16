import { GetStaticPropsContext } from 'next';
import React from 'react';

import { AccountListings } from '@/system/account/account-listings';
import { AccountLayout } from '@/system/account/layout/account-layout';

const Listings = () => {
  return (
    <AccountLayout>
      <AccountListings />
    </AccountLayout>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`)).default,
    },
  };
}

export default Listings;
