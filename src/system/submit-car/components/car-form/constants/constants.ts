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
