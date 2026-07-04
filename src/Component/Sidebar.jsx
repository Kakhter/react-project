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
          <Link to="/app/about">🏠 About</Link>
          <br />
          <Link to="/app/contact">📞Contact</Link>
          <br />
          <Link to="/app/logout">Logout</Link>
          <br />
          <Link to="/app/lazy">Lazy Loading</Link>
          <br />
          <Link to="/app/login">Login</Link>
          <br />
          <Link to="/app/react">React Session 1</Link>
          <br />
          <Link to="/app/somecode">Some Code Session 2</Link>
          <br />
          <Link to="/app/interview">Interview Question</Link>
          <br />
          <Link to="/app/javascript">Java Script</Link>
          <br />
          <Link to="/app/session3">useReducer</Link>
          <br />
          <Link to="/app/session4">useContext </Link>
          <br />
          <Link to="/app/usememo">useMemo</Link>
          <br />
          <Link to="/app/usecallback">useCallback</Link>
          <br />
          <Link to="/app/memo">Memo P-C</Link>
          <br />
          <Link to="/app/tvs">TVS Paper</Link>
          <br />
          <Link to="/app/appservice">Azure</Link>
          <br />
          <Link to="/app/professional">Gyansys Documents</Link>
          <br />
          <Link to="/app/sql">SQL DBA/DEV</Link>
          <br />
          <Link to="/app/dotnetdata">Dot Net</Link>
          <br />
          <Link to="/app/fetchdata">Use Hook to fetch</Link>
          <br />
          <Link to="/app/khalid">Khalid IDs</Link>
          <br />
          <Link to="/app/general">Practice</Link>
          <br />
          <Link to="/app/shortsyntax">Short Syntax</Link>
        </ul>
      )}
    </aside>
  );
}

export default Sidebar;
