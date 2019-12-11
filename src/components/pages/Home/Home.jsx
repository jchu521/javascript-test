import React, { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Banner from "../../Banner/Banner";
import "./Home.css";
import logo from "../../../images/home-logo.png";
import HomeBackground from "../../../images/home1-bg.jpg";
import TopicsBackground from "../../../images/home1-topic.jpg";

export default function Home({ history }) {
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
      className="home-background"
    >
      <Banner history={history}>
        {
          {
            "/home": (
              <>
                <div className="home-logo" />
                <div className="home-context">
                  <h1 className="home-header">LOREM IPSUM</h1>
                  <p className="home-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vitae nisl elit.
                  </p>
                  <p className="home-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus eu leo elit. Donec condimentum odio ut ante
                    bibendum, quis egestas quam semper.
                  </p>
                  <p className="home-p">
                    Donec tempus cursus magna a feugiat. Morbi scelerisque
                    euismod aliquet. Integer ut euismod risus. Aenean a diam vel
                    nisl accumsan cursus.
                  </p>
                  <p className="home-p">
                    Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac
                    convallis. Ut eleifend sit amet justo eu laoreet.
                  </p>
                </div>
              </>
            ),
            "/home/topic1": (
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
            )
          }[pathname]
        }
      </Banner>
      <Navbar history={history} />
    </div>
  );
}
