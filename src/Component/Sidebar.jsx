import React from "react";
// import { LazyLoading } from "./Component/LazyLoading";
import { Link } from "react-router-dom";
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
          <Link to="/about">🏠 About</Link>
          <br/>
          <Link to="/contact">📞Contact</Link>
          <br/>
          <Link to="/lazy">Lazy Loading</Link>

        </ul>
      )}
    </aside>
  );
}

export default Sidebar;