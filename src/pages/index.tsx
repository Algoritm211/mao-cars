import { Auctions } from '@/system/cars/auctions';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { auctionsAPI, EntitiesKeys } from '@/data-access';
import { GetServerSidePropsContext } from 'next';

export default function Home() {
  return <Auctions />;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [EntitiesKeys.auctions, query],
    queryFn: () => auctionsAPI.fetchAuctions(query),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
