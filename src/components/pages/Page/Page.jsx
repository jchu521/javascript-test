import React, { useEffect, useState } from "react";

import Home from "../Home/Home";
import Topic from "../Topic/Topic";
import Navbar from "../../Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Bar from "../../Bar/Bar";

import HomeBackground from "../../../images/home1-bg.jpg";
import TopicsBackground from "../../../images/home1-topic.jpg";
import TopicsPage1Background from "../../../images/topic1-1-background.jpg";

import "./Page.css";

export default function Page({ history }) {
  const { pathname } = history.location;
  const [page, setPage] = useState(<Home />);

  useEffect(() => {
    if (pathname === "/home") {
      setPage(<Home />);
    } else if (pathname.includes("/topic1")) {
      setPage(<Topic history={history} />);
    }
  }, [pathname, history]);

  return (
    <div
      style={{
        backgroundImage: `url(${
          {
            "/home": HomeBackground,
            "/topic1": TopicsBackground,
            "/topic1/1": TopicsPage1Background
          }[pathname]
        })`
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
