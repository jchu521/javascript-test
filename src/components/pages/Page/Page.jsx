import React, { useEffect, useState } from "react";

import { withRouter } from "react-router";

import Home from "../Home/Home";
import Topic from "../Topic/Topic";
import Navbar from "../../Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Bar from "../../Bar/Bar";

import HomeBackground from "../../../images/home1-bg.jpg";
import TopicsBackground from "../../../images/home1-topic.jpg";
import TopicsPage1Background from "../../../images/topic1-1-background.jpg";

import "./Page.css";

function Page({ history, match }) {
  const { pathname } = history.location;
  const [page, setPage] = useState(<Home />);
  const [backgroundImg, setBackgroundImg] = useState(HomeBackground);

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
      <Banner history={history}>{page}</Banner>
      {pathname === "/home" || pathname === "/topic1" ? (
        <Navbar history={history} />
      ) : null}
    </div>
  );
}

export default withRouter(Page);
