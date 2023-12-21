import { Auction } from '@/maocars-client/schemas';

import { BadgeConfig } from '@/shared/components/badge/models/badge-config';

export const AUCTION_CAR_BADGES: BadgeConfig<Auction>[] = [
  {
    key: 'has_inspection',
    variant: 'accent',
    title: 'auction.has_inspection',
  },
  {
    key: 'reserved',
    variant: 'secondary',
    title: 'auction.no_reserve',
  },
  {
    key: 'no_reserve',
    variant: 'primary',
    title: 'auction.reserved',
  },
];
