export type Service = {
  title: string
  price: string
  note: string
}

export const site = {
  name: 'Центр красоты Натальи Ловцевой',
  shortName: 'Наталья Ловцева',
  locale: 'ru-RU',
  tagline: 'Красота, в которую хочется возвращаться',
  description: 'Парикмахерские, косметологические и уходовые услуги в одном уютном салоне Рязани.',
  contact: {
    phone: '+7 (4912) 50-08-28',
    mobile: '+7 (930) 785-08-28',
    address: 'Рязань, Быстрецкая улица, 20, цокольный этаж',
    hours: 'Ежедневно до 21:00',
  },
  rating: '5,0',
  reviewCount: '451 оценка',
  logo: 'https://avatars.mds.yandex.net/get-maps-adv-crm/3927175/2a000001838df065ed5354fa6cccaef86219/landing_logo',
  mapUrl: 'https://yandex.ru/maps/org/tsentr_krasoty_natalyi_lovtsevoy/1281310175/',
  bookingUrl: 'https://yandex.ru/maps/org/tsentr_krasoty_natalyi_lovtsevoy/1281310175/',
  whatsapp: 'https://wa.me/79307850828',
  telegram: 'https://t.me/centrkrasoti',
  vk: 'https://vk.ru/club68371393',
}

export const services: Service[] = [
  { title: 'Перманентный макияж', price: 'от 7 000 ₽', note: 'Брови, губы, стрелки' },
  { title: 'Стрижка и укладка', price: 'от 1 000 ₽', note: 'Женские и мужские стрижки' },
  { title: 'Биозавивка волос', price: 'от 3 700 ₽', note: 'Японская лечебная биозавивка' },
  { title: 'Уход за лицом', price: 'от 2 000 ₽', note: 'Чистка, пилинг, карбокситерапия' },
  { title: 'Ногтевой сервис', price: 'от 2 700 ₽', note: 'Маникюр, педикюр, наращивание' },
  { title: 'Коррекция фигуры', price: 'от 1 500 ₽', note: 'RF-лифтинг, кавитация, LPG' },
]

export const images = {
  background: `${import.meta.env.BASE_URL}hero-natalia.jpg`,
  solar: 'https://avatars.mds.yandex.net/get-sprav-posts/19677858/2a0000019cbef585920d9f2a4970d8aac067/XL',
  curls: 'https://avatars.mds.yandex.net/get-sprav-posts/19919567/2a0000019c5299e49d4e9e691e439c2c8b72/XL',
  piercing: 'https://avatars.mds.yandex.net/get-sprav-posts/19677858/2a0000019c57b44d334804634dab814c0406/XL',
}

export const reviews = [
  { author: 'Виктория С.', text: 'Уютный салон, приятный персонал. Мастер учёл все пожелания и очень хорошо справился со своей работой.' },
  { author: 'Маргарита', text: 'Небольшой, чистый и уютный салон. Обращаюсь за оформлением бровей, стрижками, уши дочке прокалывали. Все хорошо.' },
  { author: 'Екатерина Т.', text: 'Вежливость, аккуратность, точность — это все про девочек. Маникюр держался очень долго, без сколов и трещин.' },
]
