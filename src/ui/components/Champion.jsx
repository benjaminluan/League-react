import React from "react";

const Champion = ({ allChampions }) => {
  return (
    <div className="champion">
      <figure className="champion__img--wrapper" key={allChampions.id}>
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
