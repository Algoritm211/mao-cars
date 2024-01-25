import { getLocale } from 'next-intl/server';

import { LOCALE_KEY } from '@/core/constants';

const createBaseURL = () => {
  return `${process.env.NEXT_PUBLIC_BACKEND_BASE || ''}/api`;
};

const baseURL = createBaseURL();

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
  signal,
}: {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  params?: any;
  data?: unknown;
  responseType?: string;
  headers?: HeadersInit | undefined;
  signal?: AbortSignal | undefined;
}): Promise<T> => {
  const locale = localStorage?.getItem(LOCALE_KEY);
  const headersWithLocale = new Headers();
  headersWithLocale.set('content-language', locale || 'en-US');
  const response = await fetch(`${baseURL}${url}?` + new URLSearchParams(params).toString(), {
    method,
    ...(data ? { body: JSON.stringify(data) } : {}),
    headers: headersWithLocale,
    signal,
  });

  return response.json();
};

export default customInstance;
