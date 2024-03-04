import { useTranslations } from 'next-intl';
import React, { ReactNode, useState } from 'react';

import { Modal } from '@/shared/components';

interface Props {
  children: (toggleModal: () => void, isAuth: boolean) => ReactNode;
}
export const LoginModal: React.FC<Props> = ({ children }) => {
  const isAuth = false;
  const t = useTranslations('Common.auth');
  const [isOpened, setIsOpened] = useState(false);

  const toggleModal = () => {
    setIsOpened(!isOpened);
  };

  return (
    <React.Fragment>
      {children(toggleModal, isAuth)}
      <Modal isOpen={isOpened} onClose={toggleModal}>
        <h3 className="font-bold text-lg text-center">{t('login')}</h3>
        <p className="text-center text-gray-600 mb-4">{t('choose_login_provider')}</p>
        <button className="border rounded w-9/12 mx-auto flex items-center justify-center p-1 hover:bg-gray-200 transition-all">
          <img className="w-8 h-8 mr-4" src="/auth/sign-in-google.png" alt="Google login logo" />
          <span>Continue with Google</span>
        </button>
      </Modal>
    </React.Fragment>
  );
};
