import Header from "../header/header";
import NavCard from "../nav-card/nav-card";
import "../start-screen/start-screen.css";
import {
  scoreTemplate,
  birthdayTemplate,
  matchDayTemplate,
  statisticTemplate,
  welcome,
  thanksTemplate,
  scheduleTemplate,
  resultsTemplate,
} from "../../assets/cards/cards";

export default function StartScreen() {
  return (
    <>
      <Header />
      <div className="start-container">
        <h1 className="start_head">Выберите тип поста:</h1>
        <div className="start_wrapper">
          <NavCard
            image={matchDayTemplate}
            title="Матч-день"
            to="/edit/match-day"
          />
          <NavCard
            image={birthdayTemplate}
            title="День рождения"
            to="/edit/birthday"
          />
          <NavCard image={scoreTemplate} title="Счёт игры" to="/edit/score" />
          <NavCard
            image={statisticTemplate}
            title="Статистика игры"
            to="/edit/statistic"
          />
          <NavCard
            image={welcome}
            title="Добро пожаловать"
            to="/edit/welcome"
          />
          <NavCard
            image={thanksTemplate}
            title="Спасибо за игру"
            to="/edit/thanks"
          />
          <NavCard
            image={scheduleTemplate}
            title="Расписание на тур"
            to="/edit/schedule"
          />
          <NavCard
            image={resultsTemplate}
            title="Итоги тура"
            to="/edit/results"
          />
        </div>
      </div>
    </>
  );
}
