import React from "react";

import { Link } from "react-router-dom";

import logo from "../../../images/home-logo.png";

import "./Topic.css";

export default function Topic({ history }) {
  const { pathname } = history.location;

  return (
    <>
      {pathname === "/topic1" && (
        <>
          <img
            className="topics-logo"
            src={logo}
            alt="logo"
            width="121"
            height="28"
          />
          <div style={{ padding: "160px 0 0 70px" }} className="topics-context">
            <h1 className="topics-header">lOREM iPSUM DOLOR SIT</h1>
            <Link to="/topic1/1">
              <button className="topics-button" type="button">
                BEGIN
              </button>
            </Link>
          </div>
        </>
      )}
      {pathname === "/topic1/1" && (
        <div
          style={{ width: 360, padding: "70px 0 0 85px" }}
          className="topics-context"
        >
          <h1 className="topics-header">Nulla imperdiet</h1>
          <h4 className="topics-subheader">
            Vestibulum dapibus hendrerit nibh ut ornare.
          </h4>
          <div style={{ display: "flex" }}>
            <span className="topics-sidebar"></span>
            <p className="topics-p">
              Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,
              sit amet.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
