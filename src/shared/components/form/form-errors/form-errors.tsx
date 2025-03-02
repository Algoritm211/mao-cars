import { useTranslations } from 'next-intl';
import React from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';

interface Props {
  fieldId: string;
  errors: FieldErrors<FieldValues>;
}

export const FormErrors: React.FC<Props> = ({ fieldId, errors }) => {
  const t = useTranslations('Common.form.validation');
  const nodes: React.ReactNode[] = [];

  if (errors?.[fieldId]?.type === 'required') {
    nodes.push(
      <div key="required">
        <span role="alert" className="text-red-600">
          {t('required')}
        </span>
      </div>
    );
  }
  return nodes;
};
