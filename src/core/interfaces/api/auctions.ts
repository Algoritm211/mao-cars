import { Seller } from '@/core/interfaces/api/seller';

export interface Auction {
  id: string;
  auction_end: Date;
  current_bid: number;
  has_inspection: boolean;
  location: string;
  main_photo: MainPhoto;
  seller: Seller;
  mileage: number;
  status: string;
  sub_title: string;
  title: string;
  watching: boolean;
}

export interface MainPhoto {
  url?: string;
}

export interface GetAuctionDTO {
  count: number;
  total: number;
  auctions: Auction[];
}
