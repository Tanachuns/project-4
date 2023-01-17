import React from "react";
import NavbarComp from "./components/Navbar/NavbarComp";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Plan from "./components/Plan/Plan";

function App() {
  return (
    <div>
      <header>
        <NavbarComp />
      </header>
      <main>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
