import { GetAuctions200 } from '@/maocars-client/schemas';
import { NextApiRequest, NextApiResponse } from 'next';
import {auctions} from "@/pages/api/mocks/dev/route-responses/auctions";

export default function handler(req: NextApiRequest, res: NextApiResponse<GetAuctions200>) {
  res.status(200).json({
    count: 20,
    total: 350,
    auctions: auctions,
  });
}
