import React from 'react';
import {FormTitle} from "@/shared/components/form/form-title/form-title";
import {CAR_OWNER} from "@/system/submit-car/components/car-form/constants/constants";
import {useFormContext} from "react-hook-form";

export const UserInfoFormPart = () => {
  const {register} = useFormContext();
  return (
    <div className='p-4 bg-gray-100 rounded-xl'>
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
          <label className="label">
            <span className="label-text">Full name</span>
          </label>
          <input
            type="text"
            placeholder="Please add your full name"
            className="input input-bordered"
            {...register('fullName')}/>
        </div>
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">Contact phone number</span>
          </label>
          <input
            type="tel"
            placeholder="+380980777779"
            className="input input-bordered"
            {...register('phone')}/>
        </div>
      </div>
    </div>
  );
};

