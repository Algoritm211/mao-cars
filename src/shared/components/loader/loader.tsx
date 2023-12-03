import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { clsx } from 'clsx';

const loader = cva('loading loading-spinner text-purple-900', {
  variants: {
    size: {
      xs: 'loading-xs',
      sm: 'loading-sm',
      md: 'loading-md',
      lg: 'loading-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof loader> {
  loaderTitle?: string;
}

export const Loader: React.FC<Props> = ({ size, className, loaderTitle, ...props }) => {
  return (
    <div className={clsx(`flex flex-col items-center my-20`, className)} {...props}>
      <span className={loader({ size })} />
      {loaderTitle && <span>{loaderTitle}</span>}
    </div>
  );
};
