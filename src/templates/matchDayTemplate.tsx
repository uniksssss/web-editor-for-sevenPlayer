import { matchDayTemplate } from "../assets/cards/cards";
import { forwardRef } from "react";

type MatchDayTemplateProps = {
  date?: string;
  time?: string;
  location?: string;
  photo?: File | string;
  homeLogo?: string;
  awayLogo?: string;
  teamVersion?: 'ntmk' | 'urgau';
};

const MatchDayTemplate = forwardRef<HTMLDivElement, MatchDayTemplateProps>(
  ({ date, time, location, photo, homeLogo, awayLogo, teamVersion }, ref) => {
    const photoUrl = photo instanceof File ? URL.createObjectURL(photo) : photo;

    return (
      <div className="template-wrapper">
        <div className="template matchday" ref={ref}>
          <img src={matchDayTemplate} alt="" className="background" />
          {photoUrl && <img src={photoUrl} alt="" className="matchday-player-photo"/>}
          {homeLogo && <img src={homeLogo} alt="" className="logo_home" />}
          {awayLogo && <img src={awayLogo} alt="" className="logo_away"/>}
          <div className="matchday-data">
            <div className="matchday-row">
              <h1 className="matchday-data_date">{date}</h1>
              <h1 className="matchday-data_time">{time}</h1>
            </div>
            <h1 className="matchday-data_location">{location}</h1>
          </div>
          {teamVersion === 'ntmk' && (
            <h2 className="team-name">Уралочка-НТМК</h2>
          )}
          {teamVersion === 'urgau' && (
            <h2 className="team-name">Уралочка-2-УрГЭУ</h2>
          )}

        </div>
      </div>
    );
  }
);

MatchDayTemplate.displayName = 'MatchDayTemplate';

export default MatchDayTemplate;
