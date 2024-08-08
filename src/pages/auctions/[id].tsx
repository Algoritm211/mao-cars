import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import React from 'react';

import { ONE_MINUTE } from '@/core/constants';

import { AuctionDetails } from '@/system/auction-details/auction-details';

import {
  getAuctionById,
  getAuctions,
  getCommentsByAuctionId,
  getGetAuctionByIdQueryKey,
  getGetCommentsByAuctionIdQueryKey,
} from '@/maocars-client/maocars';

const AuctionCarDetails = () => {
  return <AuctionDetails />;
};

export default AuctionCarDetails;

export const getStaticPaths = (): GetStaticPathsResult => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext<{ id: string }>) => {
  const auctionId = ctx.params?.id;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: ONE_MINUTE,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: getGetAuctionByIdQueryKey(auctionId!),
    queryFn: () => getAuctionById(auctionId!),
  });

  await queryClient.prefetchQuery({
    queryKey: getGetCommentsByAuctionIdQueryKey(auctionId!, { filter: 'newest' }),
    queryFn: () => getCommentsByAuctionId(auctionId!),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      messages: (await import(`../../../messages/${ctx.locale}.json`)).default,
    },
    revalidate: false,
  };
};
