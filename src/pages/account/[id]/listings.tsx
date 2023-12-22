import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

import { AccountListings } from '@/system/account/account-listings';
import { AccountLayout } from '@/system/account/layout/account-layout';

import { getGetProfileByIdQueryKey, getProfileById } from '@/maocars-client/maocars';

const Listings = () => {
  return (
    <AccountLayout>
      <AccountListings />
    </AccountLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext<{ id: string }>) {
  const id = context.params?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getGetProfileByIdQueryKey(id!),
    queryFn: () => getProfileById(id!),
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      messages: (await import(`../../../../messages/${context.locale}.json`)).default,
    },
  };
}

export default Listings;
