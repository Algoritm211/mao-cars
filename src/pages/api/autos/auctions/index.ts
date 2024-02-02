import { NextApiRequest, NextApiResponse } from 'next';

import { GetAuctions200 } from '@/maocars-client/schemas';

import { auctions } from '@/mocks/demo';

export default function handler(req: NextApiRequest, res: NextApiResponse<GetAuctions200>) {
  const language = req.headers['content-language'] || 'en-US';

  res.status(200).json({
    count: 20,
    total: 350,
    auctions: auctions[language],
  });
}
