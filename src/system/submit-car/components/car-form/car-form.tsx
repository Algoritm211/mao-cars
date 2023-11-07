import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {UserInfoFormPart} from "@/system/submit-car/components/car-form/components/user-info-form-part/user-info-form-part";
import {
  CarInfoFormPart
} from "@/system/submit-car/components/car-form/components/car-info-form-part/car-info-form-part";
import {CarFormInputs} from "@/system/submit-car/components/car-form/models/models";

export const CarForm = () => {
  const methods = useForm<CarFormInputs>();
  const {handleSubmit} = methods;

  const onSubmit = (data: CarFormInputs) => {
    console.log('DATA', data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
        <UserInfoFormPart />
        <CarInfoFormPart />
        <button type='submit' className='btn'>Test submit</button>
      </form>
    </FormProvider>
  );
};
