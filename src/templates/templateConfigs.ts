import type { TemplateConfig } from "./types";

export const templates: TemplateConfig[] = [
  {
    id: 'birthday',
    name: 'С Днём Рождения',
    previewImage: '/assets/previews/birthday.png',
    fields: [
      { id: 'firstName', label: 'Имя', type: 'text' },
      { id: 'lastName', label: 'Фамилия', type: 'text' },
      { id: 'photo', label: 'Фото (при добавлении своего фото заранее удаляйте фон)', type: 'player-photo-selector' },
    ],
  },
  {
    id: 'match-day',
    name: 'Матч-день',
    previewImage: '/assets/previews/matchday.png',
    fields: [
      { id: 'date', label: 'Дата', type: 'custom-date' },
      { id: 'time', label: 'Время', type: 'time' },
      { id: 'location', label: 'Место', type: 'text' },
      { id: 'homeLogo', label: 'Логотип хозяев', type: 'logo-selector' },
      { id: 'awayLogo', label: 'Логотип гостей', type: 'logo-selector' },
      { id: 'photo', label: 'Фото игрока (при добавлении своего фото заранее удаляйте фон)', type: 'player-photo-selector' },
    ],
  },
];
