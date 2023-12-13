import React from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@/shared/components/icon/icon';
import { LoginModal } from '@/auth/components/login-modal/login-modal';
import { useTranslations } from 'next-intl';

interface Props {
  title: string | undefined;
  subTitle: string | undefined;
}

export const CarDetailsHeader: React.FC<Props> = ({ title, subTitle }) => {
  const pathname = usePathname();
  const t = useTranslations('Auction_Page.auction_details.auction_header');

  const onCopyLink = () => {
    const location = window?.location?.origin;
    void navigator.clipboard.writeText(`${location}${pathname}`);
  };
  return (
    <>
      <div className="px-2 mb-4 grid gap-2 md:grid-cols-[auto_40%] items-center">
        <div className="flex-grow-0">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h2 className="text-gray-600">{subTitle}</h2>
        </div>
        <div className="flex justify-around md:justify-end">
          <LoginModal>
            {(toggleModal) => {
              return (
                <button onClick={toggleModal} className="btn flex-grow mr-2 md:flex-grow-0">
                  <Icon name={'star'} className="w-6 h-6" />
                  {t('watch')}
                </button>
              );
            }}
          </LoginModal>
          <button className="btn flex-grow md:flex-grow-0" onClick={onCopyLink}>
            <Icon name={'share'} className="w-6 h-6" />
            {t('share')}
          </button>
        </div>
      </div>
    </>
  );
};
