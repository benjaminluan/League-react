import React from "react";
import SuggestionInput from "./components/SuggestionInput";

const Landing = ({ allChampions }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="landing">
          <h1 className="landing__header">
            Fan-made League of Legends Champion Informative Website
          </h1>
          <SuggestionInput allChampions={allChampions} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
