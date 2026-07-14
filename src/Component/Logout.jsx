import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      // clear any stored auth (if implemented later)
      localStorage.removeItem("isAuth");
      localStorage.removeItem("username");
    } catch (e) {
      // ignore
    }

    // small delay to show message if needed
    // const t = setTimeout(() => navigate("/app/Login"), 800);
    const t = setTimeout(() => navigate("/"), 800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div style={{ padding: 16, maxWidth: 640, margin: "40px auto", textAlign: "center" }}>
      <h2>Logging out...</h2>
      <p>You will be redirected to the login page.</p>
    </div>
  );
};

export default Logout;
