import {Cars} from "@/system/cars/cars";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {auctionsAPI, EntitiesKeys, useAuctions} from "@/data-access";

export default function Home() {
  const {data} = useAuctions();
  return (
    <Cars/>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [EntitiesKeys.auctions],
    queryFn: () => auctionsAPI.fetchAuctions(),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
