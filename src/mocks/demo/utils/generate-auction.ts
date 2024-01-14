import { faker } from '@faker-js/faker';

import { Car, Comment, GetAuctionById200 } from '@/maocars-client/schemas';

import { jaguar } from '@/mocks/demo/data-buckets/jaguar';
import { usersShort } from '@/mocks/demo/data-buckets/users-short';

export const generateAuction = (car: Car, comments: Comment[]): GetAuctionById200 => {
  return {
    submission_id: car.id,
    seller: faker.helpers.arrayElement(usersShort),
    status: faker.helpers.arrayElement(['live', 'end']),
    watching: faker.datatype.boolean(),
    no_reserve: faker.datatype.boolean(),
    stats: {
      auction_end: faker.date.future().toISOString(),
      bids: comments.filter((elem) => elem.type === 'bid').length,
      current_bid: {
        amount: comments.find((elem) => elem.type === 'bid')?.amount!,
        bidder: comments.find((elem) => elem.type === 'bid')?.user!,
      },
      comments: comments.length,
      questions: comments.length,
      watchers: faker.number.int({ min: 100, max: 5000 }),
    },
    views: faker.number.int({ min: 5000, max: 50_000 }),
    shipping_quote_eligible: faker.datatype.boolean(),
    listing: jaguar,
  };
};
