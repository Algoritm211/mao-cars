import React, { useState } from 'react';
import { AuctionsFilter } from '@/system/cars/components/auctions-filter/auctions-filter';
import { AuctionsFilterInputs } from '@/system/cars/components/auctions-filter/models/auctions-filter';
import { useSearchParams } from 'next/navigation';
import { BodyType, TransmissionType } from '@/core/interfaces';
import { Loader } from '@/shared/components';
import { AuctionContainer } from '@/shared/components/auction/auction-container';
import AuctionCard from '@/shared/components/auction/auction-card';
import { useGetAuctions } from '@/maocars-client/maocars';

export const Auctions = () => {
  const params = useSearchParams();

  const initialFilterParams = {
    startYear: params.get('startYear') || undefined,
    endYear: params.get('endYear') || undefined,
    bodyStyle: (params.get('bodyStyle') as BodyType) || undefined,
    transmission: (params.get('transmission') as TransmissionType) || undefined,
    sort: params.get('sort') || undefined,
  };
  const [filter, setFilter] = useState<AuctionsFilterInputs>(initialFilterParams);
  const { data, isLoading } = useGetAuctions(filter);

  return (
    <React.Fragment>
      <AuctionsFilter
        setFilter={setFilter}
        isLoading={isLoading}
        initialFilterValues={initialFilterParams}
      />
      <hr className="block mx-2" />

      {isLoading ? (
        <Loader size="lg" />
      ) : (
        <AuctionContainer>
          {data?.auctions?.map((auction) => <AuctionCard key={auction.id} auction={auction} />)}
        </AuctionContainer>
      )}
    </React.Fragment>
  );
};
