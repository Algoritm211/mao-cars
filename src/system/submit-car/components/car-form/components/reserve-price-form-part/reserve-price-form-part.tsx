import React from 'react';
import {FormTitle} from "@/shared/components/form/form-title/form-title";
import {useFormContext} from "react-hook-form";
import {Input} from "@/shared/components/form/input/input";

export const ReservePriceFormPart = () => {
  const {register} = useFormContext();

  return (
    <div className='mx-0 md:mx-4 p-4 bg-gray-100 rounded-xl'>
      <FormTitle title='Reserve Price' />
      <p className='bg-gray-200 p-4 m-2 rounded-xl my-4'>
        The reserve price is a secret, minimum price required for your vehicle to sell. Cars with reserve prices may garner less interest than those without reserves.
      </p>
      <div className='form-control max-w-xl'>
        <Input
          id='reservePrice'
          label='What reserve price would you like (USD)?'
          type="number"
          placeholder="Please enter your reserve price"
          registerOptions={{valueAsNumber: true, value: 0}}
          register={register}
        />
      </div>
    </div>
  );
};
