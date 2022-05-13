import React from "react";

const FilterButton = () => {
const championTypes = ["All", "Assassin", "Fighter", "Mage", "Marksman", "Support", "Tank"]

  return (
    <div className="champion__filter--bar">{
        championTypes.map(type => <button className="champion__filter--btn hover__effect" key={type}>{type}</button>)
    }
    </div>
  );
};

export default FilterButton;
