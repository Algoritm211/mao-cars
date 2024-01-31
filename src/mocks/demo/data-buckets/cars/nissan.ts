import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';

export const nissanEN: Car = {
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

export const nissanCommentsEN: Comment[] = [
  {
    id: faker.string.uuid(),
    amount: 10_400,
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
];

export const nissanUA: Car = {
  id: '4',
  title: '1997 Nissan Cima V8',
  sub_title: 'Люксовий седан для японського ринку, V8, має модифікації',
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
  exterior_color: 'Біла перлина/Сірий',
  interior_color: 'Сірий',
  location: 'Дніпро',
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
**ЦЕ...** 1997 рік. Nissan Cima V8.

Завершений у білому перловому кольорі з сірим салоном.

Це праворульний, японський седан, що призначений для японського ринку, зареєстрований в Нью-Джерсі. Він оснащений метричною приборною панеллю, а одометр показує близько 121 000 кілометрів, що становить приблизно 75 200 миль.

**Заводське обладнання включає:**
  - Тканинне оббивання сидінь
  - Електрорегулювання передніх сидінь
  - Електрорегулювання задніх сидінь
  - Кондиціонер
  - Систему інфотейнменту на основі сенсорного екрану
  - Систему навігації
  - Круїз-контроль.

**Модифікації, повідомлені продавцем, включають:**
- Система втяжки холодного повітря
- Післямаркетні частини у вихлопній системі
- Диски Precious діаметром 17 дюймів
- Система зниження підвіски
- Затоновані вікна
- Модуль Bluetooth.

Тісно пов'язаний з Infiniti Q45, третє покоління Cima з'явилося на світ у 1997 році з більш округлим зовнішнім дизайном та довшим списком розкішних функцій, що відображають його преміальне положення на ринку. Седан поставлявся стандартно з багатотурбіновим V6, хоча більш дорогі варіанти отримували V8, а модельний ряд включав моделі з фокусом на продуктивність та розкіш. Покоління Y33 Cima вийшло з ладу в 2001 році.
Потужність надходить від 4,1-літрового V8, оцінюється приблизно в 270 кінських сил та 274 фунт-футів крутного моменту. Внутрішньо він називається VH41DE, і він приводить задні колеса у рух через 4-ступінчасту автоматичну коробку передач.
`,
    equipment: `
- Протитуманні фари
- Тканинне оббивання сидінь
- Електрорегульовані передні сидіння
- Функція пам'яті для водія
- Електрорегульовані задні сидіння з функцією схилення
- Електрорегульовані та складні бічні дзеркала з електроприводом
- Кондиціонер
- Система інфотейнменту на основі сенсорного екрану
- Касетний програвач
- Змінювач дисків CD на 6 дисків
- Система навігації
- Круїз-контроль
`,
    modifications: `
## Механіка та відсік двигуна:
- Система втяжки холодного повітря
- Післямаркетні частини в вихлопній системі
- Біла фарба на деяких компонентах відсіку двигуна

## Колеса та підвіска:
- Диски Precious діаметром 17 дюймів
- Система зниження підвіски

## Зовнішній вигляд:
- Тоновані фари
- Тоновані вікна
- Дощові щілини на вікнах
- Тоновані задні фари

## Внутрішній простір:
- Верхня частина оббивки сидінь у вигляді мережива
- Зеркало заднього виду широкого кута огляду
- Динаміки Stark Audio діаметром 6,5 дюйма
- Сабвуфер на багажнику
- Модуль Bluetooth
- Жорстко закріплений радарний детектор
`,
    known_flaws: `
- Деякі подряпини та подряпини на зовнішній частині
- Подряпини на колесах
- Поламані ребра вентиляційного отвору вентиляції на пасажирському боці
- Подряпини на сенсорному екрані
- Потріскані обшивки центральної консолі
`,
    recent_service_history: `
Продавець заявляє, що масло і фільтр двигуна востаннє змінювалися в липні 2023 року. Він додає, що масло і фільтр двигуна будуть змінені знову перед передачею автомобіля наступному власнику.
`,
    other_items: `    
- 1 ключ та 1 ключ господаря
- Власницькі посібники
- Ремонтний посібник
- Оббивка сидінь
`,
    ownership_history: 'Продавець придбав автомобіль в липні 2023 року.',
    videos: [
      'https://www.youtube.com/embed/dm2qBpgdax8',
      'https://www.youtube.com/embed/FwGQlfJ78dk',
    ],
  },
};

export const nissanCommentsUA: Comment[] = [
  {
    id: faker.string.uuid(),
    amount: 10_400,
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
    text: 'Чи ви знаєте, яка у нього підвіска?',
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
    text: `Удачі всім учасникам торгів! Подивимося, хто забере додому цю прекрасну Cima.`,
    user: faker.helpers.arrayElement(usersShort),
  },
];
