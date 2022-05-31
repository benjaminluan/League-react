import React from "react";
import LandingBackground from "../ui/LandingBackground";
import Landing from "../ui/Landing";
import Recommended from "../ui/Recommended";

const Home = ({ allChampions }) => {
  return (
    <>
      <Landing allChampions={allChampions} />
      <LandingBackground />
      <Recommended />
    </>
  );
};

export default Home;
