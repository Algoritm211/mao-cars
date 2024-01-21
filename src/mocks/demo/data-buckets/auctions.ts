import { generateAuction } from '@/mocks/demo/utils/generate-auction';
import { generateShortAuction } from '@/mocks/demo/utils/generate-short-auction';

import { cars } from './cars/cars';
export const carsAuctionsById = cars.map(({ car, comments }) => {
  return generateAuction(car, comments);
});

export const carsShortAuctions = carsAuctionsById.map(generateShortAuction);
