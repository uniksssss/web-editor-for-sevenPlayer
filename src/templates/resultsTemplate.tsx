import { forwardRef } from "react";
import { resultsTemplate } from "../assets/cards/cards.ts";
import "./template.css";

export type ResultsBlock = {
  mainHomeScore: number;
  mainAwayScore: number;
  extraScore: string;
  homeLogo?: string;
  awayLogo?: string;
};

type ResultsTemplateProp = {
  tour?: number;
  results: ResultsBlock[];
};

export const ResultsTemplate = forwardRef<HTMLDivElement, ResultsTemplateProp>(
  ({ results, tour }, ref) => {
    return (
      <div className="template-wrapper">
        <div className="template result" ref={ref}>
          <img src={resultsTemplate} alt="" className="background" />
          <div className="results-container">
            {results.map((result, index) => (
              <div key={index} className="results_row">
                <div className="results_logo_col">
                  {result.homeLogo && (
                    <img src={result.homeLogo} className="results_logo" />
                  )}
                </div>
                <div className="results_score-block">
                  <div className="result_score-row">
                    <h1 className="results_mainHomeScore">
                      {result.mainHomeScore}
                    </h1>
                    <h1> : </h1>
                    <h1 className="results_mainAwayScore">
                      {result.mainAwayScore}
                    </h1>
                  </div>
                  <p className="results_extraScore">{result.extraScore}</p>
                </div>
                <div className="results_logo_col">
                  {result.awayLogo && (
                    <img src={result.awayLogo} className="results_logo" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="results_tour-number">{tour} тур</p>
        </div>
      </div>
    );
  }
);
