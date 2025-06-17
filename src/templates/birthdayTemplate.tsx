import { forwardRef } from "react";
import { birthdayTemplate } from "../assets/cards/cards";
import "./template.css";
import obj from "..//assets/cards/birthdayObj.png";

type BirthdayTemplateProps = {
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

export const BirthdayTemplate = forwardRef<
  HTMLDivElement,
  BirthdayTemplateProps
>(({ firstName, lastName, photo, playerNumber, playerRole }, ref) => {
  const photoUrl = photo instanceof File ? URL.createObjectURL(photo) : photo;
  const translatedRole = playerRole ? roleTranslations[playerRole] : "";

  return (
    <div className="template-wrapper">
      <div className="template birthday" ref={ref}>
        <img src={birthdayTemplate} alt="" className="background" />
        {photoUrl && (
          <img src={photoUrl} alt="" className="birthday-player-photo" />
        )}
        <img src={obj} className="birthday-obj"></img>
        {playerNumber !== undefined && (
          <div className="player-number-container">
            <p className="player-number">#{playerNumber}</p>
          </div>
        )}

        {translatedRole && <p className="player-role">{translatedRole}</p>}
        <h1 className="birthday-name">{firstName}</h1>
        <h1 className="birthday-lastname">{lastName}</h1>
      </div>
    </div>
  );
});

BirthdayTemplate.displayName = "BirthdayTemplate";
