import { useTranslations } from 'next-intl';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckboxInput, FormBlockWrapper, Input } from '@/shared/components/form';

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
        <CheckboxInput
          id="isMoneyForCharity"
          checkboxType="md"
          variant="primary"
          register={register}
          label={t('charity_label')}
        />

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
        <CheckboxInput
          id="isAutoForUAArmy"
          checkboxType="lg"
          variant="primary"
          register={register}
          label={t('is_auto_for_ua_army_label')}
        />
      </FormBlockWrapper>
    </React.Fragment>
  );
};
