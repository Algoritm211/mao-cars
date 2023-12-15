import React, { useState } from 'react';
import { AuctionsFilter } from '@/system/cars/components/auctions-filter/auctions-filter';
import { AuctionsFilterInputs } from '@/system/cars/components/auctions-filter/models/auctions-filter';
import { useSearchParams } from 'next/navigation';
import { BodyType, TransmissionType } from '@/core/interfaces';
import { EntityContainer, Loader } from '@/shared/components';
import { AuctionContainer } from '@/shared/components/auction/auction-container';
import { AuctionCard } from '@/shared/components/auction/auction-card';
import { useGetAuctions } from '@/maocars-client/maocars';
import { useRouter } from 'next/router';

export const Auctions = () => {
  const params = useSearchParams();

  const initialFilterParams = {
    startYear: params.get('startYear') || undefined,
    endYear: params.get('endYear') || undefined,
    bodyStyle: (params.get('bodyStyle') as BodyType) || undefined,
    transmission: (params.get('transmission') as TransmissionType) || undefined,
    sort: params.get('sort') || undefined,
  };
  const router = useRouter();
  const [filter, setFilter] = useState<AuctionsFilterInputs>(initialFilterParams);
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
                  onCarDetailsClick={() => onCarDetails(auction.id)}
                />
              ))}
            </AuctionContainer>
          </React.Fragment>
        );
      }}
    </EntityContainer>
  );
};
