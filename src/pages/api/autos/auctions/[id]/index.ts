import { auctionsById } from '@/mocks/dev/route-responses/auction-by-id';
import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';

import { GetAuctionById200 } from '@/maocars-client/schemas';

export default function handler(req: NextApiRequest, res: NextApiResponse<GetAuctionById200>) {
  res.status(200).json(faker.helpers.arrayElement(auctionsById));
}
