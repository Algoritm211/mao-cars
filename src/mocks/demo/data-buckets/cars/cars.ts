import { Car, Comment } from '@/maocars-client/schemas';

import { bmw, bmwComments } from '@/mocks/demo/data-buckets/cars/bmw';
import { ford, fordComments } from '@/mocks/demo/data-buckets/cars/ford';
import { honda, hondaComments } from '@/mocks/demo/data-buckets/cars/honda';
import { jaguar, jaguarComments } from '@/mocks/demo/data-buckets/cars/jaguar';
import { mini, miniComments } from '@/mocks/demo/data-buckets/cars/mini';
import { nissan, nissanComments } from '@/mocks/demo/data-buckets/cars/nissan';
import { rangeRover, rangeRoverComments } from '@/mocks/demo/data-buckets/cars/range-rover';
import { rrCounty, rrCountyComments } from '@/mocks/demo/data-buckets/cars/rr-county';

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
  {
    car: ford,
    comments: fordComments,
  },
];
