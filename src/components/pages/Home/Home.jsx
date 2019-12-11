import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-logo" />
      <div className="home-context">
        <h1 className="home-header">LOREM IPSUM</h1>
        <p className="home-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          nisl elit.
        </p>
        <p className="home-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu
          leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam
          semper.
        </p>
        <p className="home-p">
          Donec tempus cursus magna a feugiat. Morbi scelerisque euismod
          aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan
          cursus.
        </p>
        <p className="home-p">
          Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut
          eleifend sit amet justo eu laoreet.
        </p>
      </div>
    </>
  );
}
