import { cva, VariantProps } from 'class-variance-authority';
import React, { useState } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { Icon } from '@/shared/components';
import { BaseInputProps } from '@/shared/components/form';

const fileInput = cva(
  `
  flex justify-center w-full h-32 px-4
  transition bg-white border-2 border-gray-300 border-dashed
  rounded-md appearance-none cursor-pointer
  hover:border-gray-400 focus:outline-none
`,
  {
    variants: {
      active: {
        true: 'border-gray-400',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

interface Props extends BaseInputProps<'input'>, VariantProps<typeof fileInput> {
  title: string;

  register: UseFormRegister<FieldValues | any>;
  registerOptions?: RegisterOptions;

  handleFileDrop: (event: React.DragEvent<HTMLLabelElement>) => void;
}

export const FileInputArea: React.FC<Props> = ({
  id,
  title,
  multiple,
  active,
  accept,
  handleFileDrop,
  register,
  registerOptions,
  className,
  ...props
}) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const onDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };
  return (
    <label
      htmlFor={id}
      onDrop={handleFileDrop}
      onDragOver={onDragOver}
      onDragLeave={() => setIsDraggingOver(false)}
      className={fileInput({ className, active: active || isDraggingOver })}
    >
      <span className="flex items-center space-x-2">
        <Icon name="upload-file" className="w-6 h-6 text-gray-600" />
        <span className="font-medium text-gray-600">{title}</span>
      </span>
      <input
        id={id}
        type="file"
        className="hidden"
        multiple={multiple}
        accept={accept}
        {...register(id, registerOptions)}
        {...props}
      />
    </label>
  );
};
