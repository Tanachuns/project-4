import React from "react";
import NavbarComp from "./components/Navbar/NavbarComp";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <header>
        <NavbarComp />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      
        <Footer/>
      
    </div>
  );
}

export default App;
