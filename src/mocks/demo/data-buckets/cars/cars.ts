import { Car } from '@/maocars-client/schemas';

import { bmw } from '@/mocks/demo/data-buckets/cars/bmw';
import { jaguar } from '@/mocks/demo/data-buckets/cars/jaguar';
import { rrCounty } from '@/mocks/demo/data-buckets/cars/rr-county';

export const cars: Car[] = [jaguar, rrCounty, bmw];
