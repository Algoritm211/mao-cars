import React from 'react';
import { CarDetails } from '@/system/car-details/car-details';
import { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
  getAuctionById,
  getCommentsByAuctionId,
  getGetAuctionByIdQueryKey,
  getGetCommentsByAuctionIdQueryKey,
} from '@/maocars-client/maocars';

const AuctionCarDetails = () => {
  return <CarDetails />;
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
    },
  };
};
