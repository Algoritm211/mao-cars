import {Cars} from "@/system/cars/cars";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {auctionsAPI, EntitiesKeys} from "@/data-access";
import { GetServerSidePropsContext} from "next";
import {AuctionsFilterInputs} from "@/system/cars/components/auctions-filter/models/auctions-filter";

export default function Home() {
  return (
    <Cars/>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [EntitiesKeys.auctions, query],
    queryFn: () => auctionsAPI.fetchAuctions(query),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
