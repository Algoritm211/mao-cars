import { comments } from '@/mocks/dev/route-responses/auction-comments-by-id';
import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';

import { GetCommentsByAuctionId200 } from '@/maocars-client/schemas';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetCommentsByAuctionId200>
) {
  const resComments = faker.helpers.arrayElements(comments, { min: 5, max: 20 });
  res.status(200).json({
    count: resComments.length,
    comments_and_bids: resComments,
  });
}
