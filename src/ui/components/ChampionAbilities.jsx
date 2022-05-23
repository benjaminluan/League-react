import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import $ from "jquery"
const ChampionAbilities = () => {
  const [spells, setSpells] = useState([]);
  const [passive, setPassive] = useState("");
  const { id } = useParams();
  let anything;

  async function getSkinData() {
    const {
      data: { data },
    } = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/${id}.json`
    );
    setSpells(data[id].spells);
    setPassive(data[id].passive);
    // passive.description.replace('<br><br>',"")
    return (
      anything = passive.description.replace('<br><br>',"")
    )
  }
  
  useEffect(() => {
    getSkinData();
  }, []);

  return (
    <div className="champion__abilities">
      <div className="champion__ability-icons">
        <figure className="passive__img--wrapper">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/passive/${passive.image?.full}`}
            alt=""
          />
        </figure>
        {spells.map((spell) => (
          <figure className="ability__img--wrapper" key={spell.id}>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/${spell?.id}.png`}
              alt=""
            />
          </figure>
        ))}
      </div>
      <p>`{anything}`</p>
    </div>
  );
};

export default ChampionAbilities;
