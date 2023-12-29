import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Modal } from '@/shared/components';
import { TextArea } from '@/shared/components/form';

interface ProfileInputs {
  profilePhotos: FileList;
  profileBio: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const EditAccountModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const t = useTranslations('Account_Page.edit_profile_modal');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ProfileInputs>();

  const profilePhotos = watch('profilePhotos');

  const onSubmitProfileEdit = (data: ProfileInputs) => {
    console.log('Updated user`s profile', data);
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="font-bold text-2xl">{t('edit_profile')}</h3>
      <div className="avatar flex justify-center">
        <div className="w-36 rounded-full">
          <img
            src={
              profilePhotos?.[0]
                ? URL.createObjectURL(profilePhotos?.[0] as unknown as File)
                : '/user/mock-user-photo.jpeg'
            }
            alt={t('user_photo_alt')}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmitProfileEdit)}>
        <div className="form-control w-full mb-4">
          <label className="label" htmlFor="file-input-profile">
            <span className="font-bold">{t('pick_photo')}</span>
          </label>
          <input
            {...register('profilePhotos')}
            id="file-input-profile"
            type="file"
            accept="image/png, image/jpeg"
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <TextArea
            id="profileBio"
            label={t('bio')}
            labelClassname="font-bold"
            placeholder={t('bio_placeholder')}
            register={register}
            errors={errors}
            registerOptions={{ required: true }}
          />
          <div className="modal-action">
            <button className="btn btn-primary">{t('save')}</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
