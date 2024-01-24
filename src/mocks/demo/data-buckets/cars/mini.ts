import {Car, Comment} from "@/maocars-client/schemas";
import {faker} from "@faker-js/faker";
import {usersShort} from "@/mocks/demo/data-buckets/users-short";

export const mini: Car = {
  id: '6',
  title: '2022 Mini Cooper John Cooper Works',
  sub_title: '6-Speed Manual, Turbo 4-Cylinder, Rebel Green, Florida-Owned',
  engine: '2.0L Turbocharged I4',
  body_style: 'hatchback',
  drive_train: 'front',
  make: 'MINI',
  model: 'Cooper',
  vin: 'WMW73DH09N2R96120',
  seller_type: 'private',
  transmission: 'manual',
  year: 2022,
  title_status: 'Clean (FL)',
  transmission_details: '',
  exterior_color: 'Rebel Green',
  interior_color: 'Carbon Black',
  location: 'Flagler Beach, FL 32136',
  mileage: 11_600,
  photos: [
    '/demo/cars/mini/car-photos/1.jpeg',
    '/demo/cars/mini/car-photos/2.jpeg',
    '/demo/cars/mini/car-photos/3.jpeg',
    '/demo/cars/mini/car-photos/4.jpeg',
    '/demo/cars/mini/car-photos/5.jpeg',
    '/demo/cars/mini/car-photos/6.jpeg',
    '/demo/cars/mini/car-photos/7.jpeg',
    '/demo/cars/mini/car-photos/8.jpeg',
  ],
  sections: {
    highlights: `
**THIS...** is a 2022 Mini Cooper John Cooper Works, finished in Rebel Green with a Carbon Black interior.

- This Mini features the desirable 6-speed manual transmission.
- The attached Carfax history report lists no accidents or mileage discrepancies; it also shows that this Mini has been registered in Florida since new.
- Factory equipment includes the Driver Assistance Package, 18-inch alloy wheels, JCW sport suspension, Dynamic Damper Control, a twin-pipe sports exhaust system, adaptive LED headlights, a power sunroof, heated front seats, dual-zone automatic climate control, an 8.8-inch infotainment screen, and a rearview camera. The seller reports no modifications.
- Mini's retro-styled hardtop grew up as it entered its third generation for the 2014 model year. Called F56 internally, it was bigger than its predecessor in every dimension and correspondingly more spacious inside. It gained new engines across the board as well.
- Power comes from a turbocharged 2.0-liter inline-4, rated at 228 horsepower and 235 lb-ft of torque. Output is sent to the front wheels via a 6-speed manual transmission.
`,
    equipment: `
A build sheet is provided in the photo gallery, and a partial list of notable equipment includes:

- Driver Assistance Package (Park Distance Control, Active Cruise Control, Parking Assistant)
- 18-inch alloy wheels
- JCW sport suspension
- Dynamic Damper Control
- Twin-pipe sports exhaust system
- Adaptive LED headlights
- Power sunroof
- Leatherette upholstery
- Heated front seats
- Nappa leather-wrapped multifunction steering wheel
- Dual-zone automatic climate control
- 8.8-inch infotainment screen
- Rearview camera
`,
    known_flaws: `
- Some swirl marks on paint
- Scuff on passenger's side rear plastic fender
`,
    recent_service_history: `
The seller reports that the engine oil and filter were changed in June 2023 at 9,026 miles.
`,
    other_items: `    
- 2 keys
- Owner's manual
`,
    ownership_history: 'The seller purchased this Mini in May 2023 and has added approximately 2,700 miles since.',
    videos: [
      'https://www.youtube.com/embed/gNUlXq1sx4o',
      'https://www.youtube.com/embed/CwfL67bicck',
      'https://www.youtube.com/embed/D6OZ-pq0Bcg',
    ],
  },
};


export const miniComments: Comment[] = [
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: 'I owned a 2009 JCW and it\'s the only car that I sold that I still miss. This one looks great!',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 7_800,
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
    text: `Seemed low on the bids. As I am in Daytona Beach, it seemed like a great opportunity just could not get to the bidding button in time.`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 18_900,
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
    text: `Hello all. This one has the 17" wheels FYI. I have a 2023 with the same setup. Too bad because the 18" ones look so much better.`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 24_635,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
];
