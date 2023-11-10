import React from 'react';
import {useFormContext} from "react-hook-form";
import {FormBlockWrapper, FormErrors, Input, RadioButton} from "@/shared/components/form";

export const TitleInfoFormPart = () => {
  const {
    register,
    formState: {errors}
  } = useFormContext();
  return (
    <FormBlockWrapper title='Title Info'>
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
        <FormErrors fieldId='carTitle' errors={errors} />
      </fieldset>

      <div className='form-control max-w-xl'>
        <Input
          id='location'
          label='Province/City (car location)'
          type="text"
          placeholder="Please add the location"
          register={register}
          errors={errors}
          registerOptions={{required: true}}
        />
      </div>
    </FormBlockWrapper>
  );
};
