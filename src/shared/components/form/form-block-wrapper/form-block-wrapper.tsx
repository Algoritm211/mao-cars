import { cva, VariantProps } from 'class-variance-authority';
import React, { ComponentProps, PropsWithChildren } from 'react';

import { FormTitle } from '@/shared/components/form';

const formBlockWrapper = cva('mx-0 md:mx-4 p-4 bg-gray-100 rounded-xl', {
  variants: {
    disabled: {
      true: 'opacity-50 pointer-events-none',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
interface Props
  extends PropsWithChildren,
    Pick<ComponentProps<'div'>, 'className'>,
    VariantProps<typeof formBlockWrapper> {
  title: string;
}

export const FormBlockWrapper: React.FC<Props> = ({ title, disabled, className, children }) => {
  return (
    <div className={formBlockWrapper({ disabled, className })}>
      <FormTitle title={title} />
      {children}
    </div>
  );
};
