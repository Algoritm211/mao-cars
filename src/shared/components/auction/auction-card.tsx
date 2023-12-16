import { Auction } from '@/maocars-client/schemas';
import React from 'react';

import { CardBidLabel } from '@/shared/components/card-bid-label/card-bid-label';

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
          <div className="badge badge-primary badge-outline">No Reserve</div>
          <div className="badge badge-secondary badge-outline">Reserved</div>
          {has_inspection && <div className="badge badge-accent badge-outline">Inspected</div>}
        </div>
      </div>
    </div>
  );
};
