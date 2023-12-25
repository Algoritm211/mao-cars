import React from 'react';

import { BaseInputProps } from '@/shared/components/form';
import { FormErrors } from '@/shared/components/form/form-errors/form-errors';

interface Props extends BaseInputProps<'input'> {
  label: string;
}

export const Input: React.FC<Props> = ({
  id,
  label,
  errors,
  register,
  registerOptions,
  ...rest
}) => {
  return (
    <React.Fragment>
      <label htmlFor={id} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        id={id}
        className="input input-bordered"
        {...register(id, registerOptions)}
        {...rest}
      />
      {errors && <FormErrors errors={errors} fieldId={id} />}
    </React.Fragment>
  );
};
