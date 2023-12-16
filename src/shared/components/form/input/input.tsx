import React, { InputHTMLAttributes } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { FormErrors } from '@/shared/components/form/form-errors/form-errors';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errors?: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues | any>;
  registerOptions?: RegisterOptions;
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
