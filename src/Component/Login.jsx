import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("Gyansys@2025");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const HARD_USERNAME = "admin";
  const HARD_PASSWORD = "Gyansys@2025";

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (username === HARD_USERNAME && password === HARD_PASSWORD) {
      try {
        localStorage.setItem("isAuth", "1");
        localStorage.setItem("username", username);
      } catch (e) {}
      setSuccess(true);
      // simple redirect after 1s
      setTimeout(() => navigate("/app"), 1000);
    } else {
      setError("Invalid username or password");
    }
    //document.cookie = "username=Khalid; path=/; max-age=3600"; 
    //console.log(document.cookie);
  }

  return (
    <div style={{ maxWidth: "420px", margin: "20px auto", padding: "16px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "8px" }}>
          <label>Username</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
            autoComplete="username"
          />
        </div>
        <div style={{ marginBottom: "8px" }}>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
            autoComplete="current-password"
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: "8px" }}>{error}</div>}
        {success && (
          <div style={{ color: "green", marginBottom: "8px" }}>
            Login successful — redirecting...
          </div>
        )}
        <button type="submit" style={{ padding: "8px 12px" }}>Sign In</button>
      </form>
      <div style={{ marginTop: "12px", fontSize: "13px", color: "#555" }}>
        Demo credentials: <b>admin</b> / <b>Gyansys</b>
      </div>
    </div>
  );
};

export default Login;
