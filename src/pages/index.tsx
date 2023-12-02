import { Auctions } from '@/system/cars/auctions';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { getAuctions, getGetAuctionsQueryKey } from '@/maocars-client/maocars';

export default function Home() {
  return <Auctions />;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getGetAuctionsQueryKey(query),
    queryFn: () => getAuctions(query),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      messages: (await import(`../../messages/${ctx.locale}.json`)).default,
    },
  };
};
