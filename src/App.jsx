import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
//import LazyLoading from "./Component/LazyLoading"
import { Suspense, lazy } from "react";
import TutorialReact from "./Component/TutorialReact";
import SomeCode from "./Component/SomeCode";
import Session3 from "./Component/Session3";
import Interview from "./Component/Interview";
import Session4 from "./Component/Session4";
import JavaScript1 from "./Component/JavaScript1";
import UseMemo from "./Component/UseMemo";
import UseCallback from "./Component/UseCallback";
import Memo from "./Component/Memo";
import DML from "./Component/DML";
import TVSPaper from "./Component/personal/TVSPaper";
import AppService from "./Component/azure/AppService";
import GyansysReg from "./Component/professional/GyansysReg";

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
          padding: "5px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Suspense
          fallback={<h3 style={{ textAlign: "center" }}>⏳ Loading Page...</h3>}
        >
          <Routes>
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/lazy" element={<LazyLoading />}></Route>
            <Route path="/react" element={<TutorialReact />}></Route>
            <Route path="/somecode" element={<SomeCode />} />
            <Route path="/session3" element={<Session3 />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/session4" element={<Session4></Session4>} />
            <Route path="/javascript" element={<JavaScript1 />}></Route>
            <Route path="/usememo" element={<UseMemo />}></Route>
            <Route path="/usecallback" element={<UseCallback></UseCallback>} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/dml" element={<DML />} />
            <Route path="/tvs" element={<TVSPaper />} />
            <Route path="/appservice" element={<AppService />} />
            <Route path="/professional" element={<GyansysReg />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
