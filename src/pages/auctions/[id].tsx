import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

import { AuctionDetails } from '@/system/auction-details/auction-details';

import {
  getAuctionById,
  getCommentsByAuctionId,
  getGetAuctionByIdQueryKey,
  getGetCommentsByAuctionIdQueryKey,
} from '@/maocars-client/maocars';

const AuctionCarDetails = () => {
  return <AuctionDetails />;
};

export default AuctionCarDetails;

export const getServerSideProps = async (ctx: GetServerSidePropsContext<{ id: string }>) => {
  const auctionId = ctx.params?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getGetAuctionByIdQueryKey(auctionId!),
    queryFn: () => getAuctionById(auctionId!),
  });

  await queryClient.prefetchQuery({
    queryKey: getGetCommentsByAuctionIdQueryKey(auctionId!),
    queryFn: () => getCommentsByAuctionId(auctionId!),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      messages: (await import(`../../../messages/${ctx.locale}.json`)).default,
    },
  };
};
