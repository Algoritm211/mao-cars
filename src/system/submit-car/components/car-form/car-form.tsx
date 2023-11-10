import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {UserInfoFormPart} from "@/system/submit-car/components/car-form/components/user-info-form-part/user-info-form-part";
import {
  CarInfoFormPart
} from "@/system/submit-car/components/car-form/components/car-info-form-part/car-info-form-part";
import {CarFormInputs} from "@/system/submit-car/components/car-form/models/models";
import {
  TitleInfoFormPart
} from "@/system/submit-car/components/car-form/components/title-info-form-part/title-info-form-part";
import {
  ReservePriceFormPart
} from "@/system/submit-car/components/car-form/components/reserve-price-form-part/reserve-price-form-part";
import {
  CarPhotosFormPart
} from "@/system/submit-car/components/car-form/components/car-photos-form-part/car-photos-form-part";
import {Icon} from "@/shared/components/icon/icon";
import {purpleButton} from "@/shared/components/button/purple-button";

export const CarForm = () => {
  const methods = useForm<CarFormInputs>();
  const {handleSubmit} = methods;

  const onSubmit = (data: CarFormInputs) => {
    console.log('DATA', data)
  }

  return (
    <FormProvider {...methods}>
      <div className='mx-2 md:mx-4'>
        <h1 className='text-4xl font-bold'>
          Tell us about your car
        </h1>
        <p className='my-4'>
          Please give us some basics about yourself and the car you’d like to sell. We’ll also need details about the car’s title status as well as 6 photos that highlight the car’s exterior and interior condition.
          <br />
          <br />
          We’ll respond to your application within a business day. Once accepted, we’ll ask for more details and at least 50 high-res photos, then work with you to build a custom and professional listing and get the auction live.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
        <UserInfoFormPart />
        <CarInfoFormPart />
        <TitleInfoFormPart />
        <ReservePriceFormPart/>
        <CarPhotosFormPart />
        <div className='mb-4 mt-8 flex justify-center'>
          <button type='submit' className={purpleButton()}>
            Submit application
            <Icon name='arrow-right' className='w-4 h-4' />
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
