/* eslint-disable */

/**
 * Generated by orval 🍺
 * Do not edit manually.
 * mao-cars-api
 */
import type { Car } from './car';
import type { GetAuctionById200Stats } from './getAuctionById200Stats';
import type { GetAuctionById200Status } from './getAuctionById200Status';
import type { UserShort } from './userShort';

export type GetAuctionById200 = {
  listing: Car;
  no_reserve: boolean;
  seller: UserShort;
  shipping_quote_eligible: boolean;
  stats: GetAuctionById200Stats;
  status: GetAuctionById200Status;
  submission_id: string;
  views: number;
  watching: boolean;
};
