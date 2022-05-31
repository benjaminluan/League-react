import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChampionAbilities from "../ui/components/ChampionAbilities";
import ChampionSkin from "../ui/components/ChampionSkin";
import axios from "axios";

const ChampionInfo = () => {
  const { id } = useParams();
  const [champion, setChampion] = useState("");

  // const champion = allChampions.find((champion) => champion.id === id);

  async function getIndividualChampionData() {
    const {
      data: { data },
    } = await axios.get(
      `https://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/${id}.json`
    ).then(({data}) => setChampion(data));
    console.log(data)
  }

  useEffect(() => {
    getIndividualChampionData();
  }, []);


  
  return (
    <div className="champion__page">
      <ChampionSkin />
      <div className="champion__info--container">
        <div className="champion__info">
          <h2 className="champion__title underline__right--animation">
            {champion?.title}
          </h2>
          <h1 className="champion__name underline__left--animation">
            {champion?.name}
          </h1>
          <p className="champion__blurb">{champion?.lore}</p>
        </div>
        <ChampionAbilities championData={champion} />
      </div>
    </div>
  );
};

export default ChampionInfo;
