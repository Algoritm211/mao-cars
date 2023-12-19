import { useTranslations } from 'next-intl';
import React from 'react';

import { Badge } from '@/shared/components';
import { BadgeConfig } from '@/shared/components/badge/models/badge-config';

interface Props<Data> {
  data: Data;
  badges: BadgeConfig<Data>[];
}

/**
 * Factory for building badges array based on boolean value
 */
const BadgeFactory = <Data,>({ badges, data }: Props<Data>): React.JSX.Element[] => {
  const t = useTranslations('Common.badges');
  return (
    badges
      // filter if this badge exists
      .filter((config) => {
        return data[config.key];
      })
      .map((config) => {
        return (
          <Badge
            key={config.key.toString()}
            className={config?.className || ''}
            title={t(config.title)}
            variant={config.variant}
          />
        );
      })
  );
};

export default BadgeFactory;
