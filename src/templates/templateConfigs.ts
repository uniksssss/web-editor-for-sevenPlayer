import type { TemplateConfig } from "./types";

export const templates: TemplateConfig[] = [
  {
    id: 'birthday',
    name: 'С Днём Рождения',
    previewImage: '/assets/cards/birthdayTemplateNew.png',
    fields: [
      { id: 'firstName', label: 'Имя', type: 'text' },
      { id: 'lastName', label: 'Фамилия', type: 'text' },
      { id: 'playerNumber', label: 'Номер', type: 'number' },
      { id: 'playerRole', label: 'Амплуа', type: 'role' },
      { id: 'photo', label: 'Фото (при добавлении своего фото заранее удаляйте фон)', type: 'player-photo-selector' },
    ],
  },
  {
    id: 'match-day',
    name: 'Матч-день',
    previewImage: '/assets/cards/matchDayTemplateNew.png',
    fields: [
      { id: 'date', label: 'Дата', type: 'custom-date' },
      { id: 'time', label: 'Время', type: 'time' },
      { id: 'location', label: 'Место', type: 'text' },
      { id: 'homeLogo', label: 'Логотип хозяев', type: 'logo-selector' },
      { id: 'awayLogo', label: 'Логотип гостей', type: 'logo-selector' },
      { id: 'photo', label: 'Фото', type: 'image' },
    ],
  },
  {
    id: 'score',
    name: 'Счёт игры',
    previewImage: '/assets/cards/scoreTemplate.png',
    fields: [
      { id: 'mainHomeScore', label: 'Счёт домашней команды', type: 'number' },
      { id: 'mainAwayScore', label: 'Счёт команды гостей', type: 'number' },
      { id: 'extraScore', label: 'Cчёт партий', type: 'text' },
      { id: 'homeLogo', label: 'Логотип хозяев', type: 'logo-selector' },
      { id: 'awayLogo', label: 'Логотип гостей', type: 'logo-selector' },
      { id: 'photo', label: 'Фото', type: 'image' },
    ],
  },
];