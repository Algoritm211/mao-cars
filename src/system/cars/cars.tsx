import React from 'react';
import {CarsAuctions} from "@/system/cars/components/cars-auctions/cars-auctions";
import {AuctionsFilter} from "@/system/cars/components/auctions-filter/auctions-filter";

export const Cars = () => {
  return (
    <React.Fragment>
      <AuctionsFilter />
      <hr className='block mx-2'/>
      <CarsAuctions />
    </React.Fragment>
  );
};
