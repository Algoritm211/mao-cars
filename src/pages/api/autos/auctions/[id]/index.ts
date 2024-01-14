import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';

import { GetAuctionById200 } from '@/maocars-client/schemas';

import { auctionsById } from '@/mocks/demo';

export default function handler(req: NextApiRequest, res: NextApiResponse<GetAuctionById200>) {
  res.status(200).json(faker.helpers.arrayElement(auctionsById));
}
