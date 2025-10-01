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
          <br />
          <Link to="/contact">📞Contact</Link>
          <br />
          <Link to="/lazy">Lazy Loading</Link>
          <br />
          <Link to="/react">React Session 1</Link>
          <br />
          <Link to="/somecode">Some Code Session 2</Link>
          <br />
          <Link to="/interview">Interview Question</Link>
          <br />
          <Link to="/javascript">Java Script</Link>
          <br />
          <Link to="/session3">useReducer</Link>
          <br />
          <Link to="/session4">useContext </Link>
          <br />
          <Link to="/usememo">useMemo</Link>
          <br />
          <Link to="/usecallback">useCallback</Link>
          <br />
          <Link to="/memo">Memo</Link>
        </ul>
      )}
    </aside>
  );
}

export default Sidebar;
