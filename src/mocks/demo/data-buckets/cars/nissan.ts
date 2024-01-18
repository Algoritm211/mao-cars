import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';
import { generateAuction } from '@/mocks/demo/utils/generate-auction';
import { generateShortAuction } from '@/mocks/demo/utils/generate-short-auction';

export const nissan: Car = {
  id: '4',
  title: '1997 Nissan Cima V8',
  sub_title: 'Japanese-Market Luxury Sedan, V8 Power, Some Modifications, U.S. Title',
  engine: '4.1L V8',
  body_style: 'sedan',
  drive_train: 'rear',
  make: 'Nissan',
  model: 'Cima',
  vin: 'FGY33300170',
  seller_type: 'private',
  transmission: 'automatic',
  year: 2003,
  title_status: 'Clean (NJ)',
  transmission_details: '',
  exterior_color: 'White Pearl/Gray',
  interior_color: 'Gray',
  location: 'Blackwood, NJ 08012',
  mileage: 75_200,
  photos: [
    '/demo/cars/nissan/car-photos/1.jpeg',
    '/demo/cars/nissan/car-photos/2.jpeg',
    '/demo/cars/nissan/car-photos/3.jpeg',
    '/demo/cars/nissan/car-photos/4.jpeg',
    '/demo/cars/nissan/car-photos/5.jpeg',
    '/demo/cars/nissan/car-photos/6.jpeg',
    '/demo/cars/nissan/car-photos/7.jpeg',
    '/demo/cars/nissan/car-photos/8.jpeg',
    '/demo/cars/nissan/car-photos/9.jpeg',
  ],
  sections: {
    highlights: `
**THIS...** is a 1997 Nissan Cima V8

Finished in White Pearl and gray with a gray interior.

This is a right-hand-drive, Japanese-market sedan that's titled in New Jersey. It's equipped with a metric instrument cluster and its odometer displays about 121,000 kilometers, which represents approximately 75,200 miles.

**Factory equipment includes:**
  - Cloth upholstery
  - Power-adjustable front seats
  - Power-reclining rear seats
  - Air conditioning
  - A touchscreen-based infotainment system
  - A navigation system
  - Cruise control.

**Modifications reported by the seller include:**
  - A cold-air intake system
  - Aftermarket parts in the exhaust system
  - 17-inch Precious wheels
  - A lowered suspension system
  - Tinted windows
  - A Bluetooth module.
  - Closely related to the Infiniti Q45, the third-generation Cima made its debut in 1997 with a more rounded exterior design and a longer list of luxury features to reflect its upmarket positioning. The sedan came standard with a twin-turbocharged V6, though more expensive variants received a V8, and the range included performance- and luxury-focused models. The Y33-generation Cima retired in 2001.
  - Power comes from a 4.1-liter V8, rated at about 270 horsepower and 274 lb-ft of torque. Called VH41DE internally, it spins the rear wheels via a 4-speed automatic transmission.
`,
    equipment: `
- Fog lights
- Cloth upholstery
- Power-adjustable front seats
- Memory function for the driver
- Power-reclining rear seats
- Power-adjustable and power-folding door mirrors
- Air conditioning
- Touchscreen-based infotainment system
- Cassette player
- 6-disc CD changer
- Navigation system
- Cruise control
`,
    modifications: `
## Mechanical and Engine Bay:
- Cold-air intake system
- Aftermarket parts in the exhaust system
- White paint on some of the engine bay components

## Wheels and Suspension:
- 17-inch Precious wheels
- Lowered suspension system

## Exterior:
- Tinted headlights
- Tinted windows
- Rain guards on the windows
- Tinted rear lights

## Interior:
- Lace upper seat covers
- Wide-angle rear-view mirror
- Stark Audio 6.5-inch speakers
- Trunk-mounted subwoofer
- Bluetooth module
- Hardwired radar detector
`,
    known_flaws: `
- Some exterior chips and scratches
- Scratches on the wheels
- Broken slats in the passenger-side central air vent
- Scratches on the touchscreen
- Center console trim cracked
`,
    recent_service_history: `
The seller states that the engine oil and filter were last changed in July 2023. He adds that the engine oil and filter will be changed again before the next owner takes delivery.
`,
    other_items: `    
- 1 key and 1 valet key
- Owner's manuals
- Repair manual
- Seat covers
`,
    ownership_history: 'The seller purchased the car in July 2023.',
    videos: [
      'https://www.youtube.com/embed/dm2qBpgdax8',
      'https://www.youtube.com/embed/FwGQlfJ78dk',
    ],
  },
};

const nissanComments: Comment[] = [
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: 'do you know what kind of suspension its sitting on?',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 7200,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 8350,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: `Good luck to all biders let's see who's gonna take the beautiful cima home`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 10_400,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
];

export const nissanAuction = generateAuction(nissan, nissanComments);
export const nissanShortAuction = generateShortAuction(nissanAuction);
