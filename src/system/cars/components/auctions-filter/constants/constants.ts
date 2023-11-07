import {BodyType, TransmissionType} from "@/core/interfaces/car-components";
import {AuctionsSort} from "@/core/interfaces/auctions";

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
