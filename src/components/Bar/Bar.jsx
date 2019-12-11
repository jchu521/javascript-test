import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Bar.css";

export default function Bar() {
  return (
    <div className="bar-box">
      <FontAwesomeIcon
        className="bar-icon"
        size="2x"
        icon={faBars}
        color="white"
      />
    </div>
  );
}
