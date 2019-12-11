import React from "react";

export default function Banner({ children, history }) {
  const { pathname } = history.location;

  return (
    <div
      style={{
        background: `${
          pathname.includes("/home")
            ? "#172843"
            : "linear-gradient(90deg, rgba(0, 0, 0, 0.93) 76.12%, rgba(0, 0, 0, 0) 95.93%)"
        }`
      }}
      className="leftArea"
    >
      {children}
    </div>
  );
}
