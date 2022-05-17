
import React, { useEffect, useState } from "react";

import Champion from "./components/Champion";

const Champions = ({ allChampions }) => {
  const [filteredChampions, setfilteredChampions] = useState([]);

  const championTypes = [
    "All",
    "Assassin",
    "Fighter",
    "Mage",
    "Marksman",
    "Support",
    "Tank",
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="champion__filter--bar">
          {championTypes.map((type) => (
            <button
              className="champion__filter--btn hover__effect"
              onClick={() => {
                type === 'All' ? setfilteredChampions(allChampions)
                :
                setfilteredChampions(
                  allChampions.filter((champion) =>
                    champion.tags.includes(type)
                  )
                );
              }}
              key={type}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="champions">
          {filteredChampions.map((champion) => (
                <Champion allChampions={champion} key={champion.id} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Champions;
