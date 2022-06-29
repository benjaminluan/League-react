import React, { useState, useEffect } from "react";
import Champion from "../ui/components/Champion";

const Champions = ({ allChampions }) => {
  const [filteredChampions, setfilteredChampions] = useState([]);
  const [active, setActive] = useState("All");
  const championTypes = [
    "All",
    "Assassin",
    "Fighter",
    "Mage",
    "Marksman",
    "Support",
    "Tank",
  ];
  const isActive = (type) => {
    setActive(type);
  };

  useEffect(() => {
    setfilteredChampions(allChampions);
  }, [allChampions]);

  return (
    <div className="container">
      <div className="row">
        <div className="champions__header--wrapper">
          <h2>CHOOSE YOUR</h2>
          <h1 className="champions__header">Champion</h1>
        </div>
        <div className="champion__filter--bar">
          <span></span>
          {championTypes.map((type) => (
            <button
              className={
                "champion__filter--btn hover__effect" +
                (active === type ? " active" : " not__active")
              }
              onClick={() => {
                type === "All"
                  ? setfilteredChampions(allChampions)
                  : setfilteredChampions(
                      allChampions.filter((champion) =>
                        champion.tags.includes(type)
                      )
                    );
                isActive(type);
              }}
              key={type}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="champions">
          <Champion
            allChampions={allChampions}
            filteredChampions={filteredChampions}
          />
        </div>
      </div>
    </div>
  );
};

export default Champions;
