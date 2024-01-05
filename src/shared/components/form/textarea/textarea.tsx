import { clsx } from 'clsx';
import { className } from 'postcss-selector-parser';
import React from 'react';

import { BaseInputProps, FormErrors } from '@/shared/components/form';

interface Props extends BaseInputProps<'textarea'> {
  label: string;
  labelClassname?: string;
}

export const TextArea: React.FC<Props> = ({
  id,
  label,
  labelClassname,
  register,
  registerOptions,
  errors,
  className,
  ...rest
}) => {
  return (
    <React.Fragment>
      <label htmlFor={id} className={clsx('label', labelClassname)}>
        <span className="label-text text-base">{label}</span>
      </label>
      <textarea
        id={id}
        className={clsx('textarea text-base textarea-bordered', className)}
        {...register(id, registerOptions)}
        {...rest}
      ></textarea>
      {errors && <FormErrors errors={errors} fieldId={id} />}
    </React.Fragment>
  );
};
