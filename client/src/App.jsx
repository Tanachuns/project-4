import React from "react";
import NavbarComp from "./components/Navbar/NavbarComp";
import { Route, Routes } from "react-router-dom";
import { ToastContainer} from 'react-toastify';


import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Plan from "./components/Plan/Plan";
import Detail from "./components/User/Detail";
import Insutance from "./components/User/Insurance";
import Admin from "./components/Admin/Admin";

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
          <Route path="/admin" element={<Admin />} />  
          <Route path="/user/detail" element={<Detail />} />
          <Route path="/user/insurance" element={<Insutance />} />
        </Routes>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
