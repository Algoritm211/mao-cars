import { Auction, GetAuctionById200 } from '@/maocars-client/schemas';

import { generateAuction } from '@/mocks/demo/utils/generate-auction';
import { generateShortAuction } from '@/mocks/demo/utils/generate-short-auction';

import { cars } from './cars/cars';

export const carsAuctionsById: Record<string, GetAuctionById200[]> = {};

export const carsShortAuctions: Record<string, Auction[]> = {};

cars.forEach((carLocale) => {
  const localeKeys = Object.keys(carLocale);
  localeKeys.forEach((locale) => {
    const localeArr = carsAuctionsById[locale] || [];
    const { car, comments } = carLocale[locale];
    const auction = generateAuction(car, comments);
    localeArr.push(auction);
    Array.isArray(carsAuctionsById[locale])
      ? carsAuctionsById[locale].push(auction)
      : (carsAuctionsById[locale] = [auction]);

    Array.isArray(carsShortAuctions[locale])
      ? carsShortAuctions[locale].push(generateShortAuction(auction))
      : (carsShortAuctions[locale] = [generateShortAuction(auction)]);
  });
});
