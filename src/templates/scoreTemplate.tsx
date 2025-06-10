import { forwardRef } from "react";
import { scoreTemplate } from "../assets/cards/cards";


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
    const photoUrl = photo instanceof File ? URL.createObjectURL(photo) : photo;

    return(
        <div className="template-wrapper">
        <div className="template matchday" ref={ref}>
          <img src={scoreTemplate} alt="" className="background" />
          {/* {photoUrl && <img src={photoUrl} alt="" className="matchday-player-photo"/>} */}
          {homeLogo && <img src={homeLogo} alt="" className="logo_home" />}
          {awayLogo && <img src={awayLogo} alt="" className="logo_away"/>}
          {/* <div className="matchday-data">
            <div className="matchday-row">
              <h1 className="matchday-data_date">{date}</h1>
              <h1 className="matchday-data_time">{time}</h1>
            </div>
            <h1 className="matchday-data_location">{location}</h1>
          </div> */}
        </div>
      </div>
    );
})

