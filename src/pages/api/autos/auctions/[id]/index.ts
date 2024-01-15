import { NextApiRequest, NextApiResponse } from 'next';

import { GetAuctionById200 } from '@/maocars-client/schemas';

import { auctionsById } from '@/mocks/demo';

export default function handler(req: NextApiRequest, res: NextApiResponse<GetAuctionById200>) {
  const { id: auctionId } = req.query;
  if (!auctionId) {
    return res.status(404);
  }
  const auction = auctionsById.find((elem) => elem.submission_id === auctionId)!;
  res.status(200).json(auction);
}
