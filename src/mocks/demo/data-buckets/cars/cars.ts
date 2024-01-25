import { Car, Comment } from '@/maocars-client/schemas';

import { bmw, bmwComments } from '@/mocks/demo/data-buckets/cars/bmw';
import { ford, fordComments } from '@/mocks/demo/data-buckets/cars/ford';
import { honda, hondaComments } from '@/mocks/demo/data-buckets/cars/honda';
import { jaguarEN, jaguarCommentsEN } from '@/mocks/demo/data-buckets/cars/jaguarEN';
import { mini, miniComments } from '@/mocks/demo/data-buckets/cars/mini';
import { nissan, nissanComments } from '@/mocks/demo/data-buckets/cars/nissan';
import { rangeRover, rangeRoverComments } from '@/mocks/demo/data-buckets/cars/range-rover';
import { rrCounty, rrCountyComments } from '@/mocks/demo/data-buckets/cars/rr-county';

interface MockCar {
  car: Car;
  comments: Comment[];
}
export const cars: Array<Record<string, MockCar>> = [
  {
    'en-US': {
      car: jaguarEN,
      comments: jaguarCommentsEN,
    },
  },
  {
    'en-US': {
      car: rrCounty,
      comments: rrCountyComments,
    },
  },
  {
    'en-US': {
      car: bmw,
      comments: bmwComments,
    },
  },
  {
    'en-US': {
      car: nissan,
      comments: nissanComments,
    },
  },
  {
    'en-US': {
      car: honda,
      comments: hondaComments,
    },
  },
  {
    'en-US': {
      car: mini,
      comments: miniComments,
    },
  },
  {
    'en-US': {
      car: rangeRover,
      comments: rangeRoverComments,
    },
  },
  {
    'en-US': {
      car: ford,
      comments: fordComments,
    },
  },
];
