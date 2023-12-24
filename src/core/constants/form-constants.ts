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
export const TRANSMISSION_FILTER_TYPES = [
  {
    key: 'all',
    label: 'transmission.all',
  },
  {
    key: 'automatic',
    label: 'transmission.automatic',
  },
  {
    key: 'manual',
    label: 'transmission.manual',
  },
] as const;

interface TransmissionOption {
  key: string;
  label: `transmission_types.${keyof Messages['Car_submit_page']['form']['car_info']['transmission_types']}`;
}

export const TRANSMISSION_OPTIONS: TransmissionOption[] = [
  {
    key: 'automatic',
    label: 'transmission_types.automatic',
  },
  {
    key: 'manual',
    label: 'transmission_types.manual',
  },
];
