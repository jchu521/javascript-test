import React from "react";

import Home from "../Home/Home";
import Topic from "../Topic/Topic";
import Navbar from "../../Navbar/Navbar";
import Banner from "../../Banner/Banner";

import HomeBackground from "../../../images/home1-bg.jpg";
import TopicsBackground from "../../../images/home1-topic.jpg";

import "./Page.css";

export default function Page({ history }) {
  const { pathname } = history.location;

  return (
    <div
      style={{
        backgroundImage: `url(${
          {
            "/home": HomeBackground,
            "/home/topic1": TopicsBackground
          }[pathname]
        })`
      }}
      className="page-background"
    >
      <Banner history={history}>
        {
          {
            "/home": <Home />,
            "/home/topic1": <Topic />
          }[pathname]
        }
      </Banner>
      <Navbar history={history} />
    </div>
  );
}
