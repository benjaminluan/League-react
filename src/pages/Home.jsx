import React from "react";
import LandingBackground from "../ui/LandingBackground";
import Landing from "../ui/Landing";

const Home = ({ allChampions }) => {
  return (
    <>
      <Landing allChampions={allChampions} />
      <LandingBackground />
    </>
  );
};

export default Home;
