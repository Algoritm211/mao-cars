import { NextApiRequest, NextApiResponse } from 'next';
import { GetAuctionById200 } from '@/maocars-client/schemas';
import { faker } from '@faker-js/faker';
import { auctionsById } from '@/mocks/dev/route-responses/auction-by-id';

export default function handler(req: NextApiRequest, res: NextApiResponse<GetAuctionById200>) {
  res.status(200).json(faker.helpers.arrayElement(auctionsById));
}
