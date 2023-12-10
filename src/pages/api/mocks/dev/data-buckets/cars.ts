import {
  Car,
  CarBodyStyle,
  CarDriveTrain,
  CarSellerType,
  CarTransmission,
} from '@/maocars-client/schemas';
import { faker } from '@faker-js/faker';
import { auctionSubtitles, auctionTitles } from '@/pages/api/mocks/dev/data-buckets/auction-titles';
import { galleryPhotosSets } from '@/pages/api/mocks/dev/data-buckets/gallery-photos-sets';

const generateCars = (count: number): Car[] => {
  const bodyStyles: CarBodyStyle[] = [
    'coupe',
    'convertible',
    'hatchback',
    'sedan',
    'suv',
    'truck',
    'van',
    'wagon',
  ];
  const driveTrains: CarDriveTrain[] = ['front', 'front', 'all-drive'];
  const sellerTypes: CarSellerType[] = ['private', 'dealer'];
  const transmissionTypes: CarTransmission[] = ['manual', 'automatic'];

  const cars = new Array(count).fill(null).map(() => {
    return {
      id: faker.string.uuid(),
      title: faker.helpers.arrayElement(auctionTitles),
      sub_title: faker.helpers.arrayElement(auctionSubtitles),
      vin: faker.vehicle.vin(),
      body_style: faker.helpers.arrayElement(bodyStyles),
      engine: '12 cyl Twin Turbo 6.75L',
      drive_train: faker.helpers.arrayElement(driveTrains),
      exterior_color: faker.color.human(),
      interior_color: faker.color.human(),
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      history_report: {
        url: faker.internet.url(),
        expiry: faker.date.future().toISOString(),
        vendor: 'carfax',
      },
      location: `${faker.location.city()} ${faker.location.state({
        abbreviated: true,
      })} ${faker.location.streetAddress()}`,
      mileage: faker.number.float({ min: 1000, max: 56000 }),
      photos: faker.helpers.arrayElement(galleryPhotosSets),
      sections: {
        equipment: faker.lorem.paragraph({ min: 5, max: 10 }),
        highlights: faker.lorem.paragraph({ min: 5, max: 10 }),
        known_flaws: faker.lorem.paragraph({ min: 5, max: 10 }),
        other_items: faker.lorem.paragraph({ min: 5, max: 10 }),
        ownership_history: faker.lorem.paragraph({ min: 5, max: 10 }),
        recent_service_history: faker.lorem.paragraph({ min: 5, max: 10 }),
        modifications: faker.lorem.paragraph({ min: 5, max: 10 }),
        videos: [
          'https://www.youtube.com/embed/0z3iVyjr6Ek',
          'https://www.youtube.com/embed/aWSCm3YN_sQ',
          'https://www.youtube.com/embed/t96nhmPWHVQ',
          'https://www.youtube.com/embed/k3U6I2SN45g',
        ],
      },
      seller_type: faker.helpers.arrayElement(sellerTypes),
      title_status: 'Clean (CA)',
      transmission: faker.helpers.arrayElement(transmissionTypes),
      year: faker.number.int({ min: 1980, max: new Date().getFullYear() }),
      transmission_details: faker.lorem.sentence({ min: 5, max: 7 }),
    };
  });

  return cars;
};

export const cars = generateCars(100);
