import React from 'react';
import {FormTitle} from "@/shared/components/form/form-title/form-title";
import {CAR_OWNER} from "@/system/submit-car/components/car-form/constants/constants";
import {useFormContext} from "react-hook-form";
import {Input} from "@/shared/components/form/input/input";
import {RadioButton} from "@/shared/components/form/radio-button/radio-button";
import {FormErrors} from "@/shared/components/form/form-errors/form-errors";

export const UserInfoFormPart = () => {
  const {
    register,
    formState: {errors}
  } = useFormContext();

  return (
    <div className='mx-0 md:mx-4 p-4 bg-gray-100 rounded-xl'>
      <FormTitle title='Your Info'/>
      <fieldset className='my-2'>
        <label id='is_owner_private'>Dealer or private party?</label>
        <div className='flex gap-2 mt-2 mb-2'>
          {CAR_OWNER.map(elem => {
            return (
              <RadioButton
                id='owner'
                key={elem}
                label={elem}
                value={elem}
                register={register}
                registerOptions={{required: true}}
                aria-labelledby='is_owner_private'
              />
            )
          })}
        </div>
        <FormErrors errors={errors} fieldId='owner' />
      </fieldset>
      <div className='flex flex-col w-full md:flex-row justify-between md:gap-6'>
        <div className="form-control flex-1">
          <Input
            id='fullName'
            label='Full name'
            type="text"
            placeholder="Please add your full name"
            register={register}
            errors={errors}
            registerOptions={{required: true}}
          />
        </div>
        <div className="form-control flex-1">
          <Input
            id='phone'
            label='Contact phone number'
            type="tel"
            placeholder="+380980777779"
            register={register}
          />
        </div>
      </div>
    </div>
  );
};

