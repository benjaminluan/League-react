import React from "react";
import { useNavigate } from "react-router-dom";
const Champion = ({ allChampions }) => {
  const navigate = useNavigate()

  return (
    <div className="champion">
        <figure className="champion__img--wrapper cursor" key={allChampions.id} onClick= {() => navigate(`/${allChampions.id}`)}>
          <img
            src={`./assets/12.6.1/img/champion/${allChampions.id}.png`}
            alt=""
            className="champion__img"
          />
        </figure>
      <h2 className="champion__name">{allChampions.id}</h2>
    </div>
  );
};

export default Champion;
