import { NextApiRequest, NextApiResponse } from 'next';

import { GetAuctionById200 } from '@/maocars-client/schemas';

import { auctionsById } from '@/mocks/demo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const language = req.headers['content-language'] || 'en-US';
  const { id: auctionId } = req.query;
  if (!auctionId) {
    return res.status(404).json({ message: 'Not found' });
  }
  const auction =
    auctionsById[language].find((elem) => elem.submission_id === auctionId)! ||
    auctionsById['en-US'].find((elem) => elem.submission_id === auctionId)!;
  res.status(200).json(auction);
}
