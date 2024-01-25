import '@/styles/globals.css';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { useEffect, useState } from 'react';

import { LOCALE_KEY } from '@/core/constants';

import Layout from '@/system/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem(LOCALE_KEY, router.locale || 'en-US');
  }, [router.locale]);

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Kiev"
      messages={pageProps.messages}
    >
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <NextNProgress color="rgb(88 28 135)" startPosition={0.3} stopDelayMs={200} height={4} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </HydrationBoundary>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </NextIntlClientProvider>
  );
}
