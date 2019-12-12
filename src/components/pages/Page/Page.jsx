import React, { useEffect, useState, useRef } from "react";

import { withRouter } from "react-router";

import Home from "../Home/Home";
import Topic from "../Topic/Topic";
import Navbar from "../../Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Bar from "../../Bar/Bar";

import HomeBackground from "../../../images/home1-bg.jpg";
import TopicsBackground from "../../../images/home1-topic.jpg";
import TopicsPage1Background from "../../../images/topic1-1-background.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./Page.css";

function Page({ history, match }) {
  const { pathname } = history.location;
  const [page, setPage] = useState(<Home />);
  const [backgroundImg, setBackgroundImg] = useState(HomeBackground);
  const [dropDownBox, setDropDownBox] = useState(
    Array(3).fill({ isToggle: false })
  );
  console.log(dropDownBox);
  useEffect(() => {
    if (pathname === "/home") {
      setPage(<Home />);
      setBackgroundImg(HomeBackground);
    } else if (pathname === "/topic1") {
      setPage(<Topic history={history} />);
      setBackgroundImg(TopicsBackground);
    } else if (pathname.includes("/topic1/")) {
      setPage(<Topic history={history} />);
      setBackgroundImg(TopicsPage1Background);
    }
  }, [pathname, history]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`
      }}
      className="page-background"
    >
      <Bar />
      <div style={{ display: "flex" }}>
        <Banner history={history}>{page}</Banner>
        <span style={{ width: 555, paddingTop: 100 }}>
          {dropDownBox.map((item, i) => (
            <div
              key={i}
              style={{
                paddingBottom: 10
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  background: "#55C6D7",
                  height: 70
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    margin: "12px 32px",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: "28px",
                    textTransformL: "uppercase"
                  }}
                >
                  <div>LOREM IPSUM</div>
                  {item.isToggle ? (
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      onClick={() => {
                        console.log(i);
                        dropDownBox[i].isToggle = false;
                        setDropDownBox(dropDownBox);
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      onClick={() => {
                        dropDownBox[i].isToggle = true;
                        console.log(dropDownBox);
                        setDropDownBox(dropDownBox);
                      }}
                    />
                  )}
                </div>
              </div>
              <div
                style={{
                  padding: "27px 32px",
                  background: "#FFFFFF"
                }}
              >
                Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed
                quis massa pulvinar justo interdum tempor. Maecenas lobortis
                tristique massa, sit amet malesuada elit dignissim ut.
              </div>
            </div>
          ))}
        </span>
      </div>
      {pathname === "/home" || pathname === "/topic1" ? (
        <Navbar history={history} />
      ) : null}
    </div>
  );
}

export default withRouter(Page);
