import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';
import { generateAuction } from '@/mocks/demo/utils/generate-auction';
import { generateShortAuction } from '@/mocks/demo/utils/generate-short-auction';

export const jaguarEN: Car = {
  id: '1',
  title: '2018 Jaguar XF Sportbrake S',
  sub_title: '380-hp Supercharged V6, AWD, Highly Equipped, Ultra-Rare Wagon',
  engine: '3.0L Supercharged V6',
  body_style: 'wagon',
  drive_train: 'all-drive',
  make: 'Jaguar',
  model: 'XF Sportbrake S',
  vin: 'SAJBM2FV3JCY67826',
  seller_type: 'private',
  transmission: 'automatic',
  year: 2018,
  title_status: 'Clean (NM)',
  transmission_details: '',
  exterior_color: 'Narvik Black',
  interior_color: 'Ebony',
  location: 'Albuquerque, NM 87106',
  mileage: 55_300,
  photos: [
    '/demo/cars/jaguar/car-photos/1.jpeg',
    '/demo/cars/jaguar/car-photos/2.jpeg',
    '/demo/cars/jaguar/car-photos/3.jpeg',
    '/demo/cars/jaguar/car-photos/4.jpeg',
    '/demo/cars/jaguar/car-photos/5.jpeg',
    '/demo/cars/jaguar/car-photos/6.jpeg',
    '/demo/cars/jaguar/car-photos/6.jpeg',
    '/demo/cars/jaguar/car-photos/7.jpeg',
    '/demo/cars/jaguar/car-photos/8.jpeg',
  ],
  sections: {
    highlights: `
**THIS...** is a 2018 Jaguar XF Sportbrake S, finished in Narvik Black with an Ebony interior.

- The attached Carfax history report lists no accidents or mileage discrepancies in this Jaguar's past; it also shows registrations in Georgia and New Mexico since new.
- According to the window sticker provided in the gallery, this XF Sportbrake S cost $82,033 new. Factory equipment includes the Technology, Driver Assistance, and Comfort & Convenience packages, 20-inch wheels, a rear air suspension system, a panoramic sunroof, leather upholstery, a head-up display, and an Activity Key.
- Modifications reported by the seller include paint protection film and tinted windows.
- The XF Sportbrake S is a high-performance version of Jaguar's midsize luxury wagon. Introduced in 2018, it combines the practicality of a wagon with the luxury and driving fun expected from a Jaguar. Despite its versatile combination of performance and utility, the XF Sportbrake was never a sales success stateside, with Jaguar confirming that they sold fewer than 250 units in the U.S. market over the wagon's production run.
- Power comes from a 3.0-liter supercharged V6, rated at 380 horsepower and 332 lb-ft of torque. Output is sent to all four wheels via an 8-speed automatic transmission.
`,
    equipment: `
A window sticker is provided in the photo gallery, and a partial list of notable equipment includes:

- Technology Package (10-inch Touch Pro system with Navigation Pro, Pro Services, Wi-Fi hotspot, Interactive Driver Display, CD/DVD player, Meridian 825W surround sound system)
- Driver Assistance Package (adaptive cruise control with queue assist, traffic sign recognition, adaptive speed limiter, 360-degree parking aid, surround camera system, blind spot assist, park assist)
- Comfort & Convenience Package (heated and cooled front seats, heated rear seats, soft-close doors)
- 20-inch wheels
- Rear air suspension system
- Red brake calipers
- Panoramic sunroof
- Leather upholstery
- 40/20/40 split-folding rear seats
- Satin Fine Line Veneer inserts
- Selectable drive modes (Normal, Eco, Dynamic)
- Rain, snow, and ice mode
- Adaptive Surface Response Mode (AdSR)
- Torque vectoring
- Hill Launch Assist
- Dual-zone automatic climate control
- Head-up display
- Activity Key
`,
    modifications: `
Modifications reported by the seller include:

- Paint protection film applied to the front end
- Black finish on exterior badges
- "XF" badge deleted
- Tinted windows
`,
    known_flaws: `
- Paint chips and scratches around the exterior (pictured in the gallery)
- Weathered paint protection film edges
- Creases on the driver's seat
- Scratches on the driver's door sill
- Scuffs on cargo area trim panels
- Torn hood insulation pad
`,
    recent_service_history: `
- August 2023 (55,046 miles): Sunroof blind assembly repaired
- July 2023 (54,878 miles): Engine oil and filter changed, wheel repaired
- August 2022 (46,810 miles): Windshield camera calibrated
- August 2022 (46,694 miles): Right front wheel bearing and rear brake linings, rotors, and pads replaced, four-wheel alignment performed, PCM updated
- May 2022 (44,025 miles): Accessory drive belt tensioner, battery, rear cargo cover guides, and rear splash guards replaced, engine oil and filter changed
- January 2022 (40,326 miles): Coolant bleed pipe, front and rear wiper blades, and trunk luggage cover replaced
- March 2021 (28,796 miles): Engine oil and filter changed, brake fluid flushed, cabin air filter replaced, engine air filters replaced, wheel repaired
- January 2021 (24,626 miles): Panoramic sunroof seal replaced, wheel repaired, door modules updated
- June 2020 (20,271 miles): Headlight washer jet replaced
- April 2020 (15,948 miles): Engine oil and filter changed, tires rotated, four-wheel alignment performed
- March 2020 (15,196 miles): Key reprogrammed
- December 2019 (12,197 miles): ECU replaced under recall

The seller states that the tires were replaced, a four-wheel alignment was performed, and two wheels were repaired in September 2023 at approximately 55,100 miles.
`,
    other_items: `
- 2 keys
- Owner's manual
- Window sticker
- Roof rack cross bars
- Factory floor mats
- WeatherTech floor mats
`,
    ownership_history: 'The seller purchased this XF Sportbrake S in September 2019.',
    videos: [
      'https://www.youtube.com/embed/PE5MHnQ8NaE',
      'https://www.youtube.com/embed/cI8-twkhwx4',
      'https://www.youtube.com/embed/QPRQ8o1hY6Q',
      'https://www.youtube.com/embed/zxoSVh-APlk',
    ],
  },
};

export const jaguarCommentsEN: Comment[] = [
  {
    id: faker.string.uuid(),
    amount: 25_400,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 15_400,
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
    text: 'Wow, nice car',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: `Rare car, I've dreamed about it several years`,
    user: faker.helpers.arrayElement(usersShort),
  },
];
