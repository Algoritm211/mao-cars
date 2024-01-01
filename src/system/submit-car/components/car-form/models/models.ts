import { GetAuctionsTransmission } from '@/maocars-client/schemas';

export interface CarFormInputs {
  owner: 'private' | 'dealer';
  fullName: string;
  phone: string;
  vin: string;
  year: number;
  make: string;
  model: string;
  transmission: GetAuctionsTransmission;
  mileage: number;
  equipment: string;
  isModified: boolean;
  modifications: string;
  hasFlaws: boolean;
  flaws: string;

  carTitle: string;
  location: string;

  reservePrice: string;

  photos: FileList;
  isMoneyForCharity: boolean;
  amountMoneyForCharity: number;
  isAutoForUAArmy: boolean;
}
