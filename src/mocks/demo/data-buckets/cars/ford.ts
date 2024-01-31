import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';

export const fordEN: Car = {
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

export const fordCommentsEN: Comment[] = [
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

export const fordUA: Car = {
  id: '8',
  title: '2023 Ford F-450 Super Duty Lariat 4x4',
  sub_title: '6.7-літровий турбодізель, повний привід',
  engine: '6.7L V8',
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
  exterior_color: 'Сірий',
  interior_color: 'Чорний',
  location: 'Київ',
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
**ЦЕ...** - це 2023 Ford F-450 Super Duty Lariat 4x4, завершений в вугільно-сірому кольорі з чорним внутрішнім.

- Прикріплений звіт про історію аварій Carfax не показує жодних аварій або розбіжностей в пробігу за короткий час існування цього F-450; він також підтверджує, що це автомобіль з одним власником.
- Згідно з віконним стікером, зображеним в фотогалереї, цей F-450 мав початковий MSRP в розмірі $83,545, і він обладнаний пакетом FX4 Off-Road, 19,5-дюймовими колесами, подвійними задніми колесами, електричними підйомниками, скляним люком з подвійними панелями, шкіряним оббивкою, електрично регульованими, обігріваними і охолоджуваними передніми сидіннями, обігріваними задніми сидіннями, обігрівом керма, електрично керованим заднім вікном, двозонним автоматичним клімат-контролем, аудіосистемою Bang & Olufsen, адаптивним круїз-контролем, моніторингом сліпих зон та більшим, як описано нижче. Єдине змінюване продавцем - це тонування вікон.
- Випущений на 2023 рік, п'яте покоління серії F Super Duty пропонується в різноманітних конфігураціях з кількома рівнями технічних і комфортних функцій. Пропонується з двома різними версіями дизельного V8 Power Stroke об'ємом 6,7 літра від Ford, F-450 має найкращий в класі потужність на буксир призначений для буксира з вагою до 40,000 фунтів, коли він поєднується з фургоном gooseneck.
- Потужність надходить від дизельного V8 Power Stroke об'ємом 6,7 літра від Ford, оціненою в 475 кінських сил і 1,050 фунт-футів крутного моменту. Потужність надсилається на чотири задні колеса або всі шість коліс за допомогою 10-ступінчастої автоматичної коробки передач і двоступеневої коробки передач.
`,
    equipment: `
У фотогалереї надано віконний стікер, а частковий список значущого обладнання включає:

- Пакет FX4 Off-Road (система контролю спуску зі схилу, амортизатори з налаштуванням для бездоріжжя, захисні щити для роздаткової коробки та бака для палива, наклейки FX4 Off-Road на кузові)
- Колеса діаметром 19,5 дюйма
- Двоступенева роздаткова коробка
- LED-фари
- Подвійні задні колеса
- Електричні підйомники
- Бризкові ковпачки передніх та задніх коліс
- Скляний люк з подвійними панелями
- Шкіряне оббивання
- Електрично регульовані, обігрівані та охолоджувані передні сидіння
- Обігрівані задні сидіння
- Обігрів керма
- Електрично кероване заднє вікно
- Двозонний автоматичний клімат-контроль
- Sync 4 з екраном інфотейнменту 12 дюймів
- 12-дюймовий цифровий приладовий щит
- Аудіосистема Bang & Olufsen
- Камера 360 градусів
- Моніторинг сліпих зон з попередженням про рух на перехресті
`,
    modifications: `
- Тоновані вікна
`,
    recent_service_history: `
Доданий історичний звіт Carfax показує, що перед поставкою, технічне обслуговування та перевірки безпеки були проведені у квітні 2023 року.
`,
    other_items: `    
- 2 ключа
`,
    ownership_history: 'Продавець придбав цей новий F-450 у травні 2023 року.',
    videos: ['https://www.youtube.com/embed/1A7_ublxcps'],
  },
};

export const fordCommentsUA: Comment[] = [
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
    text: `Ця цифра крутного моменту БЕЗУМНА!`,
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
    text: `Ця вантажівка виглядає добре з усіх боків`,
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: 'Навіщо вам купувати вантажівку, а через місяць виставляти її на аукціон?',
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
    text: `Велика тачка`,
    user: faker.helpers.arrayElement(usersShort),
  },
];
