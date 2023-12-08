import React from 'react';
import { CarDetailsList } from '@/system/auction-details/components/car-details-list/car-details-list';
import { CarDetailsHeader } from '@/system/auction-details/components/car-details-header/car-details-header';
import { CarGallery } from '@/system/auction-details/components/car-gallery/car-gallery';
import { PlaceBid } from '@/system/auction-details/components/place-bid/place-bid';
import { useRouter } from 'next/router';
import { Loader } from '@/shared/components';
import { CarInfoSections } from '@/system/auction-details/components/car-info-sections/car-info-sections';
import { AuctionStatistics } from '@/system/auction-details/components/auction-statistics/auction-statistics';
import { AuctionComments } from '@/system/auction-details/components/auction-comments-section/auction-comments';
import { useGetAuctionById, useGetCommentsByAuctionId } from '@/maocars-client/maocars';

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
      <PlaceBid endDate={auction?.stats.auction_end!} price={auction?.stats.current_bid?.amount!} />
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
