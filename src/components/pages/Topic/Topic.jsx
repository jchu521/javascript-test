import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import logo from "../../../images/home-logo.png";

import "./Topic.css";

function Topic(props) {
  const { pathname } = props.history.location;
  const backToPerviousPage = () => {
    const { page } = props.match.params;

    if (page === "1") {
      props.history.push("/topic1");
    } else {
      props.history.push(`/topic1/${page - 1}`);
    }
  };

  const toNextPage = () => {
    const { page } = props.match.params;
    props.history.push(`/topic1/${parseInt(page) + 1}`);
  };

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
      {pathname.includes("/topic1/") && (
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
          <div className="buttonGroup">
            <button onClick={backToPerviousPage} className="back-button">
              <FontAwesomeIcon icon={faAngleLeft} size="lg" />
              <span className="text">Back</span>
            </button>
            <button onClick={toNextPage} className="next-button">
              <FontAwesomeIcon icon={faAngleRight} size="2x" />
              <span className="text">Next</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default withRouter(Topic);
