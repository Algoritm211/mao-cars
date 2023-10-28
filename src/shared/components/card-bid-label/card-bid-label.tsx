import React from 'react';
import {Timer} from "@/shared/components/timer/timer";
import {currencyFormatter} from "@/shared/utils/currency-formatter/currency-formatter";

interface Props {
  price: number;
  currency: 'UAH' | 'USD'
  endDate: Date
}

const CardBidLabel: React.FC<Props> = ({price, endDate, currency}) => {
  return (
    <div className='opacity-90 bg-gray-950 text-md px-2 py-1 rounded-xl text-white'>
      <span className='mr-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-4 h-4 mr-1 mb-0.5 inline text-gray-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <Timer endDate={endDate} />
      </span>
      <span>
        <span className='text-gray-300'>Bid: </span>
        {currencyFormatter(price)}
      </span>
    </div>
  );
};

export default CardBidLabel;
