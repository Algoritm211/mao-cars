import React from 'react';
import { Loader } from '@/shared/components';
import { useTranslations } from 'next-intl';

export const DefaultLoader: React.FC = () => {
  const t = useTranslations('Common.states');

  return <Loader size="lg" loaderTitle={t('loading')} />;
};
