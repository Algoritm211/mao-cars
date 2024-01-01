import { cva, VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import React from 'react';

import { BaseInputProps } from '@/shared/components/form';

import { Option } from './models/select-option-models';

const selectStyles = cva('select', {
  variants: {
    variant: {
      bordered: 'select-bordered',
    },
    selectSize: {
      md: 'select-md',
    },
  },
  defaultVariants: {
    variant: 'bordered',
    selectSize: 'md',
  },
});

interface Props extends BaseInputProps<'select'>, VariantProps<typeof selectStyles> {
  label: string;
  labelClassName?: string;
  defaultOptionTitle: string;
  defaultOptionValue: string;
  isLabelHidden?: boolean;
  options: Option[];
}

export const Select: React.FC<Props> = ({
  id,
  selectSize,
  className,
  labelClassName,
  register,
  registerOptions,
  defaultOptionTitle,
  defaultOptionValue,
  options,
  label,
  isLabelHidden = false,
  ...rest
}) => {
  const isNeedToDisplay = isLabelHidden ? 'sr-only' : 'not-sr-only';
  return (
    <React.Fragment>
      <label>
        <div className={clsx('label', isNeedToDisplay, labelClassName)}>
          <span className="label-text">{label}</span>
        </div>
        <select
          aria-label={label}
          className={selectStyles({ className, selectSize })}
          {...register(id, registerOptions)}
          {...rest}
        >
          <option value={defaultOptionValue} hidden>
            {defaultOptionTitle}
          </option>
          {options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </React.Fragment>
  );
};
