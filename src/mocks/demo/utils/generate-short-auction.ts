import { faker } from '@faker-js/faker';

import { Auction, AuctionStatus, GetAuctionById200 } from '@/maocars-client/schemas';

export const generateShortAuction = (auction: GetAuctionById200): Auction => {
  return {
    id: auction.submission_id,
    auction_end: auction.stats.auction_end,
    seller: auction.seller,
    current_bid: auction.stats.current_bid.amount,
    has_inspection: faker.datatype.boolean(),
    location: auction.listing.location,
    main_photo: {
      url: auction.listing.photos[0],
    },
    mileage: auction.listing.mileage,
    watching: auction.watching,
    title: auction.listing.title,
    sub_title: auction.listing.sub_title,
    status: auction.status as AuctionStatus,
    no_reserve: faker.datatype.boolean({ probability: 0.8 }),
    reserved: faker.datatype.boolean({ probability: 0.2 }),
    for_army_forces: faker.datatype.boolean({ probability: 0.3 }),
  };
};
