import {BodyType} from "@/core/interfaces";
import {AuctionsSort} from "@/core/constants";

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
