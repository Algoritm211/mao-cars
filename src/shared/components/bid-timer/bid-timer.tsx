import React, {useEffect, useState} from 'react';

interface Props {
  price: number;
  currency: 'UAH' | 'USD'
  endDate: Date
}

const BidTimer: React.FC<Props> = ({price, endDate, currency}) => {
  const [time, setTime] = useState(new Date(endDate).getTime());

  useEffect(() => {
    let countdown: NodeJS.Timeout = 0 as unknown as NodeJS.Timeout;

    if (typeof window !== 'undefined') {
      countdown = setInterval(() => {
        setTime((prevTime) => {
          const newTime = new Date(prevTime - 1000).getTime();
          return newTime;
        });
      }, 1000);
    }


    if (time === 0) {
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [time]);

  const currencyFormatter = Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format

  return (
    <div className='opacity-90 bg-gray-950 text-md px-2 py-1 rounded-xl text-white'>
      <span className='mr-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-4 h-4 mr-1 mb-0.5 inline text-gray-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <time suppressHydrationWarning>{new Date(time).toLocaleTimeString()}</time>
      </span>
      <span>
        <span className='text-gray-300'>Bid: </span>
        {currencyFormatter(price)}
      </span>
    </div>
  );
};

export default BidTimer;
