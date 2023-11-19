import {Seller} from "@/core/interfaces/api/seller";

export interface AuctionExtended {
  submission_id?:           string;
  no_reserve?:              boolean;
  watching?:                boolean;
  shipping_quote_eligible?: boolean;
  views?:                   number;
  status?:                  string;
  stats:                   Stats;
  seller?:                  Seller;
  listing:                 Listing;
}

export interface Listing {
  title?:               string;
  sub_title?:           string;
  title_status?: string;
  make?:                string;
  model?:               string;
  id?:                  string;
  mileage?:             number;
  seller_type?:         string;
  vin?:                 string;
  year?:                number;
  transmission?:        string;
  transmisson_details?: string;
  location?:            string;
  interior_color?:      string;
  sections:            Sections;
  photos?:              string[];
  exterior_color?:      string;
  body_style?:          string;
  engine?:              string;
  drive_train?:         string;
  history_report?:      HistoryReport;
}

export interface HistoryReport {
  url?:    string;
  expiry?: Date;
  vendor?: string;
}

export interface Sections {
  equipment:              string;
  highlights:             string;
  known_flaws:            string;
  other_items:            string;
  ownership_history:      string;
  recent_service_history: string;
  modifications: string;
  videos?:                 string[];
}

export interface Stats {
  auction_end?: Date;
  bids?:        number;
  comments?:    number;
  questions?:   number;
  watchers?:    number;
  current_bid: CurrentBid;
}

export interface CurrentBid {
  amount: number;
  bidder: Seller;
}
