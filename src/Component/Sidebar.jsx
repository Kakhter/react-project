import React from "react";

function Sidebar({ isOpen }) {
  return (
    <aside
      style={{
        background: "#f4f4f4",
        width: isOpen ? "200px" : "0",
        height: "100vh",
        padding: isOpen ? "10px" : "0",
        position: "fixed",
        top: "50px",
        left: 0,
        overflowX: "hidden",
        transition: "width 0.3s ease",
      }}
    >
      {isOpen && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><a href="#home">🏠 Home</a></li>
          <li><a href="#about">ℹ️ About</a></li>
          <li><a href="#contact">📞 Contact</a></li>
        </ul>
      )}
    </aside>
  );
}

export default Sidebar;