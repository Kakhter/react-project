import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#333",
        color: "white",
        padding: "4px",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height:"20px"
      }}
    >
       © 2025 My React App. All Rights Reserved.
    </footer>
  );
}

export default Footer;