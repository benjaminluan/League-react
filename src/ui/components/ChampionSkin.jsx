import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SliderBtn from "./SliderBtn";

const ChampionSkin = () => {
  const [skins, setSkins] = useState([]);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  async function getSkinData() {
    const {
      data: {
        data: {
          [id]: { skins },
        },
      },
    } = await axios(
      `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/${id}.json`
    );
    setSkins(skins);
  }

  useEffect(() => {
    getSkinData();
  
  }, []);

  const nextSlide = () => {
    if (count !== skins.length - 1) {
      setCount((prevCount) => prevCount + 1);
      console.log(skins[count]);
    } else if (count === skins.length - 1) {
      setCount(0);
    }
  };



  const prevSlide = () => {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
      console.log(skins[count]);
    } else if (count === 0) {
      setCount(skins.length - 1);
    }
  };

  console.log(skins)


  return (
    <>
          <figure className="champion__background-img-blurred--container">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skins[count]?.num}.jpg`}
              alt=""
              className="champion__background-img-blurred"
            />
          </figure>
          <figure className="champion__background--container">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skins[count]?.num}.jpg`}
              alt=""
              className="champion__background"
            />
            <SliderBtn nextSlide={nextSlide} prevSlide={prevSlide} />
          </figure>
    </>
  );
};

export default ChampionSkin;
