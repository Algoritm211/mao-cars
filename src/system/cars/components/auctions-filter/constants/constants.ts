import { GetAuctionsSort } from '@/maocars-client/schemas';

export const BODY_TYPES = [
  {
    key: 'all',
    label: 'all',
  },
  {
    key: 'coupe',
    label: 'coupe',
  },
  {
    key: 'convertible',
    label: 'convertible',
  },
  {
    key: 'hatchback',
    label: 'hatchback',
  },
  {
    key: 'sedan',
    label: 'sedan',
  },
  {
    key: 'suv',
    label: 'suv',
  },
  {
    key: 'truck',
    label: 'truck',
  },
  {
    key: 'van',
    label: 'van',
  },
  {
    key: 'wagon',
    label: 'wagon',
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
