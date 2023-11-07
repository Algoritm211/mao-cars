import {TransmissionType} from "@/core/interfaces/car-components";

export interface CarFormInputs {
  owner: 'private' | 'dealer'
  fullName: string;
  phone: string;
  vin: string;
  year: number;
  make: string;
  model: string;
  transmission: TransmissionType,
  mileage: number;
  equipment: string;
}
