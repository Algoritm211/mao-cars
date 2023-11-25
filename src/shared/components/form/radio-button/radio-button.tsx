import React, { InputHTMLAttributes } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues | any>;
  registerOptions?: RegisterOptions;
}

export const radioStyles = {
  style: { '--p': 'var(--n)', '--pf': 'var(--nf)', '--pc': 'var(--nc)' } as React.CSSProperties,
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
