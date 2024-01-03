import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

import { Auctions } from '@/system/cars/auctions';
import { AIChatButton } from '@/system/chat/components/ai-chat-button/ai-chat-button';

import { getAuctions, getGetAuctionsQueryKey } from '@/maocars-client/maocars';

export default function Home() {
  return (
    <React.Fragment>
      <Auctions />
      <AIChatButton />
    </React.Fragment>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getGetAuctionsQueryKey(query),
    queryFn: () => getAuctions(query),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      messages: (await import(`../../messages/${ctx.locale}.json`)).default,
    },
  };
};
