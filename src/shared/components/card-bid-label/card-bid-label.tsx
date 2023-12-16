import React from 'react';

import { Icon } from '@/shared/components/icon/icon';
import { Timer } from '@/shared/components/timer/timer';
import { currencyFormatter } from '@/shared/utils/currency-formatter/currency-formatter';

interface Props {
  price: number;
  currency: 'UAH' | 'USD';
  endDate: Date;
}

export const CardBidLabel: React.FC<Props> = ({ price, endDate, currency }) => {
  return (
    <div className="opacity-90 bg-gray-950 text-md px-2 py-1 rounded-xl text-white">
      <span className="mr-2">
        <Icon name={'clock'} className="w-4 h-4 mr-1 mb-0.5 inline text-gray-300" />
        <Timer endDate={endDate} />
      </span>
      <span>
        <span className="text-gray-300">Bid: </span>
        {currencyFormatter(price)}
      </span>
    </div>
  );
};
