import { useTranslations } from 'next-intl';
import React from 'react';

import { Loader } from '@/shared/components';

export const DefaultLoader: React.FC = () => {
  const t = useTranslations('Common.states');

  return <Loader size="lg" loaderTitle={t('loading')} />;
};
