import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';
import { generateAuction } from '@/mocks/demo/utils/generate-auction';
import { generateShortAuction } from '@/mocks/demo/utils/generate-short-auction';

export const jaguar: Car = {
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
    highlights:
      "**THIS...** is a 2018 Jaguar XF Sportbrake S, finished in Narvik Black with an Ebony interior.\n\n &nbsp;\n\n - The attached Carfax history report lists no accidents or mileage discrepancies in this Jaguar's past; it also shows registrations in Georgia and New Mexico since new.\n - According to the window sticker provided in the gallery, this XF Sportbrake S cost $82,033 new. Factory equipment includes the Technology, Driver Assistance, and Comfort & Convenience packages, 20-inch wheels, a rear air suspension system, a panoramic sunroof, leather upholstery, a head-up display, and an Activity Key.\n - Modifications reported by the seller include paint protection film and tinted windows.\n - The XF Sportbrake S is a high-performance version of Jaguar's midsize luxury wagon. Introduced in 2018, it combines the practicality of a wagon with the luxury and driving fun expected from a Jaguar. Despite its versatile combination of performance and utility, the XF Sportbrake was never a sales success stateside, with Jaguar confirming that they sold fewer than 250 units in the U.S. market over the wagon's production run.\n - Power comes from a 3.0-liter supercharged V6, rated at 380 horsepower and 332 lb-ft of torque. Output is sent to all four wheels via an 8-speed automatic transmission.",
    equipment:
      'A window sticker is provided in the photo gallery, and a partial list of notable equipment includes:\n\n &nbsp;\n\n **Technology Package**\n - 10-inch Touch Pro system with Navigation Pro\n - Pro Services\n - Wi-Fi hotspot\n - Interactive Driver Display\n - CD/DVD player\n - Meridian 825W surround sound system\n\n **Driver Assistance Package**\n - Adaptive cruise control with queue assist\n - Traffic sign recognition\n - Adaptive speed limiter\n - 360-degree parking aid\n - Surround camera system\n - Blind spot assist\n - Park assist\n\n **Comfort & Convenience Package**\n - Heated and cooled front seats\n - Heated rear seats\n - Soft-close doors\n\n **Other equipment**\n\n - 20-inch wheels\n - Rear air suspension system\n - Red brake calipers\n - Panoramic sunroof\n - Leather upholstery\n - 40/20/40 split-folding rear seats\n - Satin Fine Line Veneer inserts\n - Selectable drive modes (Normal, Eco, Dynamic)\n - Rain, snow, and ice mode\n - Adaptive Surface Response Mode (AdSR)\n - Torque vectoring\n - Hill Launch Assist\n - Dual-zone automatic climate control\n - Head-up display\n - Activity Key\n',
    modifications:
      'Modifications reported by the seller include: - Paint protection film applied to the front end\n - Black finish on exterior badges\n - "XF" badge deleted\n - Tinted windows',
    known_flaws:
      "- Paint chips and scratches around the exterior (pictured in the gallery)\n - Weathered paint protection film edges\n - Creases on the driver's seat\n - Scratches on the driver's door sill\n - Scuffs on cargo area trim panels\n - Torn hood insulation pad",
    recent_service_history:
      'Service documentation in the photo gallery indicates that the following maintenance has been performed:\n - August 2023 (55,046 miles): Sunroof blind assembly repaired\n - July 2023 (54,878 miles): Engine oil and filter changed, wheel repaired\n - August 2022 (46,810 miles): Windshield camera calibrated\n - August 2022 (46,694 miles): Right front wheel bearing and rear brake linings, rotors, and pads replaced, four-wheel alignment performed, PCM updated\n - May 2022 (44,025 miles): Accessory drive belt tensioner, battery, rear cargo cover guides, and rear splash guards replaced, engine oil and filter changed\n - January 2022 (40,326 miles): Coolant bleed pipe, front and rear wiper blades, and trunk luggage cover replaced\n - March 2021 (28,796 miles): Engine oil and filter changed, brake fluid flushed, cabin air filter replaced, engine air filters replaced, wheel repaired\n - January 2021 (24,626 miles): Panoramic sunroof seal replaced, wheel repaired, door modules updated\n - June 2020 (20,271 miles): Headlight washer jet replaced\n - April 2020 (15,948 miles): Engine oil and filter changed, tires rotated, four-wheel alignment performed\n - March 2020 (15,196 miles): Key reprogrammed\n - December 2019 (12,197 miles): ECU replaced under recall The seller states that the tires were replaced, a four-wheel alignment was performed, and two wheels were repaired in September 2023 at approximately 55,100 miles.',
    other_items:
      "- 2 keys\n - Owner's manual\n - Window sticker\n - Roof rack cross bars\n - Factory floor mats\n - WeatherTech floor mats",
    ownership_history: 'The seller purchased this XF Sportbrake S in September 2019.',
    videos: [
      'https://www.youtube.com/embed/PE5MHnQ8NaE',
      'https://www.youtube.com/embed/cI8-twkhwx4',
      'https://www.youtube.com/embed/QPRQ8o1hY6Q',
      'https://www.youtube.com/embed/zxoSVh-APlk',
    ],
  },
};

const jaguarComments: Comment[] = [
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
  {
    id: faker.string.uuid(),
    amount: 25_400,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
];

export const jaguarAuction = generateAuction(jaguar, jaguarComments);
export const jaguarShortAuction = generateShortAuction(jaguarAuction);
