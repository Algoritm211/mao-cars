import React from 'react';
import { useRouter } from 'next/router';
import { EntityContainer, Loader } from '@/shared/components';
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
  const auctionQuery = useGetAuctionById(router.query?.id as string);
  const commentsQuery = useGetCommentsByAuctionId(router.query?.id as string);

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
              <EntityContainer
                query={commentsQuery}
                customLoading={<Loader loaderTitle="Loading Comments..." size="lg" />}
              >
                {(comments) => {
                  return (
                    <AuctionComments
                      comments={comments!.comments_and_bids}
                      seller_id={auction?.seller.id || ''}
                    />
                  );
                }}
              </EntityContainer>
            </React.Fragment>
          );
        }}
      </EntityContainer>
    </div>
  );
};
