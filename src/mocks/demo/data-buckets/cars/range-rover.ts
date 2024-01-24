import {Car, Comment} from "@/maocars-client/schemas";
import {faker} from "@faker-js/faker";
import {usersShort} from "@/mocks/demo/data-buckets/users-short";


export const rangeRover: Car = {
  id: '7',
  title: '2023 Range Rover P530 SV',
  sub_title: 'Twin-Turbo V8, AWD, Highly Equipped, Unmodified',
  engine: '4.4L Turbocharged V8',
  body_style: 'suv',
  drive_train: 'all-drive',
  make: 'Land Rover',
  model: 'Range Rover',
  vin: 'SALKU9E74PA035886',
  seller_type: 'private',
  transmission: 'automatic',
  year: 2023,
  title_status: 'Clean (AZ)',
  transmission_details: '',
  exterior_color: 'Varesine Blue Metallic',
  interior_color: 'Perlino',
  location: 'Mesa, AZ 85212',
  mileage: 9_400,
  photos: [
    '/demo/cars/range-rover/car-photos/1.jpeg',
    '/demo/cars/range-rover/car-photos/2.jpeg',
    '/demo/cars/range-rover/car-photos/3.jpeg',
    '/demo/cars/range-rover/car-photos/4.jpeg',
    '/demo/cars/range-rover/car-photos/5.jpeg',
    '/demo/cars/range-rover/car-photos/6.jpeg',
    '/demo/cars/range-rover/car-photos/7.jpeg',
    '/demo/cars/range-rover/car-photos/8.jpeg',
    '/demo/cars/range-rover/car-photos/9.jpeg',
  ],
  sections: {
    highlights: `
**THIS...** is a 2023 Range Rover P530 SV, finished in Varesine Blue Metallic with a Perlino interior.

- The attached Carfax vehicle history report shows no accidents or mileage discrepancies in this Range Rover’s brief past.
- According to the window sticker provided in the gallery, factory equipment includes:
- 23-inch forged Style 1077 diamond turned wheels
- SV Intrepid exterior accents
- Black contrast roof
- Natural Dark Linear wenge veneer with mosaic metal interior trim
- SV semi-aniline leather upholstery
- Meridian Signature sound system
- Rear seat entertainment system
- And more as detailed below. The selling dealer reports no modifications.
- Introduced in late 2021 for the 2022 model year, the L460 is the fifth generation of the Range Rover. An "evolution rather than a revolution," the new Range Rover keeps the traditional design of the L405 while bringing new modern elements to the platform. The Range Rover P530 version is the first Jaguar Land Rover (JLR) model to utilize an engine under the combustion and electrified powertrain partnership between JLR and BMW that was formed back in 2019.
- Power comes from a 4.4-liter twin-turbocharged V8, rated at 523 horsepower and 553 lb-ft of torque. Output is sent to all four wheels through an 8-speed automatic transmission.

`,
    equipment: `
A window sticker is provided in the photo gallery, and a partial list of notable equipment includes:

- Premium Interior Protection & Storage pack (antimicrobial rubber floor and trunk mats and luggage carrier)
- 23-inch forged Style 1077 diamond turned wheels
- Air suspension system
- Electronic active differential
- Four-wheel steering system
- SV Intrepid exterior accents
- Red brake calipers
- LED headlights
- Fog lights
- Heated, power-folding, and auto-dimming door mirrors with approach lights
- Black contrast roof
- Sliding panoramic roof with power-operated sunblind
- Deployable door handles
- Soft-close doors
- Power-operated tailgate
- Natural Dark Linear wenge veneer with mosaic metal interior trim
- SV semi-aniline leather upholstery
- SV Bespoke Perlino leather headlining
- Heated, ventilated, and power-adjustable front seats
- Hot stone massage function for the front passengers
- Heated, ventilated, and power-adjustable Executive Class Comfort Plus rear seats
- SV Bespoke open pore wood and leather heated steering wheel
- Power-adjustable steering column
- Head-up display
- Clearsight interior rear-view mirror
- Cooler in the front center console
- Four-zone climate control system
- 13.1-inch screen for the Pivi Pro infotainment system
- Meridian Signature sound system
- Rear seat entertainment system with digital media
- Apple CarPlay and Android Auto capabilities
`,
    known_flaws: `
- Tear in leather on driver door sill
`,
    recent_service_history: `
The selling dealer reports that a 10,000-mile service was recently completed at a Range Rover dealership.
`,
    other_items: `    
- 2 keys
- Owner's manual
- Full size spare wheel
`,
    ownership_history: 'The selling dealer acquired this Range Rover in November 2023 and has added approximately 100 miles since.',
    videos: [
      'https://www.youtube.com/embed/LfSVcoxLJqE',
    ],
  },
};

export const rangeRoverComments: Comment[] = [
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: 'What a gorgeous spec!',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 60_950,
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
    text: `Rare and Range Rover aren’t something you hear a lot but this indeed is a super rare Rover! GLWTS!`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 123_456,
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
    text: `So sleek, love the taillights and clean exterior lines.`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 191_200,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
];
