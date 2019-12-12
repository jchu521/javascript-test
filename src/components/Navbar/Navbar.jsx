import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const initialTabs = [
  {
    title: "Home",
    redirect: "/home",
    icon: faHome,
    isActive: true
  },
  {
    title: "Topic 1",
    redirect: "/topic1",
    icon: null,
    isActive: false
  },
  {
    title: "Topic 2",
    redirect: "/topic2",
    icon: null,
    isActive: false
  },
  {
    title: "Topic 3",
    redirect: "/topic3",
    icon: null,
    isActive: false
  },
  {
    title: "Topic 4",
    redirect: "/topic4",
    icon: null,
    isActive: false
  },
  {
    title: "Topic 5",
    redirect: "/topic5",
    icon: null,
    isActive: false
  }
];

export default function Navbar({ history }) {
  const { pathname } = history.location;
  const [tabs, setTabs] = useState(initialTabs);

  useEffect(() => {
    let newTabs = tabs.map((item, i) => {
      if (item.redirect === pathname) {
        return {
          ...item,
          isActive: true
        };
      } else {
        return {
          ...item,
          isActive: false
        };
      }
    });
    setTabs(newTabs);
  }, [pathname]);

  const handleRedirect = name => {
    history.push(name);
  };

  return (
    <div className="gradient">
      <div className="navbar">
        <div className="row">
          {tabs.map((item, i) => (
            <div key={i}>
              <button
                className="nav-button"
                onClick={() => handleRedirect(item.redirect)}
              >
                <div>
                  {item.icon && (
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      icon={item.icon}
                    />
                  )}

                  {item.title}
                </div>
              </button>
              {item.isActive ? <hr className="active-bar" /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
