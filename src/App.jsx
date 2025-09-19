import React, { useState } from "react";
import Header from "./Component/Header";
import Footer  from "./Component/Footer";
import Sidebar from "./Component/Sidebar";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main
        style={{
          marginLeft: isSidebarOpen ? "210px" : "10px",
          padding: "20px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <h1>Welcome to My React App</h1>
        <p>This is the main content area. Resize the window to see how sidebar works.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
