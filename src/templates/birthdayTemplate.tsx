import { forwardRef } from "react";
import { birthdayTemlate } from "../assets/cards/cards";
import './template.css';

type BirthdayTemplateProps = {
  firstName?: string;
  lastName?: string;
  photo?: File | string;
};

export const BirthdayTemplate = forwardRef<HTMLDivElement, BirthdayTemplateProps>(
  ({ firstName, lastName, photo }, ref) => {
    const photoUrl = photo instanceof File ? URL.createObjectURL(photo) : (typeof photo === 'string' ? photo : null);

    return (
      <div className="template-wrapper">
        <div className="template birthday" ref={ref}>
          <img src={birthdayTemlate} alt="" className="background" />
          {photoUrl && <img src={photoUrl} alt="" className="birthday-player-photo" />}
          <h1 className="birthday-name">{firstName} {lastName}</h1>
        </div>
      </div>
    );
  }
);

BirthdayTemplate.displayName = 'BirthdayTemplate'; // Для удобства дебага
