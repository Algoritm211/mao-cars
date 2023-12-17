import { useRouter } from 'next/router';
import React from 'react';

import { useGetAuctionById } from '@/maocars-client/maocars';

import { EntityContainer } from '@/shared/components';

import {
  AuctionComments,
  AuctionStatistics,
  CarDetailsHeader,
  CarDetailsList,
  CarGallery,
  CarInfoSections,
  PlaceBid,
} from './components';

export const AuctionDetails = () => {
  const router = useRouter();
  const auctionQuery = useGetAuctionById(router.query?.id as string);

  return (
    <div>
      <EntityContainer query={auctionQuery}>
        {(auction) => {
          return (
            <React.Fragment>
              <CarDetailsHeader
                title={auction.listing?.title}
                subTitle={auction.listing?.sub_title}
              />
              <CarGallery photos={auction.listing?.photos} />
              <PlaceBid stats={auction.stats!} />
              <CarDetailsList auction={auction!} />
              <CarInfoSections sections={auction.listing?.sections!} />
              <AuctionStatistics auction={auction!} />
              <AuctionComments sellerId={auction?.seller.id || ''} />
            </React.Fragment>
          );
        }}
      </EntityContainer>
    </div>
  );
};
