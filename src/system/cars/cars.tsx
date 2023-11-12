import React, {useState} from 'react';
import {CarsAuctions} from "@/system/cars/components/cars-auctions/cars-auctions";
import {AuctionsFilter} from "@/system/cars/components/auctions-filter/auctions-filter";
import {AuctionsFilterInputs} from "@/system/cars/components/auctions-filter/models/auctions-filter";
import {useAuctions} from "@/data-access";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";
import {BodyType, TransmissionType} from "@/core/interfaces";

export const Cars = () => {
  const params = useSearchParams();

  const initialFilterParams = {
    startYear: params.get('startYear') || undefined,
    endYear: params.get('endYear') || undefined,
    bodyStyle: params.get('bodyStyle') as BodyType || undefined,
    transmission: params.get('transmission') as TransmissionType || undefined,
    sort: params.get('sort') || undefined,
  }
  const [filter, setFilter] = useState<AuctionsFilterInputs>(initialFilterParams);
  const { isFetching} = useAuctions(filter);

  return (
    <React.Fragment>
      <AuctionsFilter
        setFilter={setFilter}
        isLoading={isFetching}
        initialFilterValues={initialFilterParams}
      />
      <hr className='block mx-2'/>

      {isFetching ? (
        <div className='flex justify-center my-20'>
          <div className='loading loading-lg' />
        </div>
      ) : <CarsAuctions />}
    </React.Fragment>
  );
};
