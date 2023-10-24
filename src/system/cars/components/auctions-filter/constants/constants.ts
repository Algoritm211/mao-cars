import {BodyType, TransmissionType} from "@/core/interfaces/car-components";
import {AuctionsSort} from "@/core/interfaces/auctions";

export const START_YEAR = 1980;
export const END_YEAR = new Date().getFullYear() + 1;
export const START_YEARS = Array(END_YEAR - START_YEAR).fill(null).map((_, index) => {
  return index + START_YEAR
})

export const END_YEARS = [...START_YEARS].reverse();

export const TRANSMISSION_TYPES: TransmissionType[] = [
 TransmissionType.All,
 TransmissionType.Automatic,
 TransmissionType.Manual,
]

export const BODY_TYPES: BodyType[] = [
  BodyType.All,
  BodyType.Coupe,
  BodyType.Convertible,
  BodyType.Hatchback,
  BodyType.Sedan,
  BodyType.SUV,
  BodyType.Truck,
  BodyType.Van,
  BodyType.Wagon,
]

export const AUCTION_SORT = [
  AuctionsSort.LowestMileage,
  AuctionsSort.NewlyListed,
  AuctionsSort.NoReserve,
]
