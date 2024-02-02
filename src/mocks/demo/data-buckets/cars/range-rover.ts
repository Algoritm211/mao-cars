import { faker } from '@faker-js/faker';

import { Car, Comment } from '@/maocars-client/schemas';

import { usersShort } from '@/mocks/demo/data-buckets/users-short';

export const rangeRoverEN: Car = {
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

Introduced in late 2021 for the 2022 model year, the L460 is the fifth generation of the Range Rover. An "evolution rather than a revolution," the new Range Rover keeps the traditional design of the L405 while bringing new modern elements to the platform. The Range Rover P530 version is the first Jaguar Land Rover (JLR) model to utilize an engine under the combustion and electrified powertrain partnership between JLR and BMW that was formed back in 2019.
Power comes from a 4.4-liter twin-turbocharged V8, rated at 523 horsepower and 553 lb-ft of torque. Output is sent to all four wheels through an 8-speed automatic transmission.
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
    ownership_history:
      'The selling dealer acquired this Range Rover in November 2023 and has added approximately 100 miles since.',
    videos: ['https://www.youtube.com/embed/LfSVcoxLJqE'],
  },
};

export const rangeRoverCommentsEN: Comment[] = [
  {
    id: faker.string.uuid(),
    amount: 191_200,
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
    text: `Rare and Range Rover aren’t something you hear a lot but this indeed is a super rare Rover! GLWTS!`,
    user: faker.helpers.arrayElement(usersShort),
  },
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
    text: `So sleek, love the taillights and clean exterior lines.`,
    user: faker.helpers.arrayElement(usersShort),
  },
];

export const rangeRoverUA: Car = {
  id: '7',
  title: '2023 Range Rover P530 SV',
  sub_title: 'Twin-Turbo V8, Повний привід, Максимальна комплектація, без модифікацій',
  engine: '4.4L V8',
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
  exterior_color: 'Синій металік',
  interior_color: 'Білий перламутр',
  location: 'Дніпропетровська область',
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
**Це...** це 2023 Range Rover P530 SV, завершений у металевому кольорі Varesine Blue з білим перламутровим інтер'єром.

- Прикріплений звіт про історію автомобіля Carfax не вказує на жодних аварій або розбіжностей в пробігу в минулому цього Range Rover.
- Згідно зі стікером на вікні, наданому в галереї, заводське обладнання включає:
- Ковані колеса діаметром 23 дюйми, модель Style 1077 з алмазною обробкою
- Елементи екстер'єру SV Intrepid
- Чорний контрастний дах
- Природний темний лінійний венге вінір з мозаїчною металевою вставкою в салоні
- Піванілінова шкіряна оббивка SV
- Аудіосистема Meridian Signature
- Система розваг для задніх пасажирів
- Та більше деталей наведено нижче. Продавець заявляє, що не було здійснено жодних модифікацій.

Представлений у кінці 2021 року для модельного року 2022, L460 є п'ятим поколінням Range Rover. Це "еволюція, а не революція", новий Range Rover зберігає традиційний дизайн L405, принісши нові сучасні елементи на платформу. Версія Range Rover P530 є першою моделлю Jaguar Land Rover (JLR), яка використовує двигун в рамках партнерства між JLR і BMW в галузі комбінованих та електричних силових установок, укладеного ще у 2019 році.
Потужність забезпечується 4,4-літровим бітурбованим V8, оціненим в 523 кінських сили і 553 фунтів-футів крутного моменту. Потужність передається на всі чотири колеса через 8-ступінчасту автоматичну коробку передач.
`,
    equipment: `
У фотогалереї надано віконний стікер, а частковий перелік значущого обладнання включає:

- Преміумний набір захисту та зберігання інтер'єру (антимікробні гумові килимки на підлозі та у багажнику та багажний відсік)
- 23-дюймові ковані диски Style 1077 з алмазним поліруванням
- Система повітряної підвіски
- Електронний активний диференціал
- Система керування всіма колесами
- Зовнішні акценти SV Intrepid
- Червоні гальма з червоними гальмівними зажимами
- Світлодіодні фари
- Протитуманні фари
- Обігрівані, складні та автоматично затемнювані дзеркала заднього виду з привітальними світлодіодами
- Чорний контрастний дах
- Ковзний панорамний дах з автоматичною сонцезахисною шторкою
- Висувні дверні ручки
- Двері з м'яким закриттям
- Електрично приводимий багажник
- Природний темний лінійний облицювання венге з мозаїчно-металевим внутрішнім обробкою
- Півсинтетична шкіра SV
- Підголівник SV Bespoke Perlino
- Обігрівані, вентильовані та електроприводні передні сидіння
- Функція масажу гарячим каменем для передніх пасажирів
- Обігрівані, вентильовані та електроприводні задні сидіння Comfort Plus класу "Екзекьютив"
- Обігріваний кермо SV Bespoke з відкритою пористою дерев'яною обробкою та шкірою
- Електроприводна колонка керма
- Проекційний дисплей
- Дзеркало заднього виду від Clearsight в кабіні
- Холодильник у передній центральній консолі
- Система клімат-контролю з чотирма зонами
- Екран Pivi Pro інфотейнмент системи розміром 13,1 дюйма
- Аудіосистема Meridian Signature
- Система розваг для задніх пасажирів з цифровими мультимедійними можливостями
- Функціональні можливості Apple CarPlay та Android Auto
`,
    known_flaws: `
- Пошкодження шкіри на порозі водійської двері
`,
    recent_service_history: `
Дилер з продажу повідомляє, що в дилерському центрі Range Rover нещодавно було завершено обслуговування на 10 000 миль.`,
    other_items: `    
- 2 ключі
- Керівництво власника**
- Повноформатне запасне колесо
`,
    ownership_history:
      'Дилер придбав цей Range Rover у листопаді 2023 року і з того часу проїхав приблизно 100 миль.',
    videos: ['https://www.youtube.com/embed/LfSVcoxLJqE'],
  },
};

export const rangeRoverCommentsUA: Comment[] = [
  {
    id: faker.string.uuid(),
    amount: 191_200,
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
    text: `Такий гладкий, мені подобаються задні ліхтарі та чисті зовнішні лінії.`,
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
    text: 'Яка прекрасна комплектація!',
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
];
