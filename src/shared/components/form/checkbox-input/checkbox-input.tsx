import { cva, VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import React from 'react';

import { BaseInputProps, FormErrors } from '@/shared/components/form';

const checkboxStyles = cva('checkbox mr-2', {
  variants: {
    checkboxType: {
      md: 'checkbox-md',
      lg: 'checkbox-lg',
    },
    variant: {
      primary: 'checkbox-primary',
      secondary: 'checkbox-secondary',
    },
  },
  defaultVariants: {
    checkboxType: 'md',
  },
});

interface Props extends BaseInputProps<'input'>, VariantProps<typeof checkboxStyles> {
  label: string;
  labelClassName?: string;
}

export const CheckboxInput: React.FC<Props> = ({
  id,
  register,
  registerOptions,
  errors,
  checkboxType,
  className,
  label,
  labelClassName,
  variant,
}) => {
  return (
    <label className={clsx('label justify-start cursor-pointer', labelClassName)}>
      <input
        type="checkbox"
        className={checkboxStyles({ className, checkboxType, variant })}
        {...register(id, registerOptions)}
      />
      <span className="label-text font-bold">{label}</span>
      {errors && <FormErrors fieldId={id} errors={errors} />}
    </label>
  );
};
