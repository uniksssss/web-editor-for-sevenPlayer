import { forwardRef } from "react";
import { welcome } from "../assets/cards/cards";
import './template.css';

type WelcomeTemplateProps = {
  firstName?: string;
  lastName?: string;
  homeLogo?: string; 
  photo?: File | string;
  playerRole?: string;
};

const roleTranslations: Record<string, string> = {
    attacker: "Нападающая",
    blocker: "Блокирующая",
    libero: "Либеро",
    binder: "Связующая",
    coach: "Тренер",
};

export const WelcomeTemplate = forwardRef<HTMLDivElement, WelcomeTemplateProps>(
  ({ firstName, lastName, homeLogo, photo, playerRole }, ref) => {
    const photoUrl = photo instanceof File ? URL.createObjectURL(photo) : photo;
    const translatedRole = playerRole ? roleTranslations[playerRole] : "";

    return (
      <div className="template-wrapper">
        <div className="template welcome" ref={ref}>
          <img src={welcome} alt="" className="background" />
          {photoUrl && <img src={photoUrl} alt="" className="welcome_player-photo" />}
          {homeLogo && <img src={homeLogo} alt="" className="welcome_logo_home" />}
          <div className="welcome_player-role_container">
            {translatedRole && (
                <p className="welcome_player-role">{translatedRole}</p>
            )}
          </div>
          <div className="welcome-name-surname">
            <h1 className="welcome-name">{firstName}</h1>
            <h1 className="welcome-lastname">{lastName}</h1>
          </div>
        </div>
      </div>
    );
  }
);

WelcomeTemplate.displayName = 'WelcomeTemplate';
