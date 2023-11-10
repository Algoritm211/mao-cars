import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {END_YEARS, TRANSMISSION_TYPES} from "@/core/constants";
import {CarFormInputs} from "@/system/submit-car/components/car-form/models/models";
import {requiredRadioValidator} from "@/shared/utils/validators/required-radio-validator";
import {FormErrors, radioStyles, TextArea, Input, FormBlockWrapper} from "@/shared/components/form";

export const CarInfoFormPart = () => {
  const {
    register,
    watch,
    control,
    formState: {errors},
  } = useFormContext<CarFormInputs>();

  const isModified = watch('isModified');
  const hasFlaws = watch('hasFlaws');

  return (
    <FormBlockWrapper title='Car Details'>
      <div className="form-control max-w-lg mb-4">
        <Input
          id='vin'
          label='VIN'
          type="text"
          placeholder="Please ented VIN of your car"
          register={register}
          errors={errors}
          registerOptions={{required: true}}
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
            errors={errors}
            registerOptions={{required: true}}
          />
        </div>
        <div className="form-control flex-1">
          <Input
            id='model'
            label='Model'
            type="text"
            placeholder="Please enter model"
            register={register}
            errors={errors}
            registerOptions={{required: true}}
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
            errors={errors}
            registerOptions={{valueAsNumber: true, value: 0, required: true}}
          />
        </div>
      </div>

      <div className='flex mb-4'>
        <div className="form-control w-full">
          <TextArea
            id='equipment'
            label='Special options/equipment'
            placeholder="For example: sport package, long-range battery, FSD or other important factory-installed features"
            register={register}/>
        </div>
      </div>

      <div className='form-control'>
        <label id='is_car_modified'>Has the car been modified?</label>
        <div className='flex gap-2 mt-2 mb-2'>
          <Controller
            name='isModified'
            control={control}
            rules={{validate: requiredRadioValidator}}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <>
                <input
                  type="radio"
                  {...radioStyles}
                  aria-label='Stock'
                  onBlur={onBlur}
                  onChange={() => onChange(false)}
                  checked={value === false}
                  ref={ref}
                />
                <input
                  type="radio"
                  {...radioStyles}
                  aria-label='Modified'
                  onBlur={onBlur}
                  onChange={() => onChange(true)}
                  checked={value === true}
                  ref={ref}
                />
              </>
            )}/>
        </div>
        <FormErrors fieldId='isModified' errors={errors}/>
      </div>

      {isModified && (
        <div className='flex mb-4'>
          <div className="form-control w-full">
            <TextArea
              id='modifications'
              label='List any modifications, including modification or removal of the catalytic converters.'
              placeholder="For example: modified exhaust, some features in car's interior"
              register={register}/>
          </div>
        </div>
      )}

      <div className='form-control'>
        <label id='is_car_has_flaws'>Are there any significant mechanical or cosmetic flaws that we should know
          about?</label>
        <div className='flex gap-2 mt-2 mb-2'>
          <Controller
            name='hasFlaws'
            control={control}
            rules={{validate: requiredRadioValidator}}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <>
                <input
                  type="radio"
                  {...radioStyles}
                  aria-label='Yes'
                  onBlur={onBlur}
                  onChange={() => onChange(true)}
                  checked={value === true}
                  ref={ref}
                />
                <input
                  type="radio"
                  {...radioStyles}
                  aria-label='No'
                  onBlur={onBlur}
                  onChange={() => onChange(false)}
                  checked={value === false}
                  ref={ref}
                />
              </>
            )}/>
        </div>
        <FormErrors fieldId='hasFlaws' errors={errors}/>
      </div>

      {hasFlaws && (
        <div className='flex mb-4'>
          <div className="form-control w-full">
            <TextArea
              id='flaws'
              label='Please give details.'
              placeholder="For example: scratch on the right door"
              register={register}/>
          </div>
        </div>
      )}
    </FormBlockWrapper>
  );
};
