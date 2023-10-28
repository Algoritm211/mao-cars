import React from 'react';
import {CarDetailsList} from "@/system/car-details/components/car-details-list/car-details-list";
import {CarDetailsHeader} from "@/system/car-details/components/car-details-header/car-details-header";
import {CarGallery} from "@/system/car-details/components/car-gallery/car-gallery";
import {PlaceBid} from "@/system/car-details/components/place-bid/place-bid";

export const CarDetails = () => {
  const dayPlusOne = new Date(new Date().setDate(new Date().getDate() + 1));

  return (
    <div>
      <CarDetailsHeader />
      <CarGallery />
      <PlaceBid endDate={dayPlusOne} price={150_000} />
      <CarDetailsList />
    </div>
  );
};
