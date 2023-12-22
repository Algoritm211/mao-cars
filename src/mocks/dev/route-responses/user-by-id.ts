import { cars } from '@/mocks/dev/data-buckets/cars';
import { faker } from '@faker-js/faker';

import { User } from '@/maocars-client/schemas';

export const generateUsers = (count: number): User[] => {
  return new Array(count).fill(null).map(() => {
    return {
      id: faker.string.uuid(),
      profile_info: {
        bio: faker.lorem.paragraphs({ min: 2, max: 3 }),
        username: `${faker.person.firstName()} ${faker.person.lastName()}`,
        created_at: faker.date.past().toISOString(),
        photo: 'https://picsum.photos/300/300',
        reputation: faker.number.int({ min: 3, max: 20 }),
      },
      cars_auctioned: faker.helpers.arrayElements(cars, { min: 3, max: 10 }),
    };
  });
};

export const users = generateUsers(20);
