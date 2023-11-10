import React from 'react';
import {useFormContext} from "react-hook-form";
import {FormTitle} from "@/shared/components/form/form-title/form-title";
import {RadioButton} from "@/shared/components/form/radio-button/radio-button";
import {Input} from "@/shared/components/form/input/input";

export const TitleInfoFormPart = () => {
  const {register} = useFormContext();
  return (
    <div className='mx-0 md:mx-4 p-4 bg-gray-100 rounded-xl'>
      <FormTitle title='Title info'/>

      <fieldset className='my-2'>
        <label id='where_is_car_titled'>Where is the car titled?</label>
        <div className='flex gap-2 mt-2 mb-2'>
          {['europe', 'ukraine'].map(elem => {
            return (
              <RadioButton
                id='carTitle'
                key={elem}
                label={elem}
                value={elem}
                register={register}
                aria-labelledby='where_is_car_titled'
              />
            )
          })}
        </div>
      </fieldset>

      <div className='form-control max-w-xl'>
        <Input
          id='location'
          label='Province/City (car location)'
          type="text"
          placeholder="Please add the location"
          register={register}
        />
      </div>

    </div>
  );
};
