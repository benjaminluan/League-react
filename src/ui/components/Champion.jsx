import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonChampion from "./SkeletonChampion";

const Champion = ({ allChampions, filteredChampions }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [allChampions]);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [filteredChampions]);

  console.log(filteredChampions);
  return (
    <>
      {loading === false
        ? filteredChampions.map((champion) => (
            <div className="champion" key={champion.id}>
              <figure
                className="champion__img--wrapper cursor"
                onClick={() => navigate(`/${champion.id}`)}
              >
                <img
                  src={`./assets/12.6.1/img/champion/${champion.id}.png`}
                  alt=""
                  className="champion__img"
                  loading="lazy"
                />
              </figure>
              <h2 className="champions__name">{champion.id}</h2>
            </div>
          ))
        : filteredChampions.map((champion) => (
            <div className="champion" key={champion.id}>
              <SkeletonChampion />
            </div>
          ))}
    </>
  );
};

export default Champion;
