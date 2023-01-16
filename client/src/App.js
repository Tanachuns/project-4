import React from "react";
import NavbarComp from "./components/Navbar/NavbarComp";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <NavbarComp />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
