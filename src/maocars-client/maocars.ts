/* eslint-disable */

/**
 * Generated by orval 🍺
 * Do not edit manually.
 * mao-cars-api
 */
import { useQuery } from '@tanstack/react-query';
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import { customInstance } from './fetch-instance';
import type {
  GetAuctionById200,
  GetAuctions200,
  GetAuctionsParams,
  GetCommentsByAuctionId200,
  GetCommentsByAuctionIdParams,
} from './schemas';

/**
 * @summary Get all auctions
 */
export const getAuctions = (params?: GetAuctionsParams) => {
  return customInstance<GetAuctions200>({ url: `/autos/auctions`, method: 'get', params });
};

export const getGetAuctionsQueryKey = (params?: GetAuctionsParams) => {
  return [`/autos/auctions`, ...(params ? [params] : [])] as const;
};

export const getGetAuctionsQueryOptions = <
  TData = Awaited<ReturnType<typeof getAuctions>>,
  TError = unknown,
>(
  params?: GetAuctionsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAuctions>>, TError, TData>>;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAuctionsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAuctions>>> = () => getAuctions(params);

  return { queryKey, queryFn, refetchOnMount: false, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAuctions>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetAuctionsQueryResult = NonNullable<Awaited<ReturnType<typeof getAuctions>>>;
export type GetAuctionsQueryError = unknown;

/**
 * @summary Get all auctions
 */
export const useGetAuctions = <TData = Awaited<ReturnType<typeof getAuctions>>, TError = unknown>(
  params?: GetAuctionsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAuctions>>, TError, TData>>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetAuctionsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get auction by id
 */
export const getAuctionById = (id: string) => {
  return customInstance<GetAuctionById200>({ url: `/autos/auctions/${id}`, method: 'get' });
};

export const getGetAuctionByIdQueryKey = (id: string) => {
  return [`/autos/auctions/${id}`] as const;
};

export const getGetAuctionByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getAuctionById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAuctionById>>, TError, TData>>;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAuctionByIdQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAuctionById>>> = () =>
    getAuctionById(id);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    refetchOnMount: false,
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof getAuctionById>>, TError, TData> & {
    queryKey: QueryKey;
  };
};

export type GetAuctionByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getAuctionById>>>;
export type GetAuctionByIdQueryError = unknown;

/**
 * @summary Get auction by id
 */
export const useGetAuctionById = <
  TData = Awaited<ReturnType<typeof getAuctionById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAuctionById>>, TError, TData>>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetAuctionByIdQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Your GET endpoint
 */
export const getCommentsByAuctionId = (id: string, params?: GetCommentsByAuctionIdParams) => {
  return customInstance<GetCommentsByAuctionId200>({
    url: `/autos/auctions/${id}/comments`,
    method: 'get',
    params,
  });
};

export const getGetCommentsByAuctionIdQueryKey = (
  id: string,
  params?: GetCommentsByAuctionIdParams
) => {
  return [`/autos/auctions/${id}/comments`, ...(params ? [params] : [])] as const;
};

export const getGetCommentsByAuctionIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getCommentsByAuctionId>>,
  TError = unknown,
>(
  id: string,
  params?: GetCommentsByAuctionIdParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getCommentsByAuctionId>>, TError, TData>
    >;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetCommentsByAuctionIdQueryKey(id, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getCommentsByAuctionId>>> = () =>
    getCommentsByAuctionId(id, params);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    refetchOnMount: false,
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof getCommentsByAuctionId>>, TError, TData> & {
    queryKey: QueryKey;
  };
};

export type GetCommentsByAuctionIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getCommentsByAuctionId>>
>;
export type GetCommentsByAuctionIdQueryError = unknown;

/**
 * @summary Your GET endpoint
 */
export const useGetCommentsByAuctionId = <
  TData = Awaited<ReturnType<typeof getCommentsByAuctionId>>,
  TError = unknown,
>(
  id: string,
  params?: GetCommentsByAuctionIdParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getCommentsByAuctionId>>, TError, TData>
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetCommentsByAuctionIdQueryOptions(id, params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};
