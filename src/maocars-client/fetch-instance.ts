const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_BASE || ''}/api`;

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
  const response = await fetch(`${baseURL}${url}?` + new URLSearchParams(params).toString(), {
    method,
    ...(data ? { body: JSON.stringify(data) } : {}),
    headers,
    signal,
  });

  return response.json();
};

export default customInstance;
