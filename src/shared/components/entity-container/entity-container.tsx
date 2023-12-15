import React, { PropsWithChildren, ReactNode } from 'react';
import { DefaultLoader } from './default-loader';
import { DefaultError } from '@/shared/components/entity-container/default-error';
import { UseQueryResult } from '@tanstack/react-query';

interface Props<TData, TError> {
  query: UseQueryResult<TData, TError>;
  children: (data: TData) => ReactNode;
  customLoading?: ReactNode;
  customError?: ReactNode;
}

export const EntityContainer = <TData, TError>({
  query,
  customLoading,
  customError,
  children,
}: Props<TData, TError>) => {
  const { data, isLoading, isError, isSuccess } = query;

  if (isLoading) {
    return customLoading || <DefaultLoader />;
  }

  if (isError || !isSuccess) {
    return customError || <DefaultError />;
  }

  return children(data);
};
