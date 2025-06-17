import { BirthdayTemplate } from "./birthdayTemplate";
import MatchDayTemplate from "./matchDayTemplate";
import { ScoreTemplate } from "./scoreTemplate";
import { StatisticTemplate } from "./statisticTemplate";
import { WelcomeTemplate } from "./welcomeTemplate";
import { ThanksTemplate } from "./thanksTemplate";
import { ScheduleTemplate } from "./scheduleTemplate";
import { ResultsTemplate } from "./resultsTemplate";

export const renderTemplate = (
  templateId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: Record<string, any>
) => {
  switch (templateId) {
    case "match-day":
      return <MatchDayTemplate {...values} />;
    case "birthday":
      return <BirthdayTemplate {...values} />;
    case "score":
      return (
        <ScoreTemplate
          mainHomeScore={0}
          mainAwayScore={0}
          extraScore={"00:00"}
          {...values}
        ></ScoreTemplate>
      );
    case "statistic":
      return (
        <StatisticTemplate
          mainHomeScore={0}
          mainAwayScore={0}
          extraScore={"00:00"}
          {...values}
        ></StatisticTemplate>
      );
    case "welcome":
      return <WelcomeTemplate {...values} />;
    case "thanks":
      return <ThanksTemplate {...values} />;
    case "schedule":
      return <ScheduleTemplate {...values} />;
    case "results":
      return <ResultsTemplate results={[]} {...values} />;
    default:
      return <p>Нет шаблона</p>;
  }
};
