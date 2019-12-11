import React from "react";

import logo from "../../../images/home-logo.png";

import "./Topic.css";

export default function Topic() {
  return (
    <>
      <img
        className="topics-logo"
        src={logo}
        alt="logo"
        width="121"
        height="28"
      />
      <div className="topics-context">
        <h1 className="topics-header">lOREM iPSUM DOLOR SIT</h1>
        <button className="topics-button">BEGIN</button>
      </div>
    </>
  );
}
