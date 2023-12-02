import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from '@/system/layout/layout';
import {useState} from 'react';
import {HydrationBoundary, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import NextNProgress from 'nextjs-progressbar';
import {useRouter} from "next/router";
import {NextIntlClientProvider} from "next-intl";

export default function App({Component, pageProps}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <NextNProgress color="rgb(88 28 135)" startPosition={0.3} stopDelayMs={200} height={4}/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </HydrationBoundary>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </NextIntlClientProvider>
  );
}
