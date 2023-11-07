import React from 'react';
import {FormTitle} from "@/shared/components/form/form-title/form-title";
import {CAR_OWNER} from "@/system/submit-car/components/car-form/constants/constants";
import {useFormContext} from "react-hook-form";
import {Input} from "@/shared/components/form/input/input";

export const UserInfoFormPart = () => {
  const {register} = useFormContext();
  return (
    <div className='mx-0 md:mx-4 p-4 bg-gray-100 rounded-xl'>
      <FormTitle title='Your Info'/>
      <fieldset className='my-2'>
        <label id='is_owner_private'>Dealer or private party?</label>
        <div className='flex gap-2 mt-2 mb-2'>
          {CAR_OWNER.map(elem => {
            return (
              <input
                key={elem}
                aria-labelledby='is_owner_private'
                type='radio'
                style={{'--p': 'var(--n)', '--pf': 'var(--nf)', '--pc': 'var(--nc)'} as React.CSSProperties}
                className='btn btn-outline no-animation hover:bg-neutral'
                value={elem}
                aria-label={elem}
                {...register('owner')}
              />
            )
          })}
        </div>
      </fieldset>
      <div className='flex flex-col w-full md:flex-row justify-between md:gap-6'>
        <div className="form-control flex-1">
          <Input
            id='fullName'
            label='Full name'
            type="text"
            placeholder="Please add your full name"
            register={register}
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

