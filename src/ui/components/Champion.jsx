import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonChampion from "./SkeletonChampion";

const Champion = ({ allChampions, filteredChampions }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(false);
  }, [allChampions]);

  return (
    <>
      {loading === true ? (
        filteredChampions.map((champion) => (
          <div className="champion" key={champion.id}>
            <figure
              className="champion__img--wrapper cursor"
              onClick={() => navigate(`/${champion.id}`)}
            >
              <img
                src={`./assets/12.6.1/img/champion/${champion.id}.png`}
                alt=""
                className="champion__img"
              />
            </figure>
            <h2 className="champions__name">{champion.id}</h2>
          </div>
        ))
      ) : (
        <SkeletonChampion />
      )}
    </>
  );
};

export default Champion;
