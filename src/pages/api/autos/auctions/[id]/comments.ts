import { NextApiRequest, NextApiResponse } from 'next';
import { GetCommentsByAuctionId200 } from '@/maocars-client/schemas';
import { faker } from '@faker-js/faker';
import { comments } from '@/pages/api/mocks/dev/route-responses/auction-comments-by-id';

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
