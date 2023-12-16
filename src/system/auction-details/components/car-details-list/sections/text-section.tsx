import React from 'react';

import {
  ddStyles,
  dtStyles,
} from '@/system/auction-details/components/car-details-list/sections/sections-styles';

interface Props {
  title: string;
  content: string;
  isCorner: boolean;
}

export const TextSection: React.FC<Props> = ({ title, content, isCorner }) => {
  const type = isCorner ? 'corner' : 'default';
  return (
    <React.Fragment>
      <dt className={dtStyles({ type })}>{title}</dt>
      <dd className={ddStyles({ type })}>{content}</dd>
    </React.Fragment>
  );
};
