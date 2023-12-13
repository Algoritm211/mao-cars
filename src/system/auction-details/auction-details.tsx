import React from 'react';
import { useRouter } from 'next/router';
import { Loader } from '@/shared/components';
import { useGetAuctionById, useGetCommentsByAuctionId } from '@/maocars-client/maocars';
import {
  CarDetailsHeader,
  CarGallery,
  CarDetailsList,
  CarInfoSections,
  PlaceBid,
  AuctionStatistics,
  AuctionComments,
} from './components';

export const AuctionDetails = () => {
  const router = useRouter();
  const { data: auction, isLoading: isLoadingAuction } = useGetAuctionById(
    router.query?.id as string
  );
  const { data: comments, isLoading: isLoadingComments } = useGetCommentsByAuctionId(
    router.query?.id as string
  );

  if (isLoadingAuction) {
    return <Loader size="lg" />;
  }

  return (
    <div>
      <CarDetailsHeader title={auction?.listing?.title} subTitle={auction?.listing?.sub_title} />
      <CarGallery photos={auction?.listing?.photos} />
      <PlaceBid stats={auction?.stats!} />
      <CarDetailsList auction={auction!} />
      <CarInfoSections sections={auction?.listing?.sections!} />
      <AuctionStatistics auction={auction!} />
      {isLoadingComments ? (
        <Loader loaderTitle="Loading Comments..." size="lg" />
      ) : (
        <AuctionComments comments={comments!.comments_and_bids} seller_id={auction!.seller.id} />
      )}
    </div>
  );
};
