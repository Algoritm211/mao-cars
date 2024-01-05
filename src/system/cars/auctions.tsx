import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { AuctionsFilter } from '@/system/cars/components/auctions-filter/auctions-filter';
import { AUCTION_CAR_BADGES } from '@/system/cars/components/models/auction-car-badges';
import { AIChatButton } from '@/system/chat/shared-promo-components/ai-chat-button/ai-chat-button';

import { useGetAuctions } from '@/maocars-client/maocars';
import {
  type GetAuctionsBodyStyle,
  GetAuctionsParams,
  GetAuctionsSort,
  GetAuctionsTransmission,
} from '@/maocars-client/schemas';

import { EntityContainer } from '@/shared/components';
import { AuctionCard } from '@/shared/components/auction/auction-card/auction-card';
import { AuctionContainer } from '@/shared/components/auction/auction-container';
import BadgeFactory from '@/shared/components/badge/badge-factory';

export const Auctions = () => {
  const params = useSearchParams();

  const initialFilterParams: GetAuctionsParams = {
    startYear: params.get('startYear') || undefined,
    endYear: params.get('endYear') || undefined,
    bodyStyle: (params.get('bodyStyle') as GetAuctionsBodyStyle) || undefined,
    transmission: (params.get('transmission') as GetAuctionsTransmission) || undefined,
    sort: (params.get('sort') as GetAuctionsSort) || undefined,
  };
  const router = useRouter();
  const t = useTranslations('Common.ribbons');
  const [filter, setFilter] = useState<GetAuctionsParams>(initialFilterParams);
  const auctionsQuery = useGetAuctions(filter);

  const onCarDetails = (auctionId: string) => {
    void router.push(`/auctions/${auctionId}`);
  };

  return (
    <EntityContainer query={auctionsQuery}>
      {(data) => {
        return (
          <React.Fragment>
            <AuctionsFilter setFilter={setFilter} initialFilterValues={initialFilterParams} />

            <hr className="block mx-2" />

            <AuctionContainer>
              {data?.auctions?.map((auction) => (
                <AuctionCard
                  key={auction.id}
                  auction={auction}
                  ribbonTitle={auction.for_army_forces ? t('for_army_purpose') : undefined}
                  badges={<BadgeFactory data={auction} badges={AUCTION_CAR_BADGES} />}
                  onCarDetailsClick={() => onCarDetails(auction.id)}
                />
              ))}
            </AuctionContainer>
            <AIChatButton />
          </React.Fragment>
        );
      }}
    </EntityContainer>
  );
};
