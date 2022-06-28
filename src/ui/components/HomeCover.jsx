import React from "react";
import "./HomeCover.scss";
import { Link } from "react-router-dom";
const HomeCover = () => {
  return (
    <div className="home__cover">
      <div className="home__cover-background">
        <div className="home__cover-header-wrapper">
          <h1 className="home__cover-header">League of Legends Champions</h1>
          <Link to="/Champions">
            <button className="home__cover-button">Explore More!</button>
          </Link>
        </div>
      </div>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
    </div>
  );
};

export default HomeCover;
