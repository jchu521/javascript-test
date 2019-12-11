import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";
import icon from "../../../images/icon-prompt.png";

export default function Home() {
  return (
    <div className="main-background">
      <h1 className="header">LOREM IPSUM</h1>
      <div className="main-logo" />
      <div className="iconButton">
        <Link to="/home" className="button">
          <img height="27" width="45" src={icon} alt="" />
          Click begin to get started.
        </Link>
      </div>
    </div>
  );
}
