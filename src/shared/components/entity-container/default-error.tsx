import React from 'react';
import { ErrorLabel } from '@/shared/components/error-label/error-label';
import { useTranslations } from 'next-intl';

export const DefaultError = () => {
  const t = useTranslations('Common.states');
  return <ErrorLabel errorTitle={t('error')} />;
};
