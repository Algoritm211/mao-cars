import { TransmissionType } from '@/core/interfaces';

export const START_YEAR = 1980;
export const END_YEAR = new Date().getFullYear() + 1;
export const START_YEARS = Array(END_YEAR - START_YEAR)
  .fill(null)
  .map((_, index) => {
    return index + START_YEAR;
  });

export const END_YEARS = [...START_YEARS].reverse();

/**
 * Only for usage in filters
 */
export const TRANSMISSION_FILTER_TYPES: TransmissionType[] = [
  TransmissionType.All,
  TransmissionType.Automatic,
  TransmissionType.Manual,
];

export const TRANSMISSION_TYPES: TransmissionType[] = [
  TransmissionType.Automatic,
  TransmissionType.Manual,
];

export enum AuctionsSort {
  NewlyListed = 'Newly Listed',
  LowestMileage = 'Lowest mileage',
  NoReserve = 'No Reserve',
}
