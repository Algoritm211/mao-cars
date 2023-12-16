import { Auction } from '@/maocars-client/schemas';
import React from 'react';

import { CardBidLabel, Badge } from '@/shared/components';

interface Props {
  auction: Auction;
  onCarDetailsClick?: () => void;
}

export const AuctionCard: React.FC<Props> = ({ auction, onCarDetailsClick }) => {
  const {
    current_bid,
    auction_end,
    title,
    sub_title,
    location,
    main_photo: { url },
    has_inspection,
  } = auction;

  return (
    <div
      className="card card-compact w-80 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all"
      onClick={onCarDetailsClick}
    >
      <figure className="relative">
        <img src={url} className="w-80 h-52 object-cover" alt={title} />
        <div className="absolute bottom-1 left-1">
          <CardBidLabel price={current_bid} endDate={new Date(auction_end)} currency={'USD'} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* Car specs */}
        <p>{sub_title}</p>
        {/* Address */}
        <p className="text-gray-500">{location}</p>
        <div className="card-actions">
          <Badge variant='primary' title='No Reserve' />
          <Badge variant='secondary' title='Reserved' />
          {has_inspection && <Badge variant='accent' title='Inspected' />}
        </div>
      </div>
    </div>
  );
};
