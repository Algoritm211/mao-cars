import React, {useState} from 'react';
import {AuctionsFilter} from "@/system/cars/components/auctions-filter/auctions-filter";
import {AuctionsFilterInputs} from "@/system/cars/components/auctions-filter/models/auctions-filter";
import {useAuctions} from "@/data-access";
import {useSearchParams} from "next/navigation";
import {BodyType, TransmissionType} from "@/core/interfaces";
import {maoLoader} from "@/shared/components";
import {AuctionContainer} from "@/shared/components/auction/auction-container";
import AuctionCard from "@/shared/components/auction/auction-card";

export const Auctions = () => {
  const params = useSearchParams();

  const initialFilterParams = {
    startYear: params.get('startYear') || undefined,
    endYear: params.get('endYear') || undefined,
    bodyStyle: params.get('bodyStyle') as BodyType || undefined,
    transmission: params.get('transmission') as TransmissionType || undefined,
    sort: params.get('sort') || undefined,
  }
  const [filter, setFilter] = useState<AuctionsFilterInputs>(initialFilterParams);
  const { data, isLoading} = useAuctions(filter);

  return (
    <React.Fragment>
      <AuctionsFilter
        setFilter={setFilter}
        isLoading={isLoading}
        initialFilterValues={initialFilterParams}
      />
      <hr className='block mx-2'/>

      {isLoading ? (
        <div className='flex justify-center my-20'>
          <span className={maoLoader({size: 'lg'})} />
        </div>
      ) : (
        <AuctionContainer>
          {data?.auctions?.map(auction =>
            <AuctionCard key={auction.id} auction={auction} />
          )}
        </AuctionContainer>
      )}
    </React.Fragment>
  );
};
