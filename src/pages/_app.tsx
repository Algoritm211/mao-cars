import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "@/system/layout/layout";
import {useState} from "react";
import {HydrationBoundary, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({Component, pageProps}: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
