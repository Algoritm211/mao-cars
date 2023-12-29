import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormBlockWrapper, Input } from '@/shared/components/form';

export const CharityFormPart = () => {
  const t = useTranslations('Car_submit_page.form.charity');
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const isMoneyForCharity: boolean = watch('isMoneyForCharity');

  return (
    <React.Fragment>
      <FormBlockWrapper
        title={t('section_charity_sum_title')}
        className="border-4 border-dashed border-red-200"
      >
        <div>
          <label className="label justify-start cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-md mr-2"
              {...register('isMoneyForCharity')}
            />
            <span className="label-text font-bold">{t('charity_label')}</span>
          </label>
        </div>

        {isMoneyForCharity && (
          <div className="w-full">
            <Input
              id="amountMoneyForCharity"
              label={t('charity_amount_label')}
              placeholder={t('charity_amount_placeholder')}
              className="max-w-md w-full"
              type="number"
              register={register}
              errors={errors}
              registerOptions={{ required: isMoneyForCharity, valueAsNumber: true }}
            />
          </div>
        )}
      </FormBlockWrapper>

      <FormBlockWrapper
        title={t('section_is_auto_for_ua_army')}
        className="border-4 border-dashed border-green-800"
      >
        <div>
          <label className="label justify-start cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-lg mr-2"
              {...register('isAutoForUAArmy')}
            />
            <span className="label-text font-bold">{t('is_auto_for_ua_army_label')}</span>
          </label>
        </div>
      </FormBlockWrapper>
    </React.Fragment>
  );
};
