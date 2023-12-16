import React, { PropsWithChildren } from 'react';

import { FormTitle } from '@/shared/components/form';

interface Props extends PropsWithChildren {
  title: string;
}

export const FormBlockWrapper: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="mx-0 md:mx-4 p-4 bg-gray-100 rounded-xl">
      <FormTitle title={title} />
      {children}
    </div>
  );
};
