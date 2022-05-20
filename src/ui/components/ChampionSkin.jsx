import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SliderBtn from "./SliderBtn";

const ChampionSkin = () => {
  const [skins, setSkins] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log(skins);
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
    setLoading(false);
  }

  useEffect(() => {
    getSkinData();
  }, []);

  const nextSlide = () => {
    if (count !== skins.length) {
      setCount(prevCount => prevCount + 1 )
      console.log(count)
    } else if (count === skins.length) {
      console.log("hi")
    }
  };

  const prevSlide = () => {
    console.log(loading);
  };
  return (
    <>{
      loading ? (
        <div className="hi"></div>
      ) : (
        <>
        <figure className="champion__background-img-blurred--container">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skins[count].num}.jpg`}
          alt=""
          className="champion__background-img-blurred"
          />
      </figure>
      <figure className="champion__background--container">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skins[count].num}.jpg`}
          alt=""
          className="champion__background"
          />
      </figure>
      </>
          )
    }
      <SliderBtn nextSlide={nextSlide} prevSlide={prevSlide} />
      </>
  );
};

// skins.map(skin => <img key={skin.id} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`} alt="" /> )
export default ChampionSkin;
