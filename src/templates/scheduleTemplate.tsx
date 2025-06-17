import { scheduleTemplate } from "../assets/cards/cards";
import { forwardRef } from "react";

type ScheduleTemplateProps = {
  date1?: string;
  time1?: string;
  date2?: string;
  time2?: string;
  date3?: string;
  time3?: string;
  date4?: string;
  time4?: string;
  teams1?: string;
  teams2?: string;
  teams3?: string;
  teams4?: string;
  phrase?: string;
  location?: string;
  photo?: File | string;
  homeLogo?: string;
  awayLogo?: string;
};

export const ScheduleTemplate = forwardRef<
  HTMLDivElement,
  ScheduleTemplateProps
>(
  (
    {
      date1,
      time1,
      date2,
      time2,
      date3,
      time3,
      date4,
      time4,
      phrase,
      location,
      photo,
      homeLogo,
      awayLogo,
      teams1,
      teams2,
      teams3,
      teams4,
    },
    ref
  ) => {
    const photoUrl = photo instanceof File ? URL.createObjectURL(photo) : photo;

    return (
      <div className="template-wrapper">
        <div className="template schedule" ref={ref}>
          <img src={scheduleTemplate} alt="" className="background" />
          {photoUrl && (
            <img src={photoUrl} alt="" className="schedule-player-photo" />
          )}
          {homeLogo && (
            <img src={homeLogo} alt="" className="schedule-logo_first" />
          )}
          {awayLogo && (
            <img src={awayLogo} alt="" className="schedule-logo_second" />
          )}
          <h2 className="schedule_phrase">{phrase}</h2>
          <div className="schedule_container">
            <div className="schedule-data">
              <div className="schedule-row">
                <h1 className="schedule-data_date">{date1}</h1>
                <h1 className="schedule-data_time">{time1}</h1>
              </div>
              <div className="schedule-row">
                <h1 className="schedule-data_date">{date2}</h1>
                <h1 className="schedule-data_time">{time2}</h1>
              </div>
              <div className="schedule-row">
                <h1 className="schedule-data_date">{date3}</h1>
                <h1 className="schedule-data_time">{time3}</h1>
              </div>
              <div className="schedule-row">
                <h1 className="schedule-data_date">{date4}</h1>
                <h1 className="schedule-data_time">{time4}</h1>
              </div>
            </div>
            <div className="schedule_teams-container">
              <h1 className="schedule_teams">{teams1}</h1>
              <h1 className="schedule_teams">{teams2}</h1>
              <h1 className="schedule_teams">{teams3}</h1>
              <h1 className="schedule_teams">{teams4}</h1>
            </div>
          </div>
          <div className="schedule-data_location-container">
            <h1 className="schedule-data_location">{location}</h1>
          </div>
        </div>
      </div>
    );
  }
);

ScheduleTemplate.displayName = "MatchDayTemplate";
