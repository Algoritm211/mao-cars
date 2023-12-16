import { usersShort } from '@/mocks/dev/data-buckets/users';
import { faker } from '@faker-js/faker';

import { Comment } from '@/maocars-client/schemas';

const generateComments = (count: number): Comment[] => {
  return new Array(count).fill(null).map(() => {
    return {
      id: faker.string.uuid(),
      amount: faker.number.float({ min: 4000, max: 10_000 }),
      upvotes: faker.number.int({ min: 20, max: 150 }),
      type: faker.helpers.arrayElement(['text', 'bid']),
      text: faker.lorem.paragraph({ min: 2, max: 5 }),
      user: faker.helpers.arrayElement(usersShort),
      created_at: faker.date.past().toISOString(),
      updated_at: faker.date.past().toISOString(),
      deleted_at: faker.helpers.arrayElement([faker.date.past().toISOString(), undefined]),
    };
  });
};

export const comments = generateComments(150);
