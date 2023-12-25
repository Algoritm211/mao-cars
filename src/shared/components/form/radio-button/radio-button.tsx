import React from 'react';

import { BaseInputProps } from '@/shared/components/form';

interface Props extends BaseInputProps<'input'> {
  label: string;
}

export const radioStyles = {
  style: {
    '--p': 'var(--n)',
    '--pf': 'var(--nf)',
    '--pc': 'var(--nc)',
  } as React.CSSProperties,
  className: 'btn btn-outline no-animation hover:bg-neutral',
};

export const RadioButton: React.FC<Props> = ({
  id,
  label,
  value,
  register,
  registerOptions,
  ...props
}) => {
  return (
    <React.Fragment>
      <input
        type="radio"
        {...radioStyles}
        value={value}
        aria-label={label}
        {...register(id, registerOptions)}
        {...props}
      />
    </React.Fragment>
  );
};
