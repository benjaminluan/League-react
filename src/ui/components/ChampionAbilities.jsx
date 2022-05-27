import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChampionAbilities = () => {
  const [spells, setSpells] = useState([]);
  const [passive, setPassive] = useState("");
  const [description, setDescription] = useState("test");
  const { id } = useParams();
  async function getSkinData() {
    const {
      data: { data },
    } = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/${id}.json`
    );
    setSpells(data[id].spells);
    setPassive(data[id].passive);
    setDescription(removeHTML(passive.description));
  }

  function removeHTML(str) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
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
            className={
              "ability__button" +
              (description === removeHTML(passive.description)
                ? " show"
                : " hidden")
            }
            onClick={() => {
              setDescription(removeHTML(passive.description));
            }}
          >
            <figure className="passive__img--wrapper">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/passive/${passive.image?.full}`}
                alt=""
              />
            </figure>
          </button>
          {spells.map((spell, index) => (
            <button
              className={
                "ability__button" +
                (description === spell.description ? " show" : " hidden")
              }
              key={spell.id}
              onClick={() => {
                setDescription(spell.description);
              }}
            >
              <span>
                <span>
                  <figure className={`ability__img--wrapper`}>
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/${spell?.id}.png`}
                      alt=""
                    />
                  </figure>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="champion__abilities--info">
        <p className="champion__abilities--info--para">{description}</p>
      </div>
    </div>
  );
};

export default ChampionAbilities;
