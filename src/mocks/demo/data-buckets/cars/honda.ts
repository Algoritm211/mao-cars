import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';
import { generateAuction } from '@/mocks/demo/utils/generate-auction';
import { generateShortAuction } from '@/mocks/demo/utils/generate-short-auction';

export const hondaEN: Car = {
  id: '5',
  title: '1998 Honda Integra Type R Sedan',
  sub_title: '"98 Spec" Japanese-Market Model, 5-Speed Manual, Mostly Unmodified, U.S. Title',
  engine: '1.8L I4',
  body_style: 'sedan',
  drive_train: 'front',
  make: 'Honda',
  model: 'Integra',
  vin: 'DB81300826',
  seller_type: 'private',
  transmission: 'automatic',
  year: 1998,
  title_status: 'Clean (QC, Canada)',
  transmission_details: '',
  exterior_color: 'Championship White',
  interior_color: 'Black',
  location: 'Montreal, QC, Canada',
  mileage: 87_600,
  photos: [
    '/demo/cars/honda/car-photos/1.jpeg',
    '/demo/cars/honda/car-photos/2.jpeg',
    '/demo/cars/honda/car-photos/3.jpeg',
    '/demo/cars/honda/car-photos/4.jpeg',
    '/demo/cars/honda/car-photos/5.jpeg',
    '/demo/cars/honda/car-photos/6.jpeg',
    '/demo/cars/honda/car-photos/7.jpeg',
    '/demo/cars/honda/car-photos/8.jpeg',
    '/demo/cars/honda/car-photos/9.jpeg',
  ],
  sections: {
    highlights: `
**THIS...** is a 1998 Honda Integra Type R Sedan. Finished in Championship White with a black interior.

- This Integra Type R is a Japanese-spec, right-hand drive sedan that's registered and located in Quebec, Canada. It's equipped with a metric instrument cluster and the odometer indicates about 141,000 kilometers, which represents approximately 87,700 miles.
- A Japanese Car VX vehicle history report shows no accidents or mileage discrepancies in this car's past.

**Factory equipment includes:**
- 16-inch wheels
- Limited-slip differential
- Rear spoiler
- Recaro front bucket seats
- MOMO steering wheel
- Air conditioning
- Power-operated windows, locks, and mirrors.

**Modifications reported by the seller are limited to:**
- Pioneer Carrozzeria head unit
- Aftermarket tweeters
- Tinted windows.
- Honda introduced the third-generation Integra in 1993 in its home country of Japan. Sold as an Acura in the United States, it was offered with two or four doors and it was praised for its quick-revving engine and nimble handling. 1995 brought the vaunted Type R version, which offered enthusiasts more performance and even better handling than the other variants of the Integra.
- Power comes from a B18C 1.8-liter inline-4, rated at 197 horsepower and 133 lb-ft of torque. Output is sent to the front wheels via a 5-speed manual transmission.
`,
    equipment: `
- 16-inch wheels
- Limited-slip differential
- Rear spoiler
- Cloth upholstery
- Recaro front bucket seats
- MOMO steering wheel
- Carbon fiber-look interior trim
- Air conditioning
- Power-operated windows, locks, and mirrors
`,
    modifications: `
- Pioneer Carrozzeria DEH-5300 head unit
- Aftermarket tweeters
- Tinted windows
`,
    known_flaws: `
- Some chips and scratches around the exterior
- Ding on the hood
- Creases and wear on the front seats
- Some wear on interior touch points and trim panels; damaged panel behind the steering wheel
- Some corrosion on underbody components and engine bay hardware
`,
    recent_service_history: `
- The selling dealer reports that the following services were performed in 2023:
- Transmission rebuilt (all bearings and synchros replaced)
- Valve cover, valve cover gasket, and spark plugs replaced
`,
    other_items: `    
- 1 key
`,
    ownership_history: 'The selling dealer acquired this Integra Type R in 2023.',
    videos: [
      'https://www.youtube.com/embed/wRsyksIXvDk',
      'https://www.youtube.com/embed/81R_v8pC56Q',
      'https://www.youtube.com/embed/C0CKyvZxqAQ',
    ],
  },
};

export const hondaCommentsEN: Comment[] = [
  {
    id: faker.string.uuid(),
    amount: 10_900,
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
    text: 'Gorgeous! Wish i could get one some day.',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 5900,
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
    text: `Is the car titled in Canada or the states?`,
    user: faker.helpers.arrayElement(usersShort),
  },
];

export const hondaUA: Car = {
  id: '5',
  title: '1998 Honda Integra Type R Sedan',
  sub_title: '"Автомобіль для японського ринку, механічна трансмісія, не модифікований',
  engine: '1.8L I4',
  body_style: 'sedan',
  drive_train: 'front',
  make: 'Honda',
  model: 'Integra',
  vin: 'DB81300826',
  seller_type: 'private',
  transmission: 'automatic',
  year: 1998,
  title_status: 'Clean (QC, Canada)',
  transmission_details: '',
  exterior_color: 'Білий',
  interior_color: 'Чорний',
  location: 'Запорізька область',
  mileage: 87_600,
  photos: [
    '/demo/cars/honda/car-photos/1.jpeg',
    '/demo/cars/honda/car-photos/2.jpeg',
    '/demo/cars/honda/car-photos/3.jpeg',
    '/demo/cars/honda/car-photos/4.jpeg',
    '/demo/cars/honda/car-photos/5.jpeg',
    '/demo/cars/honda/car-photos/6.jpeg',
    '/demo/cars/honda/car-photos/7.jpeg',
    '/demo/cars/honda/car-photos/8.jpeg',
    '/demo/cars/honda/car-photos/9.jpeg',
  ],
  sections: {
    highlights: `
**ЦЕ...** - це седан Honda Integra Type R 1998 року випуску. Він виконаний в кольорі Championship White з чорним салоном.

- Цей Integra Type R є праворучним седаном японської специфікації, зареєстрованим та розташованим в Квебеку, Канада. Він оснащений метричною приладовою панеллю, а одометр показує приблизно 141 000 кілометрів, що становить приблизно 87 700 миль.
- Звіт історії автомобіля японського Car VX не показує жодних аварій або розбіжностей в показаннях одометра в минулому цього автомобіля.

**Заводське обладнання включає:**
- 16-дюймові диски
- Обмежений змійовик
- Задній спойлер
- Передні сидіння Recaro
- Кермо MOMO
- Кондиціонер
- Електропривід вікон, дверей та дзеркал.

**Модифікації, про які повідомив продавець, обмежуються:**
- Головний блок Pioneer Carrozzeria
- Післямаркетні твітери
- Тоновані вікна.
- Honda представила третє покоління моделі Integra в 1993 році в рідній Японії. Продавалася під брендом Acura в Сполучених Штатах, вона пропонувалася з двома або чотирма дверима і отримала визнання за свій швидкозапускний двигун і керованість. У 1995 році була представлена варіант версії Type R, яка пропонувала ентузіастам більше продуктивності та ще кращу керованість, ніж інші варіанти Integra.
- Потужність надається рядним 4-циліндровим двигуном об'ємом 1,8 л B18C, з потужністю 197 кінських сил та крутним моментом 133 фунт-футів. Потужність передається на передні колеса за допомогою 5-ступінчастої механічної коробки передач.
`,
    equipment: `
- 16-дюймові диски
- Обмежений змійовик
- Задній спойлер
- Тканинна оббивка салону
- Передні сидіння Recaro
- Кермо MOMO
- Вигляд внутрішніх обшивок під карбонове волокно
- Кондиціонер
- Електропривід вікон, замків та дзеркал
`,
    modifications: `
- Головний блок Pioneer Carrozzeria DEH-5300
- Тоновані вікна
`,
    known_flaws: `
- Деякі сколи та подряпини на зовнішній поверхні
- Вм'ятини на капоті
- Згини та знос на передніх сидіннях
- Деякий знос на внутрішніх точках дотику та обшивкових панелях; пошкоджена панель за кермом
- Деяка корозія на компонентах підвіски та кріплення у двигунному відсіку
`,
    recent_service_history: `
Продавець звітує, що в 2023 році були виконані наступні роботи:

- Перебудова трансмісії (замінено всі підшипники та синхронізатори)
- Заміна кришки клапана, прокладки кришки клапана та свічок запалювання
`,
    other_items: `    
- 1 ключ
`,
    ownership_history: 'Продавець придбав цей Integra Type R в 2023 році.',
    videos: [
      'https://www.youtube.com/embed/wRsyksIXvDk',
      'https://www.youtube.com/embed/81R_v8pC56Q',
      'https://www.youtube.com/embed/C0CKyvZxqAQ',
    ],
  },
};

export const hondaCommentsUA: Comment[] = [
  {
    id: faker.string.uuid(),
    amount: 10_900,
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
    text: 'Неймовірно! Одного дня я куплю себе таку',
    user: faker.helpers.arrayElement(usersShort),
  },
  {
    id: faker.string.uuid(),
    amount: 5900,
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
    text: `Де конкретно знаходиться машина?`,
    user: faker.helpers.arrayElement(usersShort),
  },
];
