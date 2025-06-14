import Header from "../header/header"
import NavCard from "../nav-card/nav-card"
import '../start-screen/start-screen.css'
import { scoreTemplate, birthdayTemplate, matchDayTemplate, statisticTemplate } from "../../assets/cards/cards"

export default function StartScreen(){
    return(
        <>
            <Header/>
            <div className="start-container">
                <h1 className="start_head">Выберите тип поста:</h1>
                <div className="start_wrapper">
                    <NavCard image={matchDayTemplate} title="Матч-день" to="/edit/match-day"/>
                    <NavCard image={birthdayTemplate} title="День рождения" to="/edit/birthday"/>
                    <NavCard image={scoreTemplate} title="Счёт игры" to="/edit/score"/>
                    <NavCard image={statisticTemplate} title="Статистика игры" to="/edit/statistic"/>
                </div>
            </div>
        </>
    )
}