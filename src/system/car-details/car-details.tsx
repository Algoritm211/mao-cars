import React from 'react';
import {CarDetailsList} from "@/system/car-details/components/car-details-list/car-details-list";
import {CarDetailsHeader} from "@/system/car-details/components/car-details-header/car-details-header";
import {CarGallery} from "@/system/car-details/components/car-gallery/car-gallery";
import {PlaceBid} from "@/system/car-details/components/place-bid/place-bid";
import {useAuction} from "@/data-access";
import {useRouter} from "next/router";
import {maoLoader} from "@/shared/components";
import {CarInfoSections} from "@/system/car-details/components/car-info-sections/car-info-sections";

export const CarDetails = () => {
  const router = useRouter();
  const {data, isLoading} = useAuction(router.query?.id as string)

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
      <PlaceBid endDate={data?.stats.auction_end!} price={data?.stats.current_bid?.amount!} />
      <CarDetailsList auction={data!} />
      <CarInfoSections sections={data?.listing?.sections!} />
    </div>
  );
};
