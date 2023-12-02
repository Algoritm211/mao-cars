import React from 'react';
import { AccountLayout } from '@/system/account/layout/account-layout';
import { AccountListings } from '@/system/account/account-listings';
import { GetStaticPropsContext } from 'next';

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
