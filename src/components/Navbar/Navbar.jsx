import React, { useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ history }) {
  const { pathname } = history.location;

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const handleRedirect = name => {
    history.push(name);
  };

  return (
    <div className="gradient">
      <div className="navbar">
        <div className="row">
          <button
            className="nav-button"
            onClick={() => handleRedirect("/home")}
          >
            Home
          </button>
          <button
            className="nav-button"
            onClick={() => handleRedirect("/home/topic1")}
          >
            Topic 1
          </button>
          <button
            className="nav-button"
            onClick={() => handleRedirect("/home/topic1")}
          >
            Topic 2
          </button>
          <button
            className="nav-button"
            onClick={() => handleRedirect("/home/topic1")}
          >
            Topic 3
          </button>
          <button
            className="nav-button"
            onClick={() => handleRedirect("/home/topic1")}
          >
            Topic 4
          </button>
          <button
            className="nav-button"
            onClick={() => handleRedirect("/home/topic1")}
          >
            Topic 5
          </button>
        </div>
      </div>
    </div>
  );
}
