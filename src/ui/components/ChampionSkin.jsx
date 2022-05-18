import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SliderBtn from "./SliderBtn";

const ChampionSkin = ({}) => {
  const [skins, setSkins] = useState([]);
  const [skinNum, setSkinNum] = useState([]);
  const { id } = useParams();
  let skinArray = 0;
console.log(skins)
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
      if (skinArray !== skins.length){
          skinArray += 1
          console.log(skinArray)
      } else if (skinArray === skins.length){
          skinArray = 0
      }
  };

  const prevSlide = () => {
    console.log("sup");
  };

  return (
    <>
      <figure className="champion__background-img-blurred--container">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
          alt=""
          className="champion__background-img-blurred"
        />
      </figure>
      <figure className="champion__background--container">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
          alt=""
          className="champion__background"
        />
      </figure>
      <SliderBtn nextSlide={nextSlide} prevSlide={prevSlide} />
    </>
  );
};

// skins.map(skin => <img key={skin.id} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`} alt="" /> )
export default ChampionSkin;
