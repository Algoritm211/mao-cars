import { useTranslations } from 'next-intl';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { CAR_OWNER } from '@/system/submit-car/components/car-form/constants/constants';

import { FormBlockWrapper, FormErrors, Input, RadioButton } from '@/shared/components/form';

export const UserInfoFormPart = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const translateCar = useTranslations('Common.car.owner');
  const translateForm = useTranslations('Car_submit_page.form.user_info');

  return (
    <FormBlockWrapper title={translateForm('section_title')}>
      <fieldset className="my-2">
        <label id="is_owner_private">{translateForm('dealer_or_private')}</label>
        <div className="flex gap-2 mt-2 mb-2">
          {CAR_OWNER.map((option) => {
            return (
              <RadioButton
                id="owner"
                key={option.key}
                label={translateCar(option.label)}
                value={option.key}
                register={register}
                registerOptions={{ required: true }}
                aria-labelledby="is_owner_private"
              />
            );
          })}
        </div>
        <FormErrors errors={errors} fieldId="owner" />
      </fieldset>
      <div className="flex flex-col w-full md:flex-row justify-between md:gap-6">
        <div className="form-control flex-1">
          <Input
            id="fullName"
            label={translateForm('full_name')}
            type="text"
            placeholder={translateForm('full_name_placeholder')}
            register={register}
            errors={errors}
            registerOptions={{ required: true }}
          />
        </div>
        <div className="form-control flex-1">
          <Input
            id="phone"
            label={translateForm('contact_phone_number')}
            type="tel"
            placeholder="+380980777779"
            register={register}
          />
        </div>
      </div>
    </FormBlockWrapper>
  );
};
