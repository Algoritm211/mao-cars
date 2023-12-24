import { clsx } from 'clsx';
import { className } from 'postcss-selector-parser';
import React, { InputHTMLAttributes } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues | any>;
  labelClassname?: string;
  registerOptions?: RegisterOptions;
}

export const TextArea: React.FC<Props> = ({
  id,
  label,
  labelClassname,
  register,
  registerOptions,
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
    </React.Fragment>
  );
};
