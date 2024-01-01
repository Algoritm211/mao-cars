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
    label: 'all',
  },
  {
    key: 'automatic',
    label: 'automatic',
  },
  {
    key: 'manual',
    label: 'manual',
  },
] as const;

interface TransmissionOption {
  key: string;
  label: keyof Messages['Car_submit_page']['form']['car_info']['transmission_types'];
}

export const TRANSMISSION_OPTIONS: TransmissionOption[] = [
  {
    key: 'automatic',
    label: 'automatic',
  },
  {
    key: 'manual',
    label: 'manual',
  },
];
