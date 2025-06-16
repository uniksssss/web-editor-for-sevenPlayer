import { forwardRef } from "react";
import { thanksTemplate } from "../assets/cards/cards";
import './template.css';
import obj from "..//assets/cards/thanksObj.png"

type ThanksTemplateProps = {
  firstName?: string;
  lastName?: string;
  photo?: File | string;
  playerNumber?: number;
  playerRole?: string;
};

const roleTranslations: Record<string, string> = {
    attacker: "Нападающая",
    blocker: "Блокирующая",
    libero: "Либеро",
    binder: "Связующая",
    coach: "Тренер",
};

export const ThanksTemplate = forwardRef<HTMLDivElement, ThanksTemplateProps>(
  ({ firstName, lastName, photo, playerNumber, playerRole }, ref) => {
    const photoUrl = photo instanceof File ? URL.createObjectURL(photo) : photo;
    const translatedRole = playerRole ? roleTranslations[playerRole] : "";

    return (
      <div className="template-wrapper">
        <div className="template thanks" ref={ref}>
          <img src={thanksTemplate} alt="" className="background" />
          {photoUrl && <img src={photoUrl} alt="" className="thanks-player-photo" />}
          <img src={obj} className="thanks-obj"></img>
          {playerNumber !== undefined && (
            <div className="thanks_player-number-container">
              <p className="thanks_player-number">#{playerNumber}</p>
            </div>
          )}

          {translatedRole && (
            <p className="thanks_player-role">{translatedRole}</p>
          )}
          <div className="thanks_name">
            <h1 className="thanks-name">{firstName}</h1>
            <h1 className="thanks-lastname">{lastName}</h1>
          </div>
        </div>
      </div>
    );
  }
);

ThanksTemplate  .displayName = 'BirthdayTemplate';
