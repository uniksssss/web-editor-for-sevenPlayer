import { forwardRef } from "react";
import { scoreTemplate } from "../assets/cards/cards";
import './template.css';

type ScoreTemplateProp ={
    mainHomeScore: number;
    mainAwayScore: number;
    extraScore: string;
    photo?: File;
    homeLogo?: string;
    awayLogo?: string;
};


export const ScoreTemplate = forwardRef<HTMLDivElement, ScoreTemplateProp>(
  ({ mainHomeScore, mainAwayScore, extraScore, photo, homeLogo, awayLogo }, ref) => {
    // const photoUrl = photo instanceof File ? URL.createObjectURL(photo) : photo;
    const photoUrl = typeof photo === 'string' ? photo : undefined;

    return(
        <div className="template-wrapper">
        <div className="template matchday" ref={ref}>
          {photoUrl && <img src={photoUrl} alt="" className="score-player-photo"/>}
          <img src={scoreTemplate} alt="" className="background" />
          {/* {photoUrl && <img src={photoUrl} alt="" className="score-player-photo--back"/>} */}
          {/* {photoUrl && <img src={photoUrl} alt="" className="score-player-photo"/>} */}
          <div className="score_logos">
            {homeLogo && <img src={homeLogo} alt="" className="score_logo_home" />}
            {awayLogo && <img src={awayLogo} alt="" className="score_logo_away"/>}
          </div>
          <div className="score">
            <div className="score_main">
                <h1 className="score_main--home">{mainHomeScore}</h1>
                <h1 className="score_amain--away">{mainAwayScore}</h1>
            </div>
            <p className="score_extra">{extraScore}</p>
          </div>
        </div>
      </div>
    );
})

