import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChampionAbilities = () => {
  const [spells, setSpells] = useState([]);
  const [passive, setPassive] = useState("");
  const [active, setActive] = useState(0);

  const { id } = useParams();
  let anything = 0;
  async function getSkinData() {
    const {
      data: { data },
    } = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/${id}.json`
    );
    setSpells(data[id].spells);
    setPassive(data[id].passive);
  }

  useEffect(() => {
    getSkinData();
  }, []);

  return (
    <div className="champion__abilities--container">
      <div className="champion__abilities">
        <h1 className="abilities__header">Abilities</h1>
        <div className="champion__ability-icons">
          <button
            className={"ability__button" + (active === 0 ? " show" : " hidden")}
            onClick={(event) => {
              setActive(0);
              console.log(active);
            }}
          >
            <figure className="passive__img--wrapper popup">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/passive/${passive.image?.full}`}
                alt=""
              />
            </figure>
          </button>
          {spells.map((spell) => (
            <button
              className={
                "ability__button" +
                (active === { anything } ? " show" : " hidden")
              }
              key={spell.id}
              onClick={(event) => {
                setActive(1);
                console.log(active, event.target.alt);
              }}
            >
              <figure className={`ability__img--wrapper`}>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/${spell?.id}.png`}
                  alt={(anything += 1)}
                />
              </figure>
            </button>
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
