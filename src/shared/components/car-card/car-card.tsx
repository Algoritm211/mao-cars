import React from 'react';
import BidTimer from "@/shared/components/bid-timer/bid-timer";

const CarCard = () => {
  const dayPlusOne = new Date().setDate(new Date().getDate() + 1);
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all">
      <figure className='relative'>
        <img src="/rr-mock.jpeg" alt="Car"/>
        <div className='absolute bottom-1 left-1'>
          <BidTimer price={150_000} endDate={new Date()} currency={'USD'} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">2010 Rolls-Royce Phantom Extended </h2>
        {/* Car specs */}
        <p>~34,000 Miles, V12 Power, Mostly Unmodified, Florida- and California-Owned</p>
        {/* Address */}
        <p className='text-gray-500'>Kyiv, Klovsky descent 18/34</p>
        <div className="card-actions">
          <div className="badge badge-primary badge-outline">No Reserve</div>
          <div className="badge badge-secondary badge-outline">Reserved</div>
          <div className="badge badge-accent badge-outline">Inspected</div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
