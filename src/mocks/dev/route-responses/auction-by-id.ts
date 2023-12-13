import { GetAuctionById200, GetAuctionById200Status } from '@/maocars-client/schemas';
import { faker } from '@faker-js/faker';
import { usersShort } from '@/mocks/dev/data-buckets/users';
import { cars } from '@/mocks/dev/data-buckets/cars';

const generateAuction = (count: number): GetAuctionById200[] => {
  const statuses: GetAuctionById200Status[] = ['live', 'end'];
  return new Array(count).fill(null).map(() => {
    return {
      submission_id: faker.string.uuid(),
      seller: faker.helpers.arrayElement(usersShort),
      status: faker.helpers.arrayElement(statuses),
      watching: faker.datatype.boolean(),
      no_reserve: faker.datatype.boolean(),
      stats: {
        auction_end: faker.date.future().toISOString(),
        bids: faker.number.int({ min: 0, max: 20 }),
        current_bid: {
          amount: faker.number.float({ min: 3000, max: 140_000 }),
          bidder: faker.helpers.arrayElement(usersShort),
        },
        comments: faker.number.int({ min: 5, max: 20 }),
        questions: faker.number.int({ min: 1, max: 50 }),
        watchers: faker.number.int({ min: 100, max: 5000 }),
      },
      views: faker.number.int({ min: 5000, max: 50_000 }),
      shipping_quote_eligible: faker.datatype.boolean(),
      listing: faker.helpers.arrayElement(cars),
    };
  });
};

export const auctionsById = generateAuction(20);
