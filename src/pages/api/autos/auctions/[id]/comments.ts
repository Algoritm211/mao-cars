import { NextApiRequest, NextApiResponse } from 'next';

import { cars } from '@/mocks/demo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id: auctionId } = req.query;
  const language = req.headers['content-language'] || 'en-US';
  const car = cars.find((elem) => elem[language].car.id === auctionId);
  if (!car) {
    return res.status(404).json({ message: 'Not found' });
  }
  const comments = car[language].comments;
  res.status(200).json({
    count: comments.length,
    comments_and_bids: comments,
  });
}
