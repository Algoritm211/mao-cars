import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';
import { generateAuction } from '@/mocks/demo/utils/generate-auction';
import { generateShortAuction } from '@/mocks/demo/utils/generate-short-auction';

export const rrCountyEN: Car = {
  id: '2',
  title: '1989 Range Rover County',
  sub_title: 'V8 Power, 4WD, Mostly Unmodified, Western-Owned Until 2021',
  engine: '3.9L V8',
  body_style: 'suv',
  drive_train: 'all-drive',
  make: 'Land Rover',
  model: 'Range Rover',
  vin: 'SALHV124XKA358075',
  seller_type: 'private',
  transmission: 'automatic',
  year: 1989,
  title_status: 'Clean (NY)',
  transmission_details: '',
  exterior_color: 'White',
  interior_color: 'Tan',
  location: 'Ghent, NY 12075',
  mileage: 76_100,
  photos: [
    '/demo/cars/rr-county/car-photos/1.jpeg',
    '/demo/cars/rr-county/car-photos/2.jpeg',
    '/demo/cars/rr-county/car-photos/3.jpeg',
    '/demo/cars/rr-county/car-photos/4.jpeg',
    '/demo/cars/rr-county/car-photos/5.jpeg',
    '/demo/cars/rr-county/car-photos/6.jpeg',
    '/demo/cars/rr-county/car-photos/6.jpeg',
    '/demo/cars/rr-county/car-photos/7.jpeg',
    '/demo/cars/rr-county/car-photos/8.jpeg',
  ],
  sections: {
    highlights: `
**THIS...** is a 1989 Range Rover County Finished in white with a tan interior. The attached Carfax history report lists no accidents in this Range Rover's past. It also shows ownership in Western states until 2021.\n
**Factory equipment includes:**
  - 16-inch wheels
  - A 2-speed transfer case
  - Fog lights
  - A rear wiper
  - A trailer hitch
  - A sunroof
  - Wood interior trim
  - Leather upholstery
  - Power-adjustable front seats
  - Power-operated windows
  - Air conditioning
  - Cruise control.

**Modifications reported by the seller are limited to:**\n
- Black-painted wheels
- An Alpine head unit
- A set of Armor All all-weather floor mats.
- Land Rover helped shape the modern definition of an SUV when it launched the original Range Rover in 1970 as a more road-friendly alternative to the Series IIA. Initially offered only with two doors, the Range Rover gained a four-door variant in 1981 as part of its upmarket shift. Sales in the United States officially started in 1988 and ended after the 1995 model year.
- Power comes from a 3.9-liter V8, rated at 178 horsepower and 220 lb-ft of torque. It spins the four wheels via a 4-speed automatic transmission and a 2-speed transfer case.
`,
    equipment: `
- 16-inch wheels
- 2-speed transfer case
- Fog lights with guards
- Rear wiper
- Trailer hitch receiver
- Sunroof
- Wood interior trim
- Leather upholstery
- Power-adjustable front seats
- Power-operated windows
- Air conditioning
- Cruise control
`,
    modifications: `
- Wheels painted black
- Alpine head unit
- Armor All all-weather floor mats
    `,
    known_flaws: `
- The Carfax report also shows a mileage inconsistency in January 2007. It provides no additional details. The odometer currently indicates approximately 76,100 miles, but the total mileage is unknown.
- Exterior chips, scratches, and dings
- Corrosion on the front tow hook
- Some corrosion on door hinges
- Scratches and cracks on tail lights
- Some corrosion on the passenger side quarter panel and doors
- Some scratches on wheels
- Some wear on front seats
- Some wear on the steering wheel
- Cracks in plastics on the dash
- Some corrosion on underbody components
`,
    recent_service_history: `
The seller reports that the battery and the throttle position sensor were replaced during their ownership. The attached Carfax history report shows that the following services have been performed:
- January 2017: Power steering pump replaced, serpentine belt replaced
- June 2016: Front and rear shock absorbers replaced, power steering hoses/lines replaced, A/C hose/line replaced, spark plugs and spark plug wires replaced, distributor cap replaced, drive belt replaced
`,
    other_items: `1 key`,
    ownership_history: `The seller purchased this Range Rover in December 2021 and has added minimal mileage since.`,
    videos: [
      'https://www.youtube.com/embed/5Lx2otyZqdw',
      'https://www.youtube.com/embed/mxvhAxpQe3w',
      'https://www.youtube.com/embed/HgMFOJBaUUw',
      'https://www.youtube.com/embed/Iniafa7YgyY',
    ],
  },
};

export const rrCountyCommentsEN: Comment[] = [
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: `Not sure on tires but they look pretty new. Danny Bell could sign off on 500 miles could have him check it first. We have only driven it short distances on weekend outings.`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 24_500,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 23_890,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 17_320,
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
    text: 'Nice classic Rangie. That interior looks minty.',
    user: faker.helpers.arrayElement(usersShort),
  },
];

export const rrCountyUA: Car = {
  id: '2',
  title: '1989 Range Rover County',
  sub_title: 'Двигун V8, Повний привід',
  engine: '3.9L V8',
  body_style: 'suv',
  drive_train: 'all-drive',
  make: 'Land Rover',
  model: 'Range Rover',
  vin: 'SALHV124XKA358075',
  seller_type: 'private',
  transmission: 'automatic',
  year: 1989,
  title_status: 'Clean (NY)',
  transmission_details: '',
  exterior_color: 'Білий',
  interior_color: 'Бежевий',
  location: 'Житомир',
  mileage: 76_100,
  photos: [
    '/demo/cars/rr-county/car-photos/1.jpeg',
    '/demo/cars/rr-county/car-photos/2.jpeg',
    '/demo/cars/rr-county/car-photos/3.jpeg',
    '/demo/cars/rr-county/car-photos/4.jpeg',
    '/demo/cars/rr-county/car-photos/5.jpeg',
    '/demo/cars/rr-county/car-photos/6.jpeg',
    '/demo/cars/rr-county/car-photos/6.jpeg',
    '/demo/cars/rr-county/car-photos/7.jpeg',
    '/demo/cars/rr-county/car-photos/8.jpeg',
  ],
  sections: {
    highlights: `
**ОЦЕ...** - 1989 Range Rover County Завершений у білому кольорі з бежевим салоном. Приєднаний звіт Carfax не вказує на жодні аварії в минулому цього Range Rover. Також показує власність в Західних штатах до 2021 року.

**Заводське обладнання включає:**
  - 16-дюймові колеса
  - Передача з двома швидкостями
  - Протитуманні фари
  - Задній склоочисник
  - Фаркоп
  - Скляний люк
  - Дерев'яна обробка салону
  - Шкіряний оббив
  - Регульовані електроприводом передні сидіння
  - Електроприводом вікна
  - Кондиціонер
  - Круїз-контроль.

**Модифікації, повідомлені продавцем:**
- Чорні фарбовані колеса
- Аудіосистема Alpine
- Комплект підлогових килимків Armor All для будь-якої погоди.
`,
    equipment: `
- 16-дюймові колеса
- Коробка передач з двома швидкостями
- Протитуманні фари з захистом
- Задній склоочисник
- Приймач фаркопа
- Скляний люк
- Дерев'яна обробка салону
- Шкіряний оббив
- Регульовані електроприводом передні сидіння
- Електроприводом вікна
- Кондиціонер
- Круїз-контроль
`,
    modifications: `
- Колеса, забарвлені чорним кольором
- Автомагнітола Alpine
- Підлогові килимки Armor All для будь-якої погоди
`,
    known_flaws: `
- Звіт Carfax також показує неузгодженість пробігу у січні 2007 року. Він не надає додаткових деталей. Одометр наразі показує приблизно 76,100 миль, але загальний пробіг невідомий.
- Подряпини, подряпини та вдари на зовнішній частині
- Корозія на передньому буксирному крюку
- Деяка корозія на петлях дверей
- Подряпини та тріщини на задніх фарах
- Деяка корозія на пасажирському бічному кварталі та дверях
- Деякі подряпини на колесах
- Деякий знос на передніх сидіннях
- Деякий знос на кермі
- Тріщини в пластику на приладовій панелі
- Деяка корозія на компонентах підкріплення
`,
    recent_service_history: `
Продавець повідомляє, що акумулятор та датчик положення дросельної заслонки були замінені під час їх власності. Прикріплений звіт Carfax показує, що були виконані наступні роботи:

- Січень 2017: Замінено насос гідропідсилювача керма, замінено ремінь серпентину
- Червень 2016: Замінено передні та задні амортизатори, замінено шланги/лінії гідропідсилювача керма, замінено шланг/лінію кондиціонера, замінено свічки та проводи запалювання, замінено капот розподільника, замінено приводний ремінь
`,
    other_items: `1 ключ`,
    ownership_history: `Продавець придбав цей Range Rover у грудні 2021 року і додав мінімальний пробіг з того часу.`,
    videos: [
      'https://www.youtube.com/embed/5Lx2otyZqdw',
      'https://www.youtube.com/embed/mxvhAxpQe3w',
      'https://www.youtube.com/embed/HgMFOJBaUUw',
      'https://www.youtube.com/embed/Iniafa7YgyY',
    ],
  },
};

export const rrCountyCommentsUA: Comment[] = [
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: `Не впевнений на рахунок шин, але вони виглядають досить новими.`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 24_500,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 23_890,
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'bid',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 17_320,
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
    text: 'Гарний класичний Ровер. Салон виглядає гарно',
    user: faker.helpers.arrayElement(usersShort),
  },
];
