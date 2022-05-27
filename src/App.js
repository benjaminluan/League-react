import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./ui/Nav";
import axios from "axios";
import Champions from "./pages/Champions";
import ChampionInfo from "./pages/ChampionInfo";

function App() {
  const [champions, setChampions] = useState([]);

  async function championsMap() {
    const {
      data: { data },
    } = await axios(
      "http://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/champion.json"
    );
    const dataIntoArray = Object.values(data);
    setChampions(dataIntoArray);
  }

  useEffect(() => {
    championsMap();
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/champions"
            element={<Champions allChampions={champions} />}
          />
          <Route path=":id"
          element={<ChampionInfo />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
