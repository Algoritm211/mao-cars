import { Car, Comment } from '@/maocars-client/schemas';

import { bmw, bmwComments } from '@/mocks/demo/data-buckets/cars/bmw';
import { honda, hondaComments } from '@/mocks/demo/data-buckets/cars/honda';
import { jaguar, jaguarComments } from '@/mocks/demo/data-buckets/cars/jaguar';
import { nissan, nissanComments } from '@/mocks/demo/data-buckets/cars/nissan';
import { rrCounty, rrCountyComments } from '@/mocks/demo/data-buckets/cars/rr-county';
import {mini, miniComments} from "@/mocks/demo/data-buckets/cars/mini";
import {rangeRover, rangeRoverComments} from "@/mocks/demo/data-buckets/cars/range-rover";

interface MockCars {
  car: Car;
  comments: Comment[];
}
export const cars: Array<MockCars> = [
  {
    car: jaguar,
    comments: jaguarComments,
  },
  {
    car: rrCounty,
    comments: rrCountyComments,
  },
  {
    car: bmw,
    comments: bmwComments,
  },
  {
    car: nissan,
    comments: nissanComments,
  },
  {
    car: honda,
    comments: hondaComments,
  },
  {
    car: mini,
    comments: miniComments,
  },
  {
    car: rangeRover,
    comments: rangeRoverComments,
  },
];
