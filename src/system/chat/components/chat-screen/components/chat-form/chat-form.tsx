import React from 'react';
import { useForm } from 'react-hook-form';

import { button, Icon } from '@/shared/components';
import { TextArea } from '@/shared/components/form';

interface Inputs {
  usersRequest: string;
}

export const ChatForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const handleUsersRequest = (data: Inputs) => {
    alert(`You are trying to send ${data.usersRequest}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleUsersRequest)}>
      <div className="form-control relative">
        <TextArea
          id="usersRequest"
          className="w-full h-20 md:h-28 min-h-16 pr-16"
          label="What car do you want?"
          placeholder="Briefly describe a couple of requirements for your new car"
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
