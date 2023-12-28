import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormBlockWrapper, FormErrors, Input } from '@/shared/components/form';

export const CharityFormPart = () => {
  const t = useTranslations('Car_submit_page.form.charity');
  const {
    register,
    formState: { errors },
    watch,
    resetField,
  } = useFormContext();

  const isMoneyForCharity: boolean = watch('isMoneyForCharity');
  const isAutoForUAArmy: boolean = watch('isAutoForUAArmy');

  useEffect(() => {
    if (isAutoForUAArmy) {
      resetField('isMoneyForCharity');
      resetField('amountMoneyForCharity');
    }
  }, [isAutoForUAArmy, resetField]);

  return (
    <React.Fragment>
      <FormBlockWrapper
        title={t('section_charity_sum_title')}
        className="border-4 border-dashed border-red-200"
        disabled={isAutoForUAArmy}
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
              registerOptions={{ required: isMoneyForCharity, valueAsNumber: true }}
            />
            <FormErrors fieldId="amountMoneyForCharity" errors={errors} />
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
