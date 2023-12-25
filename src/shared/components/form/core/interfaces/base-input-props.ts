import { ComponentProps } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

/**
 * Please extend if it's needed
 */
type AvailableInputs = 'input' | 'textarea';

export interface BasedFormProps {
  id: string;
  register: UseFormRegister<FieldValues | any>;
  registerOptions?: RegisterOptions;
  errors?: FieldErrors<FieldValues>;
}

export type BaseInputProps<T extends AvailableInputs> = ComponentProps<T> & BasedFormProps;
