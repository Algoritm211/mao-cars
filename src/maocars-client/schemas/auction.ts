/* eslint-disable */
/**
 * Generated by orval 🍺
 * Do not edit manually.
 * mao-cars-api
 */
import type { AuctionMainPhoto } from './auctionMainPhoto';
import type { UserShort } from './userShort';
import type { AuctionStatus } from './auctionStatus';

export interface Auction {
  auction_end: string;
  current_bid: number;
  has_inspection: boolean;
  id: string;
  location: string;
  main_photo: AuctionMainPhoto;
  mileage: number;
  seller: UserShort;
  status: AuctionStatus;
  sub_title: string;
  title: string;
  watching: boolean;
}
