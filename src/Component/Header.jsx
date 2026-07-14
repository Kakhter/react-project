import React from "react";
import { Link } from "react-router-dom";
function Header({ onToggleSidebar }) {
  return (
    <header
      style={{
        background: "#007BFF",
        color: "white",
        padding: "3px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

      }}
    >
      <button
        onClick={onToggleSidebar}
        style={{
          marginRight: "3px",
          fontSize: "20px",
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        ☰
      </button>
      My React App, .Net Code and SQL DBA/DEV
      <div><Link to="/app/logout"><img src="/logout.jpg" style={{ width: "25px", height: "25px" }}></img></Link></div>
    </header>
  );
}

export default Header;