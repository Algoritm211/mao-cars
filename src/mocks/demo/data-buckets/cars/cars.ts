import { Car, Comment } from '@/maocars-client/schemas';

import { bmwEN, bmwCommentsEN, bmwUA, bmwCommentsUA } from '@/mocks/demo/data-buckets/cars/bmwEN';
import {
  fordCommentsEN,
  fordCommentsUA,
  fordEN,
  fordUA,
} from '@/mocks/demo/data-buckets/cars/ford';
import {
  hondaCommentsEN,
  hondaCommentsUA,
  hondaEN,
  hondaUA,
} from '@/mocks/demo/data-buckets/cars/honda';
import {
  jaguarEN,
  jaguarCommentsEN,
  jaguarUA,
  jaguarCommentsUA,
} from '@/mocks/demo/data-buckets/cars/jaguar';
import {
  miniCommentsEN,
  miniCommentsUA,
  miniEN,
  miniUA,
} from '@/mocks/demo/data-buckets/cars/mini';
import {
  nissanEN,
  nissanCommentsEN,
  nissanUA,
  nissanCommentsUA,
} from '@/mocks/demo/data-buckets/cars/nissan';
import {
  rangeRoverCommentsEN,
  rangeRoverCommentsUA,
  rangeRoverEN,
  rangeRoverUA,
} from '@/mocks/demo/data-buckets/cars/range-rover';
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
      car: hondaEN,
      comments: hondaCommentsEN,
    },
    'uk-UA': {
      car: hondaUA,
      comments: hondaCommentsUA,
    },
  },
  {
    'en-US': {
      car: miniEN,
      comments: miniCommentsEN,
    },
    'uk-UA': {
      car: miniUA,
      comments: miniCommentsUA,
    },
  },
  {
    'en-US': {
      car: rangeRoverEN,
      comments: rangeRoverCommentsEN,
    },
    'uk-UA': {
      car: rangeRoverUA,
      comments: rangeRoverCommentsUA,
    },
  },
  {
    'en-US': {
      car: fordEN,
      comments: fordCommentsEN,
    },
    'uk-UA': {
      car: fordUA,
      comments: fordCommentsUA,
    },
  },
];
