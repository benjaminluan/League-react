import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChampionAbilities = ({ championData }) => {
  const [spells, setSpells] = useState([]);
  const [passive, setPassive] = useState([]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function getSkinData() {
    setPassive(championData.passive);
    setSpells(championData?.spells);
  }

  function removeHTML(str) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
  }

  useEffect(() => {
    getSkinData();
  }, [championData]);

  useEffect(() => {
    setDescription(removeHTML(passive?.description));
  }, [passive]);

  return (
    <div className="champion__abilities--container">
      <div className="champion__abilities">
        <h1 className="abilities__header">Abilities</h1>
        <div className="champion__ability-icons">
          <button
            className={
              "ability__button" +
              (description === removeHTML(passive?.description)
                ? " show"
                : " hidden")
            }
            onClick={() => {
              setDescription(removeHTML(passive?.description));
            }}
          >
            <figure className="ability__img--wrapper">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/12.9.1/img/passive/${passive?.image?.full}`}
                alt=""
              />
            </figure>
          </button>
          {spells?.map((spell) => (
            <button
              className={
                "ability__button" +
                (description === spell.description ? " show" : " hidden")
              }
              key={spell.id}
              onClick={() => {
                setDescription(removeHTML(spell.description));
              }}
            >
              <figure className={`ability__img--wrapper`}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/${spell?.id}.png`}
                  alt=""
                />
              </figure>
            </button>
          ))}
        </div>
      </div>
      <div className="champion__abilities--info">
        <p className="champion__abilities--info--para" key={description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChampionAbilities;
