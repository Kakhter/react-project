import React from "react";
import { Link } from "react-router-dom";
function Header({ onToggleSidebar }) {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      <header
        style={{
          background: "#007BFF",
          color: "white",
          padding: "1px",
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
    </div>
  );
}

export default Header;