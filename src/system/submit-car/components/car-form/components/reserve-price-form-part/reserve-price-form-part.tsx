import { useTranslations } from 'next-intl';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { FormBlockWrapper, Input } from '@/shared/components/form';

export const ReservePriceFormPart = () => {
  const t = useTranslations('Car_submit_page.form.reserve_price');
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormBlockWrapper title={t('section_title')}>
      <p className="bg-gray-200 p-4 m-2 rounded-xl my-4">{t('reserve_price_description')}</p>
      <div className="form-control max-w-xl">
        <Input
          id="reservePrice"
          label={t('reserve_price_label')}
          type="number"
          placeholder={t('reserve_price_placeholder')}
          register={register}
          errors={errors}
          registerOptions={{ valueAsNumber: true, value: 0, required: true }}
        />
      </div>
    </FormBlockWrapper>
  );
};
