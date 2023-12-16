import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const badge = cva('badge', {
  variants: {
    variant: {
      primary: 'badge-primary',
      neutral: 'badge-neutral',
      accent: 'badge-accent',
      secondary: 'badge-secondary',
      ghost: 'badge-ghost',
      info: 'badge-info',
      success: 'badge-success',
      warning: 'badge-warning',
      error: 'badge-error',
    },
    outline: {
      true: 'badge-outline',
    },
    size: {
      lg: 'badge-lg',
      md: 'badge-md',
      sm: 'badge-sm',
      xs: 'badge-xs',
    },
  },
  defaultVariants: {
    size: 'md',
    outline: true,
  },
});

interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badge> {
  title?: string;
}
export const Badge: React.FC<Props> = ({ className, variant, outline, size, title }) => {
  return <div className={badge({ variant, outline, size, className })}>{title}</div>;
};
