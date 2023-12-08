import React from 'react';
import { Timer } from '@/shared/components/timer/timer';
import { currencyFormatter } from '@/shared/utils/currency-formatter/currency-formatter';
import { LoginModal } from '@/auth/components/login-modal/login-modal';
import { button } from '@/shared/components/button/button';
import { useTranslations } from 'next-intl';

interface Props {
  endDate: string;
  price: number;
}

export const PlaceBid: React.FC<Props> = ({ endDate, price }) => {
  const t = useTranslations('Auction_Page.auction_details.place_bid_panel');
  const onPlaceBid = () => {
    console.log('BID PLACED');
  };

  return (
    <div className="flex flex-col md:flex-row mt-2 px-2 md:px-0 gap-1 md:gap-6">
      <ul className="bg-gray-800 text-white flex flex-grow justify-between rounded p-3">
        <li className="flex flex-col items-center basis-1/2 md:basis-1/4">
          <span className="text-gray-400">{t('time_left')}</span>
          <span>
            <Timer endDate={new Date(endDate)} />
          </span>
        </li>
        <li className="flex flex-col items-center basis-1/2 md:basis-1/4">
          <span className="text-gray-400">{t('high_bid')}</span>
          <span>{currencyFormatter(price)}</span>
        </li>
        <li className="hidden md:flex flex-col items-center basis-1/4">
          <span className="text-gray-400">{t('bids_count')}</span>
          <span>34</span>
        </li>
        <li className="hidden md:flex flex-col items-center basis-1/4">
          <span className="text-gray-400">{t('comments')}</span>
          <span>9</span>
        </li>
      </ul>
      <div>
        <LoginModal>
          {(toggleModal, isAuth) => {
            return (
              <button
                onClick={!isAuth ? toggleModal : onPlaceBid}
                className={button({ className: 'w-full h-full md:w-auto' })}
              >
                {t('place_bid')}
              </button>
            );
          }}
        </LoginModal>
      </div>
    </div>
  );
};
