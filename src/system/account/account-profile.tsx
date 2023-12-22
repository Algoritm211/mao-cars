import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { EditAccountModal } from '@/system/account/components/edit-account-modal/edit-account-modal';

import { useGetProfileById } from '@/maocars-client/maocars';

import { EntityContainer } from '@/shared/components';

export const AccountProfile = () => {
  const router = useRouter();
  const t = useTranslations('Account_Page.profile');
  const getProfileByIdQuery = useGetProfileById(router.query?.id as string);

  const [isOpenEditProfileModal, setIsOpenEditProfileModal] = useState(false);

  return (
    <EntityContainer query={getProfileByIdQuery}>
      {({ profile }) => {
        return (
          <React.Fragment>
            <div
              className="flex flex-col justify-center items-center
              flex-wrap mt-6 md:mt-0 md:flex-row
              md:justify-start md:items-start gap-4"
            >
              <div className="avatar">
                <div className="w-40 rounded-full">
                  <img
                    src={profile.profile_info?.photo || '/user/mock-user-photo.jpeg'}
                    alt="Photo of the user"
                  />
                </div>
              </div>
              <div className="flex-grow text-center md:mt-6 md:text-start">
                <h1 className="text-3xl font-bold">{profile.profile_info.username}</h1>
                <p className="text-gray-500 py-2" suppressHydrationWarning>
                  {t('joined', {
                    date: new Date(profile.profile_info.created_at).toLocaleDateString(),
                  })}
                </p>
              </div>
              <button
                className="btn justify-self-end md:mt-6 md:mr-2"
                onClick={() => setIsOpenEditProfileModal(true)}
              >
                {t('edit_profile')}
              </button>
            </div>

            <div className="px-2 mt-2">
              <div className="font-bold">{t('bio')}</div>
              <p>{profile.profile_info.bio}</p>
            </div>

            <EditAccountModal
              isOpen={isOpenEditProfileModal}
              onClose={() => setIsOpenEditProfileModal(false)}
            />
          </React.Fragment>
        );
      }}
    </EntityContainer>
  );
};
