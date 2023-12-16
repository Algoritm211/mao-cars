import { Auction } from '@/maocars-client/schemas';
import { auctionSubtitles, auctionTitles } from '@/mocks/dev/data-buckets/auction-titles';
import { mainPhotos } from '@/mocks/dev/data-buckets/main-photos';
import { usersShort } from '@/mocks/dev/data-buckets/users';
import { faker } from '@faker-js/faker';

const generateAuctions = (count: number) => {
  const auctions: Auction[] = new Array(count).fill(null).map(() => {
    return {
      id: faker.string.uuid(),
      auction_end: faker.date.future().toISOString(),
      seller: faker.helpers.arrayElement(usersShort),
      current_bid: faker.number.float({ min: 1_500, max: 150_000 }),
      has_inspection: faker.datatype.boolean(),
      location: `${faker.location.city()} ${faker.location.state({
        abbreviated: true,
      })} ${faker.location.streetAddress()}`,
      main_photo: {
        url: faker.helpers.arrayElement(mainPhotos),
      },
      mileage: faker.number.int({ min: 10_000, max: 250_000 }),
      watching: faker.datatype.boolean(),
      title: faker.helpers.arrayElement(auctionTitles),
      status: faker.helpers.arrayElement(['live', 'ended']),
      sub_title: faker.helpers.arrayElement(auctionSubtitles),
    };
  });

  return auctions;
};

export const auctions = generateAuctions(20);
