import React, {InputHTMLAttributes} from 'react';
import {FieldValues, RegisterOptions, UseFormRegister} from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues | any>;
  registerOptions?: RegisterOptions
}

export const Input: React.FC<Props> = ({ id, label, register, registerOptions, ...rest }) => {
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
    </React.Fragment>
  );
};
