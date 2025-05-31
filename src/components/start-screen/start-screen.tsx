import Header from "../header/header"
import NavCard from "../nav-card/nav-card"
import '../start-screen/start-screen.css'
import { test1, birthdayTemlate, matchDayTemplate } from "../../assets/cards/cards"
// import { AppRoute } from "../../const"

export default function StartScreen(){
    return(
        <>
            <Header/>
            <div className="start-container">
                <h1 className="start_head">Выберите тип поста:</h1>
                <div className="start_wrapper">
                    <NavCard image={matchDayTemplate} title="Матч-день" to="/edit/match-day"/>
                    <NavCard image={birthdayTemlate} title="День рождения" to="/edit/birthday"/>
                    <NavCard image={test1} title="Счёт игры(пока не сделан)" to="/edit/score"/>
                </div>
            </div>
        </>
    )
}