import React, { useEffect, useState } from "react";
import FilterButton from "./components/FilterButton";
import axios from "axios";

const Champions = () => {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState([])

  async function championsMap() {
    const {data: {data}} = await axios(
      "http://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/champion.json"
    );
    const dataIntoArray = Object.values(data)
    setChampions(dataIntoArray);
  }

  useEffect(() => {
    championsMap();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <FilterButton />
        <div className="champions">
          {champions.map((champion) => (
            <figure className="champion__img--wrapper" key={champion.id}>
              <img
                src={`./assets/12.6.1/img/champion/${champion.id}`}
                alt=""
                className="champion__img"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Champions;
 