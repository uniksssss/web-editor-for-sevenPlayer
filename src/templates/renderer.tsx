import { BirthdayTemplate } from "./birthdayTemplate";
import MatchDayTemplate from "./matchDayTemplate";
import { ScoreTemplate } from "./scoreTemplate";


export const renderTemplate = (templateId: string, values: Record<string, any>) => {
  switch (templateId) {
    case 'match-day':
      return <MatchDayTemplate {...values} />;
    case 'birthday':
      return <BirthdayTemplate playerNumber={0} playerRole={""} {...values} />;
    case 'score':
      return <ScoreTemplate mainHomeScore={0} mainAwayScore={0} extraScore={""}></ScoreTemplate>
    default:
      return <p>Нет шаблона</p>;
  }
};



