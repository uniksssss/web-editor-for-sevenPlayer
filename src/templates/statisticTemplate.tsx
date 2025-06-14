import { forwardRef } from "react";
import { statisticTemplate } from "../assets/cards/cards.ts";
import './template.css';

type StatisticTemplateProp ={
    mainHomeScore: number;
    mainAwayScore: number;
    extraScore: string;
    homeLogo?: string;
    awayLogo?: string;
    homeScores?: number;
    awayScores?: number;
    homeAttack?: number;
    awayAttack?: number;
    homeBlocks?: number;
    awayBlocks?: number;
    homeAces?: number;
    awayAces?: number;
    homeTrick?: number;
    awayTrick?: number;
};


export const StatisticTemplate = forwardRef<HTMLDivElement, StatisticTemplateProp>(
  ({ mainHomeScore, mainAwayScore, extraScore, homeLogo, awayLogo, homeScores, awayScores,
        homeAttack, awayAttack, homeBlocks, awayBlocks,
        homeAces, awayAces, homeTrick, awayTrick }, ref) => {

    return(
        <div className="template-wrapper">
        <div className="template matchday" ref={ref}>
          <img src={statisticTemplate} alt="" className="background" />
          <div className="statistic_logos">
            {homeLogo && <img src={homeLogo} alt="" className="statistic_logo_home" />}
            {awayLogo && <img src={awayLogo} alt="" className="statistic_logo_away"/>}
          </div>
          <div className="statistic">
            <div className="statistic_main">
                <h1 className="statistic_main--home">{mainHomeScore}</h1>
                <h1 className="statistic_amain--away">{mainAwayScore}</h1>
            </div>
            <p className="statistic_extra">{extraScore}</p>
          </div>
          <div className="statistic_container">
            <p className="home-scores">{homeScores}</p>
            <p className="away-scores">{awayScores}</p>
            <p className="home-attack">{homeAttack}</p>
            <p className="away-attack">{awayAttack}</p>
            <p className="home-blocks">{homeBlocks}</p>
            <p className="away-blocks">{awayBlocks}</p>
            <p className="home-aces">{homeAces}</p>
            <p className="away-aces">{awayAces}</p>
            <p className="home-trick">{homeTrick}</p>
            <p className="away-trick">{awayTrick}</p>
          </div>
        </div>
      </div>
    );
})

