import React from 'react';

import { Auction } from '@/maocars-client/schemas';

import { CardBidLabel } from '@/shared/components';
import { AuctionCardRibbon } from '@/shared/components/auction/auction-card/auction-card-ribbon';

interface Props {
  auction: Auction;
  onCarDetailsClick?: () => void;
  badges?: React.JSX.Element;
  // Ribbon on the right corner of the card
  ribbonTitle?: string;
}

export const AuctionCard: React.FC<Props> = ({
  auction,
  badges,
  ribbonTitle,
  onCarDetailsClick,
}) => {
  const {
    current_bid,
    auction_end,
    title,
    sub_title,
    location,
    main_photo: { url },
  } = auction;

  return (
    <div
      className="card card-compact w-full bg-base-100
       shadow-xl cursor-pointer relative overflow-hidden hover:scale-105 transition-all"
      onClick={onCarDetailsClick}
    >
      {ribbonTitle && <AuctionCardRibbon ribbonTitle={ribbonTitle} />}
      <figure className="relative">
        <img src={url} className="w-full h-auto object-cover" alt={title} />
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
        <div className="card-actions">{badges}</div>
      </div>
    </div>
  );
};
