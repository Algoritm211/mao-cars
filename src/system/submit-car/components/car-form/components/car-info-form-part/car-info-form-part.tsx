import { useTranslations } from 'next-intl';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { END_YEARS, TRANSMISSION_OPTIONS } from '@/core/constants';

import { CarFormInputs } from '@/system/submit-car/components/car-form/models/models';

import {
  FormBlockWrapper,
  FormErrors,
  Input,
  TextArea,
  radioStyles,
} from '@/shared/components/form';
import { requiredRadioValidator } from '@/shared/utils/validators/required-radio-validator';

export const CarInfoFormPart = () => {
  const t = useTranslations('Car_submit_page.form.car_info');
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext<CarFormInputs>();

  const isModified = watch('isModified');
  const hasFlaws = watch('hasFlaws');

  return (
    <FormBlockWrapper title={t('section_title')}>
      <div className="form-control max-w-lg mb-4">
        <Input
          id="vin"
          label={t('vin')}
          type="text"
          placeholder={t('vin_placeholder')}
          register={register}
          errors={errors}
          registerOptions={{ required: true }}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <div className="form-control md:max-w-xs">
          <label htmlFor="carYear" className="label">
            <span className="label-text">{t('year')}</span>
          </label>
          <select
            id="carYear"
            className="select select-bordered w-full"
            {...register('year', { valueAsNumber: true })}
          >
            {END_YEARS.map((elem) => {
              return (
                <option key={elem} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-control flex-1">
          <Input
            id="make"
            label={t('make')}
            type="text"
            placeholder={t('make_placeholder')}
            register={register}
            errors={errors}
            registerOptions={{ required: true }}
          />
        </div>
        <div className="form-control flex-1">
          <Input
            id="model"
            label={t('model')}
            type="text"
            placeholder={t('model_placeholder')}
            register={register}
            errors={errors}
            registerOptions={{ required: true }}
          />
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <div className="form-control flex-1">
          <label htmlFor="transmissionType" className="label">
            <span className="label-text">{t('transmission')}</span>
          </label>
          <select
            id="transmissionType"
            className="select select-bordered w-full"
            {...register('transmission')}
          >
            {TRANSMISSION_OPTIONS.map((option) => {
              return (
                <option key={option.key} value={option.key}>
                  {t(`transmission_types.${option.label}`)}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-control flex-1">
          <Input
            id="mileage"
            label={t('mileage')}
            type="number"
            placeholder={t('mileage_placeholder')}
            register={register}
            errors={errors}
            registerOptions={{ valueAsNumber: true, value: 0, required: true }}
          />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="form-control w-full">
          <TextArea
            id="equipment"
            label={t('special_equipment')}
            placeholder={t('special_equipment_placeholder')}
            register={register}
          />
        </div>
      </div>

      <div className="form-control">
        <label id="is_car_modified">{t('is_car_modified')}</label>
        <div className="flex flex-wrap gap-2 mt-2 mb-2">
          <Controller
            name="isModified"
            control={control}
            rules={{ validate: requiredRadioValidator }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <input
                  type="radio"
                  {...radioStyles}
                  aria-label={t('modification_options.stock')}
                  onBlur={onBlur}
                  onChange={() => onChange(false)}
                  checked={value === false}
                  ref={ref}
                />
                <input
                  type="radio"
                  {...radioStyles}
                  aria-label={t('modification_options.modified')}
                  onBlur={onBlur}
                  onChange={() => onChange(true)}
                  checked={value === true}
                  ref={ref}
                />
              </>
            )}
          />
        </div>
        <FormErrors fieldId="isModified" errors={errors} />
      </div>

      {isModified && (
        <div className="flex mb-4">
          <div className="form-control w-full">
            <TextArea
              id="modifications"
              label={t('modifications_exist_label')}
              placeholder={t('modifications_exist_placeholder')}
              register={register}
            />
          </div>
        </div>
      )}

      <div className="form-control">
        <label id="is_car_has_flaws">{t('is_car_has_flaws')}</label>
        <div className="flex gap-2 mt-2 mb-2">
          <Controller
            name="hasFlaws"
            control={control}
            rules={{ validate: requiredRadioValidator }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <input
                  type="radio"
                  {...radioStyles}
                  aria-label={t('flaws_options.yes')}
                  onBlur={onBlur}
                  onChange={() => onChange(true)}
                  checked={value === true}
                  ref={ref}
                />
                <input
                  type="radio"
                  {...radioStyles}
                  aria-label={t('flaws_options.no')}
                  onBlur={onBlur}
                  onChange={() => onChange(false)}
                  checked={value === false}
                  ref={ref}
                />
              </>
            )}
          />
        </div>
        <FormErrors fieldId="hasFlaws" errors={errors} />
      </div>

      {hasFlaws && (
        <div className="flex mb-4">
          <div className="form-control w-full">
            <TextArea
              id="flaws"
              label={t('car_has_flaws_label')}
              placeholder={t('car_has_flaws_placeholder')}
              register={register}
            />
          </div>
        </div>
      )}
    </FormBlockWrapper>
  );
};
