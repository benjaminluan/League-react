import React, { useState } from "react";
import Champion from "../ui/components/Champion"

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
console.log(filteredChampions.tags)
  return (
    <div className="container">
      <div className="row">
        <div className="champion__filter--bar">
          {championTypes.map((type) => (
            <button
              className={"champion__filter--btn hover__effect"}
              onClick={() => {
                type === "All"
                  ? setfilteredChampions(allChampions)
                  : setfilteredChampions(
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
          {filteredChampions.length <= 0
            ? allChampions
            .map((champion) => (
                <Champion allChampions={champion} key={champion.id} />
              ))
            : filteredChampions.map((champion) => (
                <Champion allChampions={champion} key={champion.id} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Champions;
