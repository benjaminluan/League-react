import React from "react";
import LandingBackground from "../ui/LandingBackground";
import Landing from "../ui/Landing";
import HomeCover from "../ui/components/HomeCover";

const Home = ({ allChampions }) => {
  return (
    <>
    <HomeCover />
      {/* <Landing allChampions={allChampions} />
      <LandingBackground /> */}
    </>
  );
};

export default Home;
