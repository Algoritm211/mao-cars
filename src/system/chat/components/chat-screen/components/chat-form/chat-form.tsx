import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';

import { button, Icon } from '@/shared/components';
import { TextArea } from '@/shared/components/form';

interface Inputs {
  usersRequest: string;
}

export const ChatForm = () => {
  const t = useTranslations('Chat_page.form');
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const handleUsersRequest = (data: Inputs) => {
    alert(`You are trying to send ${data.usersRequest}`);
    reset();
  };

  return (
    <form className="mx-1" onSubmit={handleSubmit(handleUsersRequest)}>
      <div className="form-control relative">
        <TextArea
          id="usersRequest"
          className="w-full h-18 md:h-28 min-h-16 pr-16"
          label={t('users_request_label')}
          placeholder={t('users_request_placeholder')}
          register={register}
          registerOptions={{ required: true }}
        />
        <button className={button({ className: 'self-end mt-2 absolute bottom-2 right-2' })}>
          <Icon name="paper-airplane" className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};
