import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';

import { GetProfileById200 } from '@/maocars-client/schemas';

import { users } from '@/mocks/dev';

export default function handler(req: NextApiRequest, res: NextApiResponse<GetProfileById200>) {
  res.status(200).json({
    profile: faker.helpers.arrayElement(users),
  });
}
