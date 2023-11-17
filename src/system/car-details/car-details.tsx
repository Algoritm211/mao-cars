import React from 'react';
import {CarDetailsList} from "@/system/car-details/components/car-details-list/car-details-list";
import {CarDetailsHeader} from "@/system/car-details/components/car-details-header/car-details-header";
import {CarGallery} from "@/system/car-details/components/car-gallery/car-gallery";
import {PlaceBid} from "@/system/car-details/components/place-bid/place-bid";
import {EntitiesKeys, useAuction, useAuctions} from "@/data-access";
import {useRouter} from "next/router";
import {maoLoader} from "@/shared/components";

export const CarDetails = () => {
  const router = useRouter();
  const {data, isLoading} = useAuction(router.query?.id as string)
  const dayPlusOne = new Date(new Date().setDate(new Date().getDate() + 1));

  if (isLoading) {
   return <div className='flex justify-center my-20 bg-pu'>
     <span className={maoLoader({size: 'lg'})} />
    </div>
  }

  return (
    <div>
      <CarDetailsHeader
        title={data?.listing?.title}
        subTitle={data?.listing?.sub_title}
      />
      <CarGallery photos={data?.listing?.photos} />
      <PlaceBid endDate={dayPlusOne} price={150_000} />
      <CarDetailsList />
    </div>
  );
};
