import { useTranslations } from 'next-intl';
import React from 'react';

import { ErrorLabel } from '@/shared/components/error-label/error-label';

export const DefaultError = () => {
  const t = useTranslations('Common.states');
  return <ErrorLabel errorTitle={t('error')} />;
};
