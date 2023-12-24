// export const CAR_OWNER = ['dealer', 'private'];
import { CarSellerType } from '@/maocars-client/schemas';

interface CarOwnerOption {
  key: CarSellerType;
  label: keyof Messages['Common']['car']['owner'];
}
export const CAR_OWNER: CarOwnerOption[] = [
  {
    key: 'dealer',
    label: 'dealer',
  },
  {
    key: 'private',
    label: 'private',
  },
];

interface CarTitleOption {
  key: string;
  label: keyof Messages['Car_submit_page']['form']['title_info']['title_areas'];
}

export const CAT_TITLE_OPTIONS: CarTitleOption[] = [
  {
    key: 'ukraine',
    label: 'ukraine',
  },
  {
    key: 'europe',
    label: 'europe',
  },
];
