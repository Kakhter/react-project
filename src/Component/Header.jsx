import React from "react";

function Header({ onToggleSidebar }) {
  return (
    <header
      style={{
        background: "#007BFF",
        color: "white",
        padding: "3px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <button
        onClick={onToggleSidebar}
        style={{
          marginRight: "10px",
          fontSize: "20px",
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        ☰
      </button>
      My React App
    </header>
  );
}

export default Header;