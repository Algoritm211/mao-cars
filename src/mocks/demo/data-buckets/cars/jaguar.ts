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

export const jaguarUA: Car = {
  id: '1',
  title: '2018 Jaguar XF Sportbrake S',
  sub_title: '380-hp Supercharged V6, Повний привід, Універсал',
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
  exterior_color: 'Чорний оксамит',
  interior_color: 'Чорний',
  location: 'Київська область',
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
**Цею...** 2018 Jaguar XF Sportbrake S

- XF Sportbrake S - це високопродуктивна версія середньорозмірного розкішного універсала Jaguar. Запроваджений в 2018 році, він поєднує практичність універсала з розкошшю та водними радостями, які очікуються від Jaguar. Незважаючи на своє універсальне поєднання продуктивності та корисності, XF Sportbrake ніколи не був успіхом у продажах в Сполучених Штатах, Jaguar підтвердивши, що вони продали менше 250 одиниць на американському ринку протягом періоду виробництва універсала.
- Потужність надходить від 3,0-літрового наддувного V6, розрахованого на 380 кінських сил та 332 фунтів-футів крутного моменту. Вихідні дані надсилаються на всі чотири колеса через 8-ступінчасту автоматичну трансмісію.
`,
    equipment: `
- Пакет технологій (система Touch Pro з дисплеєм 10 дюймів з Navigation Pro, Професійні послуги, Точка доступу Wi-Fi, Інтерактивний дисплей водія, Програвач CD/DVD, Система Meridian 825W з звуком охоплення)
- Пакет допомоги водію (адаптивний круїз-контроль з підтримкою черги, розпізнавання дорожніх знаків, адаптивний обмежувач швидкості, 360-градусний паркінговий допоміжник, система камери огляду, допоміжник при сліпій зоні, допоміжник при паркуванні)
- Пакет комфорту та зручностей (обігрівані та охолоджувані передні сидіння, обігрівані задні сидіння, двері з м'яким закриттям)
- 20-дюймові колеса
- Задня пневматична підвіска
- Червоні гальма
- Панорамний люк
- Шкіряна оббивка
- Задні сидіння з розкладкою 40/20/40
- Вставки з фінного шпону Satin Fine Line
- Вибіркові режими руху (Нормальний, Еко, Динамічний)
- Режим дощу, снігу та льоду
- Адаптивний режим відгуку на поверхню (AdSR)
- Векторизація крутного моменту
- Допоміжник при старті на підйомі
- Автоматичний клімат-контроль з поділом на дві зони
- Дисплей на лобовому склі
- Ключ активності
`,
    modifications: `
Модифікації, повідомлені продавцем, включають:

- Застосування захисної плівки на передню частину
- Чорне покриття на зовнішніх знаках
- Видалення емблеми "XF"
- Тонування вікон
`,
    known_flaws: `
- Фарбові сколи та подряпини по зовнішній частині (зображені на фото в галереї)
- Пошкоджені краї захисної плівки на фарбі
- Зморшки на водійському сидінні
- Подряпини на порозі водія
- Подряпини на облицюванні багажного відділення
- Пошкоджений утеплювальний килимок капота
`,
    recent_service_history: `
- Серпень 2023 (55,046 миль): Відремонтовано заслінку люка
- Липень 2023 (54,878 миль): Заміна масла та фільтра двигуна, відремонтовано колесо
- Серпень 2022 (46,810 миль): Калібрування камери переднього скла
- Серпень 2022 (46,694 миль): Заміна підшипника переднього колеса праворуч та задніх гальмівних накладок, дисков і колодок, виконано чотирих-колісне вирівнювання, оновлено ПЗУ
- Травень 2022 (44,025 миль): Заміна ременя приводу аксесуарів, акумулятора, направляючих заднього багажника та задніх бризгових щитків, заміна масла та фільтра двигуна
- Січень 2022 (40,326 миль): Заміна трубки відведення охолоджуючої рідини, передніх і задніх скребків, а також кришки багажного відсіку
- Березень 2021 (28,796 миль): Заміна масла та фільтра двигуна, вимивання гальмівної рідини, заміна салонного фільтра, заміна фільтрів повітря двигуна, відремонтовано колесо
- Січень 2021 (24,626 миль): Заміна ущільнювача панорамного люка, відремонтовано колесо, оновлено модулі дверей
- Червень 2020 (20,271 миль): Заміна форсунки мийки фар
- Квітень 2020 (15,948 миль): Заміна масла та фільтра двигуна, переміщення шин, виконано чотирих-колісне вирівнювання
- Березень 2020 (15,196 миль): Перепрограмування ключа
- Грудень 2019 (12,197 миль): Заміна БЖД за рекомендацією виробника

Продавець повідомляє, що в вересні 2023 року, приблизно на 55,100 милях, було замінено шини, виконано чотирих-колісне вирівнювання та відремонтовано два колеса.
`,
    other_items: `
- 2 ключі
- Інструкція власника
- Бирка з вікном
- Перекладини для багажника на даху
- Заводські килимки
- Килимки WeatherTech
`,
    ownership_history: 'Продавець придбав цей XF Sportbrake S у вересні 2019 року.',
    videos: [
      'https://www.youtube.com/embed/PE5MHnQ8NaE',
      'https://www.youtube.com/embed/cI8-twkhwx4',
      'https://www.youtube.com/embed/QPRQ8o1hY6Q',
      'https://www.youtube.com/embed/zxoSVh-APlk',
    ],
  },
};

export const jaguarCommentsUA: Comment[] = [
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
    text: 'Вау, класна машина',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    created_at: faker.date.future().toISOString(),
    upvotes: faker.number.int({ min: 5, max: 10 }),
    type: 'text',
    text: `Дуже рідкісна машина, мріяв про неї декілька років`,
    user: faker.helpers.arrayElement(usersShort),
  },
];
