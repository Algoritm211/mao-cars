import React from 'react';
import CardBidLabel from "@/shared/components/card-bid-label/card-bid-label";
import {useRouter} from "next/router";

const CarCard = () => {
  const router = useRouter();
  const dayPlusOne = new Date(new Date().setDate(new Date().getDate() + 1));

  const onCarDetails = () => {
    void router.push('/cars/1')
  }
  return (
    <div
      className="card card-compact w-80 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all"
      onClick={onCarDetails}
    >
      <figure className='relative'>
        <img src="/rr-mock.jpeg" className='w-80 h-52 object-cover' alt="Car"/>
        <div className='absolute bottom-1 left-1'>
          <CardBidLabel price={150_000} endDate={dayPlusOne} currency={'USD'} />
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
