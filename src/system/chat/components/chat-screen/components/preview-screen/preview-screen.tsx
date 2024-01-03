import React from 'react';

import { Icon } from '@/shared/components';

export const PreviewScreen = () => {
  return (
    <div className="flex h-full flex-col justify-center items-center text-center">
      <Icon name="artificial-intelligence" className="w-28 h-28" />
      <span className="font-bold text-3xl">I will help you find your dream car</span>
    </div>
  );
};
