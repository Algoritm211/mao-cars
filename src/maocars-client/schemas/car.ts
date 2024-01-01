/* eslint-disable */

/**
 * Generated by orval 🍺
 * Do not edit manually.
 * mao-cars-api
 */
import type { CarBodyStyle } from './carBodyStyle';
import type { CarDriveTrain } from './carDriveTrain';
import type { CarHistoryReport } from './carHistoryReport';
import type { CarSections } from './carSections';
import type { CarSellerType } from './carSellerType';
import type { CarTransmission } from './carTransmission';

export interface Car {
  body_style: CarBodyStyle;
  drive_train: CarDriveTrain;
  engine: string;
  exterior_color: string;
  history_report?: CarHistoryReport;
  id: string;
  interior_color?: string;
  location: string;
  make: string;
  mileage: number;
  model: string;
  photos: string[];
  sections: CarSections;
  seller_type: CarSellerType;
  sub_title: string;
  title: string;
  title_status: string;
  transmission: CarTransmission;
  transmission_details?: string;
  vin: string;
  year: number;
}
