import React from 'react';
import {CarDetails} from "@/system/car-details/car-details";
import {GetServerSidePropsContext} from "next";
import {auctionsAPI, EntitiesKeys} from "@/data-access";
import {dehydrate, QueryClient} from "@tanstack/react-query";

const AuctionCarDetails = () => {
  return (
    <CarDetails />
  );
};

export default AuctionCarDetails


export const getServerSideProps = async (ctx: GetServerSidePropsContext<{id: string}>) => {
  const auctionId = ctx.params?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [EntitiesKeys.auction, auctionId],
    queryFn: () => auctionsAPI.fetchAuction(auctionId!),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
