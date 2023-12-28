import { useTranslations } from 'next-intl';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  CarInfoFormPart,
  CarPhotosFormPart,
  ReservePriceFormPart,
  TitleInfoFormPart,
  UserInfoFormPart,
} from '@/system/submit-car/components/car-form/components';
import { CharityFormPart } from '@/system/submit-car/components/car-form/components/charity-form-part/charity-form-part';
import { CarFormInputs } from '@/system/submit-car/components/car-form/models/models';

import { button, Icon } from '@/shared/components';

export const SubmitCar = () => {
  const t = useTranslations('Car_submit_page');
  const methods = useForm<CarFormInputs>();
  const { handleSubmit } = methods;

  const onSubmit = (data: CarFormInputs) => {
    console.log('DATA', data);
  };

  return (
    <FormProvider {...methods}>
      <div className="mx-2 md:mx-4">
        <h1 className="text-4xl font-bold">{t('description_section.section_title')}</h1>
        <p className="my-4">
          {t('description_section.needed_info_from_user')}
          <br />
          <br />
          {t('description_section.how_we_will_respond')}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <UserInfoFormPart />
        <CarInfoFormPart />
        <TitleInfoFormPart />
        <ReservePriceFormPart />
        <CarPhotosFormPart />
        <CharityFormPart />
        <div className="mb-4 mt-8 flex justify-center">
          <button type="submit" className={button()}>
            {t('form.submit_application')}
            <Icon name="arrow-right" className="w-4 h-4" />
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
