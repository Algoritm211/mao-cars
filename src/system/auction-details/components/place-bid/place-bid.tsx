import { LoginModal } from '@/auth/components/login-modal/login-modal';
import { useTranslations } from 'next-intl';
import React from 'react';

import { GetAuctionById200Stats } from '@/maocars-client/schemas';

import { button } from '@/shared/components/button/button';
import { Timer } from '@/shared/components/timer/timer';
import { currencyFormatter } from '@/shared/utils/currency-formatter/currency-formatter';

interface Props {
  stats: GetAuctionById200Stats;
}

export const PlaceBid: React.FC<Props> = ({ stats }) => {
  const t = useTranslations('Auction_Page.auction_details.place_bid_panel');
  const {
    auction_end,
    current_bid: { amount },
    bids,
    comments,
  } = stats;
  const onPlaceBid = () => {
    console.log('BID PLACED');
  };

  return (
    <div className="flex flex-col md:flex-row mt-2 px-2 md:px-0 gap-1 md:gap-6">
      <ul className="bg-gray-800 text-white flex flex-grow justify-between rounded p-3">
        <li className="flex flex-col items-center basis-1/2 md:basis-1/4">
          <span className="text-gray-400">{t('time_left')}</span>
          <span>
            <Timer endDate={new Date(auction_end)} />
          </span>
        </li>
        <li className="flex flex-col items-center basis-1/2 md:basis-1/4">
          <span className="text-gray-400">{t('high_bid')}</span>
          <span>{currencyFormatter(amount)}</span>
        </li>
        <li className="hidden md:flex flex-col items-center basis-1/4">
          <span className="text-gray-400">{t('bids_count')}</span>
          <span>{bids}</span>
        </li>
        <li className="hidden md:flex flex-col items-center basis-1/4">
          <span className="text-gray-400">{t('comments')}</span>
          <span>{comments}</span>
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
