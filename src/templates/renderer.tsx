import { BirthdayTemplate } from "./birthdayTemplate";
import MatchDayTemplate from "./matchDayTemplate";


export const renderTemplate = (templateId: string, values: Record<string, any>) => {
  switch (templateId) {
    case 'match-day':
      return <MatchDayTemplate {...values} />;
    case 'birthday':
      return <BirthdayTemplate {...values} />;
    default:
      return <p>Нет шаблона</p>;
  }
};



