import React from "react";

export default function Header({ toggleTheme = () => {} }) {
  return (
    <div className="header">
      <div className="start"></div>
      <div className="end">
        <button onClick={toggleTheme}>Theme</button>
      </div>
    </div>
  );
}
