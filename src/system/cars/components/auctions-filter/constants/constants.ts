import { GetAuctionsSort } from '@/maocars-client/schemas';

export const BODY_TYPES = [
  {
    key: 'all',
    label: 'body_style.all',
  },
  {
    key: 'coupe',
    label: 'body_style.coupe',
  },
  {
    key: 'convertible',
    label: 'body_style.convertible',
  },
  {
    key: 'hatchback',
    label: 'body_style.hatchback',
  },
  {
    key: 'sedan',
    label: 'body_style.sedan',
  },
  {
    key: 'suv',
    label: 'body_style.suv',
  },
  {
    key: 'truck',
    label: 'body_style.truck',
  },
  {
    key: 'van',
    label: 'body_style.van',
  },
  {
    key: 'wagon',
    label: 'body_style.wagon',
  },
] as const;

interface SortParam {
  key: GetAuctionsSort;
  label: keyof Messages['Main_Page']['filter']['auction_sort'];
}

export const AUCTION_SORT: SortParam[] = [
  {
    key: 'lowest_mileage',
    label: 'lowest_mileage',
  },
  {
    key: 'newly_listed',
    label: 'newly_listed',
  },
  {
    key: 'no_reserve',
    label: 'no_reserve',
  },
  {
    key: 'charity',
    label: 'charity',
  },
];
