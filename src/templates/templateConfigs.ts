import type { TemplateConfig } from "./types";

export const templates: TemplateConfig[] = [
  {
    id: 'birthday',
    name: 'С Днём Рождения',
    previewImage: '/assets/cards/birthdayTemplateNew.png',
    fields: [
      { id: 'firstName', label: 'Имя', type: 'text', required: true },
      { id: 'lastName', label: 'Фамилия', type: 'text', required: true },
      { id: 'playerNumber', label: 'Номер', type: 'number' },
      { id: 'playerRole', label: 'Амплуа', type: 'role' },
      { id: 'photo', label: 'Фото (при добавлении своего фото заранее удаляйте фон)',
        type: 'player-photo-selector', required: true },
    ],
  },
  {
    id: 'match-day',
    name: 'Матч-день',
    previewImage: '/assets/cards/matchDayTemplateNew.png',
    fields: [
      { id: 'date', label: 'Дата', type: 'custom-date', required: true },
      { id: 'time', label: 'Время', type: 'time', required: true },
      { id: 'location', label: 'Место', type: 'text', required: true },
      { id: 'homeLogo', label: 'Логотип хозяев', type: 'logo-selector', required: true },
      { id: 'awayLogo', label: 'Логотип гостей', type: 'logo-selector', required: true },
      { id: 'photo', label: 'Фото', type: 'image', required: true },
      { id: 'teamVersion', label: 'Команда', type: 'toggle-team', required: true },
    ],
  },
  {
    id: 'score',
    name: 'Счёт игры',
    previewImage: '/assets/cards/scoreTemplate.png',
    fields: [
      { id: 'mainHomeScore', label: 'Счёт домашней команды', type: 'number', required: true },
      { id: 'mainAwayScore', label: 'Счёт команды гостей', type: 'number', required: true },
      { id: 'extraScore', label: 'Cчёт партий (вводим через пробел в формате 00:00 00:00 и т.д)',
        type: 'text', required: true },
      { id: 'homeLogo', label: 'Логотип хозяев', type: 'logo-selector', required: true },
      { id: 'awayLogo', label: 'Логотип гостей', type: 'logo-selector', required: true },
      { id: 'photo', label: 'Фото', type: 'image', required: true },
    ],
  },
  {
    id: 'statistic',
    name: 'Статистика игры',
    previewImage: '/assets/cards/statisticTemplate.png',
    fields: [
      { id: 'mainHomeScore', label: 'Счёт домашней команды', type: 'number', required: true },
      { id: 'mainAwayScore', label: 'Счёт команды гостей', type: 'number', required: true },
      { id: 'extraScore', label: 'Cчёт партий', type: 'text', required: true },
      { id: 'homeLogo', label: 'Логотип хозяев', type: 'logo-selector', required: true },
      { id: 'awayLogo', label: 'Логотип гостей', type: 'logo-selector', required: true },
      { id: 'homeScores', label: 'Очки домашней команды', type: 'number', required: true },
      { id: 'awayScores', label: 'Очки команды гостей', type: 'number', required: true },
      { id: 'homeAttack', label: 'Атака домашней команды', type: 'number', required: true },
      { id: 'awayAttack', label: 'Атака команды гостей', type: 'number', required: true },
      { id: 'homeBlocks', label: 'Блоки домашней команды', type: 'number', required: true },
      { id: 'awayBlocks', label: 'Блоки команды гостей', type: 'number', required: true },
      { id: 'homeAces', label: 'Эйсы домашней команды', type: 'number', required: true },
      { id: 'awayAces', label: 'Эйсы команды гостей', type: 'number', required: true },
      { id: 'homeTrick', label: 'Приём домашней команды', type: 'number', required: true },
      { id: 'awayTrick', label: 'Приём команды гостей', type: 'number', required: true },
    ],
  },
];