import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {UserInfoFormPart} from "@/system/submit-car/components/car-form/components/user-info-form-part/user-info-form-part";

interface Inputs {
  owner: 'private' | 'dealer'
  fullName: string;
  phone: string;
}

export const CarForm = () => {
  const methods = useForm<Inputs>();
  const {handleSubmit} = methods;

  const onSubmit = (data: Inputs) => {
    console.log('DATA', data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInfoFormPart />
        <button type='submit' className='btn'>Test submit</button>
      </form>
    </FormProvider>
  );
};
