import { BirthdayTemplate } from "./birthdayTemplate";
import MatchDayTemplate from "./matchDayTemplate";
import { ScoreTemplate } from "./scoreTemplate";
import { StatisticTemplate } from "./statisticTemplate";
import { WelcomeTemplate } from "./welcomeTemplate";
import { ThanksTemplate } from "./thanksTemplate";


export const renderTemplate = (templateId: string, values: Record<string, any>) => {
  switch (templateId) {
    case 'match-day':
      return <MatchDayTemplate  {...values} />;
    case 'birthday':
      return <BirthdayTemplate {...values} />;
    case 'score':
      return <ScoreTemplate mainHomeScore={0} mainAwayScore={0} extraScore={"00:00"} {...values}></ScoreTemplate>
    case 'statistic':
      return <StatisticTemplate mainHomeScore={0} mainAwayScore={0} extraScore={"00:00"} {...values}></StatisticTemplate>
    case 'welcome':
      return <WelcomeTemplate {...values}/>
    case 'thanks':
      return <ThanksTemplate {...values}/>
    default:
      return <p>Нет шаблона</p>;
  }
};



