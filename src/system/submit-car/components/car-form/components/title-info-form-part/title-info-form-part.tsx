import { useTranslations } from 'next-intl';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { CAT_TITLE_OPTIONS } from '@/system/submit-car/components/car-form/constants/constants';

import { FormBlockWrapper, FormErrors, Input, RadioButton } from '@/shared/components/form';

export const TitleInfoFormPart = () => {
  const t = useTranslations('Car_submit_page.form.title_info');
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormBlockWrapper title={t('section_title')}>
      <fieldset className="my-2">
        <label id="where_is_car_titled">{t('where_is_car_titled')}</label>
        <div className="flex gap-2 mt-2 mb-2">
          {CAT_TITLE_OPTIONS.map((option) => {
            return (
              <RadioButton
                id="carTitle"
                key={option.key}
                value={option.key}
                label={t(`title_areas.${option.label}`)}
                register={register}
                aria-labelledby="where_is_car_titled"
              />
            );
          })}
        </div>
        <FormErrors fieldId="carTitle" errors={errors} />
      </fieldset>

      <div className="form-control max-w-xl">
        <Input
          id="location"
          label={t('location_label')}
          type="text"
          placeholder={t('location_placeholder')}
          register={register}
          errors={errors}
          registerOptions={{ required: true }}
        />
      </div>
    </FormBlockWrapper>
  );
};
