import { Car, Comment } from '@/maocars-client/schemas';

import { bmwEN, bmwCommentsEN, bmwUA, bmwCommentsUA } from '@/mocks/demo/data-buckets/cars/bmwEN';
import { ford, fordComments } from '@/mocks/demo/data-buckets/cars/ford';
import { honda, hondaComments } from '@/mocks/demo/data-buckets/cars/honda';
import {
  jaguarEN,
  jaguarCommentsEN,
  jaguarUA,
  jaguarCommentsUA,
} from '@/mocks/demo/data-buckets/cars/jaguar';
import { mini, miniComments } from '@/mocks/demo/data-buckets/cars/mini';
import {
  nissanEN,
  nissanCommentsEN,
  nissanUA,
  nissanCommentsUA,
} from '@/mocks/demo/data-buckets/cars/nissanEN';
import { rangeRover, rangeRoverComments } from '@/mocks/demo/data-buckets/cars/range-rover';
import {
  rrCountyCommentsEN,
  rrCountyCommentsUA,
  rrCountyEN,
  rrCountyUA,
} from '@/mocks/demo/data-buckets/cars/rr-county';

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
    'uk-UA': {
      car: jaguarUA,
      comments: jaguarCommentsUA,
    },
  },
  {
    'en-US': {
      car: rrCountyEN,
      comments: rrCountyCommentsEN,
    },
    'uk-UA': {
      car: rrCountyUA,
      comments: rrCountyCommentsUA,
    },
  },
  {
    'en-US': {
      car: bmwEN,
      comments: bmwCommentsEN,
    },
    'uk-UA': {
      car: bmwUA,
      comments: bmwCommentsUA,
    },
  },
  {
    'en-US': {
      car: nissanEN,
      comments: nissanCommentsEN,
    },
    'uk-UA': {
      car: nissanUA,
      comments: nissanCommentsUA,
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
