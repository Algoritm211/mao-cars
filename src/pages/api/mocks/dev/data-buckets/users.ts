import { UserShort } from '@/maocars-client/schemas';
import { faker } from '@faker-js/faker';

const generateUsers = (count: number): UserShort[] => {
  return new Array(count).fill(null).map(() => {
    return {
      id: faker.string.uuid(),
      username: `${faker.person.firstName()} ${faker.person.lastName()}`,
      photo: 'https://picsum.photos/300/300',
    };
  });
};

export const usersShort: UserShort[] = generateUsers(20);
