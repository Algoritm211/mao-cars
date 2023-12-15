import React from 'react';
import { Icon } from '@/shared/components';

interface Props {
  errorTitle?: string;
}

export const ErrorLabel: React.FC<Props> = ({ errorTitle }) => {
  return (
    <div className="flex flex-col items-center my-20">
      <Icon name="error-label" className="w-12 h-12" />
      {errorTitle && <span className="text-xl">{errorTitle}</span>}
    </div>
  );
};
