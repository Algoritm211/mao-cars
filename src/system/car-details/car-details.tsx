import React from 'react';
import {CarDetailsList} from "@/system/car-details/components/car-details-list/car-details-list";
import {CarDetailsHeader} from "@/system/car-details/components/car-details-header/car-details-header";
import {CarGallery} from "@/system/car-details/components/car-gallery/car-gallery";

export const CarDetails = () => {
  return (
    <div>
      <CarDetailsHeader />
      <CarGallery />
      <CarDetailsList />
    </div>
  );
};
