import { clsx } from 'clsx';
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
  ...rest
}) => {
  return (
    <React.Fragment>
      <label htmlFor={id} className={clsx('label', labelClassname)}>
        <span className="label-text">{label}</span>
      </label>
      <textarea
        id={id}
        className="textarea textarea-bordered h-36"
        {...register(id, registerOptions)}
        {...rest}
      ></textarea>
      {errors && <FormErrors errors={errors} fieldId={id} />}
    </React.Fragment>
  );
};
