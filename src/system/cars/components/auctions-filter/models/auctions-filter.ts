import { BodyType, TransmissionType } from '@/core/interfaces';

export interface AuctionsFilterInputs {
  startYear?: string;
  endYear?: string;
  transmission?: TransmissionType;
  bodyStyle?: BodyType;
  sort?: string;
}
