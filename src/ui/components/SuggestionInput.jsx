import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const SuggestionInput = ({ allChampions }) => {
  const [input, setInput] = useState("");
  const [suggestionBox, setSuggestionBox] = useState(false);
  const [suggestionList, setSuggestionList] = useState([]);

  function suggestionFilter() {
    let list;
    list = allChampions
      .filter((champions) => champions.id.toLowerCase().includes(input))
      .map((champions) => (
        <Link to={`/${champions.id}`} key={champions.id}>
        <li className="suggestions cursor" >
            <img
              src={`./assets/12.6.1/img/champion/${champions.id}.png`}
              alt=""
              className="suggestion__img"
            />
            {`${champions.id}`}
        </li>
        </Link>
      ))
      .splice(0, 5);
    return setSuggestionList(list);
  }

  useEffect(() => {
    suggestionFilter();
  }, [input]);

  return (
    <div className="searchBar__wrapper">
      <input
        className="searchBar"
        type="text"
        placeholder="Search Champions"
        maxLength={20}
        onChange={(e) => {
          e.target.value !== ""
            ? setSuggestionBox(true)
            : setSuggestionBox(false);
          setInput(e.target.value);
        }}
      />

      <ul
        className={
          "suggestion__box" +
          (suggestionBox === false ? " hide__suggestion" : " show__suggestion")
        }
      >
        {suggestionList}
      </ul>
    </div>
  );
};

export default SuggestionInput;
