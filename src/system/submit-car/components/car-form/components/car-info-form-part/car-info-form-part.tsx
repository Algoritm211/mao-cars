import React from 'react';
import {FormTitle} from "@/shared/components/form/form-title/form-title";
import {useFormContext} from "react-hook-form";
import {END_YEARS, TRANSMISSION_TYPES} from "@/core/constants/form-constants";
import {CarFormInputs} from "@/system/submit-car/components/car-form/models/models";
import {Input} from "@/shared/components/form/input/input";

export const CarInfoFormPart = () => {
  const {register} = useFormContext<CarFormInputs>();
  return (
    <div className='mx-0 md:mx-4 p-4 bg-gray-100 rounded-xl'>
      <FormTitle title='Car Details'/>
      <div className="form-control max-w-lg mb-4">
        <Input
          id='vin'
          label='VIN'
          type="text"
          placeholder="Please ented VIN of your car"
          register={register}
        />
      </div>

      <div className='flex flex-col md:flex-row gap-2 mb-4'>
        <div className="form-control md:max-w-xs">
          <label htmlFor='carYear' className="label">
            <span className="label-text">Year</span>
          </label>
          <select
            id='carYear'
            className="select select-bordered w-full"
            {...register('year', {valueAsNumber: true})}
          >
            {END_YEARS.map(elem => {
              return <option key={elem} value={elem}>{elem}</option>
            })}
          </select>
        </div>
        <div className="form-control flex-1">
          <Input
            id='make'
            label='Make'
            type="text"
            placeholder="Please enter make"
            register={register}
          />
        </div>
        <div className="form-control flex-1">
          <Input
            id='model'
            label='Model'
            type="text"
            placeholder="Please enter model"
            register={register}
          />
        </div>
      </div>

      <div className='flex gap-2 mb-4'>
        <div className="form-control flex-1">
          <label htmlFor='transmissionType' className="label">
            <span className="label-text">Transmission</span>
          </label>
          <select
            id='transmissionType'
            className="select select-bordered w-full"
            {...register('transmission')}
          >
            {TRANSMISSION_TYPES.map(elem => {
              return <option key={elem} value={elem}>{elem}</option>
            })}
          </select
          >
        </div>
        <div className="form-control flex-1">
          <Input
            id='mileage'
            label='Mileage(km)'
            type="number"
            placeholder="Please enter mileage"
            register={register}
            registerOptions={{valueAsNumber: true}}
          />
        </div>
      </div>

      <div className='flex gap-2 mb-4'>
        <div className="form-control w-full">
          <label htmlFor='carOptions' className="label">
            <span className="label-text">Special options/equipment</span>
          </label>
          <textarea
            id='carOptions'
            className="textarea textarea-bordered h-36"
            placeholder="For example: sport package, long-range battery, FSD or other important factory-installed features"
            {...register('equipment')}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
