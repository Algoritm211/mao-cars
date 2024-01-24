import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';

export const ford: Car = {
  id: '8',
  title: '2023 Ford F-450 Super Duty Lariat 4x4',
  sub_title: '6.7-Liter Turbodiesel V8, 4WD, FX4 Off-Road Package',
  engine: '6.7L Turbodiesel V8',
  body_style: 'truck',
  drive_train: 'all-drive',
  make: 'Ford',
  model: 'Super Duty',
  vin: 'WMW73DH09N2R96120',
  seller_type: 'private',
  transmission: 'automatic',
  year: 2023,
  title_status: 'Clean (NC)',
  transmission_details: '',
  exterior_color: 'Carbonized Gray',
  interior_color: 'Black Onyx',
  location: 'Hickory, NC 28601',
  mileage: 1_100,
  photos: [
    '/demo/cars/ford/car-photos/1.jpeg',
    '/demo/cars/ford/car-photos/2.jpeg',
    '/demo/cars/ford/car-photos/3.jpeg',
    '/demo/cars/ford/car-photos/4.jpeg',
    '/demo/cars/ford/car-photos/5.jpeg',
    '/demo/cars/ford/car-photos/6.jpeg',
    '/demo/cars/ford/car-photos/7.jpeg',
    '/demo/cars/ford/car-photos/8.jpeg',
  ],
  sections: {
    highlights: `
**THIS...** is a 2023 Ford F-450 Super Duty Lariat 4x4, finished in Carbonized Gray with a Black Onyx interior.

- The attached Carfax history report shows no accidents or mileage discrepancies in this F-450's brief past; it also confirms that this is a one-owner truck.
- According to the window sticker pictured in the photo gallery, this F-450 carried an original MSRP of $83,545, and it's equipped with the FX4 Off-Road Package, 19.5-inch wheels, dual rear wheels, power running boards, a twin panel power sunroof, leather upholstery, power-adjustable, heated and ventilated front seats, heated rear seats, a heated steering wheel, a power-sliding rear window, dual-zone automatic climate control, a Bang & Olufsen sound system, adaptive cruise control, blind spot monitoring, and more as detailed below. The only modification reported by the seller is window tint.
- Released for the 2023 model year, the fifth-generation F-Series Super Duty is offered in a diverse amount of configurations with multiple levels of tech and comfort features. Offered with two different versions of Ford's 6.7-liter Power Stroke turbodiesel V8, the F-450 claims a best-in-class towing capacity of 40,000 lbs when paired with a gooseneck trailer.
- Power comes from a 6.7-liter Power Stroke turbodiesel V8, rated at 475 horsepower and 1,050 lb-ft of torque. Output is sent to the four rear wheels or all six wheels via a 10-speed automatic transmission and a 2-speed transfer case.
`,
    equipment: `
A window sticker is provided in the photo gallery, and a partial list of notable equipment includes:
  
- FX4 Off-Road Package (Hill Descent Control, off-road-tuned shocks, skid plates for transfer case and fuel tank, FX4 Off-Road box decals)
- 19.5-inch wheels
- 2-speed transfer case
- LED headlights
- Dual rear wheels
- Power running boards
- Front and rear splash guards
- Twin panel power sunroof
- Leather upholstery
- Power-adjustable, heated and ventilated front seats
- Heated rear seats
- Heated steering wheel
- Power-sliding rear window
- Dual-zone automatic climate control
- Sync 4 with12-inch infotainment screen
- 12-inch digital instrument cluster
- Bang & Olufsen sound system
- 360-degree camera
- Blind spot monitoring with cross-traffic alert
`,
    modifications: `
- Tinted windows
`,
    recent_service_history: `
The attached Carfax history report shows that pre-delivery, maintenance, and safety inspections were performed in April 2023.
`,
    other_items: `    
- 2 keys
`,
    ownership_history: 'The seller purchased this F-450 when new in May 2023.',
    videos: ['https://www.youtube.com/embed/1A7_ublxcps'],
  },
};

export const fordComments: Comment[] = [
  {
    id: faker.string.uuid(),
    amount: 83_000,
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
    text: `This is big as it gets, and that torque figure is INSANE!`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 70_500,
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
    text: `It's not just the power it has, this truck looks good from all angles. And if we count all the technology it brings, it's an A+`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: 'Why would you buy a truck and then a month later put it on an auction site?',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 70_000,
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
    text: `thats a big boy`,
    user: faker.helpers.arrayElement(usersShort),
  },
];
