import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';
import { generateAuction } from '@/mocks/demo/utils/generate-auction';
import { generateShortAuction } from '@/mocks/demo/utils/generate-short-auction';

export const bmw: Car = {
  id: '3',
  title: '2002 BMW 530i Sedan',
  sub_title: '1 Owner, Sport Package, California-Owned, Unmodified',
  engine: '3.0L I6',
  body_style: 'sedan',
  drive_train: 'rear',
  make: 'BMW',
  model: '5 series',
  vin: 'WBADT63442CK27930',
  seller_type: 'private',
  transmission: 'automatic',
  year: 2003,
  title_status: 'Clean (CA)',
  transmission_details: '',
  exterior_color: 'Titanium Gray Metallic',
  interior_color: 'Black',
  location: 'San Diego, CA 92126',
  mileage: 89_800,
  photos: [
    '/demo/cars/bmw/car-photos/1.jpeg',
    '/demo/cars/bmw/car-photos/2.jpeg',
    '/demo/cars/bmw/car-photos/3.jpeg',
    '/demo/cars/bmw/car-photos/4.jpeg',
    '/demo/cars/bmw/car-photos/5.jpeg',
    '/demo/cars/bmw/car-photos/6.jpeg',
    '/demo/cars/bmw/car-photos/7.jpeg',
    '/demo/cars/bmw/car-photos/8.jpeg',
  ],
  sections: {
    highlights: `
**THIS...** is a 2002 BMW 530i Sedan. Finished in Titanium Gray Metallic with a black interior.

- The attached Carfax history report contains some gaps, though it indicates no accidents or mileage discrepancies for the given period; it also shows registration to one owner in California since new.
- According to the window sticker provided in the gallery, factory equipment includes the Premium and Sport Packages, xenon headlights, fog lights, dual-zone automatic climate control, and cruise control. The selling dealer reports no modifications.
- Called E39 internally, the fourth-generation 5 Series debuted for the 1997 model year. It wore a more modern design than its predecessor, and it received aluminum suspension components to keep weight in check. The 530i replaced the 528i for 2001 as a mid-range model positioned between the 525i and the V8-powered 540i.
- Power comes from a 3.0-liter straight-6, rated at 225 horsepower and 214 lb-ft of torque. Output is sent to the rear wheels via a 5-speed automatic transmission.
`,
    equipment: `
**Premium Package**
- Leather upholstery
- Vavona high-gloss wood interior trim
- Power sunroof
- Integrated garage door opener
- Rain-sensing windshield wipers
- Auto-dimming rearview mirror
- On-board computer

**Sport Package**
- 17-inch Style 42 wheels
- Power-adjustable front sport seats
- M sport steering wheel
- Sport suspension
- Shadowline trim
- Xenon headlights
- Fog lights
- Dual-zone automatic climate control
- Cruise control
`,
    known_flaws: `
- Paint chips, scratches, and dings around the exterior
- Cracked windshield molding
- Curb rash on the wheels
- Wear on the seats
- Scuffs on interior trim panels
`,
    recent_service_history: `
- The attached Carfax history report shows that the following services have been performed:
- May 2023 (83,946 miles): Engine oil and filter changed, air filter replaced
- January 2021: Battery replaced
- Additional service history is detailed in the attached Carfax report.
`,
    other_items: `    
- 1 key
- Owner's manual
- Window sticker
`,
    ownership_history: 'The selling dealer acquired this 530i in December 2023.',
    videos: ['https://www.youtube.com/embed/labJknxfngA'],
  },
};

const bmwComments: Comment[] = [
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: 'Can you post some close up photos of the chips/scratch on the hood? Also, pic 54, are those chips on the roof? Thanks in advance.',
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
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: `Seller, please provide details of the service history. A one owner car would seem to make it easy to share all that info and there’s not a single Carfax record of BMW dealer service having been performed.`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 8900,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
];

export const bmwAuction = generateAuction(bmw, bmwComments);
export const bmwShortAuction = generateShortAuction(bmwAuction);
