import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React from 'react';

import { AUCTION_CAR_BADGES } from '@/system/cars/components/models/auction-car-badges';

import { Auction } from '@/maocars-client/schemas';

import { AuctionCard } from '@/shared/components';
import { AuctionContainer } from '@/shared/components/auction/auction-container';
import BadgeFactory from '@/shared/components/badge/badge-factory';

interface Props {
  auctions: Auction[];
}

export const AccountListingsCars: React.FC<Props> = ({ auctions }) => {
  const router = useRouter();
  const t = useTranslations('Common.ribbons');
  const onCarDetails = (auctionId: string) => {
    void router.push(`/auctions/${auctionId}`);
  };
  return (
    <AuctionContainer>
      {auctions.map((auction) => {
        return (
          <AuctionCard
            key={auction.id}
            auction={auction}
            ribbonTitle={auction.for_army_forces ? t('for_army_purpose') : undefined}
            badges={<BadgeFactory data={auction} badges={AUCTION_CAR_BADGES} />}
            onCarDetailsClick={() => onCarDetails(auction.id)}
          />
        );
      })}
    </AuctionContainer>
  );
};
