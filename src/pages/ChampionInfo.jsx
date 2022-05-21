import React from "react";
import { useParams } from "react-router-dom";
import ChampionAbilities from "../ui/components/ChampionAbilities";
import ChampionSkin from "../ui/components/ChampionSkin";


const ChampionInfo = ({ allChampions }) => {
  const { id } = useParams();
  const champion = allChampions.find((champion) => champion.id === id);

  return (
    <div className="champion__page">
        <ChampionSkin/>
      <div className="champion__info--container">  
        <div className="champion__info">
          <h2 className="champion__title">{champion?.title}</h2>
          <h1 className="champion__name">{champion?.id}</h1>
          <p className="champion__blurb">{champion?.blurb}</p>
        </div>
        <ChampionAbilities />
      </div>
    </div>
  );
};

export default ChampionInfo;
