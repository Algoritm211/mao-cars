import React from 'react';
import { Icon } from '@/shared/components';
import { currencyFormatter } from '@/shared/utils/currency-formatter/currency-formatter';
import { defaultDateFormatter } from '@/shared/utils/date-formatter/date-formatter';
import { GetAuctionById200 } from '@/maocars-client/schemas';

interface Props {
  auction: GetAuctionById200;
}

export const AuctionStatistics: React.FC<Props> = ({ auction }) => {
  const {
    current_bid: { bidder: currentBidder, amount },
    auction_end,
    bids,
    watchers,
  } = auction.stats;

  return (
    <div className="my-4">
      <div className="mb-2">
        <h3 className="text-2xl font-bold flex">
          <span>{auction.listing.title}</span>
        </h3>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2
        border border-gray-300 rounded p-4"
      >
        <div className="hidden md:block">
          <div className="flex gap-2">
            <div className="font-bold">Current bid:</div>
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-4 rounded-full">
                  <img src={currentBidder?.photo || '/user/no-user.jpeg'} alt="bidder photo" />
                </div>
              </div>
              <span className="ml-2">{currentBidder?.username}</span>
            </div>
          </div>

          <div className="text-7xl font-bold">{currencyFormatter(amount)}</div>
        </div>
        <div>
          <ul>
            <li className="grid grid-cols-[33%_67%] md:grid-cols-[20%_80%] md:hidden">
              <div className="font-bold">Current bid:</div>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <span className="font-bold mr-2">{currencyFormatter(amount)}</span>
                  <div className="avatar">
                    <div className="w-4 rounded-full">
                      <img src={currentBidder?.photo || '/user/no-user.jpeg'} alt="seller photo" />
                    </div>
                  </div>
                  <span className="ml-2">{currentBidder?.username}</span>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-[33%_67%] md:grid-cols-[20%_80%]">
              <div className="font-bold">Seller</div>
              <div className="flex items-center">
                <div className="avatar">
                  <div className="w-4 rounded-full">
                    <img src={auction.seller?.photo || '/user/no-user.jpeg'} alt="seller photo" />
                  </div>
                </div>
                <span className="ml-2">{auction.seller?.username}</span>
              </div>
            </li>
            <li className="grid grid-cols-[33%_67%] md:grid-cols-[20%_80%]">
              <div className="font-bold">Ending</div>
              <div>
                <Icon name="calendar" className="w-4 h-4 inline-block mr-2" />
                <span suppressHydrationWarning>{defaultDateFormatter(new Date(auction_end!))}</span>
              </div>
            </li>
            <li className="grid grid-cols-[33%_67%] md:grid-cols-[20%_80%]">
              <div className="font-bold">Bids</div>
              <div>
                <Icon name="hashtag" className="w-4 h-4 inline-block mr-2" />
                <span>{bids}</span>
              </div>
            </li>
            <li className="grid grid-cols-[33%_67%] md:grid-cols-[20%_80%]">
              <div className="font-bold">Views</div>
              <div>
                <Icon name="eye" className="w-4 h-4 inline-block mr-2" />
                <span>{new Intl.NumberFormat('en-EN').format(watchers!)}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
