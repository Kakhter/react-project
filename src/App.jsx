import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Component/Header";
import Footer  from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import About from "./Component/About";
import ContactUs  from "./Component/ContactUs";
//import LazyLoading from "./Component/LazyLoading"

import  { Suspense, lazy } from "react";
 const LazyLoading = lazy(() => import("./Component/LazyLoading"));


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
        <h1>Welcome to My React Application..</h1>
         <Suspense fallback={<h3 style={{ textAlign: "center" }}>⏳ Loading Page...</h3>}>
        
        <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/lazy" element={<LazyLoading />}></Route>
      </Routes>
      </Suspense>
      </main>
      <Footer />

      

    </div>
  );
}

export default App;
