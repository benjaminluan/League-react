import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import $ from "jquery";
const ChampionAbilities = () => {
  const [spells, setSpells] = useState([]);
  const [passive, setPassive] = useState("");
  const [active, setActive] = useState(-1);
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
    console.log(passive);
  }

  useEffect(() => {
    getSkinData();
  }, []);


  function ifActive(activeNum){
    setActive(active !== activeNum ? activeNum : -1);
  }

  return (
    <div className="champion__abilities--container">
      <div className="champion__abilities">
        <h1 className="abilities__header">Abilities</h1>
        <div className="champion__ability-icons">
          <figure className="passive__img--wrapper popup">
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
      </div>
      <div className="champion__abilities--info">
        <p>{passive.description?.replace("<br><br>", "")}</p>

      </div>
    </div>
  );
};

export default ChampionAbilities;
