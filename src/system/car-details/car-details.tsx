import React from 'react';
import { CarDetailsList } from '@/system/car-details/components/car-details-list/car-details-list';
import { CarDetailsHeader } from '@/system/car-details/components/car-details-header/car-details-header';
import { CarGallery } from '@/system/car-details/components/car-gallery/car-gallery';
import { PlaceBid } from '@/system/car-details/components/place-bid/place-bid';
import { useRouter } from 'next/router';
import { maoLoader } from '@/shared/components';
import { CarInfoSections } from '@/system/car-details/components/car-info-sections/car-info-sections';
import { AuctionStatistics } from '@/system/car-details/components/auction-statistics/auction-statistics';
import { AuctionComments } from '@/system/car-details/components/auction-comments-section/auction-comments';
import { useGetAuctionById } from '@/maocars-client/maocars';

export const CarDetails = () => {
  const router = useRouter();
  const { data: auction, isLoading } = useGetAuctionById(router.query?.id as string);

  if (isLoading) {
    return (
      <div className="flex justify-center my-20">
        <span className={maoLoader({ size: 'lg' })} />
      </div>
    );
  }

  return (
    <div>
      <CarDetailsHeader title={auction?.listing?.title} subTitle={auction?.listing?.sub_title} />
      <CarGallery photos={auction?.listing?.photos} />
      <PlaceBid endDate={auction?.stats.auction_end!} price={auction?.stats.current_bid?.amount!} />
      <CarDetailsList auction={auction!} />
      <CarInfoSections sections={auction?.listing?.sections!} />
      <AuctionStatistics auction={auction!} />
      <AuctionComments />
    </div>
  );
};
